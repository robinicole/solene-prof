"use client";

import { useState, useCallback, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Turnstile } from "@marsidev/react-turnstile";
import { COURSES } from "@/data/courses";
import { useContact } from "@/hooks/useContact";
import { emailError, getMissingFields } from "@/lib/validation";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

interface FormState {
  course: string;
  level: string;
  format: string;
  name: string;
  email: string;
  message: string;
}

const INITIAL: FormState = {
  course: "",
  level: "",
  format: "",
  name: "",
  email: "",
  message: "",
};

interface ContactFormProps {
  readonly locale: Locale;
  readonly dict: Dictionary;
}

function FieldError({ error }: { readonly error?: string }) {
  if (!error) return null;
  return <p className="mt-1 text-sm text-coral-dark">{error}</p>;
}

const inputClass =
  "mt-1 w-full rounded-sm border border-mist-dark bg-white px-4 py-3 text-ink transition-colors focus:border-blue focus:outline-none";
const labelClass = "block text-sm font-bold text-ink-light";

function ContactFormInner({ locale, dict }: ContactFormProps) {
  const searchParams = useSearchParams();
  const requested = searchParams.get("cours") ?? "";
  const preselected =
    requested === "other" || COURSES.some((c) => c.id === requested)
      ? requested
      : "";

  const [form, setForm] = useState<FormState>({
    ...INITIAL,
    course: preselected,
  });
  const [turnstileToken, setTurnstileToken] = useState("");

  const { status, fieldErrors, serverError, submit, setFieldErrors, reset } =
    useContact();

  const f = dict.contactPage.form;

  const update = useCallback(
    (field: keyof FormState, value: string) =>
      setForm((prev) => ({ ...prev, [field]: value })),
    []
  );

  const missing = useMemo(
    () => getMissingFields(form as unknown as Record<string, string>),
    [form]
  );

  const selectedCourse = COURSES.find((c) => c.id === form.course);

  const formatLabel = (value: string): string =>
    value === "in-person"
      ? f.formatInPerson
      : value === "online"
        ? f.formatOnline
        : f.formatEither;

  const serverErrorMessage = (): string => {
    if (!serverError) return "";
    if (serverError === "network") return dict.contactPage.errors.network;
    if (serverError === "captcha") return dict.contactPage.errors.captcha;
    return dict.contactPage.errors.generic;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const emailErr = emailError(form.email);
    if (emailErr) {
      setFieldErrors({
        email: emailErr === "required" ? f.emailRequired : f.emailInvalid,
      });
      return;
    }
    await submit({
      course: form.course,
      level: form.level,
      format: form.format,
      name: form.name,
      email: form.email,
      message: form.message,
      locale,
      honeypot: "",
      turnstileToken,
    });
  }

  if (status === "success") {
    const s = dict.contactPage.success;
    return (
      <div className="mx-auto max-w-2xl rounded-sm border border-mist-dark bg-white p-10 text-center md:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue text-3xl text-white">
          &#10003;
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-blue">{s.title}</h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-light">
          {s.body}
        </p>

        {(selectedCourse || form.format) && (
          <div className="mt-8 rounded-sm bg-mist p-6 text-left text-sm">
            <h3 className="text-base font-extrabold text-blue">
              {s.summaryTitle}
            </h3>
            <div className="mt-3 space-y-1.5 text-ink-light">
              {selectedCourse && (
                <p>
                  <strong className="font-bold text-ink">
                    {s.labelCourse} :
                  </strong>{" "}
                  {selectedCourse[locale].title}
                </p>
              )}
              {form.format && (
                <p>
                  <strong className="font-bold text-ink">
                    {s.labelFormat} :
                  </strong>{" "}
                  {formatLabel(form.format)}
                </p>
              )}
            </div>
          </div>
        )}

        <button
          onClick={() => {
            setForm({ ...INITIAL });
            reset();
          }}
          className="mt-8 rounded-sm border-2 border-blue px-7 py-3 font-bold text-blue transition-colors hover:bg-blue hover:text-white"
        >
          {s.again}
        </button>
      </div>
    );
  }

  const missingLabels = missing.map((key) => f.missing[key]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl rounded-sm border border-mist-dark bg-white p-8 md:p-10"
    >
      {serverError && (
        <div className="mb-6 rounded-sm border border-coral bg-coral/10 p-4 text-sm text-coral-dark">
          {serverErrorMessage()}
        </div>
      )}

      {/* Honeypot: hidden from humans, visible to bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value=""
          onChange={() => {}}
        />
      </div>

      {/* Your project */}
      <fieldset>
        <legend className="text-xl font-extrabold text-blue">
          {f.legendProject}
        </legend>
        <div className="mt-4 space-y-4">
          <div>
            <label htmlFor="course" className={labelClass}>
              {f.courseLabel}
            </label>
            <select
              id="course"
              value={form.course}
              onChange={(e) => update("course", e.target.value)}
              className={inputClass}
            >
              <option value="">{f.coursePlaceholder}</option>
              {COURSES.map((course) => (
                <option key={course.id} value={course.id}>
                  {course[locale].title}
                </option>
              ))}
              <option value="other">{f.courseOther}</option>
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="level" className={labelClass}>
                {f.levelLabel}
              </label>
              <input
                type="text"
                id="level"
                value={form.level}
                onChange={(e) => update("level", e.target.value)}
                placeholder={f.levelPlaceholder}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="format" className={labelClass}>
                {f.formatLabel}
              </label>
              <select
                id="format"
                value={form.format}
                onChange={(e) => update("format", e.target.value)}
                className={inputClass}
              >
                <option value="">{f.formatEither}</option>
                <option value="in-person">{f.formatInPerson}</option>
                <option value="online">{f.formatOnline}</option>
              </select>
            </div>
          </div>
        </div>
      </fieldset>

      {/* Your details */}
      <fieldset className="mt-9">
        <legend className="text-xl font-extrabold text-blue">
          {f.legendContact}
        </legend>
        <div className="mt-4 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                {f.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder={f.namePlaceholder}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                {f.emailLabel} <span className="text-coral-dark">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder={f.emailPlaceholder}
                className={inputClass}
              />
              <FieldError error={fieldErrors.email} />
            </div>
          </div>
          <div>
            <label htmlFor="message" className={labelClass}>
              {f.messageLabel}
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder={f.messagePlaceholder}
              className={inputClass}
            />
          </div>
        </div>
      </fieldset>

      {/* Gentle nudge for empty suggested fields */}
      {missingLabels.length > 0 && (
        <p className="mt-6 text-center text-sm text-ink-light">
          {f.missingPrefix}
          {missingLabels.join(", ")}
          {f.missingSuffix}
        </p>
      )}

      {TURNSTILE_SITE_KEY && (
        <div className="mt-6 flex justify-center">
          <Turnstile
            siteKey={TURNSTILE_SITE_KEY}
            onSuccess={setTurnstileToken}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-sm bg-blue py-4 text-base font-bold text-white transition-colors hover:bg-blue-mid disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "submitting" ? f.submitting : f.submit}
      </button>

      <p className="mt-4 text-center text-xs text-ink-light">
        {f.reassurance}
      </p>
    </form>
  );
}

export function ContactForm({ locale, dict }: ContactFormProps) {
  return (
    <Suspense
      fallback={
        <div className="py-10 text-center text-ink-light">…</div>
      }
    >
      <ContactFormInner locale={locale} dict={dict} />
    </Suspense>
  );
}

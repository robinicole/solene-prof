import Link from "next/link";
import { CourseCard } from "./CourseCard";
import { COURSES, type Course } from "@/data/courses";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

interface CourseDetailProps {
  readonly course: Course;
  readonly locale: Locale;
  readonly dict: Dictionary;
}

export function CourseDetail({ course, locale, dict }: CourseDetailProps) {
  const content = course[locale];
  const t = dict.coursePage;

  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xl leading-relaxed font-medium text-blue md:text-2xl">
            {content.description}
          </p>

          {/* Au programme */}
          <div className="mt-12 rounded-sm border border-mist-dark bg-mist p-8">
            <h2 className="text-2xl font-extrabold text-blue">
              {t.programmeTitle}
            </h2>
            <span
              aria-hidden="true"
              className="mt-3 block h-[3px] w-12 bg-coral"
            />
            <ul className="mt-5 space-y-3">
              {content.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-2 w-2 shrink-0 bg-coral"
                  />
                  <span className="leading-relaxed text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pour qui + Format */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="h-full rounded-sm border border-mist-dark bg-white p-7">
              <h2 className="text-lg font-extrabold text-blue">
                {t.audienceTitle}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-light">
                {content.audience}
              </p>
            </div>
            <div className="h-full rounded-sm border border-mist-dark bg-white p-7">
              <h2 className="text-lg font-extrabold text-blue">
                {t.formatTitle}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-light">
                {content.format}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            {t.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-mist">
            {t.ctaText}
          </p>
          <Link
            href={`/${locale}/contact?cours=${course.id}`}
            className="mt-8 inline-block rounded-sm bg-coral px-8 py-3.5 text-base font-bold text-blue transition-colors hover:bg-coral-light"
          >
            {t.ctaButton} &rarr;
          </Link>
        </div>
      </section>

      {/* Other courses */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-extrabold text-blue">
            {t.otherCoursesTitle}
          </h2>
          <span
            aria-hidden="true"
            className="mt-3 block h-[3px] w-12 bg-coral"
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COURSES.map((other, i) =>
              other.id === course.id ? null : (
                <CourseCard
                  key={other.id}
                  course={other}
                  index={i}
                  locale={locale}
                  learnMoreLabel={dict.common.learnMore}
                />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { TESTIMONIALS } from "@/data/testimonials";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

interface TestimonialsSectionProps {
  readonly locale: Locale;
  readonly dict: Dictionary;
}

const AUTOPLAY_MS = 7000;

export function TestimonialsSection({
  locale,
  dict,
}: TestimonialsSectionProps) {
  const count = TESTIMONIALS.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const labels =
    locale === "fr"
      ? { prev: "Témoignage précédent", next: "Témoignage suivant", go: "Aller au témoignage" }
      : { prev: "Previous testimonial", next: "Next testimonial", go: "Go to testimonial" };

  const goTo = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (paused || count <= 1) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, count]);

  const active = TESTIMONIALS[index][locale];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow={dict.home.testimonials.eyebrow}
          title={dict.home.testimonials.title}
        />

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <blockquote
            aria-live="polite"
            className="flex min-h-[20rem] flex-col rounded-sm border border-mist-dark bg-white p-8 md:min-h-[16rem] md:p-12"
          >
            <span
              aria-hidden="true"
              className="text-6xl leading-[0.6] font-extrabold text-coral"
            >
              &ldquo;
            </span>
            <p className="mt-4 flex-1 text-lg leading-relaxed text-ink">
              {active.quote}
            </p>
            <footer className="mt-6 border-t border-mist-dark pt-4">
              <p className="text-sm font-bold text-blue">{active.author}</p>
            </footer>
          </blockquote>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label={labels.prev}
                className="absolute top-1/2 -left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mist-dark bg-white text-blue shadow-sm transition hover:bg-blue hover:text-white md:-left-5"
              >
                <span aria-hidden="true" className="text-xl leading-none">&#8249;</span>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label={labels.next}
                className="absolute top-1/2 -right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mist-dark bg-white text-blue shadow-sm transition hover:bg-blue hover:text-white md:-right-5"
              >
                <span aria-hidden="true" className="text-xl leading-none">&#8250;</span>
              </button>
            </>
          )}
        </div>

        {count > 1 && (
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {TESTIMONIALS.map((testimonial, i) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${labels.go} ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-coral" : "w-2.5 bg-mist-dark hover:bg-blue-mid"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

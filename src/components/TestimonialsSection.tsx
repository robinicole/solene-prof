import { SectionHeader } from "./SectionHeader";
import { TESTIMONIALS } from "@/data/testimonials";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

interface TestimonialsSectionProps {
  readonly locale: Locale;
  readonly dict: Dictionary;
}

export function TestimonialsSection({
  locale,
  dict,
}: TestimonialsSectionProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow={dict.home.testimonials.eyebrow}
          title={dict.home.testimonials.title}
        />

        <div className="mt-14 grid items-start gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => {
            const t = testimonial[locale];
            return (
              <blockquote
                key={testimonial.id}
                className="flex h-full flex-col rounded-sm border border-mist-dark bg-white p-8"
              >
                <span
                  aria-hidden="true"
                  className="text-6xl leading-[0.6] font-extrabold text-coral"
                >
                  &ldquo;
                </span>
                <p className="mt-4 flex-1 leading-relaxed text-ink">
                  {t.quote}
                </p>
                <footer className="mt-6 border-t border-mist-dark pt-4">
                  <p className="text-sm font-bold text-blue">{t.author}</p>
                </footer>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import type { Course } from "@/data/courses";
import type { Locale } from "@/i18n/config";

interface CourseCardProps {
  readonly course: Course;
  readonly index: number;
  readonly locale: Locale;
  readonly learnMoreLabel: string;
}

export function CourseCard({
  course,
  index,
  locale,
  learnMoreLabel,
}: CourseCardProps) {
  const content = course[locale];
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative flex flex-col rounded-sm border border-mist-dark bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-coral hover:shadow-[0_16px_34px_-20px_rgba(32,60,145,0.45)]">
      <Link
        href={`/${locale}/cours/${course.slug}`}
        aria-label={content.title}
        className="absolute inset-0 z-10 rounded-sm"
      />

      <div className="flex items-center gap-3">
        <span className="text-3xl font-extrabold text-mist-dark transition-colors group-hover:text-coral">
          {number}
        </span>
        <span
          aria-hidden="true"
          className="h-[3px] flex-1 bg-mist transition-colors group-hover:bg-coral"
        />
      </div>

      <h3 className="mt-4 text-xl font-extrabold leading-snug text-blue">
        {content.title}
      </h3>
      <p className="mt-1.5 text-sm font-bold text-blue-soft">
        {content.subtitle}
      </p>
      <p className="mt-3 flex-1 leading-relaxed text-ink-light">
        {content.summary}
      </p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-blue transition-colors group-hover:text-coral-dark">
        {learnMoreLabel}
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </span>
    </article>
  );
}

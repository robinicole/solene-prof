import Link from "next/link";
import { orderedCourses } from "@/data/courses";
import { CourseCard } from "./CourseCard";
import { SectionHeader } from "./SectionHeader";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

interface CoursesPreviewProps {
  readonly locale: Locale;
  readonly dict: Dictionary;
}

export function CoursesPreview({ locale, dict }: CoursesPreviewProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow={dict.home.courses.eyebrow}
          title={dict.home.courses.title}
          description={dict.home.courses.description}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {orderedCourses(locale).map((course, i) => (
            <CourseCard
              key={course.id}
              course={course}
              index={i}
              locale={locale}
              dict={dict}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/cours`}
            className="inline-block rounded-sm border-2 border-blue px-8 py-3 font-bold text-blue transition-colors hover:bg-blue hover:text-white"
          >
            {dict.home.courses.cta} &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

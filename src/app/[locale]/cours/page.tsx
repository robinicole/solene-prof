import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { COURSES } from "@/data/courses";
import { PageHero } from "@/components/PageHero";
import { CourseCard } from "@/components/CourseCard";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return {
    title: dict.coursesPage.meta.title,
    description: dict.coursesPage.meta.description,
    alternates: {
      canonical: `/${locale}/cours`,
      languages: { fr: "/fr/cours", en: "/en/cours" },
    },
  };
}

export default async function CoursesPage({
  params,
}: {
  params: Params;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  return (
    <>
      <PageHero
        eyebrow={dict.coursesPage.eyebrow}
        title={dict.coursesPage.title}
        intro={dict.coursesPage.intro}
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course, i) => (
              <CourseCard
                key={course.id}
                course={course}
                index={i}
                locale={loc}
                learnMoreLabel={dict.common.learnMore}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

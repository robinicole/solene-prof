import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { COURSES, getCourse } from "@/data/courses";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CourseDetail } from "@/components/CourseDetail";
import { courseJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

type Params = Promise<{ locale: string; slug: string }>;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  const content = course[locale as Locale];
  return {
    title: content.title,
    description: content.summary,
    alternates: {
      canonical: `/${locale}/cours/${slug}`,
      languages: {
        fr: `/fr/cours/${slug}`,
        en: `/en/cours/${slug}`,
      },
    },
  };
}

export default async function CoursePage({
  params,
}: {
  params: Params;
}) {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const course = getCourse(slug);
  if (!course) notFound();

  const dict = getDictionary(loc);
  const content = course[loc];

  const crumbs = [
    { name: dict.nav.home, url: `${SITE_URL}/${loc}` },
    { name: dict.nav.courses, url: `${SITE_URL}/${loc}/cours` },
    { name: content.title, url: `${SITE_URL}/${loc}/cours/${slug}` },
  ];
  const jsonLd = [
    courseJsonLd(course, loc, SITE_URL),
    breadcrumbJsonLd(crumbs),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero eyebrow={content.subtitle} title={content.title}>
        <Breadcrumbs
          label={loc === "fr" ? "Fil d'Ariane" : "Breadcrumb"}
          items={[
            { label: dict.nav.home, href: `/${loc}` },
            { label: dict.coursePage.backLink, href: `/${loc}/cours` },
            { label: content.title, href: `/${loc}/cours/${slug}` },
          ]}
        />
      </PageHero>
      <CourseDetail course={course} locale={loc} dict={dict} />
    </>
  );
}

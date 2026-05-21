import type { Course } from "@/data/courses";
import type { Locale } from "@/i18n/config";

const SITE_NAME = "Solène Lanza, cours de français";

/** EducationalOrganization JSON-LD for the whole site. */
export function organizationJsonLd(siteUrl: string, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    url: `${siteUrl}/${locale}`,
    description:
      locale === "fr"
        ? "Cours de français particuliers à Londres avec Solène Lanza : Lycée Français, GCSE, Brevet, Bac, FLE et français professionnel."
        : "Private French lessons in London with Solène Lanza: Lycée Français, GCSE, Brevet, Bac, FLE and Business French.",
    areaServed: { "@type": "City", name: "London" },
    knowsLanguage: ["fr", "en"],
  };
}

/** Course JSON-LD for a course detail page. */
export function courseJsonLd(
  course: Course,
  locale: Locale,
  siteUrl: string
) {
  const content = course[locale];
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: content.title,
    description: content.summary,
    url: `${siteUrl}/${locale}/cours/${course.slug}`,
    inLanguage: locale,
    provider: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      url: `${siteUrl}/${locale}`,
    },
  };
}

export interface Crumb {
  readonly name: string;
  readonly url: string;
}

/** BreadcrumbList JSON-LD. */
export function breadcrumbJsonLd(items: readonly Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

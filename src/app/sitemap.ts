import type { MetadataRoute } from "next";
import { COURSES } from "@/data/courses";
import { locales } from "@/i18n/config";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/cours", "/tarifs", "/a-propos", "/contact"];
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }
    for (const course of COURSES) {
      entries.push({
        url: `${SITE_URL}/${locale}/cours/${course.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}

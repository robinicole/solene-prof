import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { PageHero } from "@/components/PageHero";
import { PricingTable } from "@/components/PricingTable";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return {
    title: dict.pricingPage.meta.title,
    description: dict.pricingPage.meta.description,
    alternates: {
      canonical: `/${locale}/tarifs`,
      languages: { fr: "/fr/tarifs", en: "/en/tarifs" },
    },
  };
}

export default async function PricingPage({
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
        eyebrow={dict.pricingPage.eyebrow}
        title={dict.pricingPage.title}
        intro={dict.pricingPage.intro}
      />
      <PricingTable locale={loc} dict={dict} />
    </>
  );
}

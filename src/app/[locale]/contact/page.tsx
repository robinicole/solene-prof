import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return {
    title: dict.contactPage.meta.title,
    description: dict.contactPage.meta.description,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { fr: "/fr/contact", en: "/en/contact" },
    },
  };
}

export default async function ContactPage({
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
        eyebrow={dict.contactPage.eyebrow}
        title={dict.contactPage.title}
        intro={dict.contactPage.intro}
      />
      <section className="bg-mist py-16">
        <div className="mx-auto max-w-6xl px-6">
          <ContactForm locale={loc} dict={dict} />
        </div>
      </section>
    </>
  );
}

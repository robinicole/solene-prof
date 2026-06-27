import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { PageHero } from "@/components/PageHero";
import { TESTIMONIALS } from "@/data/testimonials";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return {
    title: dict.testimonialsPage.meta.title,
    description: dict.testimonialsPage.meta.description,
    alternates: {
      canonical: `/${locale}/temoignages`,
      languages: { fr: "/fr/temoignages", en: "/en/temoignages" },
    },
  };
}

export default async function TestimonialsPage({
  params,
}: {
  params: Params;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);
  const t = dict.testimonialsPage;

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} intro={t.lead} />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((testimonial) => {
              const item = testimonial[loc];
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
                    {item.quote}
                  </p>
                  <footer className="mt-6 border-t border-mist-dark pt-4">
                    <p className="text-sm font-bold text-blue">{item.author}</p>
                  </footer>
                </blockquote>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-blue py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            {dict.home.cta.title} {dict.home.cta.titleAccent}
          </h2>
          <Link
            href={`/${loc}/contact`}
            className="mt-8 inline-block rounded-sm bg-coral px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-coral-light"
          >
            {dict.nav.cta} &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}

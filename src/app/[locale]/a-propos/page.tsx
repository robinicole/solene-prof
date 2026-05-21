import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { PageHero } from "@/components/PageHero";
import { Portrait } from "@/components/Portrait";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return {
    title: dict.aboutPage.meta.title,
    description: dict.aboutPage.meta.description,
    alternates: {
      canonical: `/${locale}/a-propos`,
      languages: { fr: "/fr/a-propos", en: "/en/a-propos" },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Params;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);
  const a = dict.aboutPage;

  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} intro={a.lead} />

      {/* Biography */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[2fr_3fr]">
            <Portrait className="mx-auto max-w-sm lg:mx-0" />
            <div>
              <p className="leading-relaxed text-ink-light">{a.p1}</p>
              <p className="mt-4 leading-relaxed text-ink-light">{a.p2}</p>
              <p className="mt-4 leading-relaxed text-ink-light">{a.p3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching approach */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-mid">
              {loc === "fr" ? "Ma méthode" : "My method"}
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-blue md:text-4xl">
              {a.pedagogyTitle}
            </h2>
            <span
              aria-hidden="true"
              className="mx-auto mt-4 block h-[3px] w-14 bg-coral"
            />
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-light">
              {a.pedagogyIntro}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {a.values.map((value, i) => (
              <div
                key={value.title}
                className="rounded-sm border border-mist-dark bg-white p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-coral">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-extrabold text-blue">
                    {value.title}
                  </h3>
                </div>
                <p className="mt-3 leading-relaxed text-ink-light">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span
            aria-hidden="true"
            className="mx-auto block h-[3px] w-14 bg-coral"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-blue md:text-4xl">
            {a.experienceTitle}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-light">
            {a.experienceText}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            {a.ctaTitle}
          </h2>
          <Link
            href={`/${loc}/contact`}
            className="mt-8 inline-block rounded-sm bg-coral px-8 py-3.5 text-base font-bold text-blue transition-colors hover:bg-coral-light"
          >
            {a.ctaButton} &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}

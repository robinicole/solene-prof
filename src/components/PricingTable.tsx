import Link from "next/link";
import { PRICING } from "@/data/pricing";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

interface PricingTableProps {
  readonly locale: Locale;
  readonly dict: Dictionary;
}

export function PricingTable({ locale, dict }: PricingTableProps) {
  const t = dict.pricingPage;

  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          {/* Rates table */}
          <div className="overflow-hidden rounded-sm border border-mist-dark">
            <div className="flex items-center justify-between bg-blue px-7 py-4 text-xs font-bold tracking-[0.12em] text-white uppercase">
              <span>{t.tableServiceHead}</span>
              <span>{t.tablePriceHead}</span>
            </div>
            <ul className="bg-white">
              {PRICING.rows.map((row) => {
                const label = locale === "fr" ? row.fr : row.en;
                const unit = locale === "fr" ? row.frUnit : row.enUnit;
                return (
                  <li
                    key={row.id}
                    className="flex items-center justify-between gap-4 border-t border-mist-dark px-7 py-5"
                  >
                    <span className="text-ink">{label}</span>
                    <span className="shrink-0 text-xl font-extrabold text-blue">
                      {PRICING.currency}
                      {row.price}
                      {unit && (
                        <span className="ml-1 text-sm font-medium text-ink-light">
                          {unit}
                        </span>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Business rate */}
          <div className="mt-6 rounded-sm border-2 border-coral bg-mist p-7">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-xl font-extrabold text-blue">
                {t.businessTitle}
              </h2>
              <span className="shrink-0 text-xl font-extrabold text-blue">
                {locale === "fr" ? "dès " : "from "}
                {PRICING.currency}
                {PRICING.business.fromPrice}
              </span>
            </div>
            <p className="mt-3 leading-relaxed text-ink-light">
              {t.businessText}
            </p>
            <Link
              href={`/${locale}/contact?cours=business`}
              className="mt-5 inline-block rounded-sm bg-coral px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-coral-light"
            >
              {t.businessButton} &rarr;
            </Link>
          </div>

          {/* Cancellation policy */}
          <div className="mt-6 rounded-sm bg-mist p-7">
            <h2 className="text-xl font-extrabold text-blue">
              {t.cancellationTitle}
            </h2>
            <span
              aria-hidden="true"
              className="mt-3 block h-[3px] w-12 bg-coral"
            />
            {t.cancellationParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-3 leading-relaxed text-ink-light"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-lg leading-relaxed text-mist">{t.ctaText}</p>
          <Link
            href={`/${locale}/contact`}
            className="mt-7 inline-block rounded-sm bg-coral px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-coral-light"
          >
            {t.ctaButton} &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}

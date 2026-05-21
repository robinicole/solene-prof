import Link from "next/link";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

interface CTASectionProps {
  readonly locale: Locale;
  readonly dict: Dictionary;
}

export function CTASection({ locale, dict }: CTASectionProps) {
  const c = dict.home.cta;

  return (
    <section className="bg-coral py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-extrabold text-blue md:text-4xl">
          {c.title} {c.titleAccent}
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-blue/80">
          {c.description}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="mt-8 inline-block rounded-sm bg-blue px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-blue-mid"
        >
          {c.button} &rarr;
        </Link>
      </div>
    </section>
  );
}

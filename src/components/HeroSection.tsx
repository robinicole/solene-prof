import Link from "next/link";
import { Portrait } from "./Portrait";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

interface HeroSectionProps {
  readonly locale: Locale;
  readonly dict: Dictionary;
}

export function HeroSection({ locale, dict }: HeroSectionProps) {
  const h = dict.home.hero;

  return (
    <section className="bg-blue pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr]">
          {/* Text */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-coral">
              {h.eyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] text-white md:text-7xl">
              {h.titleLine1}
              <br />
              <span className="text-coral">{h.titleLine2}</span>
            </h1>
            <span
              aria-hidden="true"
              className="mt-6 block h-[3px] w-16 bg-coral"
            />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
              {h.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/${locale}/cours`}
                className="rounded-sm bg-coral px-7 py-3.5 text-center text-base font-bold text-white transition-colors hover:bg-coral-light"
              >
                {h.ctaPrimary}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="rounded-sm border-2 border-white/40 px-7 py-3.5 text-center text-base font-bold text-white transition-colors hover:border-coral hover:text-coral"
              >
                {h.ctaSecondary}
              </Link>
            </div>

            <ul className="mt-10 flex flex-col gap-2.5 text-sm font-medium text-blue-pale sm:flex-row sm:flex-wrap sm:gap-x-6">
              {h.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 shrink-0 bg-coral"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Portrait */}
          <div className="hidden lg:block">
            <Portrait priority />
          </div>
        </div>
      </div>
    </section>
  );
}

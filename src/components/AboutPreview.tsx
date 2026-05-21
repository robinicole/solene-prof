import Link from "next/link";
import { Portrait } from "./Portrait";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

interface AboutPreviewProps {
  readonly locale: Locale;
  readonly dict: Dictionary;
}

export function AboutPreview({ locale, dict }: AboutPreviewProps) {
  const a = dict.home.about;

  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Portrait className="mx-auto max-w-sm lg:mx-0" />

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-mid">
              {a.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-blue md:text-4xl">
              {a.title}
            </h2>
            <span
              aria-hidden="true"
              className="mt-4 block h-[3px] w-14 bg-coral"
            />
            <p className="mt-5 leading-relaxed text-ink-light">{a.p1}</p>
            <p className="mt-4 leading-relaxed text-ink-light">{a.p2}</p>

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-6">
              {a.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold text-blue">
                    {stat.value}
                  </p>
                  <p className="mt-1 max-w-[10rem] text-sm text-ink-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href={`/${locale}/a-propos`}
              className="mt-9 inline-block rounded-sm border-2 border-blue px-7 py-3 font-bold text-blue transition-colors hover:bg-blue hover:text-white"
            >
              {a.cta} &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

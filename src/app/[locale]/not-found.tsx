"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n";
import { isLocale } from "@/i18n/config";

export default function NotFound() {
  const pathname = usePathname();
  const segment = pathname.split("/")[1];
  const locale = isLocale(segment) ? segment : "fr";
  const dict = getDictionary(locale);
  const nf = dict.notFound;

  return (
    <section className="flex min-h-screen items-center justify-center bg-blue">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-sm font-bold tracking-[0.16em] uppercase text-coral">
          {nf.eyebrow}
        </p>
        <h1 className="mt-4 text-7xl font-extrabold text-white md:text-9xl">
          {nf.title}
        </h1>
        <p className="mt-6 text-lg text-mist">{nf.text}</p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={`/${locale}`}
            className="rounded-sm bg-coral px-8 py-4 font-bold text-blue transition-colors hover:bg-coral-light"
          >
            {nf.homeButton}
          </Link>
          <Link
            href={`/${locale}/cours`}
            className="rounded-sm border-2 border-white/40 px-8 py-4 font-bold text-white transition-colors hover:border-coral hover:text-coral"
          >
            {nf.coursesButton}
          </Link>
        </div>
      </div>
    </section>
  );
}

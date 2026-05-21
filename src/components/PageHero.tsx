import type { ReactNode } from "react";

interface PageHeroProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly intro?: string;
  /** Optional slot rendered above the eyebrow (e.g. breadcrumbs). */
  readonly children?: ReactNode;
}

/** The royal-blue header band shared by all inner pages. */
export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="bg-blue pt-32 pb-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {children && <div className="mb-6">{children}</div>}
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-coral">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-white md:text-5xl">
          {title}
        </h1>
        <span
          aria-hidden="true"
          className="mx-auto mt-5 block h-[3px] w-16 bg-coral"
        />
        {intro && (
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-mist">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

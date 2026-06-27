import Link from "next/link";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

interface FooterProps {
  readonly locale: Locale;
  readonly dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const navLinks = [
    { href: `/${locale}/cours`, label: dict.nav.courses },
    { href: `/${locale}/tarifs`, label: dict.nav.pricing },
    { href: `/${locale}/a-propos`, label: dict.nav.about },
    { href: `/${locale}/temoignages`, label: dict.nav.testimonials },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-blue text-blue-pale">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href={`/${locale}`}
              className="inline-flex flex-col border-2 border-white/40 px-3 py-1.5 leading-none"
            >
              <span className="text-base font-extrabold tracking-tight text-white">
                Solène Lanza
              </span>
              <span className="mt-1 text-[9px] font-bold tracking-[0.12em] text-blue-pale uppercase">
                Cours de français · Londres
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {dict.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-bold tracking-[0.12em] text-white uppercase">
              {dict.footer.navTitle}
            </h2>
            <ul className="mt-4 -ml-2 space-y-1 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block px-2 py-1.5 font-medium transition-colors hover:text-coral"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-bold tracking-[0.12em] text-white uppercase">
              {dict.footer.contactTitle}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{dict.footer.location}</li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="font-medium transition-colors hover:text-coral"
                >
                  {dict.footer.contactCta}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8 text-center text-xs text-blue-pale">
          <p>
            &copy; {new Date().getFullYear()} Solène Lanza.{" "}
            {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

interface HeaderProps {
  readonly locale: Locale;
  readonly dict: Dictionary;
}

function Wordmark({ href }: { readonly href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex flex-col border-2 border-blue px-3 py-1.5 leading-none"
    >
      <span className="text-base font-extrabold tracking-tight text-blue">
        Solène Lanza
      </span>
      <span className="mt-1 text-[9px] font-bold tracking-[0.12em] text-blue-soft uppercase">
        Cours de français · Londres
      </span>
    </Link>
  );
}

export function Header({ locale, dict }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const home = `/${locale}`;
  const navLinks = [
    { href: home, label: dict.nav.home },
    { href: `/${locale}/cours`, label: dict.nav.courses },
    { href: `/${locale}/tarifs`, label: dict.nav.pricing },
    { href: `/${locale}/a-propos`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const isActive = (href: string) =>
    href === home ? pathname === home : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-mist-dark bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Wordmark href={home} />

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`inline-flex items-center border-b-2 py-1 text-sm font-bold transition-colors ${
                    isActive(link.href)
                      ? "border-coral text-blue"
                      : "border-transparent text-blue/70 hover:text-blue"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <span className="h-4 w-px bg-mist-dark" />
          <LanguageSwitcher locale={locale} dict={dict} />
          <Link
            href={`/${locale}/contact`}
            className="rounded-sm bg-coral px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-coral-light"
          >
            {dict.nav.cta}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label={dict.langSwitch.label}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`h-0.5 w-6 bg-blue transition-transform ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-blue transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-blue transition-transform ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-mist-dark bg-white lg:hidden">
          <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2.5 text-lg font-bold transition-colors ${
                    isActive(link.href)
                      ? "text-coral-dark"
                      : "text-blue/80 hover:text-blue"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 flex items-center justify-between border-t border-mist-dark pt-4">
              <LanguageSwitcher locale={locale} dict={dict} />
              <Link
                href={`/${locale}/contact`}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-sm bg-coral px-5 py-2.5 text-sm font-bold text-white"
              >
                {dict.nav.cta}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

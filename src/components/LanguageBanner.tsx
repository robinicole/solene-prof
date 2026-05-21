"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DISMISS_KEY = "solene-lang-banner-dismissed";

/**
 * Shown only on the French site, only to visitors whose browser is set to
 * English, and only until they dismiss it (or switch). Renders nothing
 * server-side, so it never causes a layout shift.
 */
export function LanguageBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    try {
      if (localStorage.getItem(DISMISS_KEY) === "1") return;
    } catch {
      /* localStorage unavailable — show the banner anyway */
    }
    const langs =
      navigator.languages && navigator.languages.length > 0
        ? navigator.languages
        : [navigator.language];
    const prefersEnglish = langs.some((lang) =>
      lang.toLowerCase().startsWith("en")
    );
    if (prefersEnglish) setVisible(true);
  }, []);

  if (!visible) return null;

  // Build the English equivalent of the current path.
  const parts = pathname.split("/");
  parts[1] = "en";
  const enPath = parts.join("/") || "/en";

  function dismiss() {
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-mist-dark bg-white shadow-[0_-6px_24px_-12px_rgba(32,60,145,0.4)]">
      <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-12 py-3">
        <p className="text-sm text-ink">
          This website is also available in English.
        </p>
        <Link
          href={enPath}
          onClick={dismiss}
          className="rounded-sm bg-coral px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-coral-light"
        >
          View in English &rarr;
        </Link>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="absolute right-3 top-1/2 -translate-y-1/2 px-2 text-2xl leading-none text-ink-light transition-colors hover:text-ink"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

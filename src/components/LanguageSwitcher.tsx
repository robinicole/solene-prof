"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

interface LanguageSwitcherProps {
  readonly locale: Locale;
  readonly dict: Dictionary;
}

/** Swaps the locale segment of the current path, keeping the rest intact. */
export function LanguageSwitcher({ locale, dict }: LanguageSwitcherProps) {
  const pathname = usePathname();

  function pathFor(target: Locale): string {
    const parts = pathname.split("/");
    parts[1] = target;
    const joined = parts.join("/");
    return joined === "" ? `/${target}` : joined;
  }

  const options: readonly Locale[] = ["fr", "en"];

  return (
    <div
      className="flex items-center gap-1 text-sm font-bold"
      aria-label={dict.langSwitch.label}
    >
      {options.map((option, i) => {
        const isCurrent = option === locale;
        return (
          <span key={option} className="flex items-center">
            {i > 0 && <span className="px-1 text-mist-dark">·</span>}
            {isCurrent ? (
              <span className="text-coral-dark" aria-current="true">
                {dict.langSwitch[option]}
              </span>
            ) : (
              <Link
                href={pathFor(option)}
                className="text-blue/55 transition-colors hover:text-blue"
              >
                {dict.langSwitch[option]}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}

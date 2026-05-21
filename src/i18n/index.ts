import { fr, type Dictionary } from "./fr";
import { en } from "./en";
import type { Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { fr, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary, Locale };
export { locales, defaultLocale, isLocale } from "./config";

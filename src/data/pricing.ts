/* =========================================================================
   [À RELIRE] : tarifs 2026-2027 repris du spec de Solène.
   Note : le spec ne précise pas si les cours de 30 et 45 min sont en personne
   ou en ligne, à confirmer par Solène.
   ========================================================================= */

export interface PricingRow {
  readonly id: string;
  readonly fr: string;
  readonly en: string;
  /** Price in GBP. */
  readonly price: number;
  /** Unit suffix, e.g. "/ heure". Empty for fixed-length lessons. */
  readonly frUnit: string;
  readonly enUnit: string;
}

export const PRICING = {
  currency: "£",
  yearLabel: "2026-2027",
  rows: [
    {
      id: "in-person",
      fr: "Cours en personne, en tête-à-tête",
      en: "In-person lesson, one-to-one",
      price: 50,
      frUnit: "/ heure",
      enUnit: "/ hour",
    },
    {
      id: "online",
      fr: "Cours en ligne, en tête-à-tête",
      en: "Online lesson, one-to-one",
      price: 45,
      frUnit: "/ heure",
      enUnit: "/ hour",
    },
    {
      id: "lesson-45",
      fr: "Cours de 45 minutes, en tête-à-tête",
      en: "45-minute lesson, one-to-one",
      price: 40,
      frUnit: "",
      enUnit: "",
    },
    {
      id: "lesson-30",
      fr: "Cours de 30 minutes, en tête-à-tête",
      en: "30-minute lesson, one-to-one",
      price: 35,
      frUnit: "",
      enUnit: "",
    },
  ] satisfies readonly PricingRow[],
  /** Business rate is quoted, not a fixed line in the table. */
  business: {
    fromPrice: 80,
  },
} as const;

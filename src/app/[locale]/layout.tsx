import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageBanner } from "@/components/LanguageBanner";
import { getDictionary } from "@/i18n";
import { locales, type Locale } from "@/i18n/config";
import { organizationJsonLd } from "@/lib/structured-data";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

type Params = Promise<{ locale: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.home.meta.title,
      template: "%s | Solène Lanza",
    },
    description: dict.home.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: "/fr", en: "/en" },
    },
    openGraph: {
      title: dict.home.meta.title,
      description: dict.home.meta.description,
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      siteName: "Solène Lanza",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Params;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);
  const orgJsonLd = organizationJsonLd(SITE_URL, loc);

  return (
    <html lang={loc} className={hanken.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header locale={loc} dict={dict} />
        <main>{children}</main>
        <Footer locale={loc} dict={dict} />
        {loc === "fr" && <LanguageBanner />}
        <Analytics />
      </body>
    </html>
  );
}

import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { HeroSection } from "@/components/HeroSection";
import { CoursesPreview } from "@/components/CoursesPreview";
import { AboutPreview } from "@/components/AboutPreview";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";

type Params = Promise<{ locale: string }>;

export default async function HomePage({ params }: { params: Params }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  return (
    <>
      <HeroSection locale={loc} dict={dict} />
      <CoursesPreview locale={loc} dict={dict} />
      <AboutPreview locale={loc} dict={dict} />
      <TestimonialsSection locale={loc} dict={dict} />
      <CTASection locale={loc} dict={dict} />
    </>
  );
}

import { NextResponse, type NextRequest } from "next/server";

const locales = ["fr", "en"] as const;
const defaultLocale = "fr";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return NextResponse.next();

  // Everyone lands on the French version. English speakers are offered a
  // switch to the English version through a dismissible banner.
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, the API, and any path that looks like a file.
  matcher: ["/((?!_next|api|images|.*\\.).*)"],
};

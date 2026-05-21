import { NextResponse, type NextRequest } from "next/server";

const locales = ["fr", "en"] as const;
const defaultLocale = "fr";

/** Pick a locale from the Accept-Language header, defaulting to French. */
function detectLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;
  const primary = header.split(",")[0]?.toLowerCase() ?? "";
  if (primary.startsWith("en")) return "en";
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, the API, and any path that looks like a file.
  matcher: ["/((?!_next|api|images|.*\\.).*)"],
};

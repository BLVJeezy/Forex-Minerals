import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  defaultLocale,
  locales,
  pathFor,
  routeKeyFromSegment,
} from "@/lib/i18n";

/**
 * Every page lives under a locale prefix (/fr, /en). Unprefixed requests are
 * redirected to French — the default editorial language — while preserving the
 * requested path, so legacy or hand-typed URLs still resolve.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  const segments = pathname.split("/").filter(Boolean);

  // An unprefixed page slug (e.g. /about) is resolved through the route table
  // in every locale, then redirected to its French equivalent (/fr/a-propos).
  if (segments.length === 1) {
    for (const locale of locales) {
      const key = routeKeyFromSegment(locale, segments[0]);
      if (key) {
        url.pathname = pathFor(defaultLocale, key);
        return NextResponse.redirect(url);
      }
    }
  }

  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Everything except Next internals, API routes and static files.
    "/((?!_next|api|.*\\.[\\w]+$).*)",
  ],
};

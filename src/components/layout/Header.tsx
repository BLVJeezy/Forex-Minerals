"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/content";
import { cn } from "@/lib/cn";
import {
  type Locale,
  type RouteKey,
  isLocale,
  localeLabels,
  localeNames,
  locales,
  pathFor,
  routeKeyFromSegment,
} from "@/lib/i18n";

type Props = {
  locale: Locale;
  content: Dictionary;
};

const NAV: RouteKey[] = [
  "about",
  "minerals",
  "transport",
  "fleet",
  "industries",
  "contact",
];

export function Header({ locale, content }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const currentKey = currentRouteKey(pathname, locale);

  return (
    <header className="sticky top-0 z-50">
      {/* Corporate utility bar */}
      <div
        className={cn(
          "hidden bg-navy-800 text-white transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] lg:block",
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <Container className="flex h-10 items-center justify-between">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-steel-300">
            Likasi <span className="text-gold-500">•</span> Haut-Katanga{" "}
            <span className="text-gold-500">•</span>{" "}
            {locale === "fr" ? "RD Congo" : "DR Congo"}
          </p>
          <LanguageSwitch
            locale={locale}
            currentKey={currentKey}
            label={content.nav.languageLabel}
            tone="dark"
          />
        </Container>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "relative z-50 border-b bg-white/95 backdrop-blur-sm transition-shadow duration-300",
          scrolled ? "border-steel-200 shadow-[0_1px_24px_rgba(0,32,80,0.08)]" : "border-steel-100",
        )}
      >
        <Container className="flex items-center justify-between gap-6">
          <Link
            href={pathFor(locale, "home")}
            className={cn(
              "flex shrink-0 items-center transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
              scrolled ? "py-3" : "py-4 lg:py-5",
            )}
            aria-label="Forex Minerals"
          >
            <Logo
              layout="horizontal"
              priority
              compact={scrolled}
              className="transition-all duration-300"
            />
          </Link>

          <nav
            aria-label={content.nav.primaryNav}
            className="hidden items-center gap-7 xl:flex"
          >
            {NAV.map((key) => {
              const active = currentKey === key;
              return (
                <Link
                  key={key}
                  href={pathFor(locale, key)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "fx-underline py-1 text-[0.8125rem] font-medium tracking-[0.02em] transition-colors",
                    active
                      ? "text-navy-700 [background-size:100%_1px]"
                      : "text-steel-700 hover:text-navy-700",
                  )}
                >
                  {content.nav[key]}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="lg:hidden">
              <LanguageSwitch
                locale={locale}
                currentKey={currentKey}
                label={content.nav.languageLabel}
                tone="light"
              />
            </div>

            <Link
              href={pathFor(locale, "contact")}
              className="hidden bg-navy-700 px-5 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-gold-500 hover:text-navy-900 lg:inline-flex xl:px-6"
            >
              {content.nav.cta}
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="fx-mobile-menu"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-navy-700 xl:hidden"
            >
              <span className="sr-only">
                {menuOpen ? content.nav.closeMenu : content.nav.openMenu}
              </span>
              <BurgerIcon open={menuOpen} />
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile / tablet drawer */}
      <div
        id="fx-mobile-menu"
        hidden={!menuOpen}
        className="fx-navy-texture fixed inset-0 z-40 overflow-y-auto pt-24 xl:hidden"
      >
        <Container className="pb-16">
          <nav aria-label={content.nav.primaryNav} className="flex flex-col">
            {(["home", ...NAV] as RouteKey[]).map((key, index) => (
              <Link
                key={key}
                href={pathFor(locale, key)}
                className={cn(
                  "fx-display border-b border-white/10 py-5 text-[1.5rem] tracking-[-0.02em] transition-colors sm:text-[1.75rem]",
                  currentKey === key ? "text-gold-400" : "text-white hover:text-gold-300",
                )}
                style={{ transitionDelay: `${index * 20}ms` }}
              >
                {content.nav[key]}
              </Link>
            ))}
          </nav>

          <Link
            href={pathFor(locale, "contact")}
            className="mt-10 inline-flex w-full items-center justify-center bg-gold-500 px-6 py-4 text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-navy-900"
          >
            {content.nav.cta}
          </Link>

          <div className="mt-10 border-t border-white/10 pt-6">
            <LanguageSwitch
              locale={locale}
              currentKey={currentKey}
              label={content.nav.languageLabel}
              tone="dark"
            />
          </div>
        </Container>
      </div>
    </header>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative block h-4 w-6">
      <span
        className={cn(
          "absolute left-0 h-[2px] w-6 bg-current transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
          open ? "top-[7px] rotate-45" : "top-0",
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-[7px] h-[2px] w-6 bg-current transition-opacity duration-200",
          open ? "opacity-0" : "opacity-100",
        )}
      />
      <span
        className={cn(
          "absolute left-0 h-[2px] w-6 bg-current transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
          open ? "top-[7px] -rotate-45" : "top-[14px]",
        )}
      />
    </span>
  );
}

function LanguageSwitch({
  locale,
  currentKey,
  label,
  tone,
}: {
  locale: Locale;
  currentKey: RouteKey;
  label: string;
  tone: "light" | "dark";
}) {
  return (
    <div
      className="flex items-center gap-1.5"
      role="group"
      aria-label={label}
    >
      {locales.map((code, index) => {
        const active = code === locale;
        return (
          <span key={code} className="flex items-center gap-1.5">
            {index > 0 ? (
              <span
                aria-hidden="true"
                className={cn(
                  "text-[0.6875rem]",
                  tone === "dark" ? "text-white/30" : "text-steel-300",
                )}
              >
                |
              </span>
            ) : null}
            <Link
              href={pathFor(code, currentKey)}
              hrefLang={code}
              lang={code}
              aria-current={active ? "true" : undefined}
              className={cn(
                "px-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] transition-colors",
                active
                  ? tone === "dark"
                    ? "text-gold-400"
                    : "text-navy-700"
                  : tone === "dark"
                    ? "text-steel-300 hover:text-white"
                    : "text-steel-500 hover:text-navy-700",
              )}
            >
              <span className="sr-only">{localeNames[code]}</span>
              <span aria-hidden="true">{localeLabels[code]}</span>
            </Link>
          </span>
        );
      })}
    </div>
  );
}

/** Reverse-resolve the active route key from the current pathname. */
function currentRouteKey(pathname: string, locale: Locale): RouteKey {
  const segments = pathname.split("/").filter(Boolean);
  const [first, second] = segments;
  const activeLocale = first && isLocale(first) ? first : locale;
  if (!second) return "home";
  return routeKeyFromSegment(activeLocale, second) ?? "home";
}

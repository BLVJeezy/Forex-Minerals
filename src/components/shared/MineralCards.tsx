import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";
import { cn } from "@/lib/cn";
import { type Locale, pathFor } from "@/lib/i18n";

type Props = {
  locale: Locale;
  content: Dictionary;
  linked?: boolean;
  className?: string;
};

/**
 * Mineral portfolio cards.
 *
 * Commodity photography (gypsum, coal, sand) has not been supplied yet, so the
 * cards use a typographic industrial treatment rather than stock imagery.
 * Once material photographs are provided they can be dropped into the top of
 * each card without changing the layout.
 */
export function MineralCards({ locale, content, linked = true, className }: Props) {
  return (
    <div className={cn("grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {content.minerals.items.map((item, index) => {
        const inner = (
          <>
            <div className="flex items-start justify-between gap-4">
              <span className="fx-display text-[0.8125rem] font-semibold tracking-[0.14em] text-gold-700 transition-colors group-hover:text-gold-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                aria-hidden="true"
                className="mt-2 h-px w-10 bg-steel-300 transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:w-16 group-hover:bg-gold-500"
              />
            </div>

            <h3 className="fx-display mt-8 text-[1.375rem] text-navy-700 transition-colors group-hover:text-white lg:text-[1.5rem]">
              {item.name}
            </h3>

            <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-steel-700 transition-colors group-hover:text-steel-200">
              {item.short}
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {item.applications.map((application) => (
                <li
                  key={application}
                  className="border border-steel-200 px-3 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-steel-600 transition-colors group-hover:border-white/25 group-hover:text-steel-300"
                >
                  {application}
                </li>
              ))}
            </ul>
          </>
        );

        const classes =
          "group flex h-full flex-col bg-white p-8 transition-colors duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:bg-navy-700 lg:p-10";

        return (
          <Reveal key={item.id} delay={index * 90}>
            {linked ? (
              <Link
                href={`${pathFor(locale, "minerals")}#${item.id}`}
                className={classes}
              >
                {inner}
              </Link>
            ) : (
              <div className={classes}>{inner}</div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}

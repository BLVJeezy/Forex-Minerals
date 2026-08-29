import Image from "next/image";

import { brand } from "@/content/media";
import { cn } from "@/lib/cn";

type Props = {
  /** `reversed` is the knock-out variant used on deep navy surfaces. */
  variant?: "primary" | "reversed";
  /**
   * `stacked` is the official lockup (mark above wordmark).
   * `horizontal` sets the same artwork side by side so the company name stays
   * legible at navigation-bar heights.
   */
  layout?: "stacked" | "horizontal";
  className?: string;
  priority?: boolean;
  /** Rendered height of the mark, in pixels (stacked layout only). */
  height?: number;
  /** Horizontal layout only: the reduced size used once the header condenses. */
  compact?: boolean;
};

export function Logo({
  variant = "primary",
  layout = "stacked",
  className,
  priority = false,
  height = 46,
  compact = false,
}: Props) {
  const reversed = variant === "reversed";

  if (layout === "stacked") {
    const src = reversed ? brand.logoReversed : brand.logo;
    return (
      <Image
        src={src}
        alt="Forex Minerals"
        height={height}
        width={Math.round((height * src.width) / src.height)}
        priority={priority}
        className={cn("w-auto object-contain", className)}
        sizes="260px"
      />
    );
  }

  const mark = reversed ? brand.markReversed : brand.mark;
  const wordmark = reversed ? brand.wordmarkReversed : brand.wordmark;

  // Heights are set per breakpoint rather than inline so the lockup stays
  // proportionate on small screens without crowding the language switch.
  const sizing = compact
    ? {
        mark: "h-7 sm:h-8 lg:h-9",
        wordmark: "h-[13px] sm:h-[15px] lg:h-4",
      }
    : {
        mark: "h-8 sm:h-9 lg:h-[42px]",
        wordmark: "h-[15px] sm:h-4 lg:h-[19px]",
      };

  return (
    <span className={cn("flex items-center gap-2.5 sm:gap-3", className)}>
      <Image
        src={mark}
        alt=""
        aria-hidden="true"
        height={48}
        width={Math.round((48 * mark.width) / mark.height)}
        priority={priority}
        className={cn(
          "w-auto shrink-0 object-contain transition-[height] duration-300",
          sizing.mark,
        )}
        sizes="72px"
      />
      <Image
        src={wordmark}
        alt="Forex Minerals"
        height={24}
        width={Math.round((24 * wordmark.width) / wordmark.height)}
        priority={priority}
        className={cn(
          "w-auto object-contain transition-[height] duration-300",
          sizing.wordmark,
        )}
        sizes="240px"
      />
    </span>
  );
}

import { Reveal } from "@/components/ui/Reveal";
import { leadership } from "@/content/company";
import { cn } from "@/lib/cn";

/**
 * Leadership placeholders.
 *
 * ⚠️ Names, positions and responsibilities have NOT been confirmed by
 * Forex Minerals. No biographical copy is generated here — the cards carry
 * clearly marked placeholders until the company supplies the details.
 */
export function LeadershipBlock({
  tone = "dark",
  pendingLabel,
  className,
}: {
  tone?: "light" | "dark";
  pendingLabel: string;
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-px", tone === "dark" ? "bg-white/12" : "bg-steel-200", className)}>
      {leadership.map((person, index) => (
        <Reveal
          as="li"
          key={person.id}
          delay={index * 100}
          className={cn(
            "flex items-center gap-6 p-7 lg:px-9 lg:py-8",
            tone === "dark" ? "bg-navy-800" : "bg-white",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "flex h-14 w-14 shrink-0 items-center justify-center border",
              tone === "dark"
                ? "border-white/20 text-white/40"
                : "border-steel-200 text-steel-400",
            )}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
              <circle cx="12" cy="8.4" r="3.6" stroke="currentColor" strokeWidth="1.3" />
              <path
                d="M4.8 20c.6-3.6 3.6-5.6 7.2-5.6s6.6 2 7.2 5.6"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>
          </span>

          <div data-placeholder="true">
            <p
              className={cn(
                "fx-display text-[1.0625rem]",
                tone === "dark" ? "text-white" : "text-navy-700",
              )}
            >
              {person.name}
            </p>
            <p
              className={cn(
                "mt-1 text-[0.8125rem]",
                tone === "dark" ? "text-steel-400" : "text-steel-600",
              )}
            >
              {person.role}
            </p>
            <p className="sr-only">{pendingLabel}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

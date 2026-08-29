import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";
import { cn } from "@/lib/cn";

type Step = Dictionary["home"]["process"]["steps"][number];

/**
 * Operating model: supply → preparation → loading → transport → delivery →
 * operational continuity. A single horizontal rule carries the sequence on
 * desktop; on mobile it becomes a vertical timeline.
 */
export function ProcessFlow({
  steps,
  tone = "light",
  className,
}: {
  steps: Step[];
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "relative grid gap-px sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6",
        tone === "dark" ? "bg-white/12" : "bg-steel-200",
        className,
      )}
    >
      {steps.map((step, index) => (
        <Reveal
          as="li"
          key={step.id}
          delay={index * 70}
          className={cn(
            "group relative flex flex-col p-7 lg:p-8",
            tone === "dark" ? "bg-navy-800" : "bg-white",
          )}
        >
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "fx-display text-[0.8125rem] font-semibold tracking-[0.14em]",
                tone === "dark" ? "text-gold-400" : "text-gold-700",
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              aria-hidden="true"
              className={cn(
                "h-px flex-1",
                tone === "dark" ? "bg-white/20" : "bg-steel-200",
              )}
            />
            {index < steps.length - 1 ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 12 10"
                width="12"
                height="10"
                fill="none"
                className={cn(tone === "dark" ? "text-white/35" : "text-steel-300")}
              >
                <path d="M0 5h9M6 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            ) : (
              <span
                aria-hidden="true"
                className="block h-1.5 w-1.5 rotate-45 bg-gold-500"
              />
            )}
          </div>

          <h3
            className={cn(
              "fx-display mt-6 text-[1.0625rem] leading-snug lg:text-[1.125rem]",
              tone === "dark" ? "text-white" : "text-navy-700",
            )}
          >
            {step.title}
          </h3>
          <p
            className={cn(
              "mt-3 text-[0.875rem] leading-relaxed",
              tone === "dark" ? "text-steel-300" : "text-steel-600",
            )}
          >
            {step.body}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}

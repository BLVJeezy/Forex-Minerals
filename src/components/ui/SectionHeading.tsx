import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  body?: string | string[];
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
  className?: string;
  size?: "default" | "large";
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "light",
  as: Tag = "h2",
  className,
  size = "default",
}: Props) {
  const paragraphs = Array.isArray(body) ? body : body ? [body] : [];

  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("fx-eyebrow mb-5", tone === "dark" && "fx-eyebrow-light")}>
          {eyebrow}
        </p>
      ) : null}

      <Tag
        className={cn(
          "fx-display",
          size === "large"
            ? "text-[2rem] sm:text-[2.6rem] lg:text-[3.25rem]"
            : "text-[1.75rem] sm:text-[2.15rem] lg:text-[2.6rem]",
          tone === "dark" ? "text-white" : "text-navy-700",
        )}
      >
        {title}
      </Tag>

      {paragraphs.length > 0 ? (
        <div
          className={cn(
            "mt-6 space-y-4",
            align === "center" && "mx-auto",
          )}
        >
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className={cn(
                "fx-lead",
                tone === "dark" && "text-steel-200",
              )}
            >
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}
    </Reveal>
  );
}

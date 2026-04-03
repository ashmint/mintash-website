import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionIntroProps) {
  return (
    <Reveal
      className={cn(
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <div className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

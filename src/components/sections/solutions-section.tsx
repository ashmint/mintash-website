import { Building2, ServerCog, Workflow } from "lucide-react";
import { solutions } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { cn } from "@/lib/utils";

const icons = [ServerCog, Workflow, Building2];

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="scroll-mt-28 px-6 py-18 sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Solutions section */}
        <SectionIntro
          eyebrow="Solutions"
          title="End-to-End AI Infrastructure, Simplified"
          description="Mintash brings together deployment strategy, hardware, orchestration, and developer access into one premium infrastructure layer."
          align="center"
          className="mx-auto max-w-3xl"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={solution.title} delay={0.08 * index} className="h-full">
                <div
                  className={cn(
                    "glass-panel section-card relative h-full overflow-hidden rounded-[1.75rem] p-6 sm:p-7",
                    index === 1 && "border-cyan-300/18 shadow-[0_0_45px_rgba(56,189,248,0.14)]",
                  )}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-white/6 text-cyan-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-white">
                    {solution.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {solution.description}
                  </p>
                  <div className="mt-6 space-y-3">
                    {solution.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-[1.1rem] border border-white/8 bg-slate-950/45 px-4 py-3 text-sm text-slate-200"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

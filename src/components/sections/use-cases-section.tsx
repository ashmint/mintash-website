import {
  Building2,
  DraftingCompass,
  FlaskConical,
  GraduationCap,
} from "lucide-react";
import { useCases } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";

const icons = [Building2, GraduationCap, DraftingCompass, FlaskConical];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="scroll-mt-28 px-6 py-18 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Use cases section */}
        <SectionIntro
          eyebrow="Use Cases"
          title="AI Solutions Across Industries"
          description="Private AI infrastructure that adapts to enterprise teams, educational labs, design workflows, and high-performance R&D environments."
          align="center"
          className="mx-auto max-w-3xl"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {useCases.map((item, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={item.title} delay={0.08 * index} className="h-full">
                <div className="glass-panel section-card h-full rounded-[1.75rem] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-white/6 text-cyan-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                    {item.label}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

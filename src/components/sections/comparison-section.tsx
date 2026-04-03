import { Check, X } from "lucide-react";
import { comparison } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";

export function ComparisonSection() {
  return (
    <section className="scroll-mt-28 px-6 py-18 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Value proposition comparison section */}
        <SectionIntro
          eyebrow="Value Proposition"
          title="Break Free from Expensive AI Infrastructure"
          description="A modern comparison between legacy GPU-heavy stacks and the Mintash + Miphi model."
          align="center"
          className="mx-auto max-w-3xl"
        />

        <Reveal delay={0.08} className="glass-panel mt-10 rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/8 bg-slate-950/45 p-6 sm:p-7">
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-slate-300">
                Traditional AI
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                GPU-heavy, costly, and hard to scale
              </h3>
              <div className="mt-7 space-y-3">
                {comparison.traditional.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.2rem] border border-white/6 bg-white/4 px-4 py-3"
                  >
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-rose-300/20 bg-rose-300/10 text-rose-200">
                      <X className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm leading-7 text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(96,165,250,0.04))] p-6 shadow-[0_0_45px_rgba(56,189,248,0.14)] sm:p-7">
              <div className="inline-flex rounded-full border border-cyan-300/24 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100">
                Mintash + Miphi
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                Simplified architecture with enterprise-grade efficiency
              </h3>
              <div className="mt-7 space-y-3">
                {comparison.mintash.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.2rem] border border-cyan-300/10 bg-slate-950/35 px-4 py-3"
                  >
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm leading-7 text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

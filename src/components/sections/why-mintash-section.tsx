import {
  BadgeCheck,
  Coins,
  HardDriveDownload,
  Headphones,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { whyMintash } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";

const icons = [
  BadgeCheck,
  Coins,
  HardDriveDownload,
  Rocket,
  ShieldCheck,
  Headphones,
];

export function WhyMintashSection() {
  return (
    <section id="why-mintash" className="scroll-mt-28 px-6 py-18 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Why Mintash section */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro
            eyebrow="Why Mintash"
            title="Built for the Future of AI Adoption"
            description="A premium deployment model for organizations that need affordable infrastructure, fast implementation, and long-term control."
          />

          <Reveal delay={0.1} className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {whyMintash.map((item, index) => {
                const Icon = icons[index];

                return (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-white/8 bg-slate-950/45 px-4 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-white/6 text-cyan-100">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="text-sm font-medium text-slate-100">{item}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-cyan-300/16 bg-cyan-300/8 px-5 py-5">
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">
                End-to-End Engagement
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200">
                From infrastructure planning and rack deployment to model access
                and multi-user enablement, Mintash provides a single accountable
                partner for on-premise AI execution.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

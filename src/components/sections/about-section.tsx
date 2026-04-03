import { Coins, Cpu, LockKeyhole, Zap } from "lucide-react";
import Image from "next/image";
import { miphiLogo } from "@/lib/assets";
import { aboutHighlights } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";

const icons = [Coins, LockKeyhole, Cpu, Zap];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 px-6 py-18 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* About section content */}
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <SectionIntro
              eyebrow="About Mintash"
              title="Reimagining How Organizations Access AI"
              description="Mintash Technologies enables businesses, institutions, and innovators to adopt artificial intelligence without the traditional barriers of cost and complexity."
            />
            <Reveal delay={0.1} className="max-w-2xl space-y-5 text-base leading-8 text-slate-300">
              <p>
                As an official partner of Miphi, we bring next-generation AI
                infrastructure that eliminates the need for complex multi-GPU
                environments and expensive cloud dependency.
              </p>
              <p>
                Our solutions are designed to deliver powerful AI capabilities in
                a compact, efficient, and scalable form, enabling organizations to
                deploy, train, and run models entirely on-premise.
              </p>
            </Reveal>
          </div>

          <div className="space-y-5">
            <Reveal delay={0.15} className="glass-panel rounded-[1.75rem] p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.26em] text-cyan-100/80">
                  Official Miphi Partner
                </div>
                <div className="inline-flex items-center px-1 py-1">
                  <Image
                    src={miphiLogo}
                    alt="MiPhi logo"
                    width={94}
                    height={30}
                    className="h-auto w-auto object-contain"
                  />
                </div>
              </div>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                Mintash combines infrastructure strategy, deployment expertise,
                and the Miphi ecosystem to give organizations an elegant path from
                hardware to production-ready AI APIs.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutHighlights.map((item, index) => {
                const Icon = icons[index];

                return (
                  <Reveal key={item.title} delay={0.08 * index} className="h-full">
                    <div className="glass-panel section-card h-full rounded-[1.5rem] p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-white/6 text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

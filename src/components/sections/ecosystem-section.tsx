import { ArrowRight, BrainCircuit, MemoryStick } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { aidaptivImage, memoryImage } from "@/lib/assets";
import { ecosystem } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { cn } from "@/lib/utils";

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="scroll-mt-28 px-6 py-18 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Miphi ecosystem section */}
        <SectionIntro
          eyebrow="Miphi Ecosystem"
          title="Powered by Next-Generation AI Technology"
          description="Mintash brings the core Miphi platform layers that make compact, concurrent, and scalable AI infrastructure possible."
          align="center"
          className="mx-auto max-w-3xl"
        />

        <div className="mt-10 space-y-6">
          {ecosystem.map((item, index) => {
            const Icon = index === 0 ? BrainCircuit : MemoryStick;
            const isReversed = index % 2 === 1;

            return (
              <Reveal key={item.title} delay={0.08 * index}>
                <div className="glass-panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
                  <div
                    className={cn(
                      "grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center",
                      isReversed && "lg:grid-cols-[0.95fr_1.05fr]",
                    )}
                  >
                    <div className={cn(isReversed && "lg:order-2")}>
                      <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.26em] text-cyan-100/80">
                        {item.eyebrow}
                      </div>
                      <div className="mt-5 flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-cyan-300/20 bg-white/6 text-cyan-100">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-display text-3xl font-semibold tracking-tight text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                        {item.description}
                      </p>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {item.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className="rounded-[1.2rem] border border-white/8 bg-slate-950/45 px-4 py-3 text-sm text-slate-200"
                          >
                            {bullet}
                          </div>
                        ))}
                      </div>
                      {index === 1 ? (
                        <div className="mt-7">
                          <ButtonLink href="/enterprise-memory" variant="secondary">
                            Explore Memory Portfolio
                            <ArrowRight className="h-4 w-4" />
                          </ButtonLink>
                        </div>
                      ) : null}
                    </div>

                    <div className={cn("relative", isReversed && "lg:order-1")}>
                      {index === 0 ? <AiDaptivVisual /> : <EnterpriseMemoryVisual />}
                    </div>
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

function AiDaptivVisual() {
  return (
    <div className="relative mx-auto h-[320px] max-w-[460px] overflow-hidden rounded-[2rem] border border-cyan-300/14 bg-slate-950/45 p-3">
      <div className="hero-glow absolute left-8 top-8 h-28 w-28 rounded-full bg-cyan-400/20" />
      <div className="hero-glow absolute bottom-8 right-8 h-28 w-28 rounded-full bg-blue-500/18" />
      <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/8 bg-transparent">
        <Image
          src={aidaptivImage}
          alt="aiDaptiv architecture illustration"
          fill
          className="object-contain p-3"
          sizes="(max-width: 1024px) 100vw, 460px"
        />
      </div>
    </div>
  );
}

function EnterpriseMemoryVisual() {
  return (
    <div className="relative mx-auto h-[320px] max-w-[460px] overflow-hidden rounded-[2rem] border border-cyan-300/14 bg-slate-950/45 p-3">
      <div className="hero-glow absolute left-10 top-6 h-28 w-28 rounded-full bg-cyan-400/16" />
      <div className="hero-glow absolute bottom-8 right-6 h-28 w-28 rounded-full bg-blue-500/18" />
      <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/8 bg-transparent">
        <Image
          src={memoryImage}
          alt="MiPhi enterprise memory product image"
          fill
          className="object-contain p-3"
          sizes="(max-width: 1024px) 100vw, 460px"
        />
      </div>
    </div>
  );
}

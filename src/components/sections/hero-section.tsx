import {
  ArrowRight,
  BadgeCheck,
  Cpu,
  LockKeyhole,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { miphiLogo } from "@/lib/assets";
import { heroStats, siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-28 px-6 pb-16 pt-14 sm:px-8 lg:flex lg:min-h-[calc(100svh-5.5rem)] lg:items-center lg:px-10 lg:pb-8 lg:pt-5"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Hero section */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.06fr)_minmax(440px,0.94fr)] lg:items-start lg:gap-12">
          <div className="max-w-3xl">
            <Reveal className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-2 text-xs font-medium uppercase tracking-[0.26em] text-cyan-100/80">
              <BadgeCheck className="h-4 w-4 text-cyan-200" />
              <span>{siteConfig.partner}</span>
              <span className="inline-flex items-center px-1 py-0.5">
                <Image
                  src={miphiLogo}
                  alt="MiPhi logo"
                  width={54}
                  height={16}
                  className="h-auto w-auto object-contain"
                />
              </span>
            </Reveal>

            <Reveal delay={0.08} className="mt-6 lg:mt-5">
              <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-[5.6rem] xl:text-7xl">
                Democratizing <span className="text-gradient">AI for Everyone</span>
              </h1>
            </Reveal>

            <Reveal
              delay={0.14}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl lg:mt-5"
            >
              Affordable, scalable, and enterprise-grade AI infrastructure built
              for organizations that want to innovate without the cost and
              complexity of traditional GPU-heavy systems.
            </Reveal>

            <Reveal delay={0.18} className="mt-5 max-w-2xl text-base leading-8 text-slate-400 lg:mt-4 lg:leading-7">
              Deploy, train, and run advanced AI models on-premise with unmatched
              efficiency, from rack-level infrastructure to fully accessible APIs.
            </Reveal>

            <Reveal delay={0.22} className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-6">
              <ButtonLink href="#solutions" variant="primary">
                Explore Solutions
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Talk to an Expert
              </ButtonLink>
            </Reveal>

            <Reveal delay={0.28} className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300 lg:mt-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <LockKeyhole className="h-4 w-4 text-cyan-200" />
                On-premise AI deployment
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Cpu className="h-4 w-4 text-cyan-200" />
                Rack-to-API infrastructure
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Sparkles className="h-4 w-4 text-cyan-200" />
                Enterprise-grade performance
              </span>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:pt-1">
            <HeroVisual />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3 lg:mt-8">
          {heroStats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.1 + index * 0.08} className="h-full">
              <div className="glass-panel section-card h-full rounded-[1.5rem] px-5 py-6 lg:px-4 lg:py-4">
                <div className="font-display text-3xl font-semibold tracking-tight text-white lg:text-[1.7rem]">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm leading-7 text-slate-300 lg:leading-6">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const signalCards = [
    {
      label: "Cost Efficiency",
      value: "Up to 10x lower cost",
      accent: "bg-cyan-300",
    },
    {
      label: "Workload Model",
      value: "Concurrent workloads",
      accent: "bg-sky-400",
    },
    {
      label: "Delivery Layer",
      value: "Secure private AI APIs",
      accent: "bg-blue-400",
    },
  ] as const;

  return (
    <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
      <div className="hero-glow absolute left-8 top-8 h-28 w-28 rounded-full bg-cyan-400/24" />
      <div className="hero-glow absolute bottom-8 right-0 h-36 w-36 rounded-full bg-blue-500/24" />

      <div className="glass-panel surface-ring relative overflow-hidden rounded-[2rem] p-5 lg:p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_28%)]" />
        <div className="dot-grid absolute right-4 top-4 h-20 w-20 rounded-full" />
        <div className="spin-slow absolute left-[62%] top-[54%] h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/12" />
        <div className="absolute left-[62%] top-[54%] h-[154px] w-[154px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/18" />

        <div className="relative space-y-4 lg:space-y-3.5">
          <div className="grid gap-3 sm:grid-cols-2 lg:gap-2.5">
            <div className="flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/6 px-4 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-slate-200">
              Rack-to-API Deployment
            </div>
            <div className="flex h-10 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-100">
              Single Rack AI Stack
            </div>
          </div>

          <div className="space-y-3 lg:space-y-2.5">
            <div className="text-xs uppercase tracking-[0.28em] text-slate-500">
              AI Infrastructure Blueprint
            </div>
            <h2 className="max-w-[11ch] font-display text-[2rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-[2.2rem] lg:text-[1.9rem]">
              Deploy, train, and serve from one optimized platform.
            </h2>
            <p className="max-w-[34rem] text-sm leading-6 text-slate-300">
              Compact on-premise systems for model training, fine-tuning,
              inferencing, and secure private AI delivery.
            </p>
          </div>

          <div className="grid gap-2.5 md:grid-cols-3">
            {signalCards.map((item, index) => (
              <div
                key={item.label}
                className={`section-card flex min-h-[82px] flex-col justify-between rounded-[1.15rem] border px-3.5 py-3.5 ${
                  index === 2
                    ? "border-cyan-300/16 bg-cyan-300/8"
                    : "border-white/8 bg-slate-950/45"
                }`}
              >
                <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-slate-500">
                  <span className={`h-2.5 w-2.5 rounded-full ${item.accent}`} />
                  {item.label}
                </div>
                <div className="mt-2 text-sm font-medium leading-6 text-slate-100">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2">
            {[
              "Private data control by design",
              "Scalable enterprise deployment",
            ].map((item) => (
              <div
                key={item}
                className="section-card min-h-[74px] rounded-[1.15rem] border border-white/8 bg-slate-950/45 px-4 py-3.5 text-sm font-medium leading-6 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2">
            <div className="section-card min-h-[96px] rounded-[1.3rem] border border-white/8 bg-white/5 p-4">
              <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Deployment Model
              </div>
              <div className="mt-2.5 text-[1.05rem] font-semibold leading-7 text-white">
                Hardware, orchestration, and API access
              </div>
            </div>
            <div className="section-card min-h-[96px] rounded-[1.3rem] border border-cyan-300/14 bg-cyan-300/8 p-4">
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">
                Best Fit
              </div>
              <div className="mt-2.5 text-[1.05rem] font-semibold leading-7 text-white">
                Enterprises, AI labs, institutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

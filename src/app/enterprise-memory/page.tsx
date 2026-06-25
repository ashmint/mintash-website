import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Cpu,
  Database,
  MemoryStick,
  ServerCog,
} from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import {
  enterpriseMemorySeries,
  type EnterpriseMemoryProduct,
  type EnterpriseMemorySeries,
} from "@/lib/enterprise-memory";
import { miphiLogo } from "@/lib/assets";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Enterprise Memory Portfolio",
  description:
    "Explore MiPhi enterprise SSD families available through Mintash Technologies, including Performance X-Series, Data Center D-Series, SATA S-Series, and Boot Drive B-Series products.",
  alternates: {
    canonical: "/enterprise-memory",
  },
};

const portfolioStats = [
  {
    label: "Enterprise SSD Families",
    value: "4",
  },
  {
    label: "Capacity Range",
    value: "480 GB to 122.88 TB",
  },
  {
    label: "Interfaces",
    value: "PCIe Gen5, PCIe Gen4, SATA III",
  },
] as const;

const portfolioSources = enterpriseMemorySeries.map((series) => ({
  label: series.eyebrow,
  href: series.sourceUrl,
}));

export default function EnterpriseMemoryPage() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-background">
      <PortfolioAtmosphere />
      <Navbar />

      <main className="relative z-10">
        <section className="px-6 pb-16 pt-14 sm:px-8 lg:px-10 lg:pb-20 lg:pt-16">
          <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <Reveal className="inline-flex items-center gap-3 rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100/80">
                <BadgeCheck className="h-4 w-4 text-cyan-200" />
                Enterprise Memory Portfolio
                <Image
                  src={miphiLogo}
                  alt="MiPhi logo"
                  width={58}
                  height={18}
                  className="h-auto w-auto object-contain"
                />
              </Reveal>

              <Reveal delay={0.08} className="mt-7">
                <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-[5.4rem]">
                  Enterprise SSDs for{" "}
                  <span className="text-gradient">enterprise infrastructure.</span>
                </h1>
              </Reveal>

              <Reveal
                delay={0.14}
                className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
              >
                A curated MiPhi enterprise memory lineup for high-performance
                application servers, read-intensive data centers, SATA upgrades,
                and reliable boot-drive deployments.
              </Reveal>

              <Reveal delay={0.2} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#portfolio" variant="primary">
                  View Portfolio
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/#ecosystem" variant="secondary">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Homepage
                </ButtonLink>
              </Reveal>
            </div>

            <Reveal delay={0.16} amount={0.08}>
              <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_12%_70%,rgba(99,102,241,0.14),transparent_34%)]" />
                <div className="relative grid gap-3 sm:grid-cols-2">
                  {enterpriseMemorySeries.map((series) => (
                    <a
                      key={series.slug}
                      href={`#${series.slug}`}
                      className="group overflow-hidden rounded-[1.4rem] border border-white/8 bg-slate-950/45 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/22"
                    >
                      <ProductImageStage series={series} compact />
                      <div className="mt-4 text-xs uppercase tracking-[0.22em] text-cyan-100/70">
                        {series.eyebrow}
                      </div>
                      <div className="mt-1 font-display text-xl font-semibold tracking-tight text-white">
                        {series.title}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
          <div className="mx-auto grid max-w-[1200px] gap-4 md:grid-cols-3">
            {portfolioStats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.08 * index}>
                <div className="glass-panel section-card h-full rounded-[1.5rem] px-5 py-6">
                  <div className="font-display text-3xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm leading-7 text-slate-300">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="portfolio"
          className="scroll-mt-28 px-6 py-12 sm:px-8 lg:px-10 lg:py-20"
        >
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/70">
                Portfolio
              </div>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Four enterprise memory families for different infrastructure roles.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Product descriptions, specifications, and imagery are drawn from
                MiPhi&apos;s official enterprise product pages and presented here
                for Mintash deployment conversations.
              </p>
            </Reveal>

            <div className="mt-12 space-y-8">
              {enterpriseMemorySeries.map((series, index) => (
                <Reveal key={series.slug} delay={0.08 * index} amount={0.05}>
                  <article
                    id={series.slug}
                    className="glass-panel scroll-mt-32 overflow-hidden rounded-[2rem]"
                  >
                    <div className="relative grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
                      <div className="relative border-b border-white/8 bg-slate-950/40 p-5 lg:order-2 lg:border-b-0 lg:border-l">
                        <div className={`absolute inset-0 bg-gradient-to-br ${series.tone}`} />
                        <ProductImageStage series={series} className="relative lg:sticky lg:top-28" />
                      </div>

                      <div className="p-6 sm:p-8 lg:order-1 lg:p-8">
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100/80">
                            {series.eyebrow}
                          </div>
                          <a
                            href={series.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-300/24 hover:text-white"
                          >
                            OEM source
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        </div>

                        <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                          {series.title}
                        </h3>
                        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                          {series.summary}
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                          {series.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className="rounded-[1.1rem] border border-white/8 bg-slate-950/45 px-4 py-3 text-sm text-slate-200"
                            >
                              {highlight}
                            </div>
                          ))}
                        </div>

                        <div
                          className={cn(
                            "mt-7 grid gap-4 xl:hidden",
                            series.products.length > 1 && "lg:grid-cols-2",
                          )}
                        >
                          {series.products.map((product) => (
                            <div
                              key={product.name}
                              className="rounded-[1.35rem] border border-white/8 bg-slate-950/45 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:p-5"
                            >
                              <div className="flex flex-wrap items-start justify-between gap-4">
                                <div>
                                  <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100/70">
                                    <MemoryStick className="h-4 w-4" />
                                    {product.name}
                                  </div>
                                  <h4 className="mt-3 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                                    {product.title}
                                  </h4>
                                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                                    {product.description}
                                  </p>
                                </div>
                              </div>

                              <dl className="mt-5 grid gap-2 sm:grid-cols-2">
                                {product.specs.map((spec) => (
                                  <div
                                    key={`${product.name}-${spec.label}`}
                                    className="rounded-[0.9rem] border border-white/8 bg-white/[0.035] px-3.5 py-3"
                                  >
                                    <dt className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
                                      {spec.label}
                                    </dt>
                                    <dd className="mt-1.5 text-sm font-medium leading-6 text-slate-100">
                                      {spec.value}
                                    </dd>
                                  </div>
                                ))}
                              </dl>
                            </div>
                          ))}
                        </div>
                        <ProductComparisonRows products={series.products} />
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-12 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="glass-panel relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-8 lg:px-10">
              <div className="hero-glow absolute -left-12 top-10 h-44 w-44 rounded-full bg-cyan-400/20" />
              <div className="hero-glow absolute right-8 top-0 h-48 w-48 rounded-full bg-blue-500/16" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div>
                  <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100/80">
                    Deployment Fit
                  </div>
                  <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Pair the right memory layer with your enterprise infrastructure plan.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                    Mintash can help scope storage, cache, boot-drive, and data
                    movement requirements alongside on-premise systems and
                    enterprise deployments.
                  </p>
                </div>
                <div className="grid gap-3">
                  {[
                    { icon: ServerCog, text: "Data center and enterprise server refreshes" },
                    { icon: Database, text: "Enterprise data, cache, and application storage" },
                    { icon: Cpu, text: "Rack-level architecture and deployment planning" },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.text}
                        className="flex items-center gap-3 rounded-[1.25rem] border border-white/8 bg-slate-950/45 px-4 py-4 text-sm font-medium text-slate-200"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/18 bg-cyan-300/8 text-cyan-100">
                          <Icon className="h-4 w-4" />
                        </span>
                        {item.text}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6 pb-18 sm:px-8 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.035] px-5 py-5 text-sm leading-7 text-slate-400">
              OEM source pages:{" "}
              {portfolioSources.map((source, index) => (
                <span key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-100 transition-colors hover:text-white"
                  >
                    {source.label}
                  </a>
                  {index < portfolioSources.length - 1 ? ", " : "."}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ProductImageStage({
  series,
  compact = false,
  className,
}: {
  series: EnterpriseMemorySeries;
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative isolate flex items-center justify-center overflow-hidden rounded-[1.35rem] border border-cyan-300/12 bg-slate-950/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]",
        compact
          ? "aspect-[1.14] p-4"
          : "min-h-[250px] p-5 sm:min-h-[300px] lg:min-h-[380px]",
        className,
      )}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${series.tone}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.22),transparent_48%),linear-gradient(180deg,rgba(15,23,42,0.12),rgba(2,6,23,0.72))]" />
      <div
        className={cn(
          "hero-glow absolute rounded-full bg-cyan-300/24 blur-3xl",
          compact ? "h-28 w-28" : "h-56 w-56",
        )}
      />
      <div className="absolute inset-x-8 bottom-8 h-12 rounded-full bg-cyan-200/16 blur-2xl" />
      <Image
        src={series.image}
        alt={series.imageAlt}
        fill
        placeholder="blur"
        sizes={compact ? "(max-width: 768px) 45vw, 250px" : "(max-width: 1024px) 100vw, 360px"}
        className={cn(
          "relative z-10 object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.28)] transition-transform duration-500",
          compact ? "p-3 group-hover:scale-105" : "p-4 sm:p-6",
        )}
      />
    </div>
  );
}

function ProductComparisonRows({
  products,
}: {
  products: EnterpriseMemoryProduct[];
}) {
  return (
    <div className="mt-7 hidden gap-3 xl:grid">
      {products.map((product) => (
        <div
          key={product.name}
          className="rounded-[1.25rem] border border-white/8 bg-slate-950/45 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
        >
          <div className="grid gap-4 xl:grid-cols-[minmax(190px,0.55fr)_minmax(0,1.45fr)]">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-100/70">
                <MemoryStick className="h-4 w-4" />
                {product.name}
              </div>
              <h4 className="mt-3 font-display text-lg font-semibold tracking-tight text-white">
                {product.title}
              </h4>
              <p className="mt-2 text-xs leading-6 text-slate-400">
                {product.description}
              </p>
            </div>

            <dl className="grid gap-2 md:grid-cols-3 2xl:grid-cols-4">
              {product.specs.map((spec) => (
                <div
                  key={`${product.name}-${spec.label}`}
                  className="rounded-[0.85rem] border border-white/8 bg-white/[0.035] px-3 py-2.5"
                >
                  <dt className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-500">
                    {spec.label}
                  </dt>
                  <dd className="mt-1 text-xs font-medium leading-5 text-slate-100">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      ))}
    </div>
  );
}

function PortfolioAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[860px] bg-[radial-gradient(circle_at_78%_18%,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_16%_24%,rgba(59,130,246,0.14),transparent_34%),linear-gradient(180deg,#03050d_0%,rgba(3,5,13,0.72)_72%,rgba(3,5,13,0)_100%)]" />
      <div className="absolute left-[-18rem] top-[920px] h-[620px] w-[620px] rounded-full bg-cyan-400/8 blur-3xl" />
      <div className="absolute right-[-16rem] top-[1550px] h-[700px] w-[700px] rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute left-[20%] top-[2600px] h-[560px] w-[560px] rounded-full bg-sky-400/8 blur-3xl" />
    </div>
  );
}

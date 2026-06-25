import { CalendarClock, Mail, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

export function CtaSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 px-6 pb-18 pt-8 sm:px-8 lg:px-10 lg:pb-24"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Final CTA section */}
        <Reveal className="glass-panel relative overflow-hidden rounded-[2.25rem] px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
          <div className="hero-glow absolute -left-12 top-8 h-40 w-40 rounded-full bg-cyan-400/24" />
          <div className="hero-glow absolute right-6 top-0 h-48 w-48 rounded-full bg-blue-500/18" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.26em] text-cyan-100/80">
                Start Your AI Journey Today
              </div>
              <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Build the right AI foundation before infrastructure becomes the
                bottleneck.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                Whether you&apos;re building an AI lab, deploying enterprise
                models, or exploring on-premise AI, Mintash Technologies provides
                the foundation you need.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/#contact-form" variant="primary">
                  Get in Touch
                </ButtonLink>
              </div>
            </div>

            <div id="contact-details" className="grid gap-4">
              <div className="rounded-[1.5rem] border border-white/8 bg-slate-950/45 p-5">
                <div className="flex items-center gap-3 text-white">
                  <Mail className="h-5 w-5 text-cyan-200" />
                  <span className="font-medium">Email</span>
                </div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-3 block text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="rounded-[1.5rem] border border-white/8 bg-slate-950/45 p-5">
                <div className="flex items-center gap-3 text-white">
                  <PhoneCall className="h-5 w-5 text-cyan-200" />
                  <span className="font-medium">Phone</span>
                </div>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="mt-3 block text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="rounded-[1.5rem] border border-cyan-300/14 bg-cyan-300/6 p-5">
                <div className="flex items-center gap-3 text-white">
                  <CalendarClock className="h-5 w-5 text-cyan-200" />
                  <span className="font-medium">Engagement Model</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Discovery call, infrastructure scoping, deployment plan, and
                  rollout support from rack provisioning to API readiness.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

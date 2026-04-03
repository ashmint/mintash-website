import { Mail, MapPin, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "@/components/ui/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";

export function ContactFormSection() {
  return (
    <section
      id="contact-form"
      className="scroll-mt-28 px-6 pb-18 pt-8 sm:px-8 lg:px-10 lg:pb-24 lg:pt-12"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Contact form section */}
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="space-y-6">
            <SectionIntro
              eyebrow="Get in Touch"
              title="Tell us what you're building"
              description="Share your AI infrastructure goals and Mintash will follow up with the right solution path for your team."
            />

            <Reveal delay={0.08} className="glass-panel rounded-[1.75rem] p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-cyan-200" />
                  <div>
                    <div className="text-sm font-medium text-white">Email</div>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="mt-1 block text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PhoneCall className="mt-0.5 h-5 w-5 text-cyan-200" />
                  <div>
                    <div className="text-sm font-medium text-white">Phone</div>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                      className="mt-1 block text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-cyan-200" />
                  <div>
                    <div className="text-sm font-medium text-white">Engagement</div>
                    <p className="mt-1 text-sm leading-7 text-slate-300">
                      Infrastructure scoping, deployment planning, and solution
                      guidance for enterprises, institutions, and AI labs.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

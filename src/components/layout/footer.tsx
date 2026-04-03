import { ArrowUpRight, Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import { mintashLogo } from "@/lib/assets";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";

export function Footer() {
  return (
    <footer className="px-6 pb-10 pt-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="glass-panel rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl">
                  <Image
                    src={mintashLogo}
                    alt="Mintash Technologies logo"
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-display text-xl font-semibold tracking-tight text-white">
                    Mintash Technologies
                  </div>
                  <div className="text-sm text-slate-400">
                    Affordable AI. Scalable Innovation.
                  </div>
                </div>
              </div>
              <p className="max-w-md text-sm leading-7 text-slate-300">
                Official Miphi partner delivering affordable AI infrastructure,
                on-premise AI solutions, and AI lab infrastructure for modern
                organizations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-sm font-medium uppercase tracking-[0.26em] text-slate-500">
                Quick Links
              </div>
              <div className="grid gap-3 text-sm text-slate-300">
                {siteConfig.navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 text-slate-500" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm font-medium uppercase tracking-[0.26em] text-slate-500">
                Contact
              </div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-cyan-300" />
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
              >
                <PhoneCall className="h-4 w-4 text-cyan-300" />
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/8 pt-5 text-xs text-slate-500">
            © {new Date().getFullYear()} Mintash Technologies. All rights
            reserved.
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

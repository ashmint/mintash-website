"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { mintashLogo } from "@/lib/assets";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pb-2 pt-4 [background:linear-gradient(180deg,rgba(3,5,13,0.72)_0%,rgba(3,5,13,0.28)_62%,transparent_100%)]">
      <div
        className={cn(
          "mx-auto flex max-w-[1200px] items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-5",
          isScrolled
            ? "border-cyan-100/14 bg-slate-950/66 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-2xl"
            : "border-cyan-100/10 bg-slate-950/24 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-2xl",
        )}
      >
        <Link href="/#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl">
            <Image
              src={mintashLogo}
              alt="Mintash Technologies logo"
              width={44}
              height={44}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-semibold tracking-tight text-white sm:text-base">
              Mintash Technologies
            </div>
            <div className="text-xs text-slate-400">
              Official Partner of MiPhi Semiconductors
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/#contact-form" variant="secondary">
            Get in Touch
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10 lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 max-w-[1200px] lg:hidden"
          >
            <div className="glass-panel rounded-[1.75rem] px-5 py-5">
              <nav className="flex flex-col gap-4">
                {siteConfig.navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-2xl border border-white/6 bg-white/4 px-4 py-3 text-sm text-slate-200 transition-colors hover:border-cyan-300/20 hover:bg-white/[0.08] hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-4">
                <ButtonLink href="/#contact-form" variant="primary" className="w-full">
                  Get in Touch
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

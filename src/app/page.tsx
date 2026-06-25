import Image from "next/image";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { ContactFormSection } from "@/components/sections/contact-form-section";
import { CtaSection } from "@/components/sections/cta-section";
import { EcosystemSection } from "@/components/sections/ecosystem-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { WhyMintashSection } from "@/components/sections/why-mintash-section";
import { datacenterHeroImage } from "@/lib/assets";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      slogan: "Democratizing AI for Everyone",
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      knowsAbout: siteConfig.keywords,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Affordable On-Premise AI Infrastructure",
      serviceType: "AI infrastructure and AI lab deployment",
      description:
        "Mintash Technologies delivers affordable AI infrastructure, on-premise AI solutions, AI server solutions, and AI lab infrastructure as an official Miphi partner.",
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
      },
      areaServed: "Global",
    },
  ];

  return (
    <div className="relative isolate overflow-x-hidden bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <LandingAtmosphere />
      <PageColorFlow />

      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Solutions Section */}
        <SolutionsSection />

        {/* Miphi Ecosystem Section */}
        <EcosystemSection />

        {/* Why Mintash Section */}
        <WhyMintashSection />

        {/* Use Cases Section */}
        <UseCasesSection />

        {/* Value Proposition Section */}
        <ComparisonSection />

        {/* CTA Section */}
        <CtaSection />

        {/* Contact Form Section */}
        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
}

function LandingAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[1180px] overflow-hidden"
    >
      <Image
        src={datacenterHeroImage}
        alt=""
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-[68%_top] opacity-[0.42] [filter:saturate(1.08)_contrast(1.04)] sm:opacity-[0.5] lg:opacity-[0.58]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,5,13,0.99)_0%,rgba(3,5,13,0.92)_32%,rgba(3,5,13,0.68)_62%,rgba(3,5,13,0.38)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(34,211,238,0.14),transparent_34%),radial-gradient(circle_at_18%_48%,rgba(37,99,235,0.12),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[560px] bg-[linear-gradient(180deg,rgba(3,5,13,0)_0%,rgba(3,5,13,0.54)_36%,#03050d_76%,#03050d_100%)]" />
    </div>
  );
}

function PageColorFlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 top-[860px] z-0 overflow-hidden opacity-95"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,13,0)_0%,rgba(5,14,32,0.18)_12%,rgba(4,20,37,0.3)_30%,rgba(6,14,42,0.32)_52%,rgba(3,19,28,0.28)_74%,rgba(3,5,13,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_82%_12%,rgba(14,165,233,0.16),transparent_34%),radial-gradient(ellipse_at_14%_26%,rgba(45,212,191,0.12),transparent_32%),radial-gradient(ellipse_at_76%_54%,rgba(99,102,241,0.16),transparent_38%),radial-gradient(ellipse_at_18%_78%,rgba(34,211,238,0.1),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#03050d_0%,transparent_10%,transparent_88%,rgba(3,5,13,0.72)_100%)]" />
    </div>
  );
}

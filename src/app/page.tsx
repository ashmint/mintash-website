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
    <div className="relative isolate overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Navbar />

      <main>
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

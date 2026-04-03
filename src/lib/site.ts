export const siteConfig = {
  name: "Mintash Technologies",
  title:
    "Mintash Technologies | Affordable AI Infrastructure & On-Premise AI Solutions",
  description:
    "Mintash Technologies is an official Miphi partner delivering affordable AI infrastructure, on-premise AI solutions, AI server solutions, and AI lab infrastructure for enterprises, institutions, and innovators.",
  url: "https://www.mintashtechnologies.com",
  partner: "Official Partner of Miphi",
  tagline: "Affordable AI. Scalable Innovation.",
  keywords: [
    "Affordable AI infrastructure",
    "On-premise AI solutions",
    "AI server solutions",
    "Miphi partner",
    "AI lab infrastructure",
  ],
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Why Mintash", href: "#why-mintash" },
    { label: "Contact", href: "#contact-form" },
  ],
  contact: {
    email: "mail@mintash.in",
    phone: "+91 9977116522",
  },
} as const;

export const heroStats = [
  {
    value: "Up to 10x",
    label: "Cost reduction compared to traditional multi-GPU AI deployments.",
  },
  {
    value: "On-Premise",
    label: "Private AI deployment with full data control and infrastructure ownership.",
  },
  {
    value: "Concurrent",
    label: "Training, fine-tuning, and inference running side by side with high efficiency.",
  },
] as const;

export const aboutHighlights = [
  {
    title: "Up to 10x cost reduction",
    description:
      "Lower CAPEX and OPEX with infrastructure designed to do more with less hardware complexity.",
  },
  {
    title: "On-premise AI deployment",
    description:
      "Keep data, workloads, and model access inside your own environment without cloud dependency.",
  },
  {
    title: "Concurrent workloads",
    description:
      "Run training, fine-tuning, and inference together without the sprawl of oversized GPU clusters.",
  },
  {
    title: "Enterprise-grade performance",
    description:
      "Deliver production-ready AI capability with deployment quality built for institutions and enterprises.",
  },
] as const;

export const solutions = [
  {
    title: "On-Premise AI Infrastructure",
    description:
      "Full AI stack deployed locally with privacy, control, and performance built in from day one.",
    bullets: [
      "Full AI stack deployed locally",
      "Complete data control and privacy",
      "Optimized for large-scale workloads",
    ],
  },
  {
    title: "Rack-to-API Solutions",
    description:
      "A streamlined path from hardware deployment to usable APIs for teams that need fast implementation.",
    bullets: [
      "Hardware to API pipeline",
      "Plug-and-play AI infrastructure",
      "Developer-friendly environments",
    ],
  },
  {
    title: "AI Labs & Enterprise Deployment",
    description:
      "Scalable multi-user environments designed for research, institutional learning, and enterprise delivery.",
    bullets: [
      "Multi-user concurrent environments",
      "Ideal for institutions and enterprises",
      "Containerized workloads",
    ],
  },
] as const;

export const ecosystem = [
  {
    eyebrow: "Miphi Platform Layer",
    title: "AiDaptiv",
    description:
      "AiDaptiv is a next-generation AI platform that enables efficient training, fine-tuning, and inference of large-scale models within a highly optimized infrastructure. It removes the need for massive GPU clusters by enabling multiple workloads to run concurrently with maximum efficiency.",
    bullets: [
      "Supports large-scale AI models (LLMs)",
      "Concurrent training, fine-tuning, and inferencing",
      "Optimized compute efficiency",
      "Reduced hardware dependency",
    ],
  },
  {
    eyebrow: "Advanced Memory Architecture",
    title: "Enterprise Memory",
    description:
      "MiPhi's Enterprise Memory portfolio includes revolutionary enterprise SSD products built for high endurance, high performance, and sustained data movement. From customizable high-endurance SATA SSDs to PCIe Gen5 NVMe drives with low latency and strong QoS, these products support far more than storage for AI training pipelines.",
    bullets: [
      "High-endurance enterprise SSDs for sustained cache and data workloads",
      "High-performance SATA and PCIe Gen5 NVMe options with low latency",
      "Supports aiDaptiv cache as an extended memory layer for active AI workloads",
      "Improves scalability without relying only on larger GPU memory pools",
    ],
  },
] as const;

export const whyMintash = [
  "Official Miphi Partner",
  "Up to 10x cost savings",
  "On-premise-first approach",
  "Scalable architecture",
  "Enterprise-grade deployment",
  "End-to-end support",
] as const;

export const useCases = [
  {
    label: "Private AI",
    title: "Enterprises",
    description:
      "Deploy private AI systems, automate workflows, and run LLMs securely.",
  },
  {
    label: "AI Labs",
    title: "Educational Institutions",
    description:
      "Build AI labs with real-world model training capabilities.",
  },
  {
    label: "High Performance",
    title: "R&D Teams",
    description:
      "Run simulations, experiments, and advanced AI workloads.",
  },
] as const;

export const comparison = {
  traditional: [
    "Multiple GPUs required",
    "High cost (CAPEX + OPEX)",
    "Complex scaling",
    "High power consumption",
  ],
  mintash: [
    "Single rack deployment",
    "Up to 1/10th cost",
    "Simplified architecture",
    "Energy-efficient",
  ],
} as const;

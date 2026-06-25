import type { StaticImageData } from "next/image";
import {
  enterpriseBSeriesImage,
  enterpriseDSeriesImage,
  enterpriseSSeriesImage,
  enterpriseXSeriesImage,
} from "@/lib/assets";

export type EnterpriseMemoryProduct = {
  name: string;
  title: string;
  description: string;
  specs: Array<{
    label: string;
    value: string;
  }>;
};

export type EnterpriseMemorySeries = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  image: StaticImageData;
  imageAlt: string;
  sourceUrl: string;
  tone: string;
  highlights: string[];
  products: EnterpriseMemoryProduct[];
};

export const enterpriseMemorySeries: EnterpriseMemorySeries[] = [
  {
    slug: "x-series",
    eyebrow: "Performance X-Series",
    title: "Extreme write-intensity storage",
    summary:
      "MiPhi's highest-performing enterprise SSD family, designed for extreme write intensity, large capacity options, and modern data center form factors.",
    image: enterpriseXSeriesImage,
    imageAlt: "MiPhi X100P and X200P enterprise SSDs",
    sourceUrl: "https://www.miphi.in/enterprise/x-series.html",
    tone: "from-cyan-300/18 via-blue-500/10 to-transparent",
    highlights: [
      "PCIe Gen5 and Gen4 options",
      "Up to 30.72 TB",
      "1 or 3 DWPD",
      "Up to 14.8 GB/s sequential read",
    ],
    products: [
      {
        name: "X200",
        title: "Feature-rich PCIe Gen5 enterprise storage",
        description:
          "Built for demanding data center requirements with single-port and dual-port modes across U.2 2.5-inch and E3.S form factors.",
        specs: [
          { label: "Form factor", value: "U.2 or E3.S" },
          { label: "Interface", value: "PCIe Gen5x4 Dual Port" },
          { label: "DWPD", value: "1 or 3 DWPD" },
          { label: "Capacity", value: "1.6 TB to 30.72 TB" },
          { label: "Power", value: "Active 25W, Idle 5W" },
          { label: "Sequential read", value: "Up to 14.8 GB/s" },
          { label: "Sequential write", value: "Up to 8.7 GB/s" },
          { label: "Random read", value: "Up to 3,000 KIOPs" },
          { label: "Random write", value: "Up to 900 KIOPs" },
        ],
      },
      {
        name: "X100",
        title: "Enterprise-class PCIe Gen4x4 SSD",
        description:
          "A high-performance, efficient platform for large capacities, with security-focused architecture and customization support.",
        specs: [
          { label: "Form factor", value: "U.3" },
          { label: "Interface", value: "PCIe Gen4x4 Dual Port" },
          { label: "DWPD", value: "1 or 3 DWPD" },
          { label: "Capacity", value: "1.6 TB to 30.72 TB" },
          { label: "Power", value: "Active 21W, Idle 6W" },
          { label: "Sequential read", value: "Up to 7.4 GB/s" },
          { label: "Sequential write", value: "Up to 6.9 GB/s" },
          { label: "Random read", value: "Up to 1,750 KIOPs" },
          { label: "Random write", value: "Up to 480 KIOPs" },
        ],
      },
    ],
  },
  {
    slug: "d-series",
    eyebrow: "Data Center D-Series",
    title: "Efficient storage for modern data growth",
    summary:
      "Data center SSDs for capacity, performance, and power-conscious deployments across industry-standard and custom server environments.",
    image: enterpriseDSeriesImage,
    imageAlt: "MiPhi D100P and D200E enterprise SSD products",
    sourceUrl: "https://www.miphi.in/enterprise/d-series.html",
    tone: "from-sky-300/16 via-cyan-400/10 to-transparent",
    highlights: [
      "Up to 122.88 TB",
      "PCIe Gen5 and Gen4 options",
      "Up to 14 GB/s sequential read",
      "Read-intensive data center use",
    ],
    products: [
      {
        name: "D200V",
        title: "Ultra-high-capacity PCIe Gen5 data center SSD",
        description:
          "A read-intensive large-capacity SSD positioned as an efficient alternative to traditional cold-storage HDD deployments.",
        specs: [
          { label: "Form factor", value: "U.2, E3.S, or E3.L" },
          { label: "Interface", value: "PCIe Gen5x4 Dual Port" },
          { label: "Capacity", value: "30.72 TB to 122.88 TB" },
          { label: "Power", value: "Active 35W" },
          { label: "Sequential read", value: "Up to 14 GB/s est." },
          { label: "Sequential write", value: "Up to 2.1 GB/s est." },
          { label: "Random read", value: "Up to 3,000 KIOPs 4K est." },
          { label: "Random write", value: "Up to 15.6 KIOPs 16K est." },
        ],
      },
      {
        name: "D100",
        title: "PCIe Gen4 storage for M.2 and E1.S form factors",
        description:
          "Optimized for consistency and Quality of Service across intensive read and write command execution.",
        specs: [
          { label: "Form factor", value: "M.2 2280, M.2 22110, E1.S" },
          { label: "Interface", value: "PCIe Gen4x4 Dual Port" },
          { label: "Capacity", value: "480 GB to 3.84 TB" },
          { label: "Power", value: "Active 11.5W or 13.5W, Idle 3.5W or 4.2W" },
          { label: "Sequential read", value: "Up to 6.0 GB/s or 6.8 GB/s" },
          { label: "Sequential write", value: "Up to 1.8 GB/s or 2.0 GB/s" },
          { label: "Random read", value: "Up to 800 or 900 KIOPs" },
          { label: "Random write", value: "Up to 60 or 70 KIOPs" },
        ],
      },
    ],
  },
  {
    slug: "s-series",
    eyebrow: "SATA S-Series",
    title: "High-endurance SATA for legacy servers",
    summary:
      "High-performance SATA SSDs designed to extend existing server infrastructure with strong capacity and endurance choices.",
    image: enterpriseSSeriesImage,
    imageAlt: "MiPhi SA50 Series enterprise SATA SSD products",
    sourceUrl: "https://www.miphi.in/enterprise/s-series.html",
    tone: "from-teal-300/16 via-cyan-500/10 to-transparent",
    highlights: [
      "SATA III interface",
      "Up to 15.36 TB",
      "Up to 3 DWPD",
      "5.4W active power",
    ],
    products: [
      {
        name: "SA50",
        title: "High-endurance SATA SSD for demanding enterprise applications",
        description:
          "A SATA SSD platform spanning capacity-oriented and endurance-oriented variants for application and cold-storage needs.",
        specs: [
          { label: "Form factor", value: "2.5-inch" },
          { label: "Interface", value: "SATA III" },
          { label: "Capacity", value: "480 GB to 15.36 TB" },
          { label: "Power", value: "Active 5.4W, Idle 1.9W" },
          { label: "Sequential read", value: "Up to 530 MB/s" },
          { label: "Sequential write", value: "Up to 500 MB/s" },
          { label: "Random read", value: "Up to 98 KIOPs" },
          { label: "Random write", value: "Up to 77 KIOPs" },
        ],
      },
    ],
  },
  {
    slug: "b-series",
    eyebrow: "Boot Drive B-Series",
    title: "Reliable boot drives for rack-scale environments",
    summary:
      "Server and workstation boot drives built for reliability, I/O consistency, and responsive system performance.",
    image: enterpriseBSeriesImage,
    imageAlt: "MiPhi B100P boot drive SSD models",
    sourceUrl: "https://www.miphi.in/enterprise/b-series.html",
    tone: "from-blue-300/16 via-indigo-400/12 to-transparent",
    highlights: [
      "M.2 and SATA boot-drive options",
      "PCIe Gen5x4 and SATA III",
      "Up to 5.0 GB/s sequential read",
      "Low active power options",
    ],
    products: [
      {
        name: "B100",
        title: "M.2 boot drive for servers and workstations",
        description:
          "An M.2 2280 enterprise SSD with fast PCIe speeds, modern 3D NAND, and a focus on reliability and efficiency.",
        specs: [
          { label: "Form factor", value: "M.2 2280" },
          { label: "Interface", value: "PCIe Gen5x4 Dual Port" },
          { label: "Capacity", value: "480 GB to 960 GB" },
          { label: "Power", value: "Active 8.5W, Idle 3.5W" },
          { label: "Sequential read", value: "Up to 5.0 GB/s" },
          { label: "Sequential write", value: "Up to 0.7 GB/s" },
          { label: "Random read", value: "Up to 450 KIOPs" },
          { label: "Random write", value: "Up to 30 KIOPs" },
        ],
      },
      {
        name: "BA50",
        title: "SATA boot drive for legacy systems and upgrades",
        description:
          "A purpose-built boot drive for servers and workstations, intended to improve boot times and system responsiveness.",
        specs: [
          { label: "Form factor", value: "M.2 2280, 2.5-inch" },
          { label: "Interface", value: "SATA III" },
          { label: "Capacity", value: "240 GB to 960 TB as listed by MiPhi" },
          { label: "Power", value: "Active 2.8W, Idle 1.3W" },
          { label: "Sequential read", value: "Up to 530 MB/s" },
          { label: "Sequential write", value: "Up to 500 MB/s" },
          { label: "Random read", value: "Up to 98 KIOPs" },
          { label: "Random write", value: "Up to 30 KIOPs" },
        ],
      },
    ],
  },
];

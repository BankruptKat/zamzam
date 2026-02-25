import type { LucideIcon } from "lucide-react";
import {
  BrickWall,
  Building2,
  Hammer,
  House,
  Paintbrush,
  MountainSnow,
} from "lucide-react";

export type ServiceItem = {
  title: string;
  slug: string;
  shortDescription: string;
  included: string[];
  whyItMatters: string;
  ctaLabel: string;
  icon: LucideIcon;
};

export const services: ServiceItem[] = [
  {
    title: "Driveway Installation & Repair",
    slug: "driveways",
    shortDescription:
      "Concrete and masonry driveways built for durability, drainage, and long-term curb appeal.",
    included: [
      "New driveway installation",
      "Driveway resurfacing and patching",
      "Crack and edge repairs",
      "Surface finishing for traction and clean appearance",
    ],
    whyItMatters:
      "A properly built driveway resists weather damage and protects your property's value.",
    ctaLabel: "Call Now",
    icon: House,
  },
  {
    title: "Concrete Work",
    slug: "concrete-work",
    shortDescription:
      "Professional concrete solutions for exterior structures and high-traffic areas.",
    included: [
      "Concrete pours and leveling",
      "Repair of damaged sections",
      "Joint and surface restoration",
      "Site preparation and cleanup",
    ],
    whyItMatters:
      "High-quality concrete work prevents early cracking and extends the lifespan of exterior surfaces.",
    ctaLabel: "Request Quote",
    icon: MountainSnow,
  },
  {
    title: "Brick & Block Work",
    slug: "brick-work",
    shortDescription:
      "Strong, neat brick and block construction with attention to alignment, bonding, and finish.",
    included: [
      "Brick and block installation",
      "Mortar joint repair",
      "Brick restoration and replacement",
      "Structural and decorative masonry work",
    ],
    whyItMatters:
      "Solid masonry supports structural integrity while preserving the look of your home.",
    ctaLabel: "Request Quote",
    icon: BrickWall,
  },
  {
    title: "Chimney Repair & Rebuild",
    slug: "chimney-repair",
    shortDescription:
      "Repair cracked or damaged chimneys and restore safe performance with durable reconstruction.",
    included: [
      "Crack and mortar repair",
      "Partial chimney rebuilds",
      "Waterproof sealing",
      "Stability and safety assessment",
    ],
    whyItMatters:
      "Chimney defects can lead to water intrusion and safety hazards if left unaddressed.",
    ctaLabel: "Call Now",
    icon: Building2,
  },
  {
    title: "Masonry Restoration",
    slug: "masonry-restoration",
    shortDescription:
      "Restore aging masonry surfaces with targeted repairs, repointing, and clean architectural finishing.",
    included: [
      "Mortar joint repointing",
      "Brick replacement and patching",
      "Surface cleaning and restoration",
      "Weatherproof finishing and sealing",
    ],
    whyItMatters:
      "Restoration extends structural life while preserving the original look of your masonry exterior.",
    ctaLabel: "Request Quote",
    icon: Paintbrush,
  },
  {
    title: "Stair Block Construction",
    slug: "stair-block-work",
    shortDescription:
      "Durable stair block builds for safe access, strong support, and clean exterior finish.",
    included: [
      "Stair block layout and build",
      "Leveling and reinforcement",
      "Repair and rebuild of damaged stairs",
      "Safe edge and step finishing",
    ],
    whyItMatters:
      "Well-built stairs improve daily safety and stand up to heavy use and weather exposure.",
    ctaLabel: "Request Quote",
    icon: Hammer,
  },
];

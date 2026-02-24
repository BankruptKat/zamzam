import { Hammer, Home, Layers3, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BlurFade } from "@/components/ui/blur-fade";

const features = [
  {
    Icon: Home,
    name: "Driveway Transformation",
    description: "Premium rebuilds with clean edge detailing and durable finishes.",
    href: "/services",
    className: "md:col-span-2 lg:col-span-2",
    background: (
      <BlurFade inView duration={0.55} blur="8px">
        <Image
          src="/pics/service-driveway.webp"
          alt="Driveway installation"
          width={1600}
          height={1100}
          className="h-full w-full object-cover opacity-40"
        />
      </BlurFade>
    ),
  },
  {
    Icon: ShieldCheck,
    name: "Chimney Cap Rebuilds",
    description: "Waterproof caps and mortar restoration for lasting protection.",
    href: "/services",
    className: "md:col-span-2 lg:col-span-1",
    background: (
      <BlurFade inView duration={0.55} blur="8px">
        <Image
          src="/pics/service-cap-rebuild.webp"
          alt="Chimney cap rebuild"
          width={1600}
          height={1100}
          className="h-full w-full object-cover opacity-35"
        />
      </BlurFade>
    ),
  },
  {
    Icon: Layers3,
    name: "Brick & Block Craftsmanship",
    description: "High-precision work for resilient exterior architecture.",
    href: "/services",
    className: "md:col-span-1 lg:col-span-1",
    background: (
      <BlurFade inView duration={0.55} blur="8px">
        <Image
          src="/pics/service-brick-block.webp"
          alt="Brick and block work"
          width={1600}
          height={1100}
          className="h-full w-full object-cover opacity-35"
        />
      </BlurFade>
    ),
  },
  {
    Icon: Hammer,
    name: "Stair & Structural Masonry",
    description: "Stair construction and structural upgrades with premium materials.",
    href: "/services",
    className: "md:col-span-1 lg:col-span-2",
    background: (
      <BlurFade inView duration={0.55} blur="8px">
        <Image
          src="/pics/service-stair-block.webp"
          alt="Stair block construction"
          width={1600}
          height={1100}
          className="h-full w-full object-cover opacity-35"
        />
      </BlurFade>
    ),
  },
];

export default function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-2">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

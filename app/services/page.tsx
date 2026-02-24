import type { Metadata } from "next";
import Image from "next/image";
import CtaButton from "@/components/cta-button";
import SectionReveal from "@/components/section-reveal";
import { BlurFade } from "@/components/ui/blur-fade";
import { services } from "@/data/services";
import { phoneHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore masonry and chimney services: driveways, concrete, brick work, chimney cap rebuilds, removals, and roof repairs.",
  alternates: {
    canonical: "/services",
  },
};

const serviceImages: Record<string, { src: string; alt: string }> = {
  driveways: {
    src: "/pics/service-driveway.webp",
    alt: "Premium concrete and masonry driveway installation",
  },
  "concrete-work": {
    src: "/pics/service-concrete.webp",
    alt: "Exterior premium concrete workmanship detail",
  },
  "brick-work": {
    src: "/pics/service-brick-block.webp",
    alt: "Brick and block masonry construction close-up",
  },
  "chimney-repair": {
    src: "/pics/service-chimney-repair.webp",
    alt: "Repaired residential chimney masonry",
  },
  "chimney-cap-rebuild": {
    src: "/pics/service-cap-rebuild.webp",
    alt: "Newly rebuilt chimney cap with premium finish",
  },
  "chimney-removal": {
    src: "/pics/service-chimney-removal-roof.webp",
    alt: "Roof repair after chimney removal",
  },
  "stair-block-work": {
    src: "/pics/service-stair-block.webp",
    alt: "Exterior stair block construction at residential property",
  },
};

export default function ServicesPage() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <SectionReveal>
          <h1 className="text-4xl font-semibold text-white md:text-6xl">Our Services</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            Every service is delivered with premium materials, clean site standards, and
            long-term exterior durability.
          </p>
        </SectionReveal>

        <div className="mt-8 space-y-6 md:mt-10">
          {services.map((service) => (
            <SectionReveal key={service.slug}>
              <article className="glass-panel rounded-3xl p-6 md:p-8">
                <BlurFade inView inViewMargin="-80px" duration={0.5} blur="8px">
                  <Image
                    src={serviceImages[service.slug]?.src ?? "/pics/service-concrete.webp"}
                    alt={serviceImages[service.slug]?.alt ?? service.title}
                    width={1600}
                    height={1100}
                    className="mb-5 h-48 w-full rounded-2xl border border-white/10 object-cover md:h-56"
                  />
                </BlurFade>
                <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
                <p className="mt-3 text-base leading-8 text-white/70">{service.shortDescription}</p>

                <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#f2baa0]">
                  What&apos;s Included
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-white/70">
                  {service.included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#f2baa0]">
                  Why It Matters
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{service.whyItMatters}</p>

                <div className="mt-6">
                  <CtaButton
                    href={service.ctaLabel === "Call Now" ? phoneHref : "/contact"}
                    label={service.ctaLabel}
                  />
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

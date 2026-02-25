import type { Metadata } from "next";
import Image from "next/image";
import CtaButton from "@/components/cta-button";
import SectionReveal from "@/components/section-reveal";
import { BlurFade } from "@/components/ui/blur-fade";
import { services } from "@/data/services";
import { phoneHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Architectural masonry and chimney restoration services. Precision driveways, concrete work, brick craftsmanship, and chimney solutions.",
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
  "masonry-restoration": {
    src: "/pics/service-brick-block.webp",
    alt: "Restored masonry wall and repointed brick detail",
  },
  "stair-block-work": {
    src: "/pics/service-stair-block.webp",
    alt: "Exterior stair block construction at residential property",
  },
};

export default function ServicesPage() {
  return (
    <section className="px-4 pb-14 pt-28 md:px-8 md:pb-24 md:pt-32">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <SectionReveal className="mb-12 text-center md:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9b4f34] dark:text-[#f4c3ad]/70">What We Do</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 dark:text-white md:text-6xl">Service Overview</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-white/55">
            Every project begins with precise planning and ends with meticulous execution.
            Premium materials. Architectural standards.
          </p>
        </SectionReveal>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <SectionReveal key={service.slug}>
              <article id={service.slug} className="group glass-panel relative overflow-hidden rounded-2xl transition-all duration-300 hover:border-white/15 hover-lift">
                {/* Image with hover zoom */}
                <div className="relative h-48 overflow-hidden md:h-56">
                  <BlurFade inView inViewMargin="-80px" duration={0.5} blur="8px">
                    <Image
                      src={serviceImages[service.slug]?.src ?? "/pics/service-concrete.webp"}
                      alt={serviceImages[service.slug]?.alt ?? service.title}
                      width={1600}
                      height={1100}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </BlurFade>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent dark:from-[#070b12]/80 dark:to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h2>
                    <span className="text-3xl font-bold text-slate-200 dark:text-white/10">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-white/55">{service.shortDescription}</p>

                  {/* Included items - minimal */}
                  <ul className="mt-4 space-y-1 text-xs text-slate-400 dark:text-white/40">
                    {service.included.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-px w-3 bg-slate-300 dark:bg-white/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        {/* CTA Section */}
        <SectionReveal className="mt-16 text-center md:mt-20">
          <div className="glass-panel mx-auto max-w-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Ready to Begin?</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-white/55">
              Schedule your consultation to discuss your project requirements.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <CtaButton href={phoneHref} label="Request Consultation" />
              <CtaButton href="/contact" label="Start Your Project" variant="secondary" />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

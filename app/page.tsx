import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/components/cta-button";
import ProcessSection from "@/components/process-section";
import SectionReveal from "@/components/section-reveal";
import SignatureStatement from "@/components/signature-statement";
import TestimonialsDemo from "@/components/testimonials-demo";
import { BlurFade } from "@/components/ui/blur-fade";
import ServiceCard from "@/components/service-card";
import { services } from "@/data/services";
import { localBusinessSchema, phoneHref, serviceArea } from "@/lib/site";

export const metadata: Metadata = {
  title: "Precision Masonry & Chimney Restoration",
  description:
    "Architectural masonry and chimney restoration for discerning homeowners. Built for enduring strength.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      {/* Architectural Hero Section */}
      <section className="hero-content relative min-h-[100vh] overflow-hidden">
        {/* Background Image with Cinematic Zoom */}
        <div className="absolute inset-0">
          <Image
            src="/pics/hero-luxury-01.webp"
            alt="Architectural masonry detail"
            width={1600}
            height={1000}
            priority
            className="h-full w-full object-cover hero-image-zoom"
          />
          {/* Multi-layered gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/75 dark:from-[#070b12]/70 dark:via-[#070b12]/40 dark:to-[#070b12]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/40 dark:from-[#070b12]/80 dark:to-[#070b12]/60" />
          {/* Vignette */}
          <div className="absolute inset-0 vignette-overlay" />
          {/* Radial glow behind text */}
          <div className="absolute inset-0 radial-glow" />
          {/* Grain texture */}
          <div className="absolute inset-0 grain-overlay" />
        </div>

        {/* Hero Content - Staggered Animation */}
        <div className="relative z-10 flex min-h-[100vh] items-center px-4 pb-8 pt-24 md:px-8 md:pt-28">
          <div className="mx-auto w-full max-w-6xl text-center md:text-left">
            <BlurFade delay={0.1} duration={1} blur="12px">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#f2baa0] md:text-sm">
                {serviceArea}
              </p>
            </BlurFade>

            <BlurFade delay={0.3} duration={1.2} blur="12px">
              <h1 className="mx-auto mt-6 max-w-4xl text-[2.8rem] font-semibold leading-[0.95] tracking-tight text-neutral-50 md:mx-0 md:text-[5rem] lg:text-[6rem]">
                Precision Masonry
                <br />
                <span className="text-neutral-200">& Chimney Restoration</span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.5} duration={1} blur="12px">
              <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-neutral-200/90 md:mx-0 md:mt-10 md:text-lg">
                Built for enduring strength. Architectural-grade craftsmanship for residential exteriors.
              </p>
            </BlurFade>

            <BlurFade delay={0.7} duration={0.8} blur="8px">
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:mt-12 md:justify-start">
                <CtaButton href={phoneHref} label="Request Consultation" />
                <CtaButton href="/contact" label="Start Your Project" variant="secondary" />
              </div>
            </BlurFade>

            <BlurFade delay={0.9} duration={0.8} blur="8px">
              <p className="mt-6 text-xs text-neutral-300/70 md:mt-8">
                Limited project availability. Premium materials. Meticulous execution.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="px-4 pb-32 pt-24 md:px-8 md:py-32">
        <SectionReveal className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center">
          <div className="flex justify-center">
            <div className="rounded-full border border-slate-300/80 bg-white/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-600 dark:border-white/10 dark:bg-white/4 dark:text-white/70">
              Services
            </div>
          </div>
          <h2 className="mt-4 text-center text-2xl font-semibold text-slate-900 dark:text-white md:text-4xl">Core Services</h2>
          <p className="mt-2 max-w-xl text-center text-base leading-7 text-slate-500 dark:text-white/55">
            Architectural masonry and chimney work for discerning homeowners.
          </p>
        </SectionReveal>

        <div className="mx-auto mt-10 grid w-full max-w-5xl gap-3 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <SectionReveal key={service.slug} className="h-full">
              <ServiceCard
                service={{
                  title: service.title,
                  slug: service.slug,
                  shortDescription: service.shortDescription,
                  included: service.included,
                  whyItMatters: service.whyItMatters,
                  ctaLabel: service.ctaLabel,
                }}
              />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mx-auto mt-12 flex w-full max-w-6xl justify-center">
          <Link href="/services" className="text-sm font-medium text-[#f4c3ad] hover:text-[#ffd3bf] transition-colors">
            View All Services
          </Link>
        </SectionReveal>
      </section>

      {/* Process Section */}
      <ProcessSection />


      {/* Featured Projects - Horizontal Scroll Gallery */}
      <section className="py-24 md:py-32">
        <div className="px-4 md:px-8">
          <SectionReveal className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center">
            <div className="flex justify-center">
              <div className="rounded-full border border-slate-300/80 bg-white/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-600 dark:border-white/10 dark:bg-white/4 dark:text-white/70">
                Portfolio
              </div>
            </div>
            <h2 className="mt-4 text-center text-2xl font-semibold text-slate-900 dark:text-white md:text-4xl">Featured Projects</h2>
            <p className="mt-2 max-w-xl text-center text-base leading-7 text-slate-500 dark:text-white/55">
              Selected transformations with elevated architectural photography.
            </p>
          </SectionReveal>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div className="mt-14 overflow-x-auto scroll-snap-x px-4 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex w-fit max-w-6xl gap-5">
            {[
              {
                title: "Concrete Driveway",
                detail: "Exposed aggregate finish with refined edge detailing",
                image: "/pics/project-featured-01.webp",
                objectPosition: "object-center",
              },
              {
                title: "Chimney Restoration",
                detail: "Refined masonry repair with durable weather sealing",
                image: "/pics/project-featured-02.webp",
                objectPosition: "object-[center_32%]",
              },
              {
                title: "Brick Stair Construction",
                detail: "Structural base with premium surface finish",
                image: "/pics/project-featured-03.webp",
                objectPosition: "object-[center_35%]",
              },
              {
                title: "Exterior Masonry",
                detail: "Full facade restoration with architectural detail",
                image: "/pics/service-brick-block.webp",
                objectPosition: "object-center",
              },
            ].map((project, index) => (
              <article
                key={project.title}
                className="group relative w-[300px] flex-shrink-0 snap-start overflow-hidden rounded-2xl md:w-[360px]"
              >
                <Link href="/services" className="block">
                  {/* Uniform card ratio for consistent project presentation */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1600}
                      height={1100}
                      className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${project.objectPosition}`}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent dark:from-[#070b12]/95 dark:via-[#070b12]/30 dark:to-transparent" />
                  </div>

                  {/* Text content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#f4c3ad]/80 dark:text-[#f4c3ad]/70">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-neutral-50 md:text-2xl">{project.title}</h3>
                    <p className="mt-1 text-sm text-neutral-200/85">{project.detail}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsDemo />

      {/* Signature Statement */}
      <SignatureStatement />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
    </>
  );
}

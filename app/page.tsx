import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BentoDemo from "@/components/bento-demo";
import CtaButton from "@/components/cta-button";
import SectionReveal from "@/components/section-reveal";
import TestimonialsDemo from "@/components/testimonials-demo";
import { BlurFade } from "@/components/ui/blur-fade";
import ServiceCard from "@/components/service-card";
import { services } from "@/data/services";
import { localBusinessSchema, phoneDisplay, phoneHref, serviceArea } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reliable Masonry & Chimney Repairs",
  description:
    "Driveways, concrete work, brick repairs, chimney rebuilds, and chimney removal with roof repair in Victoria and Vancouver Island.",
  alternates: {
    canonical: "/",
  },
};

const reasons = [
  "Licensed & Detail-Driven Team",
  "Precision Craftsmanship Standards",
  "Premium Materials Only",
  "Clear Communication & Scheduling",
  "Clean, Respectful Job Sites",
];

export default function Home() {
  return (
    <>
      <section className="relative px-4 pb-10 pt-6 md:px-8 md:pb-24 md:pt-10">
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10">
          <BlurFade duration={0.6} blur="8px">
            <Image
              src="/pics/hero-luxury-01.webp"
              alt="Luxury masonry and architectural concrete backdrop"
              width={1600}
              height={1000}
              priority
              className="h-[520px] w-full object-cover md:h-[740px]"
            />
          </BlurFade>
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b12]/90 via-[#070b12]/65 to-[#070b12]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(210,122,90,0.26),transparent_42%)]" />

          <div className="absolute inset-0 grid gap-8 px-5 py-6 md:grid-cols-[1.2fr_0.8fr] md:items-end md:p-12">
            <SectionReveal className="self-center">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#f2baa0] md:text-sm">
                Premium Residential Masonry - {serviceArea}
              </p>
              <h1 className="max-w-xl text-[2.45rem] font-semibold leading-[1.02] text-white md:max-w-3xl md:text-7xl">
                Refined Masonry
                <br />
                Crafted for
                <br />
                Luxury Homes
              </h1>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/75 md:mt-6 md:max-w-2xl md:text-lg md:leading-8">
                Driveways, chimney restoration, concrete, and brick work delivered with architectural
                precision and premium finish quality.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 [&>a]:w-full sm:[&>a]:w-auto md:mt-8">
                <CtaButton href={phoneHref} label="Call Now" />
                <CtaButton href="/contact" label="Request Quote" variant="secondary" />
              </div>
            </SectionReveal>

            <SectionReveal className="hidden glass-panel rounded-3xl p-6 lg:block lg:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Trusted Services
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Chimney Repairs & Cap Rebuilds</li>
                <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Driveways & Exterior Concrete</li>
                <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Brick, Block & Stair Construction</li>
                <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Chimney Removal & Roof Restoration</li>
              </ul>
              <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-sm text-white/70">Book a Free Quote Call</p>
                <a
                  href={phoneHref}
                  className="text-sm font-semibold text-[#f4c3ad] hover:text-[#ffd3bf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d27a5a]"
                >
                  {phoneDisplay}
                </a>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-8 md:py-24">
        <SectionReveal className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">Core Services</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
            Exterior masonry and chimney work tailored for homeowners and property investors seeking
            premium, long-lasting outcomes.
          </p>
        </SectionReveal>

        <div className="mx-auto mt-10 grid w-full max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <SectionReveal key={service.slug}>
              <ServiceCard service={service} />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mx-auto mt-8 w-full max-w-6xl">
          <Link href="/services" className="luxury-link text-sm font-semibold text-[#f4c3ad]">
            Explore Full Service Scope
          </Link>
        </SectionReveal>
      </section>

      <section className="px-4 pb-6 md:px-8 md:pb-10">
        <SectionReveal className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">Project Highlights</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/65">
            A bento-grid showcase inspired by MagicUI to highlight signature service outcomes and craftsmanship.
          </p>
          <div className="mt-8">
            <BentoDemo />
          </div>
        </SectionReveal>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-20">
        <SectionReveal className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">Featured Projects</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/65">
            Selected transformations showcasing precision masonry, chimney restoration, and elevated curb appeal.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Concrete Driveway Upgrade",
                detail: "Exposed aggregate finish & edge detailing",
                image: "/pics/project-featured-01.webp",
              },
              {
                title: "Chimney Cap Rebuild",
                detail: "Waterproof cap + mortar restoration",
                image: "/pics/project-featured-02.webp",
              },
              {
                title: "Brick Stair Reconstruction",
                detail: "Structural block base with premium finish",
                image: "/pics/project-featured-03.webp",
              },
            ].map((project) => (
              <article key={project.title} className="glass-panel rounded-3xl p-5">
                <BlurFade inView inViewMargin="-80px" duration={0.5} blur="8px">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1600}
                    height={1100}
                    className="mb-4 h-52 w-full rounded-2xl border border-white/10 object-cover sm:h-44"
                  />
                </BlurFade>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#f4c3ad]">Featured</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{project.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-20">
        <SectionReveal className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">Why Homeowners Choose Us</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <p key={reason} className="glass-panel rounded-2xl px-4 py-4 text-sm font-medium uppercase tracking-[0.08em] text-white/85">
                {reason}
              </p>
            ))}
          </div>
        </SectionReveal>
      </section>

      <TestimonialsDemo />

      <section className="px-4 pb-24 pt-8 md:px-8 md:pb-20">
        <SectionReveal className="glass-panel mx-auto flex w-full max-w-6xl flex-col gap-4 rounded-3xl border-white/15 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Need Repairs or a New Installation?</h2>
            <p className="mt-3 text-lg text-white/70">Speak with our team today for a free quote.</p>
          </div>
          <a
            href={phoneHref}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#b25f40] to-[#d27a5a] px-7 text-base font-semibold text-white shadow-[0_16px_40px_rgba(178,95,64,0.4)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(178,95,64,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f8cdb5]"
          >
            Call {phoneDisplay}
          </a>
        </SectionReveal>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
    </>
  );
}

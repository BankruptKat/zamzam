"use client";

import Image from "next/image";
import CtaButton from "@/components/cta-button";
import SectionReveal from "@/components/section-reveal";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";
import { phoneHref } from "@/lib/site";

export default function AboutPage() {
  return (
    <>
      {/* Section 1 - Philosophy */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/pics/about-team-worksite.webp"
            alt="Masonry craftsmanship"
            width={1600}
            height={1100}
            className="h-full w-full object-cover hero-image-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070b12]/60 via-[#070b12]/40 to-[#070b12]/95" />
          <div className="absolute inset-0 vignette-overlay" />
          <div className="absolute inset-0 grain-overlay" />
        </div>

        <div className="relative z-10 flex min-h-[70vh] items-end px-4 pb-20 pt-32 md:px-8 md:pb-32">
          <div className="mx-auto w-full max-w-6xl">
            <BlurFade delay={0.1} duration={1} blur="12px">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#f2baa0]/90">
                About
              </p>
            </BlurFade>
            <BlurFade delay={0.3} duration={1.2} blur="12px">
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.95] text-white md:text-6xl lg:text-7xl">
                Built on Precision.
                <br />
                <span className="text-white/70">Committed to Quality.</span>
              </h1>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Section 2 - Philosophy Statement */}
      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#f4c3ad]/70">Philosophy</p>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Architecture That Endures
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-base leading-relaxed text-white/60">
                We believe exceptional masonry is invisible. It does not demand attention—it earns trust through decades of reliable performance. Every project begins with this understanding.
              </p>
              <p className="text-base leading-relaxed text-white/60">
                Our work serves homeowners who value enduring quality over short-term savings. Those who understand that true craftsmanship reveals itself slowly, through years of weathering storms and seasons.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Craftsmanship Standards */}
      <section className="border-t border-white/5 px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col items-center justify-center"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#f4c3ad]/70">Standards</p>
            <h2 className="mt-4 text-center text-3xl font-semibold text-white md:text-4xl">
              Craftsmanship Principles
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Material Integrity",
                description: "We source premium materials matched to each project's environmental demands and aesthetic requirements.",
              },
              {
                title: "Structural Precision",
                description: "Every measurement, cut, and placement follows architectural standards for load-bearing and weather resistance.",
              },
              {
                title: "Finish Quality",
                description: "Clean joints, consistent coursing, and meticulous site restoration define our completed work.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="glass-panel rounded-2xl p-6"
              >
                <p className="text-4xl font-bold text-white/10">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - CTA */}
      <section className="border-t border-white/5 px-4 py-24 md:px-8 md:py-32">
        <SectionReveal className="mx-auto w-full max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#f4c3ad]/70">Begin Your Project</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            Ready to Elevate Your Exterior?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/55">
            Limited project availability. Schedule your consultation to discuss your masonry requirements.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CtaButton href={phoneHref} label="Request a Free Consultation" />
            <CtaButton href="/contact" label="Start Your Project" variant="secondary" />
          </div>
        </SectionReveal>
      </section>
    </>
  );
}

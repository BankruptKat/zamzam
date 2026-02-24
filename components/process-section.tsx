"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation & Site Review",
    description: "On-site assessment of your project requirements and structural conditions.",
  },
  {
    number: "02",
    title: "Material Planning & Selection",
    description: "Curated selection of premium materials matched to your aesthetic and durability needs.",
  },
  {
    number: "03",
    title: "Precision Installation",
    description: "Meticulous execution with architectural attention to detail and clean site standards.",
  },
  {
    number: "04",
    title: "Final Inspection & Clean Finish",
    description: "Comprehensive quality review and pristine site restoration upon completion.",
  },
];

export default function ProcessSection() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center justify-center md:mb-20"
        >
          <div className="flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-white/70">
              Our Process
            </div>
          </div>
          <h2 className="mt-4 text-center text-2xl font-semibold text-white md:text-4xl">
            How We Work
          </h2>
          <p className="mt-2 max-w-lg text-center text-base leading-7 text-white/55">
            A refined approach to residential masonry. From initial consultation to final detail.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="group relative">
              <div className="relative">
                <span className="text-5xl font-bold text-white/12 transition-colors duration-500 group-hover:text-white/25">
                  {step.number}
                </span>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

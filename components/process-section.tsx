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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col items-center justify-center md:mb-20"
        >
          <div className="flex justify-center">
            <div className="rounded-full border border-slate-300/80 bg-white/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-600 dark:border-white/10 dark:bg-white/4 dark:text-white/70">
              Our Process
            </div>
          </div>
          <h2 className="mt-4 text-center text-3xl font-semibold text-slate-900 dark:text-white md:text-5xl">
            How We Work
          </h2>
          <p className="mt-3 max-w-2xl text-center text-[17px] leading-[1.65] text-slate-500 dark:text-white/55 md:text-lg">
            A clear architectural workflow from first site review to final finish.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="pointer-events-none absolute bottom-0 left-5 top-0 w-[2px] bg-gradient-to-b from-slate-400/0 via-slate-400/95 to-slate-400/0 dark:from-white/0 dark:via-white/30 dark:to-white/0 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-10">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="grid grid-cols-[2.5rem_1fr] items-start gap-5 sm:gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-7"
                >
                  <div className={isLeft ? "hidden md:block" : "hidden md:block md:order-3"} />

                  <div className="relative z-10 col-start-1 row-start-1 flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/90 bg-white shadow-[0_0_0_6px_rgba(148,163,184,0.18)] dark:border-white/20 dark:bg-[#0b111b]/90 dark:shadow-[0_0_0_6px_rgba(7,11,18,0.45)] md:col-start-2 md:h-14 md:w-14">
                    <span className="text-xs font-semibold tracking-[0.14em] text-slate-600 dark:text-neutral-200">{step.number}</span>
                  </div>

                  <div
                    className={`col-start-2 row-start-1 md:row-auto ${isLeft ? "md:col-start-1 md:text-right" : "md:col-start-3 md:text-left"
                      }`}
                  >
                    <article className="glass-panel rounded-2xl border border-slate-300/70 p-5 dark:border-white/12 md:p-6">
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#9b4f34] dark:text-[#f4c3ad]/75">
                        Step {step.number}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white md:text-xl">{step.title}</h3>
                      <p className="mt-2.5 text-[15px] leading-relaxed text-slate-500 dark:text-white/60 md:text-[15px]">{step.description}</p>
                    </article>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

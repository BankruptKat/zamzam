"use client";

import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "Professional from quote to cleanup. They rebuilt our chimney cap and restored joints exactly as promised.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    name: "Ava Thompson",
    role: "Homeowner",
  },
  {
    text: "Our driveway replacement was handled with precision and clear communication at every step.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    name: "Noah Brooks",
    role: "Property Manager",
  },
  {
    text: "Excellent masonry workmanship and a respectful crew. The finish quality looks premium.",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=160&q=80",
    name: "Mia Carter",
    role: "Homeowner",
  },
  {
    text: "They removed an old chimney and repaired the roof seamlessly. Fast, clean, and reliable.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    name: "Ethan Reed",
    role: "Investor",
  },
  {
    text: "The team was punctual and detail-oriented. Our exterior brickwork has never looked better.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
    name: "Sophia Hayes",
    role: "Homeowner",
  },
  {
    text: "Very smooth experience from consultation to completion. Strongly recommend for masonry projects.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
    name: "Liam Scott",
    role: "General Contractor",
  },
  {
    text: "Their craftsmanship and project transparency gave us confidence from day one.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=160&q=80",
    name: "Emma Foster",
    role: "Homeowner",
  },
  {
    text: "They delivered exactly what we needed and kept the site tidy throughout the job.",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=160&q=80",
    name: "James Turner",
    role: "Landlord",
  },
  {
    text: "Our stair block and concrete work came out exceptional. Great communication and timeline.",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=160&q=80",
    name: "Olivia Bennett",
    role: "Homeowner",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialsDemo() {
  return (
    <section className="px-4 py-12 md:px-8 md:py-28">
      <div className="z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-xl flex-col items-center justify-center"
        >
          <div className="flex justify-center">
            <div className="rounded-full border border-slate-300/80 bg-white/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-600 dark:border-white/10 dark:bg-white/4 dark:text-white/70">
              Testimonials
            </div>
          </div>
          <h2 className="mt-4 text-center text-2xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            What our clients say
          </h2>
          <p className="mt-2 text-center text-base leading-7 text-slate-500 dark:text-white/55">
            See what homeowners say about our craftsmanship, communication, and finishing quality.
          </p>
        </motion.div>

        <div
          className="mt-12 flex max-h-[600px] justify-center gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
          aria-label="Client testimonial carousel columns"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </div>
      </div>
    </section>
  );
}

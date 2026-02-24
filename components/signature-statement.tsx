"use client";

import { motion } from "framer-motion";

interface SignatureStatementProps {
  text?: string;
  subtitle?: string;
}

export default function SignatureStatement({
  text = "BUILT TO LAST",
  subtitle,
}: SignatureStatementProps) {
  return (
    <section className="relative overflow-hidden bg-[#edf2f9] py-32 dark:bg-transparent md:py-48">
      {/* Background large text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="signature-text whitespace-nowrap"
        >
          {text}
        </motion.div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-[0.2em] text-[#b25f40] dark:text-[#f4c3ad]/80"
        >
          Our Commitment
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-6 text-3xl font-semibold leading-tight text-[#0f172a] dark:text-white md:text-5xl"
        >
          {subtitle || "Every project executed with precision, care, and enduring quality."}
        </motion.h2>
      </div>
    </section>
  );
}

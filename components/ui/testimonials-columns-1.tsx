"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export type TestimonialItem = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export function TestimonialsColumn(props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <article key={i} className="glass-panel w-full max-w-sm rounded-2xl p-5">
                <p className="text-sm leading-6 text-white/70">{text}</p>
                <div className="mt-4 flex items-center gap-2.5">
                  <Image
                    width={32}
                    height={32}
                    src={image}
                    alt={name}
                    className="h-8 w-8 rounded-full border border-white/10 object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="text-sm font-medium text-white">{name}</div>
                    <div className="text-xs text-white/50">{role}</div>
                  </div>
                </div>
              </article>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
}

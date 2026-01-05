import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function PortfolioHero() {
  return (
    <section className="relative bg-[var(--color-surface)]">
      {/* subtle background texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)] opacity-[0.04]" />
      </div>

      <div className="relative mx-auto flex min-h-[60vh] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.span
            variants={fadeUp}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--color-text-muted)]"
          >
            Our Work
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="max-w-3xl text-balance text-4xl font-bold leading-tight text-[var(--color-text)] sm:text-5xl"
          >
            Work That Reflects{" "}
            <span className="text-[var(--color-accent)]">
              Quality, Clarity
            </span>{" "}
            and Purpose
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
          >
            A curated selection of projects built for businesses that value
            performance, structure, and long-term impact.
          </motion.p>

          {/* Trust line */}
          <motion.p
            variants={fadeUp}
            className="mt-8 text-sm text-[var(--color-text-muted)]"
          >
            Projects delivered for growing and established businesses across
            multiple industries
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

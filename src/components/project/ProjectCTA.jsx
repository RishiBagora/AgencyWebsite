import React from "react";
import { motion } from "framer-motion";

/* ------------------ ANIMATIONS ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeUpDelayed = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.15 },
  },
};

/* ------------------ COMPONENT ------------------ */
export default function ProjectCTA({ project }) {
  if (!project) return null;

  const { title, links } = project;

  return (
    <section
      className="bg-[var(--color-bg)] py-28"
      aria-labelledby="project-cta-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Label */}
          <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-4">
            Interested in a Similar Project?
          </p>

          {/* Heading */}
          <h2
            id="project-cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text)] leading-tight"
          >
            Let’s Build a High-Impact Website for Your Business
          </h2>

          {/* Supporting Text */}
          <p className="mt-6 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-2xl mx-auto">
            If you’re looking to achieve results like{" "}
            <span className="text-[var(--color-text)] font-medium">
              {title}
            </span>
            , we can help you design and build a website that reflects your brand
            and drives real business growth.
          </p>

          {/* Buttons */}
          <motion.div
            variants={fadeUpDelayed}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            {/* Primary CTA */}
            <a
              href={links?.contactCTA || "/contact"}
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 w-full sm:w-auto"
            >
              Start Your Project
            </a>

            {/* Secondary CTA */}
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent)] px-10 py-4 text-base font-semibold text-[var(--color-accent)] transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-white w-full sm:w-auto"
            >
              Talk on WhatsApp
            </a>
          </motion.div>

          {/* Trust Line */}
          <p className="mt-8 text-sm text-[var(--color-text-muted)]">
            No obligation consultation • Quick response • Project-focused
            discussion
          </p>
        </motion.div>
      </div>
    </section>
  );
}

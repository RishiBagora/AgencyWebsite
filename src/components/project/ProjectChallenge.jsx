import React from "react";
import { motion } from "framer-motion";

/* ------------------ ANIMATIONS ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const listContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ------------------ COMPONENT ------------------ */
export default function ProjectChallenge({ project }) {
  if (!project || !project.challenges?.length) return null;

  return (
    <section className="bg-[var(--color-bg)] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* ---------------- LEFT COLUMN ---------------- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Label */}
            <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-4">
              The Challenge
            </p>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--color-text)] max-w-md leading-tight">
              What Was Holding the Project Back
            </h2>

            {/* Supporting Text */}
            <p className="mt-6 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-lg">
              Before starting the project, the client faced multiple challenges
              that were directly impacting their online growth and overall
              business performance.
            </p>
          </motion.div>

          {/* ---------------- RIGHT COLUMN ---------------- */}
          <motion.div
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {project.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                variants={cardAnim}
                className="bg-white border border-[var(--color-border)] rounded-xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/40"
              >
                <div className="flex items-start gap-5">
                  {/* Index */}
                  <span className="text-sm font-semibold text-[var(--color-accent)] mt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Text */}
                  <p className="text-base text-[var(--color-text)] leading-relaxed">
                    {challenge}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

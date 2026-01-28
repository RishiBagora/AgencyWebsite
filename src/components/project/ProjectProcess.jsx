import React from "react";
import { motion } from "framer-motion";

/* ------------------ ANIMATIONS ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

/* ------------------ COMPONENT ------------------ */
export default function ProjectProcess({ project }) {
  if (!project || !project.process?.length) return null;

  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-40 border-t border-[var(--color-border)]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ---------------- HEADER ---------------- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 md:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--color-accent)] mb-6 block">
              Workflows
            </span>
            <h2 className="font-heading text-4xl md:text-7xl font-bold tracking-tighter text-[var(--color-text)] leading-[0.95]">
              From Concept <br />
              <span className="text-[var(--color-accent)] italic font-light text-3xl md:text-6xl tracking-normal">to</span> <span className="text-[var(--color-accent)]">Live System.</span>
            </h2>
          </motion.div>

          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-xs text-base text-[var(--color-text-muted)] leading-relaxed border-l border-[var(--color-border)] pl-6 opacity-80"
          >
            A systematic engineering approach that ensures every deliverable is tested, optimized, and scalable.
          </motion.p>
        </div>

        {/* ---------------- PROCESS GRID ---------------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16"
        >
          {project.process.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative flex flex-col"
            >
              {/* Number and Step Line */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm font-mono font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/5 px-3 py-1 rounded-md">
                  0{index + 1}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-border)] to-transparent group-hover:from-[var(--color-accent)]/40 transition-all duration-700" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[var(--color-text)] tracking-tight mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-500">
                  {item.step}
                </h3>
                <p className="text-base text-[var(--color-text-muted)] leading-relaxed opacity-80 font-medium">
                  {item.description}
                </p>
              </div>

              {/* Hover Visual Accent */}
              <div className="absolute -bottom-4 left-0 w-0 h-1 bg-[var(--color-accent)] opacity-20 group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </motion.div>

        {/* ---------------- FOOTER INDICATOR ---------------- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          className="mt-24 pt-10 border-t border-[var(--color-border)]/30 text-center"
        >
          <div className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em]">
             <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
             Sprint Completed Successfully
          </div>
        </motion.div>

      </div>
    </section>
  );
}
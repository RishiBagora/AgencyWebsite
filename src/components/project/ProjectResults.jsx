import React from "react";
import { motion } from "framer-motion";

/* ------------------ ANIMATIONS ------------------ */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ------------------ COMPONENT ------------------ */
export default function ProjectResults({ project }) {
  if (!project || !project.results?.length) return null;

  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-40 border-t border-[var(--color-border)]/40 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ---------------- HEADER ---------------- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 md:mb-32 text-left">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--color-accent)] mb-6 block">
              [ 04 — Performance ]
            </span>
            <h2 className="font-heading text-5xl md:text-8xl font-bold tracking-tighter text-[var(--color-text)] leading-[0.9] lg:-ml-1">
              Measurable <br />
              <span className="text-[var(--color-accent)] italic font-light tracking-normal">Outcome.</span>
            </h2>
          </motion.div>

          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeUp}
             className="md:max-w-xs border-l-2 border-[var(--color-accent)] pl-8 py-2"
          >
            <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed font-medium">
              We focus on the metrics that matter—driving real growth through engineered digital solutions.
            </p>
          </motion.div>
        </div>

        {/* ---------------- RESULTS GRID ---------------- */}
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)]/30 border border-[var(--color-border)]/30 rounded-[2.5rem] overflow-hidden"
        >
          {project.results.map((result, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative bg-[var(--color-bg)] p-12 md:p-14 transition-all duration-500 hover:bg-[var(--color-surface)]"
            >
              {/* --- GHOST NUMBERING --- */}
              <span className="absolute -bottom-6 -right-2 text-8xl md:text-9xl font-black text-[var(--color-text)] opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.08] group-hover:-translate-y-4 transition-all duration-700 ease-out">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="mb-12">
                   {/* Minimalist Tech Icon */}
                   <div className="h-2 w-2 rounded-full bg-[var(--color-accent)] mb-6 group-hover:scale-[2.5] transition-transform duration-500" />
                   <p className="text-lg md:text-xl font-bold text-[var(--color-text)] tracking-tight leading-snug group-hover:text-[var(--color-accent)] transition-colors duration-300">
                     {result}
                   </p>
                </div>

                <div className="overflow-hidden">
                   <div className="h-[1px] w-0 bg-[var(--color-accent)] group-hover:w-full transition-all duration-700 ease-out opacity-30" />
                   <p className="text-[9px] uppercase tracking-widest font-black mt-4 opacity-40">
                     KPI Verified
                   </p>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* ---------------- FOOTER ---------------- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          className="mt-16 text-center"
        >
           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
             &bull; Audited for Growth &bull;
           </span>
        </motion.div>
      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProjectSolution({ project }) {
  if (!project || !project.solution) return null;

  const { approach, highlights } = project.solution;

  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-32 border-t border-[var(--color-border)]/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Clear Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-accent)] mb-4"
          >
            The Solution
          </motion.p>
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-text)] leading-tight"
          >
            A strategic approach focused on <span className="text-[var(--color-accent)]">performance and scale.</span>
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mt-6 text-lg text-[var(--color-text-muted)] leading-relaxed max-w-2xl"
          >
            {approach}
          </motion.p>
        </div>

        {/* 2. Simplified Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)]/40 border border-[var(--color-border)]/40 rounded-2xl overflow-hidden">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--color-bg)] p-8 md:p-12 flex flex-col justify-between group hover:bg-[var(--color-surface)] transition-colors duration-300"
            >
              <div>
                <span className="text-[10px] font-bold text-[var(--color-accent)] opacity-50 mb-6 block">
                  0{index + 1}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text)] tracking-tight leading-snug">
                  {item}
                </h3>
              </div>
              
              {/* Simple subtle indicator */}
              <div className="mt-10 h-1 w-8 bg-[var(--color-accent)]  group-hover:w-full group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
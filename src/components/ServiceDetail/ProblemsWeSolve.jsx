import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import servicesData from "../../data/servicesData";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProblemsWeSolve() {
  const { serviceSlug } = useParams();

  const service = servicesData.find((item) => item.slug === serviceSlug);

  if (!service || !service.problemsWeSolve?.length) return null;

  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-32 border-t border-[var(--color-border)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header - Editorial Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7">
            <motion.span 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-accent)] mb-4 block"
            >
              Pain Points
            </motion.span>
            <motion.h2 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-[var(--color-text)] leading-tight"
            >
              Challenges We <br /> 
              <span className="text-[var(--color-accent)] italic">Identify & Resolve</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-5">
            <motion.p 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-base text-[var(--color-text-muted)] border-l border-[var(--color-border)] pl-6 leading-relaxed opacity-80"
            >
              Most businesses struggle with these hurdles before implementing a structured digital ecosystem.
            </motion.p>
          </div>
        </div>

        {/* Problem Grid - Minimal & High-End */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {service.problemsWeSolve.map((problem, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[2rem] p-8 transition-all duration-500 hover:border-[var(--color-accent)]/30 hover:shadow-xl hover:shadow-[var(--color-accent)]/5"
            >
              {/* Index Number - Subtle */}
              <span className="absolute top-6 right-8 text-xs font-black text-[var(--color-accent)] opacity-10 group-hover:opacity-40 transition-opacity">
                0{index + 1}
              </span>

              <div className="flex flex-col gap-4">
                {/* Visual Marker */}
                <div className="h-1.5 w-8 bg-gray-200 rounded-full group-hover:bg-[var(--color-accent)] transition-all duration-500" />
                
                <p className="text-sm md:text-base font-bold text-[var(--color-text)] leading-relaxed tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
                  {problem}
                </p>
              </div>

              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/[0.02] to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
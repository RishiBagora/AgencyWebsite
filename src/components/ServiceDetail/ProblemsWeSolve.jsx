import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import servicesData from "../../data/servicesData";

export default function ProblemsWeSolve() {
  const { slug } = useParams();

  const service = useMemo(() => 
    servicesData.find((item) => item.slug === slug), 
  [slug]);

  if (!service || !service.problemsWeSolve?.length) return null;

  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-32 border-t border-[var(--color-border)]/40">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Simple Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
         
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--color-text)] leading-[1.1]"
          >
            The friction we <span className="text-[var(--color-accent)] font-medium italic">eliminate.</span>
          </motion.h2>
        </div>

        {/* Unique Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {service.problemsWeSolve.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-8 pb-8 border-b border-[var(--color-border)]/50"
            >
              {/* Refined Numbering Indicator */}
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-[var(--color-accent)] mb-2">
                  0{index + 1}
                </span>
                <div className="w-px h-full bg-gradient-to-b from-[var(--color-accent)] to-transparent opacity-20" />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text)] tracking-tight mb-3">
                  {problem}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed opacity-70 font-medium">
                  We diagnose and resolve this bottleneck to ensure your product maintains high technical standards and user retention.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)]/50 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-md">
            <p className="text-sm font-bold text-[var(--color-text)] mb-2 uppercase tracking-widest">The Outcome</p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Addressing these hurdles results in a more resilient digital infrastructure and a seamless experience for your end-users.
            </p>
          </div>
          <div className="h-px w-full md:w-24 bg-[var(--color-accent)] opacity-20 hidden md:block" />
          <div className="flex items-center gap-4">
             <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-widest">Ready for Deployment</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import servicesData from "../../data/servicesData";

export default function WhatYouGet() {
  const { slug } = useParams();

  const service = useMemo(() => 
    servicesData.find((s) => s.slug === slug), 
  [slug]);

  if (!service || !service.whatYouGet) return null;

  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-40 border-t border-[var(--color-border)]/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header - Matching Agency Identity */}
        <div className="max-w-3xl mb-20 md:mb-32">
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold tracking-tighter text-[var(--color-text)] leading-[0.95]"
          >
            Tangible Assets, <br /> 
            <span className="text-[var(--color-accent)] italic font-light text-3xl md:text-6xl tracking-normal">Ready to</span> <span className="text-[var(--color-accent)]">Scale.</span>
          </motion.h2>
        </div>

        {/* The Deliverables "Blueprint" Layout */}
        <div className="flex flex-col">
          {service.whatYouGet.map((itemText, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row gap-8 md:gap-20 py-12 md:py-16 border-b border-[var(--color-border)]/50 last:border-none"
            >
              {/* Deliverable Geometry */}
              <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                <span className="text-[11px] font-mono font-bold text-[var(--color-accent)] mb-4 bg-[var(--color-accent)]/5 px-3 py-1 rounded-full">
                  [{index + 1 < 10 ? `0${index + 1}` : index + 1}]
                </span>
                {/* Vertical Logic Line */}
                <div className="hidden md:block w-px h-full bg-gradient-to-b from-[var(--color-accent)]/30 to-transparent ml-6" />
              </div>

              {/* Content Area */}
              <div className="flex-1 lg:grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5">
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] tracking-tight leading-tight group-hover:text-[var(--color-accent)] transition-colors duration-500">
                    {itemText}
                  </h3>
                </div>
                
                <div className="lg:col-span-7 mt-4 lg:mt-0">
                  <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed opacity-70 font-medium max-w-xl">
                    Full deployment of this module includes complete source code access, integration testing, and technical documentation designed for long-term maintenance.
                  </p>
                  
                  {/* Status Indicator */}
                  <div className="mt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-10px] group-hover:translate-x-0">
                    <div className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--color-accent)]">Production Ready</span>
                  </div>
                </div>
              </div>

              {/* Subtle Hover Reveal */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          className="mt-20 pt-10 border-t border-[var(--color-border)]/30 text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.4em]">
            &bull; End-to-end Project Ownership &bull;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
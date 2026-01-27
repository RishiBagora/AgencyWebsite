import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import servicesData from "../../data/servicesData";

export default function ServicesList() {
  // Use useMemo for performance when mapping large data sets
  const services = useMemo(() => servicesData, []);

  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-40 border-t border-[var(--color-border)]/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header - Editorial Alignment */}
        <div className="max-w-3xl mb-20 md:mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--color-accent)] mb-6 block"
          >
            Our Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold tracking-tighter text-[var(--color-text)] leading-[0.95]"
          >
            Solutions built for <br /> 
            <span className="text-[var(--color-accent)] italic font-light text-3xl md:text-6xl tracking-normal">business</span> <span className="text-[var(--color-accent)]">impact.</span>
          </motion.h2>
        </div>

        {/* The Blueprint List Layout */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative border-b border-[var(--color-border)]/50 last:border-none"
            >
              <Link 
                to={`/services/${service.slug}`}
                className="flex flex-col md:flex-row gap-8 md:gap-20 py-12 md:py-20 cursor-pointer"
              >
                {/* Step & Vertical Line Geometry */}
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                  <span className="text-[11px] font-mono font-bold text-[var(--color-accent)] mb-4 bg-[var(--color-accent)]/5 px-3 py-1 rounded-full">
                    [{index + 1 < 10 ? `0${index + 1}` : index + 1}]
                  </span>
                  <div className="hidden md:block w-px h-full bg-gradient-to-b from-[var(--color-accent)]/30 to-transparent ml-6" />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 lg:grid lg:grid-cols-12 gap-12 items-center">
                  {/* Service Title */}
                  <div className="lg:col-span-5">
                    <h3 className="text-2xl md:text-5xl font-bold text-[var(--color-text)] tracking-tight leading-tight group-hover:text-[var(--color-accent)] transition-all duration-500 group-hover:translate-x-2">
                      {service.serviceName}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest font-black text-[var(--color-accent)] mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      View Strategy →
                    </p>
                  </div>
                  
                  {/* Service Description */}
                  <div className="lg:col-span-7 mt-6 lg:mt-0">
                    <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed opacity-80 font-medium max-w-xl group-hover:text-[var(--color-text)] transition-colors duration-500">
                      {service.intro.description}
                    </p>
                  </div>
                </div>

                {/* Minimalist Action Circle (Mobile hidden/Desktop visible) */}
                <div className="hidden lg:flex items-center justify-end">
                   <div className="h-12 w-12 rounded-full border border-[var(--color-border)] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] group-hover:text-white">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   </div>
                </div>
              </Link>

              {/* Decorative Background Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
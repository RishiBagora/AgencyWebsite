import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import servicesData from "../../data/servicesData"; // Importing your actual data

/* ---------------- ANIMATIONS ---------------- */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2 
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    },
  },
};

/* Icon Mapper - Maps the slugs to your specific SVG paths */
const ServiceIcon = ({ slug }) => {
  const icons = {
    "website-development": <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
    "ecommerce": <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />,
    "ui-ux-design": <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 00-2 2z" />,
    "website-redesign": <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
  };

  return (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      {icons[slug] || <path d="M13 10V3L4 14h7v7l9-11h-7z" />}
    </svg>
  );
};

function ServicesPreview() {
  return (
    <section className="bg-[var(--color-bg-soft)] py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-[var(--color-accent)] mb-4 block">Specializations</span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-[var(--color-text)] leading-tight">
              Solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#6366f1]">Modern Growth</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-lg text-[var(--color-text-muted)] leading-relaxed italic border-l-2 border-[var(--color-accent)] pl-6"
          >
            From conceptual strategy to final code delivery, we scale Indian brands with high-performance digital tools.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.slug}
              variants={item}
              className="will-change-transform"
            >
              <Link to={`/services/${service.slug}`} className="block h-full">
                <motion.div
                  whileHover={{ 
                    y: -8,
                    transition: { type: "spring", stiffness: 400, damping: 25 } 
                  }}
                  className="group relative flex flex-col justify-between h-full p-10 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[2rem] transition-colors duration-300 hover:border-[var(--color-accent)]"
                >
                  {/* Background Numbering */}
                  <span className="absolute top-8 right-10 text-5xl font-black text-[var(--color-text)] opacity-[0.05] pointer-events-none group-hover:opacity-[0.3] select-none">
                    0{index + 1}
                  </span>

                  <div>
                    {/* Icon Box */}
                    <div className="mb-10 h-14 w-14 flex items-center justify-center rounded-xl bg-[var(--color-bg-soft)] text-[var(--color-accent)] border border-[var(--color-border)] transform-gpu transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white">
                      <ServiceIcon slug={service.slug} />
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--color-text)] tracking-tight mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                      {service.serviceName}
                    </h3>

                    <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {service.hero.subheading}
                    </p>
                  </div>

                  <div className="mt-12 inline-flex items-center text-[10px] font-black uppercase tracking-widest text-[var(--color-accent)]">
                    <span className="relative overflow-hidden inline-flex items-center">
                      <span className="transition-transform duration-300 group-hover:translate-x-1 flex items-center gap-2">
                        Explore Service <span>→</span>
                      </span>
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesPreview;
import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import servicesData from "../../data/servicesData";

/* ---------------- ANIMATIONS ---------------- */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
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

export default function ServiceIntro() {
  const { slug } = useParams();
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) return null;

  const highlights =
    service.ourSolution?.slice(0, 4) ||
    service.whatYouGet?.slice(0, 4) ||
    [];

  return (
    <section className="relative bg-[var(--color-bg)] py-24 md:py-40 overflow-hidden">
      {/* Decorative "Ghost" Text for Scale */}
      <div className="absolute w-[100%] top-10 text-center text-[7vw] font-black text-[var(--color-text)] opacity-[0.03] select-none pointer-events-none whitespace-nowrap">
        {service.serviceName}
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* LEFT CONTENT: Strategy & Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="lg:col-span-6"
          >
            <motion.span 
              variants={fadeUp}
              className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] text-[var(--color-accent)] mb-8 px-3 py-1 border border-[var(--color-accent)]/20 rounded-full"
            >
              The Strategy
            </motion.span>
            
            <motion.h2 
              variants={fadeUp}
              className="font-heading text-4xl md:text-6xl font-bold tracking-[-0.03em] text-[var(--color-text)] leading-[1.05] text-balance"
            >
              {service.intro?.title || "Bridging the gap between vision & execution"}
            </motion.h2>

            <motion.div 
              variants={fadeUp}
              className="mt-10 h-[2px] w-20 bg-gradient-to-r from-[var(--color-accent)] to-transparent" 
            />

            <motion.p 
              variants={fadeUp}
              className="mt-10 text-lg md:text-xl leading-relaxed text-[var(--color-text-muted)] max-w-xl font-light italic"
            >
              “{service.intro?.description}”
            </motion.p>
          </motion.div>

          {/* RIGHT HIGHLIGHTS: Numbered List */}
          <motion.div
            className="lg:col-start-8 lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
               variants={fadeUp}
               className="relative p-1 md:p-2"
            >
              <h4 className="text-[11px] font-black uppercase tracking-widest text-[var(--color-text)] mb-12 flex items-center gap-4">
                Core Objectives <span className="h-px flex-1 bg-[var(--color-border)] opacity-30" />
              </h4>

              <div className="space-y-12">
                {highlights.map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeUp}
                    className="group flex gap-6"
                  >
                    <span className="text-sm font-black text-[var(--color-accent)] opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                      0{index + 1}
                    </span>
                    <div className="flex flex-col gap-2">
                      <span className="text-lg md:text-xl font-bold text-[var(--color-text)] tracking-tight group-hover:text-[var(--color-accent)] transition-colors duration-300">
                        {item}
                      </span>
                      <div className="h-px w-0 bg-[var(--color-accent)] group-hover:w-full transition-all duration-700 ease-out opacity-20" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
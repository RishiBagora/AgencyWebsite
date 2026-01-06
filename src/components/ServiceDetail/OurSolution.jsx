import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import servicesData from "../../data/servicesData";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function OurSolution() {
  const { serviceSlug } = useParams();

  const service = servicesData.find((item) => item.slug === serviceSlug);

  if (!service || !service.ourSolution?.length) return null;

  return (
    <section className="bg-[var(--color-surface-muted)] py-20 md:py-32 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header - Centered & Refined */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-accent)] mb-4 block"
          >
            The Framework
          </motion.span>
          <motion.h2 
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-gray-900 leading-tight"
          >
            How We Turn Your <br />
            <span className="text-[var(--color-accent)] italic">Challenges into Assets</span>
          </motion.h2>
          <motion.p 
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-6 text-base md:text-lg text-gray-500 leading-relaxed opacity-80"
          >
            A clear, engineered approach to ensure every digital solution aligns with your core business objectives.
          </motion.p>
        </div>

        {/* Solution Grid - Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.ourSolution.map((solution, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border border-[var(--color-border)] rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:border-[var(--color-accent)] hover:shadow-2xl hover:shadow-[var(--color-accent)]/5"
            >
              {/* Step Number - Sleek Squircle */}
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-bg-soft)] text-[var(--color-accent)] font-black text-xs group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-500 shadow-sm">
                0{index + 1}
              </div>

              <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                {solution}
              </h3>

              <p className="text-sm md:text-base leading-relaxed text-gray-500 opacity-80">
                We implement this with a focus on long-term scalability, ensuring your {service.serviceName.toLowerCase()} foundation remains rock solid as you grow.
              </p>

              {/* Bottom Accent Line */}
              <div className="mt-8 h-1 w-8 bg-gray-100 rounded-full group-hover:w-16 group-hover:bg-[var(--color-accent)] transition-all duration-500" />
              
              {/* Ghost Numbering */}
              <span className="absolute bottom-6 right-8 text-6xl font-black text-gray-900 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                {index + 1}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
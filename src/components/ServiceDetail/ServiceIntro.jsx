import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import servicesData from "../../data/servicesData";

/* ---------------- Animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServiceIntro() {
  const { serviceSlug } = useParams();

  const service = servicesData.find((item) => item.slug === serviceSlug);

  if (!service) return null;

  const highlights =
    service.ourSolution?.slice(0, 4) ||
    service.whatYouGet?.slice(0, 4) ||
    [];

  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-32 overflow-hidden border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* LEFT CONTENT: Strategy & Narrative */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-accent)] mb-6 block">
              The Strategy
            </span>
            
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-[var(--color-text)] leading-[1.1]">
              {service.intro?.title || "Bridging the gap between vision & execution"}
            </h2>

            <div className="mt-8 h-px w-12 bg-[var(--color-accent)] mb-8" />

            <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-muted)] max-w-2xl opacity-90 font-medium">
              {service.intro?.description}
            </p>
          </motion.div>

          {/* RIGHT HIGHLIGHTS: Clean Feature List */}
          {highlights.length > 0 && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-5 relative"
            >
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[2rem] p-8 md:p-12 shadow-sm relative z-10 group">
                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-muted)] mb-8 opacity-60">
                  Key Focus Areas
                </p>
                
                <ul className="space-y-6">
                  {highlights.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group/item">
                      <div className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-[var(--color-accent)] group-hover/item:scale-150 transition-transform duration-300" />
                      <span className="text-sm md:text-base font-bold text-[var(--color-text)] tracking-tight leading-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Subtle Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl -mr-16 -mt-16" />
              </div>

              {/* Decorative side border for premium feel */}
              <div className="absolute -left-4 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent hidden lg:block" />
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
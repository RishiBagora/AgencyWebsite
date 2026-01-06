import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import servicesData from "../../data/servicesData";

/* ---------------- ANIMATION ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServiceDetailHero() {
  const { serviceSlug } = useParams();

  const service = servicesData.find((item) => item.slug === serviceSlug);

  if (!service) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="lg:col-span-7"
          >
            {/* Eyebrow - Refined Style */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[var(--color-accent)]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-accent)]">
                {service.serviceName}
              </span>
            </motion.div>

            {/* Heading - High Weight & Tight Tracking */}
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-[var(--color-text)] leading-[1.1] mb-6"
            >
              {service.hero.heading.split(' ').map((word, i) => (
                <span key={i} className={i > 2 ? "text-[var(--color-accent)] italic" : ""}>
                  {word}{" "}
                </span>
              ))}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-xl leading-relaxed text-[var(--color-text-muted)] mb-10 max-w-2xl opacity-90"
            >
              {service.hero.subheading}
            </motion.p>

            {/* Value Bullets - Styled as Grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {service.whatYouGet.slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors">
                    <svg className="h-3 w-3 text-[var(--color-accent)] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-[var(--color-text)] opacity-80">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-10 py-4 bg-[var(--color-accent)] text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-xl shadow-[var(--color-accent)]/20 hover:scale-105 active:scale-95 transition-all text-center"
              >
                {service.hero.ctaText || "Get Started"}
              </Link>
              <Link
                to="/portfolio"
                className="px-10 py-4 border border-[var(--color-border)] text-[var(--color-text)] text-xs font-black uppercase tracking-widest rounded-xl hover:bg-[var(--color-bg-soft)] transition-all text-center"
              >
                View Case Studies
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL - Interactive Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[2.5rem] bg-[var(--color-surface)] border border-[var(--color-border)] p-8 md:p-12 shadow-2xl overflow-hidden group">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-3xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-6 group-hover:scale-110 transition-transform duration-500">
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">Built for Performance</h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-8">We prioritize speed, security, and scalability in every {service.serviceName.toLowerCase()} project.</p>
                
                {/* Micro Metric */}
                <div className="pt-8 border-t border-[var(--color-border)] flex items-center justify-between">
                   <div className="text-left">
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Response Time</p>
                      <p className="text-lg font-bold text-[var(--color-text)]">{"< 200ms"}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">SEO Score</p>
                      <p className="text-lg font-bold text-[var(--color-accent)]">99/100</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Floating Element - Subtle */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl bg-white border border-[var(--color-border)] shadow-xl hidden lg:block"
            >
              <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-accent)]">Conversion Focused</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
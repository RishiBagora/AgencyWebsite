import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import servicesData from "../../data/servicesData";

/* ---------------- ANIMATIONS ---------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServiceDetailHero() {
  const { slug } = useParams();
  
  // Memoize service lookup for performance
  const service = useMemo(() => 
    servicesData.find((item) => item.slug === slug), 
  [slug]);

  if (!service) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] pt-24 pb-20 md:pt-40 md:pb-32">
      {/* High-Performance Background Accents */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-[var(--color-accent)] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent opacity-20" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-7"
          >
            {/* Minimalist Eyebrow */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-4 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {service.serviceName}
              </span>
              <div className="h-[1px] w-12 bg-[var(--color-accent)] opacity-30" />
            </motion.div>

            {/* Heading: Refined weight and tracking */}
            <motion.h1
              variants={fadeUp}
              className="font-heading text-5xl md:text-7xl font-bold tracking-[-0.04em] text-[var(--color-text)] leading-[0.95] mb-8"
            >
              {service.hero.heading.split(' ').map((word, i, arr) => (
                <span key={i} className={i >= arr.length - 2 ? "text-[var(--color-accent)] font-medium italic" : ""}>
                  {word}{" "}
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl leading-relaxed text-[var(--color-text-muted)] mb-12 max-w-xl"
            >
              {service.hero.subheading}
            </motion.p>

            {/* Minimalist Grid Features */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-12">
              {service.whatYouGet.slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <svg className="h-5 w-5 mt-0.5 text-[var(--color-accent)] opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[15px] font-medium text-[var(--color-text)] opacity-90 leading-tight">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs: Consistent spacing and depth */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-5">
              <Link
                to="/contact"
                className="group relative overflow-hidden px-10 py-5 bg-[var(--color-text)] text-[var(--color-bg)] text-[11px] font-black uppercase tracking-widest rounded-full transition-all hover:shadow-2xl hover:shadow-[var(--color-accent)]/20"
              >
                <span className="relative z-10">{service.hero.ctaText || "Get Started"}</span>
                <div className="absolute inset-0 bg-[var(--color-accent)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
              </Link>
              <Link
                to="/portfolio"
                className="px-10 py-5 border border-[var(--color-border)] text-[var(--color-text)] text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-colors duration-300"
              >
                Case Studies
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL: Card with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[var(--color-accent)] to-transparent opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-700" />
              
              <div className="relative rounded-[2rem] bg-[var(--color-surface)]/50 backdrop-blur-md border border-white/5 p-10 shadow-3xl">
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-20 w-20 flex items-center justify-center mb-8">
                    <div className="absolute inset-0 bg-[var(--color-accent)]/10 rounded-full animate-pulse" />
                    <svg className="w-10 h-10 text-[var(--color-accent)] relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4 tracking-tight">Optimized Delivery</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-10 opacity-80">
                    We leverage modern architecture to ensure your {service.serviceName.toLowerCase()} project is future-proof and blazing fast.
                  </p>
                  
                  {/* Stats with cleaner alignment */}
                  <div className="w-full grid grid-cols-2 gap-8 pt-8 border-t border-[var(--color-border)]/50">
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-1">Latency</span>
                      <span className="text-2xl font-bold text-[var(--color-text)]">0.2s</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-1">GTMetrix</span>
                      <span className="text-2xl font-bold text-[var(--color-text)]">100%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimalist Floating Badge */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 px-8 py-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xl backdrop-blur-xl hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text)]">Live System Ready</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ------------------ ANIMATIONS ------------------ */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

export default function ProjectHero({ project }) {
  const navigate = useNavigate();

  if (!project) return null;

  const {
    title,
    industry,
    location,
    year,
    hero: { headline, subheadline, coverImage, ctaText },
  } = project;

  return (
    <section className="relative bg-[var(--color-bg)] pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-[var(--color-border)]/30">
      {/* Structural Background Accent */}
      <div className="absolute top-0 right-[-10%] w-[50%] h-[70%] bg-[var(--color-accent)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-16 md:gap-24"
        >
          {/* ------------------ CONTENT TOP ------------------ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              {/* Editorial Eyebrow */}
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--color-accent)]">
                  [ Case Study ]
                </span>
                <div className="h-px w-12 bg-[var(--color-accent)] opacity-30" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                  {industry}
                </span>
              </motion.div>

              {/* High-Impact Headline */}
              <motion.h1
                className="font-heading text-5xl md:text-8xl font-bold tracking-tighter text-[var(--color-text)] leading-[0.95] mb-10"
                variants={fadeUp}
              >
                {headline.split(' ').map((word, i, arr) => (
                  <span key={i} className={i >= arr.length - 2 ? "text-[var(--color-accent)] italic font-light" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </motion.h1>
            </div>

            {/* Sub-content & Metadata */}
            <div className="lg:col-span-4 lg:pt-24 border-l border-[var(--color-border)]/50 pl-8">
              <motion.p
                className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-10 font-medium italic opacity-80"
                variants={fadeUp}
              >
                “{subheadline}”
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-muted)]">Timeline / Location</span>
                <span className="text-sm font-bold text-[var(--color-text)]">{year} — {location}</span>
              </motion.div>
            </div>
          </div>

          {/* ------------------ VISUAL BOTTOM ------------------ */}
          <motion.div
            variants={fadeUp}
            className="relative group cursor-crosshair"
          >
            {/* Main Project Image */}
            <div className="overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl aspect-[16/9] lg:aspect-[21/9]">
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                src={coverImage}
                alt={title}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating Info Card (Bottom Left) */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 left-8 md:left-12 px-8 py-6 bg-[var(--color-surface)]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-12">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-[var(--color-accent)] mb-1">Core Objective</p>
                  <p className="text-sm font-bold text-[var(--color-text)]">Conversion Design</p>
                </div>
                <button
                  onClick={() => navigate("/contact")}
                  className="h-12 w-12 rounded-full bg-[var(--color-text)] text-[var(--color-bg)] flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
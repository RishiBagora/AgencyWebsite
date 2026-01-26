import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1], // Luxury quartic ease-out
    },
  }),
};

export default function PortfolioHero() {
  return (
    <section className="relative bg-[var(--color-bg)] overflow-hidden">
      {/* Dynamic Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
            x: [0, 40, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-24 -top-24 h-[600px] w-[600px] rounded-full bg-[var(--color-accent)] blur-[120px]" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-56">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-10 flex flex-col items-start">
            {/* Tagline / Eyebrow */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-4 mb-8"
            >
              <span className="h-[1px] w-12 bg-[var(--color-accent)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--color-accent)]">
                Selected Works
              </span>
            </motion.div>

            {/* Massive Editorial Heading */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-5xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter text-[var(--color-text)]"
            >
              Built with <br />
              <span className="text-[var(--color-accent)] italic font-light">Purpose.</span>
            </motion.h1>

            {/* Supporting Meta Data / Intro */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 w-full gap-12 items-end">
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-lg md:text-2xl leading-tight text-[var(--color-text-muted)] font-medium max-w-md"
              >
                A curated collection of digital architecture for brands that value 
                uncompromising performance and structural clarity.
              </motion.p>

              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex flex-col md:items-end gap-2"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text)]">
                  Est. 2019 / India
                </p>
                <p className="text-xs text-[var(--color-text-muted)] max-w-[200px] md:text-right italic">
                  Serving growing businesses with high-performance frameworks.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-6 flex items-center gap-4"
        >
          <div className="relative h-12 w-6 rounded-full border border-[var(--color-border)] flex justify-center p-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-1 rounded-full bg-[var(--color-accent)]"
            />
          </div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}
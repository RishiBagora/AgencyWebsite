import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ContactHero() {
  return (
    <section className="relative flex min-h-[65vh] items-center justify-center bg-[var(--color-surface-muted)] overflow-hidden pt-20">
      
      {/* 1. Subtle Background Elements - Not Giant, very sleek */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--color-accent-soft)_0%,transparent_70%)] opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {/* Eyebrow - Refined Style */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-6 bg-orange-500"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600">
              Get In Touch
            </span>
            <span className="h-px w-6 bg-orange-500"></span>
          </motion.div>

          {/* Heading - Tight Tracking & High Weight */}
          <motion.h1
            variants={fadeUp}
            className="mb-6 text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl md:text-7xl leading-[1.1]"
          >
            Let’s Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500 italic">
              Digital Legacy
            </span>
          </motion.h1>

          {/* Supporting Text - Balanced width */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-gray-500 md:text-lg opacity-90"
          >
            Share your vision with us. We provide clear, honest, and professional guidance to help your business scale in the digital landscape.
          </motion.p>

          {/* Trust Indicators - Minimalist Horizontal List */}
          <motion.div
            variants={fadeUp}
            className="mb-16 flex flex-wrap items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-400"
          >
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-orange-500" />
              Free Discussion
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-orange-500" />
              No Obligation
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-orange-500" />
              24h Response
            </span>
          </motion.div>

          {/* Animated Scroll Cue */}
          <motion.div
            variants={fadeUp}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Explore Options</span>
            <div className="h-10 w-[1px] bg-gradient-to-b from-orange-500 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
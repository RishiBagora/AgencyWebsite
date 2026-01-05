import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const trustItems = [
  {
    title: "Free Discussion",
    description: "Understand our strategy before you commit.",
  },
  {
    title: "Zero Spam Policy",
    description: "No aggressive calls, just honest advice.",
  },
  {
    title: "Honest Roadmaps",
    description: "Realistic timelines with clear expectations.",
  },
  {
    title: "24h Response",
    description: "Quick turnarounds for all your queries.",
  },
];

export default function TrustSignals() {
  return (
    <section className="bg-[var(--color-surface-muted)] py-12 md:py-16 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group flex flex-col items-start lg:items-center text-left lg:text-center"
            >
              {/* Refined Icon Dot */}
              <div className="mb-4 h-1.5 w-8 bg-orange-200 rounded-full group-hover:bg-orange-500 group-hover:w-12 transition-all duration-500" />
              
              <h4 className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 leading-tight">
                {item.title}
              </h4>
              
              <p className="text-sm text-gray-500 leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ---------------- ANIMATIONS ---------------- */
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function PortfolioCTA() {
  return (
    <section className="relative bg-orange-50 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* ---------- Eyebrow ---------- */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-3 text-xs font-semibold uppercase tracking-wider text-orange-600"
        >
          Have a Project in Mind?
        </motion.p>

        {/* ---------- Heading ---------- */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6 text-3xl font-semibold leading-tight text-gray-900 md:text-4xl"
        >
          Let’s Build Something That Works for Your Business
        </motion.h2>

        {/* ---------- Supporting Text ---------- */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-gray-600"
        >
          Share your requirements with us and we’ll help you choose the right
          digital solution — with clear guidance and no pressure.
        </motion.p>

        {/* ---------- CTA Buttons ---------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Discuss Your Project
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-orange-300 px-8 py-3 text-sm font-medium text-orange-700 transition hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            Get a Free Consultation
          </Link>
        </motion.div>

        {/* ---------- Trust Reducers ---------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600"
        >
          <span>Free initial discussion</span>
          <span className="hidden sm:inline">•</span>
          <span>No obligation</span>
          <span className="hidden sm:inline">•</span>
          <span>Clear guidance</span>
        </motion.div>
      </div>
    </section>
  );
}

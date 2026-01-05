import React from "react";
import { motion } from "framer-motion";
import siteConfig from "../../config/siteConfig";

/* ---------------- ANIMATION ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ContactCTA() {
  return (
    <section className="bg-[var(--color-surface-muted)] px-6 py-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
          Ready to Take the Next Step?
        </h2>

        {/* Supporting text */}
        <p className="mb-8 text-base text-gray-600 md:text-lg">
          Share your requirements and we’ll help you understand the best way
          forward — no pressure, no obligation.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primary CTA */}
          <a
            href="/contact#contact-form"
            className="inline-flex w-full items-center justify-center rounded-lg
                       bg-[var(--brand-primary)]
                       px-8 py-3 text-sm font-semibold text-[var(--color-accent)]
                       transition hover:opacity-90
                       sm:w-auto"
          >
            Send Details on WhatsApp
          </a>

          {/* Secondary CTA */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex w-full items-center justify-center rounded-lg
                       border border-gray-300 px-8 py-3
                       text-sm font-medium text-gray-800
                       transition hover:border-gray-400
                       sm:w-auto"
          >
            Call Us Instead
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-xs text-gray-500">
          Free initial discussion • Clear communication • No spam
        </p>
      </motion.div>
    </section>
  );
}

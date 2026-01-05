import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";

export default function ServicesCTA() {
  return (
    <section className="bg-[var(--color-surface-muted)]">
      <div className="mx-auto max-w-4xl px-6 py-28 text-center">

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <span className="text-sm font-semibold uppercase tracking-wide text-[#E72F2E]">
            Let’s Get Started
          </span>

          {/* Heading */}
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--color-text)] leading-tight">
            Ready to Start Your Project?
          </h2>

          {/* Supporting text */}
          <p className="mt-5 text-base md:text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Tell us about your requirements and we’ll help you choose the right
            solution for your business — clearly, honestly, and professionally.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={siteConfig.links.contact}
              className="
                inline-flex items-center justify-center
                px-8 py-4
                text-sm font-semibold
                text-white
                bg-[#E72F2E]
                rounded-lg
                hover:opacity-90
                transition-colors
                w-full sm:w-auto
              "
            >
              Discuss Your Project
            </Link>

            <Link
              to={siteConfig.links.contact}
              className="
                inline-flex items-center justify-center
                px-8 py-4
                text-sm font-semibold
                text-[#E72F2E]
                border border-[#E72F2E]
                rounded-lg
                hover:bg-[#E72F2E]/5
                transition-colors
                w-full sm:w-auto
              "
            >
              Get a Free Consultation
            </Link>
          </div>

          {/* Trust reducers */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[var(--color-text-muted)]">
            <span>Free initial consultation</span>
            <span>•</span>
            <span>No obligation</span>
            <span>•</span>
            <span>Clear guidance</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

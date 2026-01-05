import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function AboutCTASection() {
  return (
    <section className="bg-[var(--color-surface-alt)] border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-3xl px-6 py-28 text-center">

        {/* Eyebrow */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]"
        >
          Let’s Connect
        </motion.span>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-5 font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)]"
        >
          Let’s Build Something{" "}
          <span className="text-[var(--color-accent)]">
            Meaningful Together
          </span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
          className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)]"
        >
          If you’re looking for a digital agency that understands your business
          and focuses on long-term results, we’d be happy to discuss your
          project and guide you honestly.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.24 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          {/* Primary CTA */}
          <Link
            to={siteConfig.links.contact}
            className="
              inline-flex items-center justify-center
              rounded-md
              bg-[var(--color-accent)]
              px-8 py-4
              text-sm font-semibold text-white
              transition-colors
              hover:bg-[var(--color-accent-dark)]
              focus:outline-none
            "
          >
            Get in Touch
          </Link>

          {/* Secondary CTA */}
          {siteConfig.links.phone && (
            <a
              href={`tel:${siteConfig.links.phone}`}
              className="
                inline-flex items-center justify-center
                rounded-md
                border border-[var(--color-border)]
                px-8 py-4
                text-sm font-semibold
                text-[var(--color-text)]
                transition-colors
                hover:border-[var(--color-accent)]
                hover:text-[var(--color-accent)]
              "
            >
              Schedule a Call
            </a>
          )}
        </motion.div>

        {/* Trust reducers */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.32 }}
          className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[var(--color-text-muted)]"
        >
          <span>Free initial consultation</span>
          <span>•</span>
          <span>No obligation</span>
          <span>•</span>
          <span>Clear guidance</span>
        </motion.div>

      </div>
    </section>
  );
}


export default AboutCTASection;
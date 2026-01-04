import siteConfig from "../../config/siteConfig";
import { motion } from "framer-motion";

/* animation variants */
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Hero() {
  return (
    <section className="min-h-[90vh] bg-[var(--color-bg)] flex items-center">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            className="lg:col-span-7"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              className="
                font-heading
                text-4xl leading-tight
                font-bold
                text-[var(--color-text)]
                md:text-5xl
              "
            >
              We Build{" "}
              <span className="text-[var(--color-accent)]">
                Websites
              </span>{" "}
              That Bring Real Business.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="
                mt-6 max-w-xl
                text-base leading-relaxed
                text-[var(--color-text-muted)]
              "
            >
              We help businesses, hotels, and brands across India design and
              develop high-performance websites that generate leads, build
              trust, and grow revenue — not just online presence.
            </motion.p>

            {/* CTA BLOCK */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  px-7 py-3.5
                  text-sm font-semibold
                  text-white
                  bg-[var(--color-accent)]
                  border border-[var(--color-accent)]
                  hover:bg-[var(--color-accent-dark)]
                  transition-colors
                "
              >
                Get Free Consultation
              </a>

              <a
                href="/portfolio"
                className="
                  inline-flex items-center justify-center
                  px-7 py-3.5
                  text-sm font-semibold
                  text-[var(--color-text)]
                  border border-[var(--color-border)]
                  hover:border-[var(--color-accent)]
                  transition-colors
                "
              >
                View Our Work
              </a>
            </motion.div>

            {/* CTA NOTE */}
            <motion.p
              variants={fadeUp}
              className="mt-4 text-xs text-[var(--color-text-muted)]"
            >
              Free consultation • No obligation • Quick response
            </motion.p>

            {/* TRUST INDICATORS */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-[var(--color-text)]"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
                50+ Projects Delivered
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
                Clients Across India
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
                Fast Turnaround Time
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            <div
              className="
                relative
                rounded-md
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
                p-4
              "
            >
              <div
                className="
                  aspect-[16/10]
                  w-full
                  bg-[#eaeaea]
                  flex items-center justify-center
                  text-sm
                  text-[var(--color-text-muted)]
                "
              >
                Website Preview / Mockup
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;

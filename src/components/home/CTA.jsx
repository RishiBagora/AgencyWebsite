import { motion } from "framer-motion";
import siteConfig from "../../config/siteConfig";

function CTA() {
  return (
    <section className="bg-[var(--color-bg)] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[var(--color-surface)] border border-[var(--color-border)] px-8 py-12 md:py-16 text-center shadow-sm"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[var(--color-accent)] opacity-[0.05] blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-blue-400 opacity-[0.05] blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Minimal Badge */}
            <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] bg-[var(--color-accent-soft)] rounded-full">
              Let's Scale Together
            </span>

            {/* Heading: Refined size (not giant) */}
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.15]">
              Ready to build your <br className="hidden md:block" />
              <span className="text-[var(--color-accent)]">Digital Success?</span>
            </h2>

            {/* Description: Balanced leading and size */}
            <p className="mt-5 text-sm md:text-base leading-relaxed text-[var(--color-text-muted)] max-w-lg mx-auto">
              Get a free consultation and a clear roadmap for your high-performing website. No fluff, just results.
            </p>

            {/* Buttons: Clean & Elegant */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center items-center">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={siteConfig.cta?.primary || "/contact"}
                className="
                  inline-flex items-center justify-center
                  px-7 py-3.5 rounded-xl
                  text-sm font-bold tracking-tight text-white
                  bg-[var(--color-accent)]
                  shadow-md shadow-blue-500/10
                  transition-all duration-300
                "
              >
                Get Free Consultation
              </motion.a>

              {siteConfig.cta?.phone && (
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${siteConfig.cta.phone}`}
                  className="
                    inline-flex items-center justify-center
                    px-7 py-3.5 rounded-xl
                    text-sm font-bold tracking-tight
                    text-[var(--color-text)]
                    bg-transparent
                    border border-[var(--color-border)]
                    hover:bg-[var(--color-bg-soft)]
                    transition-all duration-300
                  "
                >
                  <svg className="w-4 h-4 mr-2 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Quick Call
                </motion.a>
              )}
            </div>

            {/* Footer Trust Line */}
            <div className="mt-8 pt-6 border-t border-[var(--color-border)]/50">
               <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] opacity-60">
                 Trusted by 50+ indian businesses
               </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
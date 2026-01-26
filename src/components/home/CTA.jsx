import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";

function CTA() {
  return (
    <section className="bg-black py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          
          {/* LEFT: Massive Statement */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[var(--color-accent)] font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block">
                Next Stage
              </span>
              <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-0">
                Let's make it <br /> 
                <span className="text-white/30 italic font-light">unforgettable.</span>
              </h2>
            </motion.div>
          </div>

          {/* RIGHT: Action & Trust */}
          <div className="flex flex-col items-start lg:items-end lg:text-right">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 max-w-md mb-12 leading-relaxed"
            >
              We help Indian brands transcend the noise through 
              precise design and high-performance engineering.
            </motion.p>

            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-6 items-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-full text-center hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-500"
                >
                  Start a Project
                </motion.div>
              </Link>

              {siteConfig.cta?.phone && (
                <a 
                  href={`tel:${siteConfig.cta.phone}`}
                  className="text-white/40 hover:text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-colors py-4"
                >
                  Or Call Direct
                </a>
              )}
            </div>
          </div>
        </div>

        {/* FOOTER: Minimalist Divider */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
              Currently accepting new projects
            </p>
          </div>
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">
            © 2024 Your Agency — Based in India
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
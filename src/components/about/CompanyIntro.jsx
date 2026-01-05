import { motion } from "framer-motion";
import siteConfig from "../../config/siteConfig";

// Icons for highlights (Using simple SVG paths for zero dependencies)
const icons = [
  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />, // Business
  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m15-13a4 4 0 11-8 0 4 4 0 018 0zm0 0v1.5a1.5 1.5 0 003 0V8.5a4.5 4.5 0 00-9 0v1.5a1.5 1.5 0 003 0V8.5" />, // Transparent
  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> // Long-term
];

function CompanyIntro() {
  return (
    <section className="relative bg-[var(--color-bg)] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[var(--color-accent)] opacity-[0.03] blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] bg-[var(--color-accent-soft)] rounded-full mb-6">
                Who We Are
              </span>

              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-[var(--color-text)]">
                Crafting Digital Solutions for{" "}
                <span className="relative inline-block">
                  Real Growth
                  <span className="absolute bottom-2 left-0 h-[6px] w-full bg-[var(--color-accent)] opacity-20 -z-10" />
                </span>
              </h2>

              <div className="mt-8 space-y-4 max-w-xl text-lg text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  <span className="font-semibold text-[var(--color-text)]">{siteConfig.name}</span> is not just a development shop. We are a team dedicated to helping Indian businesses scale through high-performing digital architecture.
                </p>
                <p>
                  Our approach is simple: we design with purpose and develop with precision to ensure your website is a revenue driver, not just a digital business card.
                </p>
              </div>

              {/* HIGHLIGHTS */}
              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  { title: "Business-First", desc: "Goal-oriented strategy." },
                  { title: "Transparent", desc: "No hidden fluff, just results." },
                  { title: "Partnership", desc: "Support beyond the launch." },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="group border-l-2 border-[var(--color-border)] hover:border-[var(--color-accent)] pl-4 transition-all"
                  >
                    <h3 className="text-sm font-bold text-[var(--color-text)] uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-soft)]">
                  <div className="h-2 w-2 rounded-full bg-red-400" />
                  <div className="h-2 w-2 rounded-full bg-yellow-400" />
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                </div>
                <div className="aspect-[4/5] w-full bg-gradient-to-br from-[var(--color-bg-soft)] to-[var(--color-surface)] flex flex-col items-center justify-center p-10 text-center">
                  <div className="h-20 w-20 rounded-full bg-[var(--color-accent-soft)] flex items-center justify-center mb-6">
                    <svg className="h-10 w-10 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-[var(--color-text)] mb-2">Built for Performance</h4>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    We optimize every line of code to ensure lightning-fast speeds and high conversion rates.
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-[var(--color-surface)] border border-[var(--color-border)] p-4 rounded-xl shadow-xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">99+</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[var(--color-text-muted)] leading-none">Page Speed</p>
                    <p className="text-sm font-bold text-[var(--color-text)]">Optimization</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CompanyIntro;
import { motion } from "framer-motion";
import siteConfig from "../../config/siteConfig";

function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[var(--color-bg)]">
      
      {/* Background Decorative Element - Very subtle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Refined Badge */}
              <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] bg-[var(--color-accent-soft)] rounded-full">
                Our Story
              </span>

              {/* Refined Heading (Not Giant) */}
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-[var(--color-text)] leading-[1.1] tracking-tighter">
                A Reliable Partner for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-blue-400 italic">
                  Growing Businesses
                </span>
              </h1>

              {/* Paragraph: Balanced width and size */}
              <p className="mt-8 max-w-xl text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
                <span className="font-semibold text-[var(--color-text)]">{siteConfig.name}</span> is a performance-driven agency dedicated to Indian enterprises. We don't just build websites; we create digital assets that drive measurable impact.
              </p>

              {/* Refined Supporting Points */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                  },
                }}
                className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  "Business-First Strategy",
                  "Transparent Workflows",
                  "Long-Term Partnerships",
                  "Performance Focused",
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="h-5 w-5 rounded-full bg-[var(--color-accent-soft)] flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                      <svg className="h-3 w-3 text-[var(--color-accent)] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-[var(--color-text)]">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL - Modern Floating Window */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="relative group"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-[0.05] blur-2xl rounded-[2rem]" />
              
              {/* Main Visual Container */}
              <div className="relative rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-2xl">
                <div className="overflow-hidden rounded-[1.5rem] bg-[var(--color-bg-soft)] aspect-[16/12] flex items-center justify-center relative">
                  {/* Decorative Abstract Mesh */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-soft)] to-transparent opacity-50" />
                  <svg className="w-16 h-16 text-[var(--color-accent)] opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="absolute text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]"><img src="https://i.pinimg.com/736x/7f/13/1d/7f131d8befedbdbb87e0b47505c304c7.jpg" alt="" /></p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white border border-[var(--color-border)] p-4 rounded-2xl shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[var(--color-accent-soft)] flex items-center justify-center text-[var(--color-accent)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-tight">Focusing on</p>
                    <p className="text-xs font-bold text-[var(--color-text)]">Performance</p>
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

export default AboutHero;
import { motion } from "framer-motion";
import siteConfig from "../../config/siteConfig";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-bg)]">
      
      {/* 1. BACKGROUND GLOW ELEMENTS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-accent)] opacity-[0.07] blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-blue-500 opacity-[0.05] blur-[100px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            className="lg:col-span-7 text-left"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.span 
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
              </span>
              Available for new projects
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-5xl md:text-7xl font-extrabold text-[var(--color-text)] leading-[1.1] tracking-tight"
            >
              We Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#6366f1]">
                High-ROI Websites
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-[var(--color-text-muted)]"
            >
              Helping Indian brands outshine competition with 
              <span className="text-[var(--color-text)] font-medium"> lightning-fast performance </span> 
              and conversion-driven design. We don't just build sites; we build growth engines.
            </motion.p>

            {/* CTA BLOCK */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-[var(--color-accent)] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-opacity-90 shadow-lg shadow-[var(--color-accent-soft)]"
              >
                Get Started
                <svg className="w-5 h-5 ml-2 -mr-1 transition-all duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 7l5 5-5 5" />
                </svg>
              </a>

              <a
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 font-bold text-[var(--color-text)] transition-all duration-200 bg-transparent border-2 border-[var(--color-border)] rounded-xl hover:bg-[var(--color-surface)] hover:border-[var(--color-accent)]"
              >
                Our Work
              </a>
            </motion.div>

            {/* TRUST BADGES */}
            <motion.div
              variants={fadeUp}
              className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-wrap gap-x-8 gap-y-4"
            >
              {[
                { label: "50+", sub: "Projects" },
                { label: "100%", sub: "Satisfaction" },
                { label: "24/7", sub: "Support" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-bold text-[var(--color-text)]">{stat.label}</span>
                  <span className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">{stat.sub}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL - Laptop/Browser Mockup */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Decorative Glow behind image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent)] to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl overflow-hidden">
                {/* Browser Top Bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-[var(--color-bg-soft)] border-b border-[var(--color-border)]">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/20" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/20" />
                  <div className="ml-4 h-4 w-32 rounded bg-[var(--color-border)] opacity-30" />
                </div>
                
                {/* Mockup Content */}
                <div className="aspect-[16/9] object- w-full bg-[#f8f9fa] relative flex items-center justify-center  overflow-hidden">
                    {/* <img src="./public/one.png" /> */}
                    <video autoPlay muted loop className="object-" src="./public/herovideo.mp4"></video>
                   {/* <div className="flex flex-col items-center gap-4 opacity-40">
                      <div className="w-16 h-16 rounded-full border-4 border-[var(--color-accent)] border-t-transparent animate-spin" />
                      <p className="font-medium text-gray-500 uppercase tracking-tighter">Rendering Portfolio...</p>
                   </div> */}
                </div>
              </div>
              
              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-6 -right-6 h-20 w-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-100"
              >
                <div className="text-[var(--color-accent)] text-2xl font-bold">99</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
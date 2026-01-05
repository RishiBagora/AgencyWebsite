import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function WhyChooseUs() {
  const points = [
    {
      title: "Indian Market Expertise",
      desc: "We understand Indian customers, pricing sensitivity, and local business behavior to build websites that convert.",
      icon: <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
    },
    {
      title: "Transparent Process",
      desc: "Clear communication and no hidden costs. You always know exactly what you are paying for and why.",
      // FIXED: Added Fragment <> </> around multiple paths
      icon: (
        <>
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </>
      ),
    },
    {
      title: "Fast & Reliable Delivery",
      desc: "Structured workflows and realistic timelines ensure timely delivery without compromising on high standards.",
      icon: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
    {
      title: "SEO & Performance",
      desc: "Optimized for speed and search engines from day one. Your site isn't just fast; it's findable.",
      icon: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
    },
    {
      title: "Long-Term Support",
      desc: "We stay with you after launch, offering updates and maintenance as your business continues to grow.",
      icon: <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />,
    },
    {
      title: "Business-Oriented",
      desc: "We focus on lead generation and trust-building. We build tools that help you make money.",
      icon: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
  ];

  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-[var(--color-accent-soft)] bg-[var(--color-accent-soft)] text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-6"
          >
            Efficiency & Trust
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-text)] tracking-tight"
          >
            Why Businesses <span className="text-[var(--color-accent)]">Choose Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl text-lg text-[var(--color-text-muted)]"
          >
            We don’t just build websites — we focus on trust, results, and long-term partnerships with Indian businesses.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative p-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] transition-all duration-500 hover:shadow-xl hover:shadow-[var(--color-accent-soft)]"
            >
              {/* Card Numbering */}
              <div className="absolute top-6 right-8 text-4xl font-bold text-[var(--color-text-muted)] opacity-5 group-hover:opacity-10 transition-all">
                0{index + 1}
              </div>

              {/* Icon Container */}
              <div className="mb-6 h-12 w-12 flex items-center justify-center rounded-xl bg-[var(--color-bg-soft)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-500 shadow-sm">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {point.icon}
                </svg>
              </div>

              <h3 className="text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                {point.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Trust Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-3 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-[var(--color-surface)] bg-[var(--color-accent-soft)] flex items-center justify-center text-[8px] font-bold text-[var(--color-accent)] uppercase">
                    Logo
                  </div>
                ))}
             </div>
             <p className="text-sm font-medium text-[var(--color-text-muted)] text-center">
               Join <span className="text-[var(--color-text)] font-bold">50+ Indian businesses</span> growing with us.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
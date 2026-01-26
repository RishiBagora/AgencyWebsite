import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function WhyChooseUs() {
  const points = [
    {
      tag: "Strategy",
      title: "Indian Market Expertise",
      desc: "Deep understanding of local pricing sensitivity and behavior to build sites that actually convert.",
      icon: <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
    },
    {
      tag: "Ethics",
      title: "Transparent Process",
      desc: "Clear communication with zero hidden costs. You'll know exactly what's being built and why.",
      icon: (
        <>
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </>
      ),
    },
    {
      tag: "Speed",
      title: "Fast Delivery",
      desc: "Realistic timelines and structured workflows ensure we hit your launch date without the stress.",
      icon: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
    {
      tag: "Growth",
      title: "SEO & Performance",
      desc: "Optimized for speed and search engines from day one. We build sites that get found.",
      icon: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
    },
    {
      tag: "Scale",
      title: "Long-Term Support",
      desc: "We stay with you after launch, offering updates and maintenance as your business grows.",
      icon: <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />,
    },
    {
      tag: "ROI",
      title: "Business-Oriented",
      desc: "We focus on lead generation and trust. We build tools that help your business make money.",
      icon: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
  ];

  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block text-[var(--color-accent)] font-bold text-xs uppercase tracking-[0.3em] mb-6"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-[var(--color-text)] tracking-tight leading-[1.1]"
          >
            We build digital foundations for <span className="text-[var(--color-text-muted)] font-light italic">Indian success stories.</span>
          </motion.h2>
        </div>

        {/* Structural Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 border-t border-[var(--color-border)] md:grid-cols-2 lg:grid-cols-3"
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`group relative p-8 md:p-12 border-b border-[var(--color-border)] 
                ${index % 3 !== 2 ? "lg:border-r" : ""} 
                ${index % 2 !== 1 ? "md:border-r lg:md:border-r-0" : "md:border-r-0 lg:border-r"}
                transition-colors duration-500 hover:bg-[var(--color-surface)]`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] opacity-80 group-hover:opacity-100 transition-opacity">
                    {point.tag}
                  </span>
                  <div className="text-[var(--color-text-muted)] opacity-30 group-hover:opacity-100 group-hover:text-[var(--color-accent)] transition-all duration-500">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      {point.icon}
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[var(--color-text)] mb-4 tracking-tight">
                  {point.title}
                </h3>

                <p className="text-sm leading-relaxed text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors duration-500">
                  {point.desc}
                </p>
                
                {/* Visual Decorative Line */}
                <div className="mt-8 w-6 h-[1px] bg-[var(--color-border)] group-hover:w-full group-hover:bg-[var(--color-accent)] transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Clean Text-Only Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex items-center gap-3 text-sm text-[var(--color-text-muted)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
          </span>
          <p>
            Trusted by <span className="text-[var(--color-text)] font-semibold">50+ local businesses</span> across the Indian market.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
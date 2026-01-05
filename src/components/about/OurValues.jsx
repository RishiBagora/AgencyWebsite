import { motion } from "framer-motion";

const VALUES = [
  {
    title: "Transparency",
    description: "Clear communication, honest timelines, and no hidden costs. You always know the 'what' and 'why' of your project.",
    // FIXED: Wrapped multiple paths in Fragment
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </>
    ),
  },
  {
    title: "Quality Over Shortcuts",
    description: "We don’t rush or compromise. Every pixel and line of code is optimized for long-term reliability and high performance.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.006 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946 1.006 3.42 3.42 0 013.138 3.138 3.42 3.42 0 001.006 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-1.006 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946 1.006 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-1.006 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-1.006-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 001.006-1.946 3.42 3.42 0 013.138-3.138z" />,
  },
  {
    title: "Business-First Thinking",
    description: "Our tech decisions align with your ROI. We build solutions that solve business problems, not just look pretty.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
  },
  {
    title: "Accountability",
    description: "We take full ownership of our delivery. We stand by our work long after the launch, ensuring your peace of mind.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
  {
    title: "Long-Term Partnership",
    description: "We don't do one-offs. We invest in relationships that help your brand evolve in an ever-changing digital landscape.",
    // FIXED: Multiple paths in Fragment
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
  },
];

function OurValues() {
  return (
    <section className="bg-[var(--color-bg)] py-16 md:py-24 overflow-hidden relative">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,var(--color-accent-soft)_0%,transparent_50%)] opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header - Sleek & Compact */}
        <div className="max-w-xl mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[9px] uppercase tracking-[0.4em] font-black text-[var(--color-accent)] mb-3 block"
          >
            Our Principles
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-[var(--color-text)] leading-tight"
          >
            The Values Behind <br />
            <span className="text-[var(--color-accent)] italic">Every Project</span>
          </motion.h2>

          <p className="mt-4 text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed">
            A responsible approach to digital growth, focused on integrity and excellence.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {VALUES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col p-8 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] transition-all duration-500"
            >
              {/* Icon Container */}
              <div className="mb-6 h-11 w-11 rounded-xl bg-[var(--color-bg-soft)] text-[var(--color-accent)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-500">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  {item.icon}
                </svg>
              </div>

              <h3 className="text-lg font-bold text-[var(--color-text)] tracking-tight">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {item.description}
              </p>
              
              {/* Ghost Numbering */}
              <span className="absolute bottom-6 right-8 text-3xl font-black text-[var(--color-text)] opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurValues;
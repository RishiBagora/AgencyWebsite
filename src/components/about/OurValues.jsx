import { motion } from "framer-motion";

const VALUES = [
  {
    title: "Transparency",
    description: "Honest timelines and zero hidden costs. You stay informed on the 'what' and 'why' of every decision.",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </>
    ),
  },
  {
    title: "Quality First",
    description: "We don’t rush. Every line of code is engineered for long-term reliability and performance.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.006 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946 1.006 3.42 3.42 0 013.138 3.138 3.42 3.42 0 001.006 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-1.006 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946 1.006 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-1.006 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-1.006-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 001.006-1.946 3.42 3.42 0 013.138-3.138z" />,
  },
  {
    title: "ROI Focused",
    description: "Technology must serve the bottom line. We build solutions that solve real business problems.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
  },
  {
    title: "Accountability",
    description: "We take full ownership. We stand by our work long after the launch, ensuring peace of mind.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
  {
    title: "Partnership",
    description: "We don't do one-offs. We invest in relationships that help your brand evolve digitally.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
  },
];

function OurValues() {
  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-40 overflow-hidden relative">
      {/* Structural Accent Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header - Editorial Style */}
        <div className="max-w-3xl mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-[1px] w-12 bg-[var(--color-accent)]" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[var(--color-accent)]">
              Foundation
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold tracking-tighter text-[var(--color-text)] leading-[0.9] mb-10"
          >
            The values behind <br />
            <span className="text-[var(--color-text-muted)] italic font-light">every precision build.</span>
          </motion.h2>

          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-xl font-medium leading-relaxed">
            A strategic approach to digital growth, where integrity meets high-performance engineering.
          </p>
        </div>

        {/* Values Grid - Border-Only Minimalist */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--color-border)]">
          {VALUES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative p-10 md:p-14 border-r border-b border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors duration-500"
            >
              {/* Symbolic Top Numbering */}
              <div className="mb-12 flex justify-between items-start">
                 <span className="text-[10px] font-mono text-[var(--color-accent)] opacity-50 group-hover:opacity-100 transition-opacity">
                    0{i + 1} // CODE_0{i + 1}
                 </span>
                 <div className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors duration-500">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      {item.icon}
                    </svg>
                 </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text)] tracking-tight mb-4 group-hover:translate-x-1 transition-transform duration-500">
                {item.title}
              </h3>

              <p className="text-sm md:text-base leading-relaxed text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors duration-500">
                {item.description}
              </p>
              
              {/* Bottom Decorative Bar */}
              <div className="mt-12 h-[1px] w-8 bg-[var(--color-border)] group-hover:w-full group-hover:bg-[var(--color-accent)] transition-all duration-700" />
            </motion.div>
          ))}
          
          {/* Final "Empty" Box for Grid Balance - Typical Agency Move */}
          <div className="hidden lg:flex p-10 md:p-14 border-r border-b border-[var(--color-border)] items-center justify-center bg-[var(--color-bg-soft)] opacity-40 italic text-xs text-[var(--color-text-muted)] tracking-widest uppercase">
             Principles of Excellence
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurValues;
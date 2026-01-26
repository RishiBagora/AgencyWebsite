import { motion } from "framer-motion";

const STEPS = [
  { number: "01", title: "Understand", desc: "Deep dive into your business goals and audience behavior." },
  { number: "02", title: "Plan", desc: "Defining architecture, technical stack, and clear roadmaps." },
  { number: "03", title: "Design", desc: "User-centric interfaces that reflect your brand identity." },
  { number: "04", title: "Build", desc: "High-performance engineering with clean, scalable code." },
  { number: "05", title: "Support", desc: "Post-launch monitoring and strategic growth updates." },
];

function ProcessSnapshot() {
  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32 items-end">
          <div className="lg:col-span-8">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[var(--color-accent)] font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block"
            >
              The Method
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-bold text-[var(--color-text)] tracking-tighter leading-[0.9]"
            >
              Strategic <br />
              <span className="text-[var(--color-text-muted)] italic font-light">Execution.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed font-medium opacity-80">
              A roadmap engineered for clarity, speed, and long-term business scalability.
            </p>
          </div>
        </div>

        {/* Process Flow - Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.1,
              }}
              className="group relative"
            >
              {/* Massive Number - Acting as Background */}
              <div className="relative mb-10 overflow-hidden">
                <span className="text-7xl md:text-8xl font-black text-[var(--color-text)] opacity-[0.03] group-hover:opacity-[0.08] group-hover:text-[var(--color-accent)] transition-all duration-700 tabular-nums inline-block">
                  {step.number}
                </span>
                {/* Horizontal Accent on Hover */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--color-accent)] group-hover:w-full transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)] max-w-[180px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSnapshot;
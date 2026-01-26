import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const trackVariant = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1, 
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 } 
  },
};

export default function ProcessSnapshot() {
  const steps = [
    { step: "01", title: "Discovery", desc: "Mapping your vision, audience, and revenue goals." },
    { step: "02", title: "Strategy", desc: "Defining architectural roadmaps and tech stacks." },
    { step: "03", title: "Design", desc: "Crafting intuitive, conversion-led digital experiences." },
    { step: "04", title: "Build", desc: "High-speed engineering with meticulous quality audits." },
    { step: "05", title: "Growth", desc: "Seamless deployment and proactive performance scaling." },
  ];

  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-32 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E72F2E] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-32 max-w-3xl"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#E72F2E] mb-6 block">
            Execution Roadmap
          </span>
          <h2 className="font-heading text-4xl md:text-7xl font-bold tracking-tighter text-[var(--color-text)] leading-[0.9]">
            A structured path from <br />
            <span className="text-[#E72F2E] italic font-light underline decoration-[#E72F2E]/20 underline-offset-[12px]">Concept to Scale</span>
          </h2>
          <p className="mt-10 text-lg md:text-xl text-[var(--color-text-muted)] font-medium max-w-xl leading-relaxed opacity-80">
            We bridge the gap between complex engineering and predictable business outcomes through a transparent five-stage sprint.
          </p>
        </motion.div>

        {/* The Process Track */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Main Connection Line (Desktop) */}
          <motion.div 
            variants={trackVariant}
            className="hidden lg:block absolute top-[60px] left-0 right-0 h-[1px] bg-[var(--color-border)] origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-4 relative">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="group relative"
              >
                {/* Visual Connector Dot (Desktop) */}
                <div className="hidden lg:flex absolute top-[53px] left-1/2 -translate-x-1/2 z-30 h-4 w-4 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] items-center justify-center transition-all duration-500 group-hover:border-[#E72F2E] group-hover:scale-125">
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-border)] group-hover:bg-[#E72F2E] transition-colors" />
                </div>

                <div className="
                  h-full flex flex-col
                  rounded-[2.5rem]
                  border border-[var(--color-border)]
                  bg-[var(--color-surface)]
                  p-8 md:p-10 lg:mt-24
                  transition-all duration-700
                  hover:border-[#E72F2E]/30
                  hover:shadow-[0_20px_50px_rgba(231,47,46,0.04)]
                  relative overflow-hidden
                ">
                  {/* Glass Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E72F2E]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Step Index */}
                  <span className="text-sm font-black text-[#E72F2E] mb-6 block tracking-widest tabular-nums">
                    STEP // {item.step}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text)] tracking-tight mb-4 transition-colors group-hover:text-[#E72F2E]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)] opacity-70 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>

                  {/* Ghost Backdrop Number */}
                  <span className="absolute -bottom-4 -right-2 text-7xl font-black text-[var(--color-text)] opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 select-none">
                    {item.step}
                  </span>
                </div>

                {/* Arrow (Desktop Only) - Now more subtle and integrated */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-[53px] -translate-y-1/2 z-20 opacity-10 transition-opacity duration-500">
                     <svg className="w-8 h-8 text-[var(--color-border)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                     </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-10 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
            Quality Assured / ISO Standards Based Flow
          </p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text)]">
              Current Lead Time: 4-6 Weeks
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
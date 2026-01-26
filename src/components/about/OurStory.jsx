import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const STORY = [
  {
    title: "The Problem We Noticed",
    subtitle: "A Market of Empty Aesthetics",
    text: "We saw businesses investing in websites that looked good but failed to deliver results. Poor performance and lack of strategy were costing brands real revenue.",
  },
  {
    title: "The Gap in the Market",
    subtitle: "Deliverables vs. Outcomes",
    text: "Most agencies focused only on 'launching' a site, not growing a business. Clients were left with digital assets they didn't know how to use.",
  },
  {
    title: "Our Mission",
    subtitle: "Architecture for Growth",
    text: "We decided to treat websites as high-performance business tools. Every pixel and line of code we write today is engineered for speed, clarity, and long-term value.",
  },
];

function OurStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="bg-[var(--color-bg)] py-24 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Minimalist Header */}
        <div className="max-w-3xl mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[var(--color-accent)] font-bold text-xs uppercase tracking-[0.3em] mb-6 block"
          >
            The Genesis
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-[var(--color-text)] tracking-tighter leading-[0.95]"
          >
            Built for purpose, <br />
            <span className="text-[var(--color-text-muted)] italic font-light">not just projects.</span>
          </motion.h2>
        </div>

        {/* Narrative Flow */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Progress Track (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center relative">
            <div className="h-full w-[1px] bg-[var(--color-border)] relative">
              <motion.div 
                style={{ scaleY, originY: 0 }}
                className="absolute top-0 left-0 w-full h-full bg-[var(--color-accent)] shadow-[0_0_15px_var(--color-accent)]"
              />
            </div>
          </div>

          {/* Chapters */}
          <div className="lg:col-span-11 space-y-32">
            {STORY.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
              >
                {/* Numbering */}
                <div className="md:col-span-2">
                  <span className="text-6xl md:text-8xl font-black text-[var(--color-text)] opacity-10 tabular-nums">
                    0{i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-10 lg:col-span-8">
                  <h3 className="text-[var(--color-accent)] font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                    {item.subtitle}
                  </h3>
                  <h4 className="text-2xl md:text-4xl font-bold text-[var(--color-text)] mb-6 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-lg md:text-xl leading-relaxed text-[var(--color-text-muted)] font-medium max-w-2xl">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Signature */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 pt-12 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-sm font-medium text-[var(--color-text-muted)] italic">
            "We don't just build websites; we build the future of your business."
          </p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text)]">
              Treating every brand like our own.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default OurStory;
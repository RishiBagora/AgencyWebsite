import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";

const STEPS = [
  { title: "Discovery", subtitle: "Goal Alignment", desc: "Detailed discussion to understand your business, audience, and objectives." },
  { title: "Strategy", subtitle: "Roadmap Creation", desc: "Defining structure, features, and timelines for absolute transparency." },
  { title: "Design", subtitle: "UI/UX Experience", desc: "Clean, conversion-focused designs tailored specifically for your target audience." },
  { title: "Development", subtitle: "High Performance", desc: "Building with speed, SEO readiness, and security as core foundations." },
  { title: "Quality", subtitle: "Rigorous Testing", desc: "Cross-device testing and performance optimization before any approval." },
  { title: "Launch", subtitle: "Ongoing Growth", desc: "Post-launch support and maintenance to keep you scaling." },
];

function ProcessTimeline() {
  const containerRef = useRef(null);
  
  // 1. High-precision scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // 2. Spring physics for the progress line (removes jitter from line movement)
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="bg-[var(--color-bg)] py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mb-24">
          <motion.span className="text-[var(--color-accent)] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
            Workflow
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-text)] tracking-tighter">
            Our <span className="text-[var(--color-accent)] italic">Proven</span> Process
          </h2>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* TRACKER COLUMN */}
          <div className="hidden lg:flex lg:col-span-1 justify-center relative">
            <div className="h-full w-[1px] bg-[var(--color-border)] relative">
              <motion.div 
                style={{ scaleY, originY: 0 }}
                className="absolute top-0 left-0 w-full h-full bg-[var(--color-accent)] transform-gpu"
              />
            </div>
          </div>

          {/* CONTENT COLUMN */}
          <div className="col-span-1 lg:col-span-11 space-y-40 lg:pb-[30vh]">
            {STEPS.map((step, index) => (
              <StepItem key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index }) {
  const itemRef = useRef(null);
  
  // 3. Track scroll progress specifically for this card
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center", "end start"]
  });

  // 4. Transform values smoothly based on scroll position
  // This happens on the GPU, not via React State
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.2, 1, 1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.95, 1, 1, 0.95]);
  const blurValue = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["blur(2px)", "blur(0px)", "blur(0px)", "blur(2px)"]);

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity, scale, filter: blurValue }}
      className="relative will-change-transform transform-gpu"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
        {/* Numbering */}
        <div className="shrink-0">
          <span className="text-7xl md:text-9xl font-black text-[var(--color-text)] opacity-10 tabular-nums">
            0{index + 1}
          </span>
        </div>

        {/* Text */}
        <div className="pt-4">
          <h3 className="text-2xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            {step.title}
          </h3>
          <p className="text-[var(--color-accent)] font-bold mb-6 tracking-widest uppercase text-xs">
            {step.subtitle}
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-[var(--color-text-muted)] max-w-2xl">
            {step.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ProcessTimeline;
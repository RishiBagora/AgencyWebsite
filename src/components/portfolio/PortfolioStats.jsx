import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ---------------- COUNT UP LOGIC ---------------- */
function CountUp({ end, suffix = "", duration = 1500, shouldStart }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smooth finish
      const easeOutQuad = (t) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(progress) * end);
      
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, shouldStart]);

  return <span className="tabular-nums">{count}{suffix}</span>;
}

/* ---------------- DATA ---------------- */
const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 12, suffix: "+", label: "Industries Served" },
  { value: 90, suffix: "%", label: "Repeat Clients" },
  { value: 100, suffix: "%", label: "Commitment" },
];

export default function PortfolioStats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="bg-white py-20 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Minimal Grid - No Borders, No Heavy Background */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              {/* Animated Value */}
              <div className="text-4xl md:text-5xl font-black tracking-tighter text-[var(--color-accent)] mb-2">
                <CountUp 
                  end={stat.value} 
                  suffix={stat.suffix} 
                  shouldStart={isInView} 
                />
              </div>

              {/* Minimal Label */}
              <div className="flex items-center gap-2">
                <div className="h-1 w-4 bg-orange-500 rounded-full hidden lg:block" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
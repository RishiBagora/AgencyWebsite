import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const STATS = [
  { value: 10, suffix: "+", label: "Projects Delivered", description: "Across diverse industries." },
  { value: 1, suffix: "+", label: "Years Experience", description: "Design and development." },
  { value: "Pan-India", suffix: "", label: "Client Presence", description: "Serving multiple states." },
  { value: "Long-Term", suffix: "", label: "Relationships", description: "Built on ongoing trust." },
];

function CountUp({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, { stiffness: 45, damping: 20 });
  const displayValue = useTransform(springValue, (v) => Math.floor(v));

  useEffect(() => {
    if (isInView && typeof value === "number") springValue.set(value);
  }, [isInView, value, springValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

function TrustStats() {
  return (
    <section className="bg-[var(--color-bg)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Simplified Header */}
        <header className="mb-20 border-l-2 border-[var(--color-accent)] pl-6">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[var(--color-text)]">
            The impact of <span className="font-semibold text-[var(--color-accent)]">consistency</span>.
          </h2>
        </header>

        {/* Minimal Grid */}
        <div className="grid grid-cols-2 gap-y-16 gap-x-4 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative lg:border-r last:border-r-0 border-[var(--color-border)] pr-4"
            >
              {/* Value */}
              <div className="text-3xl md:text-4xl font-medium tracking-tighter text-[var(--color-text)] tabular-nums">
                {typeof stat.value === "number" ? (
                  <>
                    <CountUp value={stat.value} />
                    <span className="text-[var(--color-accent)]">{stat.suffix}</span>
                  </>
                ) : (
                  <span className="text-2xl md:text-3xl">{stat.value}</span>
                )}
              </div>

              {/* Label & Description */}
              <div className="mt-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)] max-w-[180px] leading-snug">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustStats;
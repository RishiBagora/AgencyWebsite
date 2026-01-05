import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const STATS = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across different industries and business sizes",
    animate: true,
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of Experience",
    description: "Hands-on experience in design and development",
    animate: true,
  },
  {
    value: "Pan-India",
    suffix: "",
    label: "Client Presence",
    description: "Serving businesses across multiple states",
    animate: false,
  },
  {
    value: "Long-Term",
    suffix: "",
    label: "Client Relationships",
    description: "Built on trust, results, and ongoing support",
    animate: false,
  },
];

function CountUp({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 900;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

 function TrustStats() {
  return (
    <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* Optional Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-semibold text-[var(--color-accent)]">
            Our Experience
          </span>

          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            Proven Experience You Can{" "}
            <span className="text-[var(--color-accent)]">Trust</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="px-4"
            >
              {/* Value */}
              <div className="text-4xl font-bold text-[var(--color-accent)]">
                {stat.animate ? (
                  <CountUp value={stat.value} suffix={stat.suffix} />
                ) : (
                  <span>{stat.value}</span>
                )}
              </div>

              {/* Label */}
              <p className="mt-3 text-sm font-semibold text-[var(--color-text)]">
                {stat.label}
              </p>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrustStats
// import { motion, useInView } from "framer-motion"; 
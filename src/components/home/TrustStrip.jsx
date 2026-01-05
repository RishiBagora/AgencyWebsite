import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const STATS = [
  {
    label: "50+",
    title: "Projects Delivered",
    desc: "Trusted by growing businesses",
    icon: (
      <path d="M13 10V3L4 14h7v7l9-11h-7z" /> // Lightning/Success icon
    ),
  },
  {
    label: "28+",
    title: "Cities Covered",
    desc: "Pan-India presence & support",
    icon: (
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /> // Map pin icon
    ),
  },
  {
    label: "99%",
    title: "Uptime & Support",
    desc: "Quick & reliable delivery",
    icon: (
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> // Shield icon
    ),
  },
];

function TrustStrip() {
  return (
    <section className="relative bg-[var(--color-bg)] py-10 md:py-16">
      {/* Subtle Divider Lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]/50"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-8 group transition-colors hover:bg-[var(--color-surface)]/30"
            >
              {/* Animated Icon Circle */}
              <div className="relative mb-6">
                <div className="absolute -inset-2 rounded-full bg-[var(--color-accent)] opacity-0 blur-sm group-hover:opacity-20 transition-opacity" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-accent)] shadow-sm group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-all">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {stat.icon}
                  </svg>
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-3xl font-extrabold tracking-tight text-[var(--color-text)]">
                {stat.label}
              </h3>
              <p className="mt-2 text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]">
                {stat.title}
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)] max-w-[200px]">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TrustStrip;
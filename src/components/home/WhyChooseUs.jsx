import { motion } from "framer-motion";

/* animation system (same language as other sections) */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

function WhyChooseUs() {
  const points = [
    {
      title: "Indian Market Expertise",
      desc: "We understand Indian customers, pricing sensitivity, and local business behavior, and build websites that convert accordingly.",
    },
    {
      title: "Transparent Pricing & Process",
      desc: "Clear communication, honest pricing, and no hidden costs. You always know what you are paying for.",
    },
    {
      title: "Fast & Reliable Delivery",
      desc: "Structured workflows and realistic timelines ensure timely delivery without compromising quality.",
    },
    {
      title: "SEO & Performance Focused",
      desc: "Every website is optimized for speed, SEO, and performance from day one, not as an afterthought.",
    },
    {
      title: "Long-Term Support & Maintenance",
      desc: "We stay with you after launch, offering ongoing support, updates, and improvements as your business grows.",
    },
    {
      title: "Business-Oriented Approach",
      desc: "We don’t just design websites — we focus on lead generation, trust-building, and real business results.",
    },
  ];

  return (
    <section className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-28">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-[var(--color-text)] md:text-4xl">
            Why Businesses Choose Us
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-muted)]">
            We don’t just build websites — we focus on trust, results, and
            long-term partnerships with Indian businesses.
          </p>
        </motion.div>

        {/* Points Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                flex flex-col
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
                p-8
                will-change-transform
              "
            >
              {/* Icon Placeholder */}
              <div
                className="
                  mb-6 flex h-10 w-10 items-center justify-center
                  border border-[var(--color-border)]
                "
              >
                <span className="h-2 w-2 bg-[var(--color-accent)]"></span>
              </div>

              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                {point.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Reassurance Line */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
          className="mt-16 text-center text-sm text-[var(--color-text-muted)]"
        >
          Trusted by businesses across India for reliable and result-driven
          digital solutions.
        </motion.p>
      </div>
    </section>
  );
}

export default WhyChooseUs;

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import servicesData from "../../data/servicesData";

/* animations */
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

function ProcessTimeline() {
  const { serviceSlug } = useParams();

  const service = servicesData.find(
    (item) => item.slug === serviceSlug
  );

  if (!service || !service.processTimeline) return null;

  return (
    <section className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h2 className="font-heading text-2xl font-bold text-[var(--color-text)] md:text-3xl">
            Our <span className="text-[var(--color-accent)]">Process</span>
          </h2>

          <p className="mt-4 text-base text-[var(--color-text-muted)]">
            We follow a clear, structured process so you always know
            what’s happening and what comes next.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="
            relative mt-20
            space-y-10
            border-l border-[var(--color-border)]
            pl-8
            md:pl-10
          "
        >
          {service.processTimeline.map((step, index) => (
            <motion.li
              key={index}
              variants={item}
              className="relative"
            >
              {/* Dot */}
              <span
                className="
                  absolute -left-[11px] top-1
                  flex h-5 w-5 items-center justify-center
                  rounded-full
                  bg-[var(--color-accent)]
                  text-white
                  text-xs font-semibold
                "
              >
                {index + 1}
              </span>

              {/* Card */}
              <div
                className="
                  rounded-md
                  border border-[var(--color-border)]
                  bg-[var(--color-surface)]
                  p-5
                "
              >
                <h3 className="text-sm font-semibold text-[var(--color-text)]">
                  {step}
                </h3>
              </div>
            </motion.li>
          ))}
        </motion.ol>

      </div>
    </section>
  );
}

export default ProcessTimeline;

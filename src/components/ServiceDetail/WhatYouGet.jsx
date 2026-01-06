import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import servicesData from "../../data/servicesData";

/* animations */
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

function WhatYouGet() {
  const { serviceSlug } = useParams();

  const service = servicesData.find(
    (item) => item.slug === serviceSlug
  );

  if (!service || !service.whatYouGet) return null;

  return (
    <section className="bg-[var(--color-bg-muted)]">
      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h2 className="font-heading text-2xl font-bold text-[var(--color-text)] md:text-3xl">
            What You <span className="text-[var(--color-accent)]">Get</span>
          </h2>

          <p className="mt-4 text-base text-[var(--color-text-muted)]">
            We keep things transparent. Here’s exactly what is included
            when you choose this service.
          </p>
        </motion.div>

        {/* Deliverables Grid */}
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="
            mt-16
            grid grid-cols-1 gap-6
            sm:grid-cols-2
          "
        >
          {service.whatYouGet.map((itemText, index) => (
            <motion.li
              key={index}
              variants={item}
              className="
                flex items-start gap-4
                rounded-md
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
                p-5
              "
            >
              {/* Check icon */}
              <span
                className="
                  mt-1 flex h-5 w-5 items-center justify-center
                  rounded-full
                  bg-[var(--color-accent)]
                  text-white
                  text-xs
                  flex-shrink-0
                "
              >
                ✓
              </span>

              <p className="text-sm text-[var(--color-text)]">
                {itemText}
              </p>
            </motion.li>
          ))}
        </motion.ul>

      </div>
    </section>
  );
}

export default WhatYouGet;

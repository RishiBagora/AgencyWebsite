import { motion } from "framer-motion";

/* animation configs */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 16,
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

function TrustStrip() {
  return (
    <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-3"
        >
          
          {/* ITEM 1 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              flex flex-col items-center
              rounded-md
              px-6 py-6
              bg-transparent
              will-change-transform
            "
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-soft)]">
              <span className="h-3 w-3 rounded-full bg-[var(--color-accent)]"></span>
            </div>
            <p className="text-lg font-semibold text-[var(--color-text)]">
              50+ Projects Delivered
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Trusted by growing businesses
            </p>
          </motion.div>

          {/* ITEM 2 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              flex flex-col items-center
              rounded-md
              px-6 py-6
              bg-transparent
              will-change-transform
            "
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-soft)]">
              <span className="h-3 w-3 rounded-full bg-[var(--color-accent)]"></span>
            </div>
            <p className="text-lg font-semibold text-[var(--color-text)]">
              Clients Across India
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Pan-India presence & support
            </p>
          </motion.div>

          {/* ITEM 3 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              flex flex-col items-center
              rounded-md
              px-6 py-6
              bg-transparent
              will-change-transform
            "
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-soft)]">
              <span className="h-3 w-3 rounded-full bg-[var(--color-accent)]"></span>
            </div>
            <p className="text-lg font-semibold text-[var(--color-text)]">
              Fast Turnaround Time
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Quick & reliable delivery
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default TrustStrip;

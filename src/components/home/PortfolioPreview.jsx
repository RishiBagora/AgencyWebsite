import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import portfolioData from "../../data/portfolioData";

/* animation system */
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
    y: 22,
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

function PortfolioPreview() {
  // 🔹 show only first 3 projects for preview
  const projects = portfolioData.slice(0, 3);

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
            Our <span className="text-[var(--color-accent)]">Work</span>
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-muted)]">
            A glimpse of websites we’ve designed and developed for businesses
            across different industries.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id || index}
              variants={item}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                group
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
                overflow-hidden
                will-change-transform
                hover:border-[var(--color-accent)]
              "
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} website project`}
                  loading="lazy"
                  className="
                    h-full w-full object-cover
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />

                {/* ACCENT TINT OVERLAY */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-[var(--color-accent)]
                    opacity-0
                    transition-opacity duration-300
                    group-hover:opacity-[0.08]
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-[var(--color-accent)]">
                  {project.category}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-[var(--color-text)]">
                  {project.title}
                </h3>

                <Link
                  to={`/portfolio/${project.slug}`}
                  className="
                    mt-4 inline-flex items-center
                    text-sm font-medium
                    text-[var(--color-text)]
                    hover:text-[var(--color-accent)]
                  "
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
          className="mt-16 flex justify-center"
        >
          <Link
            to="/portfolio"
            className="
              inline-flex items-center justify-center
              px-7 py-3.5
              text-sm font-semibold
              text-white
              bg-[var(--color-accent)]
              border border-[var(--color-accent)]
              hover:bg-[var(--color-accent-dark)]
              transition-colors
            "
          >
            View Full Portfolio
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default PortfolioPreview;

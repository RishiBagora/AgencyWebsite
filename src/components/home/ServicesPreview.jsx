import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

function ServicesPreview() {
  const services = [
    {
      title: "Website Development",
      desc: "Fast, responsive and SEO-friendly websites built to convert visitors into real business leads.",
      link: "/services/website-development",
    },
    {
      title: "E-Commerce Solutions",
      desc: "Secure and scalable online stores designed for smooth customer experience and higher sales.",
      link: "/services/ecommerce",
    },
    {
      title: "SEO & Digital Marketing",
      desc: "Result-driven strategies to improve visibility, generate traffic and grow your business online.",
      link: "/services/seo-digital-marketing",
    },
    {
      title: "Graphic Design & Branding",
      desc: "Professional branding and design that builds credibility and strengthens brand identity.",
      link: "/services/branding",
    },
    {
      title: "Website Maintenance & Support",
      desc: "Ongoing updates, security and support to keep your website running smoothly at all times.",
      link: "/services/maintenance",
    },
  ];

  return (
    <section className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-[var(--color-text)] md:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-muted)]">
            End-to-end digital solutions designed for Indian businesses that
            want growth, reliability, and long-term results.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="
                flex flex-col
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
                p-8
                transition-colors
                hover:border-[var(--color-accent)]
              "
            >
              {/* Icon */}
              <div
                className="
                  mb-6 h-10 w-10
                  border border-[var(--color-border)]
                  flex items-center justify-center
                "
              >
                <span className="h-2 w-2 bg-[var(--color-accent)]"></span>
              </div>

              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {service.desc}
              </p>

              <Link
                to={service.link}
                className="
                  mt-6 inline-flex items-center
                  text-sm font-medium
                  text-[var(--color-text)]
                  hover:text-[var(--color-accent)]
                "
              >
                Know More →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesPreview;

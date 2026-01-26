import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Simple, snappy transition
const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1], // Clean cubic-bezier for a "clicky" feel
    },
  }),
};

export default function ServicesList() {
  const services = [
    {
      service_id: "website-development",
      service_name: "Web Development",
      short_intro: "High-performance architecture.",
      description: "Engineering high-speed, SEO-optimized digital foundations using React and Next.js.",
    },
    {
      service_id: "ecommerce",
      service_name: "E-Commerce",
      short_intro: "Conversion-first stores.",
      description: "Scalable online stores with secure payment integration and seamless shopping flows.",
    },
    {
      service_id: "uiux",
      service_name: "UI / UX Design",
      short_intro: "Intuitive experiences.",
      description: "Bridging aesthetics and usability to drive higher engagement and user retention.",
    },
    {
      service_id: "seo",
      service_name: "SEO & Performance",
      short_intro: "Search dominance.",
      description: "Optimizing Core Web Vitals and technical SEO to dominate search rankings.",
    },
    {
      service_id: "maintenance",
      service_name: "Maintenance",
      short_intro: "Reliable support.",
      description: "24/7 monitoring and regular updates to ensure your digital asset remains secure.",
    },
  ];

  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Minimal Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[var(--color-accent)] font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-[var(--color-text)] tracking-tighter leading-tight"
          >
            Services built for <br />
            <span className="text-[var(--color-text-muted)] italic font-light">business impact.</span>
          </motion.h2>
        </div>

        {/* Clean Row List */}
        <div className="border-t border-[var(--color-border)]">
          {services.map((service, index) => (
            <motion.div
              key={service.service_id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group border-b border-[var(--color-border)] transition-colors duration-300 hover:bg-[var(--color-surface)]/30"
            >
              <Link 
                to={`/services/${service.service_id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 md:py-14 items-center"
              >
                {/* 01. Small Number */}
                <div className="lg:col-span-1">
                  <span className="text-xs font-bold text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                {/* 02. Service Title */}
                <div className="lg:col-span-4">
                  <h3 className="text-2xl md:text-4xl font-bold text-[var(--color-text)] group-hover:translate-x-1 transition-transform duration-300">
                    {service.service_name}
                  </h3>
                  <p className="text-[9px] uppercase tracking-widest font-bold text-[var(--color-accent)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {service.short_intro}
                  </p>
                </div>

                {/* 03. Brief Description */}
                <div className="lg:col-span-5">
                  <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed max-w-sm group-hover:text-[var(--color-text)] transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* 04. Minimal Action Icon */}
                <div className="lg:col-span-2 flex justify-start lg:justify-end">
                  <div className="h-10 w-10 rounded-full border border-[var(--color-border)] flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--color-text)] group-hover:text-[var(--color-bg)] group-hover:border-[var(--color-text)]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
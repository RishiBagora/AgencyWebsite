import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const SERVICES = [
  {
    title: "Website Development",
    desc: "Fast, responsive and SEO-friendly websites built to convert visitors into real business leads.",
    link: "/services/website-development",
    icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
  },
  {
    title: "E-Commerce Solutions",
    desc: "Secure and scalable online stores designed for smooth customer experience and higher sales.",
    link: "/services/ecommerce",
    icon: <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />,
  },
  {
    title: "SEO & Digital Marketing",
    desc: "Result-driven strategies to improve visibility, generate traffic and grow your business online.",
    link: "/services/seo-digital-marketing",
    icon: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
  },
  {
    title: "Graphic Design",
    desc: "Professional branding and design that builds credibility and strengthens brand identity.",
    link: "/services/branding",
    icon: <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
  },
  {
    title: "Maintenance",
    desc: "Ongoing updates, security and support to keep your website running smoothly at all times.",
    link: "/services/maintenance",
    icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
  {
    title: "Custom Web Apps",
    desc: "Tailor-made software solutions to automate your business processes and increase efficiency.",
    link: "/services/web-apps",
    icon: <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />,
  },
];

function ServicesPreview() {
  return (
    <section className="bg-[var(--color-bg-soft)] py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header - Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-[var(--color-accent)] mb-4 block">Specializations</span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-[var(--color-text)] leading-tight">
              Solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#6366f1]">Modern Growth</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md text-lg text-[var(--color-text-muted)] leading-relaxed italic border-l-2 border-[var(--color-accent)] pl-6"
          >
            From conceptual strategy to final code delivery, we scale Indian brands with high-performance digital tools.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col justify-between p-10 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[2.5rem] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(var(--color-accent-rgb),0.1)] hover:border-[var(--color-accent)]"
            >
              {/* Background Numbering */}
              <span className="absolute top-8 right-10 text-5xl font-black text-[var(--color-text)] opacity-[0.03] transition-opacity group-hover:opacity-[0.07]">
                0{index + 1}
              </span>

              <div>
                {/* Modern Icon Box */}
                <div className="mb-10 h-16 w-16 flex items-center justify-center rounded-2xl bg-[var(--color-bg-soft)] text-[var(--color-accent)] border border-[var(--color-border)] transition-all duration-500 group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_10px_20px_rgba(var(--color-accent-rgb),0.3)]">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    {service.icon}
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-[var(--color-text)] tracking-tight mb-4">
                  {service.title}
                </h3>

                <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                  {service.desc}
                </p>
              </div>

              <Link
                to={service.link}
                className="mt-12 inline-flex items-center text-xs font-black uppercase tracking-widest text-[var(--color-accent)] transition-all group-hover:gap-4 gap-2"
              >
                Explore Service 
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesPreview;
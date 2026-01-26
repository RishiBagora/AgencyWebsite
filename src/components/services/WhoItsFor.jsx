import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Clean, reliable animation variant
const cardReveal = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.1, 
      duration: 0.5, 
      ease: [0.215, 0.61, 0.355, 1] 
    },
  }),
};

export default function WhoItsFor() {
  const audiences = [
    {
      title: "SMBs",
      subtitle: "Scalable Identity",
      description: "Scale your reach with a professional and reliable digital identity built for the long term.",
    },
    {
      title: "Hotels & Resorts",
      subtitle: "Visual Stories",
      description: "Captivate guests with high-end, conversion-focused visual storytelling and booking flows.",
    },
    {
      title: "Tech Startups",
      subtitle: "Launch Velocity",
      description: "Launch fast with scalable, growth-ready, and modern architectures that grow with you.",
    },
    {
      title: "Corporate Entities",
      subtitle: "Total Trust",
      description: "Establish trust with structured, dependable, and high-performance enterprise platforms.",
    },
    {
      title: "Personal Brands",
      subtitle: "Direct Authority",
      description: "Build authority and credibility with a refined professional presence and clean design.",
    },
    {
      title: "Unique Ventures",
      subtitle: "Custom Builds",
      description: "We love unique challenges. If your project is unconventional, we have the solution.",
    },
  ];

  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Symmetric Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-[#E72F2E] mb-6 block"
          >
            Partnerships
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[var(--color-text)] leading-tight mb-8">
            Strategic digital solutions for <br />
            <span className="text-[var(--color-text-muted)] italic font-light">ambitious businesses.</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#E72F2E] mx-auto" />
        </div>

        {/* Symmetric 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardReveal}
            >
              <Link to="/contact" className="group block h-full">
                <div className="h-full p-10 md:p-12 border border-[var(--color-border)] bg-[var(--color-surface)] rounded-3xl transition-all duration-500 hover:border-[#E72F2E] hover:shadow-[0_20px_40px_rgba(231,47,46,0.05)] flex flex-col justify-between">
                  
                  <div>
                    <div className="flex justify-between items-start mb-10">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#E72F2E] py-1 px-3 border border-[#E72F2E]/20 rounded-full">
                        {item.subtitle}
                      </span>
                      <span className="text-gray-200 group-hover:text-[#E72F2E] transition-colors duration-500 text-xs">
                        / 0{i + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text)] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors duration-500">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-12 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[var(--color-text-muted)] group-hover:text-[#E72F2E] transition-all duration-500">
                    Learn More 
                    <span className="translate-x-0 group-hover:translate-x-2 transition-transform duration-500">→</span>
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
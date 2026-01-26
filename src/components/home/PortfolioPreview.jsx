import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import portfolioData from "../../data/portfolioData";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function PortfolioPreview() {
  const projects = portfolioData.slice(0, 3);

  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[var(--color-accent)] font-bold text-xs uppercase tracking-[0.3em] mb-4 block"
            >
              Selected Work
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-text)] tracking-tight"
            >
              Transforming <span className="italic font-light">ideas</span> into digital <span className="text-[var(--color-accent)]">realities</span>.
            </motion.h2>
          </div>
          
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="hidden md:block"
          >
            <Link 
              to="/portfolio" 
              className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors border-b border-[var(--color-border)] pb-1"
            >
              All Projects
            </Link>
          </motion.div>
        </div>

        {/* Minimalist Portfolio Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id || index}
              variants={item}
              className="group relative flex flex-col"
            >
              {/* Image Container */}
              <Link to={`/portfolio/${project.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-[var(--color-surface)]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Minimalist Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Case Study
                  </span>
                </div>
              </Link>

              {/* Text Metadata */}
              <div className="mt-6">
                <div className="flex items-center gap-4 mb-2">
                   <span className="h-[1px] w-8 bg-[var(--color-accent)]" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)]">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--color-text)]">
                  {project.title}
                </h3>
                
                <p className="mt-2 text-sm text-[var(--color-text-muted)] line-clamp-2 font-light">
                  {project.description || "Digital solution tailored for modern business needs."}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All (Only visible on small screens) */}
        <div className="mt-16 flex justify-center md:hidden">
           <Link 
              to="/portfolio" 
              className="px-8 py-4 border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all"
            >
              View Full Portfolio
            </Link>
        </div>

      </div>
    </section>
  );
}

export default PortfolioPreview;
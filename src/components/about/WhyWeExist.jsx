import { motion } from "framer-motion";

function WhyWeExist() {
  const points = [
    {
      title: "The Core Problem",
      desc: "Websites are often delivered as 'art' but fail as 'tools'. Strategy-less design and zero support leave businesses stranded.",
    },
    {
      title: "Our Philosophy",
      desc: "We believe a digital presence should be an asset—clear, fast, reliable, and built to solve specific business problems.",
    },
    {
      title: "Our Commitment",
      desc: "Transparency is our baseline. We build for long-term value, ensuring your platform grows alongside your revenue.",
    },
  ];

  return (
    <section className="bg-[var(--color-bg-soft)] py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT: HEADING & INTRO */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[var(--color-accent)] mb-4 block">
                Our Purpose
              </span>
              
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-[var(--color-text)] leading-[1.15]">
                Because Brands Deserve <br />
                <span className="text-[var(--color-accent)] italic underline decoration-[var(--color-accent-soft)] underline-offset-8">
                  More Than a Website
                </span>
              </h2>

              <p className="mt-8 text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-xl">
                We saw too many businesses left with confusing, unsupported platforms. 
                We exist to fix that—by treating code as a business tool, not just a visual asset.
              </p>

              <div className="mt-10 h-px w-20 bg-[var(--color-accent)] opacity-30" />
            </motion.div>
          </div>

          {/* RIGHT: SUPPORTING POINTS */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="space-y-10">
              {points.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group relative pl-8 border-l border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors duration-500"
                >
                  {/* Subtle Indicator Dot */}
                  <div className="absolute -left-[4.5px] top-0 h-2 w-2 rounded-full bg-[var(--color-border)] group-hover:bg-[var(--color-accent)] transition-colors duration-500" />
                  
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-[var(--color-text-muted)]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest italic"
            >
              Built for performance. Built for you.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyWeExist;
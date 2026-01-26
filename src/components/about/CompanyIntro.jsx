import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  })
};

function CompanyIntro() {
  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col"
          >
            <motion.span 
              variants={fadeInUp} custom={0}
              className="text-[var(--color-accent)] font-bold text-[10px] uppercase tracking-[0.4em] mb-10 block"
            >
              The Studio
            </motion.span>

            <motion.h2 
              variants={fadeInUp} custom={1}
              className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-[0.95] mb-12"
            >
              Digital <br /> 
              <span className="text-[var(--color-accent)] italic font-light">Precision.</span>
            </motion.h2>

            <motion.p 
              variants={fadeInUp} custom={2}
              className="text-lg text-gray-500 leading-relaxed max-w-sm mb-16"
            >
              We engineer high-performance digital foundations for brands that demand speed, strategy, and absolute clarity.
            </motion.p>

            {/* Metrics */}
            <div className="flex gap-12 border-t border-gray-100 pt-10">
              <motion.div variants={fadeInUp} custom={3}>
                <p className="text-[var(--color-accent)] text-2xl font-light italic leading-none mb-2">99+</p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Performance</p>
              </motion.div>
              <motion.div variants={fadeInUp} custom={4}>
                <p className="text-[var(--color-accent)] text-2xl font-light italic leading-none mb-2">ROI</p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Driven Results</p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <div className="lg:col-span-7 relative pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square md:aspect-[16/10] bg-gray-50 border border-gray-100 rounded-[2rem] overflow-hidden"
            >
              {/* Grid Background */}
              <div 
                className="absolute inset-0 opacity-[0.05]" 
                style={{ 
                  backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, 
                  backgroundSize: '40px 40px' 
                }} 
              />
              
              <div className="absolute inset-0 flex items-center justify-center p-12">
                 <div className="relative w-full h-full border border-gray-200 border-dashed rounded-xl flex items-center justify-center">
                    {/* Rotating Centerpiece */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="w-32 h-32 border border-[var(--color-accent)] opacity-20 rotate-45"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--color-accent)] bg-white px-4 py-1 border border-blue-100 shadow-sm">
                          Optimized
                        </span>
                    </div>

                    {/* Minimal Data Labels */}
                    <span className="absolute top-4 left-4 text-[8px] font-mono text-gray-400 uppercase tracking-widest">
                      System.Core_v2
                    </span>
                    <span className="absolute bottom-4 right-4 text-[8px] font-mono text-gray-400">
                      26.9124° N, 75.7873° E
                    </span>
                 </div>
              </div>

              {/* Status Dot */}
              <div className="absolute bottom-8 left-8 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                    Live Status
                 </span>
              </div>
            </motion.div>
            
            {/* Floating Signature Tag */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 hidden md:block px-6 py-4 bg-[var(--color-accent)] text-white rounded-2xl shadow-2xl"
            >
               <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">Scale Ready</p>
               <p className="text-[10px] opacity-50 font-light italic tracking-tight">Handcrafted in India</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CompanyIntro;
// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// const stagger = {
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// export default function ServicesIntro() {
//   return (
//     <section className="bg-[var(--color-bg)]">
//       <div className="mx-auto max-w-5xl px-6 py-24">

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={stagger}
//           className="text-left"
//         >
//           {/* Eyebrow */}
//           <motion.span
//             variants={fadeUp}
//             className="inline-block text-sm font-semibold tracking-wide uppercase text-[#E72F2E]"
//           >
//             What We Offer
//           </motion.span>

//           {/* Heading */}
//           <motion.h2
//             variants={fadeUp}
//             className="
//               mt-4 font-heading font-bold
//               text-3xl md:text-4xl leading-tight
//               text-[var(--color-text)]
//             "
//           >
//             Digital Services Designed to Support{" "}
//             <span className="text-[#E72F2E]">Real Business Growth</span>
//           </motion.h2>

//           {/* Paragraphs */}
//           <motion.p
//             variants={fadeUp}
//             className="
//               mt-6 max-w-3xl
//               text-base leading-relaxed
//               text-[var(--color-text-muted)]
//             "
//           >
//             Our services are designed to help businesses build a strong digital
//             foundation that supports growth, credibility, and long-term
//             performance.
//           </motion.p>

//           <motion.p
//             variants={fadeUp}
//             className="
//               mt-4 max-w-3xl
//               text-base leading-relaxed
//               text-[var(--color-text-muted)]
//             "
//           >
//             Instead of offering one-size-fits-all solutions, we focus on
//             understanding business needs and delivering services that are
//             structured, reliable, and results-driven.
//           </motion.p>

//           {/* Supporting Points */}
//           <motion.ul
//             variants={fadeUp}
//             className="mt-10 space-y-3"
//           >
//             {[
//               "Business-first approach, not template-based work",
//               "Performance, speed, and SEO built into every project",
//               "Clear scope, timelines, and transparent communication",
//             ].map((point) => (
//               <li
//                 key={point}
//                 className="
//                   flex items-start gap-3
//                   text-sm
//                   text-[var(--color-text)]
//                 "
//               >
//                 <span className="mt-2 h-2 w-2 rounded-full bg-[#E72F2E]" />
//                 <span>{point}</span>
//               </li>
//             ))}
//           </motion.ul>
//         </motion.div>

//       </div>
//     </section>
//   );
// }







//gemini////////////

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ServicesIntro() {
  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-28 overflow-hidden relative">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#E72F2E] opacity-[0.02] blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* LEFT: Branding & Heading */}
          <div className="lg:col-span-5">
            <motion.div variants={fadeUp}>
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#E72F2E] mb-4">
                What We Offer
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-[var(--color-text)] leading-[1.1]">
                Digital Services <br /> 
                Designed for <span className="text-[#E72F2E] italic">Growth</span>
              </h2>
              <div className="mt-8 h-1 w-12 bg-[#E72F2E] rounded-full" />
            </motion.div>
          </div>

          {/* RIGHT: Detailed Content */}
          <div className="lg:col-span-7 lg:pl-10 border-l border-[var(--color-border)]">
            <motion.div variants={fadeUp} className="space-y-6">
              <p className="text-base md:text-lg leading-relaxed text-[var(--color-text)] font-medium">
                Our services build a strong digital foundation that supports credibility, speed, and long-term performance.
              </p>
              
              <p className="text-sm md:text-base leading-relaxed text-[var(--color-text-muted)]">
                Instead of offering one-size-fits-all solutions, we focus on understanding your specific business needs. We deliver reliable, results-driven platforms that are structured for the competitive Indian market.
              </p>

              {/* Supporting Points - Refined List */}
              <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "No templates, purely strategic design",
                    "SEO & Speed as a standard",
                    "Transparent scope & timelines",
                    "Continuous post-launch support"
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 group"
                    >
                      <div className="h-5 w-5 rounded-full bg-[#E72F2E]/10 flex items-center justify-center group-hover:bg-[#E72F2E] transition-colors duration-300">
                        <svg className="h-3 w-3 text-[#E72F2E] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-[var(--color-text)]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
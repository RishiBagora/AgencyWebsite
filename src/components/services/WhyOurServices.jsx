// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: "easeOut" },
//   },
// };

// const stagger = {
//   visible: {
//     transition: { staggerChildren: 0.12 },
//   },
// };

// export default function WhyOurServices() {
//   const values = [
//     {
//       title: "Business-First Approach",
//       description:
//         "Every design and development decision is aligned with real business goals, not just visuals.",
//     },
//     {
//       title: "Structured Process",
//       description:
//         "Clear steps, timelines, and predictable execution from start to finish.",
//     },
//     {
//       title: "Performance & SEO Focus",
//       description:
//         "Fast-loading, mobile-first, and search-friendly websites built for long-term results.",
//     },
//     {
//       title: "Transparent Communication",
//       description:
//         "Clear scope, honest timelines, and regular updates — no surprises.",
//     },
//     {
//       title: "Long-Term Support",
//       description:
//         "We stay involved even after delivery to support growth and stability.",
//     },
//   ];

//   return (
//     <section className="bg-[var(--color-bg)]">
//       <div className="mx-auto max-w-7xl px-6 py-24">

//         <div className="grid gap-16 lg:grid-cols-12 items-start">

//           {/* LEFT CONTENT */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             className="lg:col-span-5"
//           >
//             <span className="text-sm font-semibold uppercase tracking-wide text-[#E72F2E]">
//               Why Choose Our Services
//             </span>

//             <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--color-text)]">
//               More Than Just Delivery —{" "}
//               <span className="text-[#E72F2E]">A Reliable Digital Partner</span>
//             </h2>

//             <p className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)]">
//               Our services are designed to provide clarity, consistency, and
//               long-term value — not just project delivery.
//             </p>
//           </motion.div>

//           {/* RIGHT GRID */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={stagger}
//             className="lg:col-span-7 grid gap-6 sm:grid-cols-2"
//           >
//             {values.map((item) => (
//               <motion.div
//                 key={item.title}
//                 variants={fadeUp}
//                 className="
//                   rounded-lg
//                   border border-[var(--color-border)]
//                   bg-[var(--color-surface)]
//                   p-6
//                 "
//               >
//                 <div className="mb-3 flex items-center gap-3">
//                   <span className="h-2 w-2 rounded-full bg-[#E72F2E]" />
//                   <h3 className="text-base font-semibold text-[var(--color-text)]">
//                     {item.title}
//                   </h3>
//                 </div>

//                 <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
//                   {item.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>

//         </div>

//       </div>
//     </section>
//   );
// }



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
    transition: { staggerChildren: 0.1 },
  },
};

export default function WhyOurServices() {
  const values = [
    {
      title: "Business-First",
      description: "Strategy-led design where every pixel supports your ROI and growth.",
    },
    {
      title: "Predictable Execution",
      description: "Clearly defined roadmaps with zero surprises and honest timelines.",
    },
    {
      title: "Speed & SEO Native",
      description: "Built-in optimization for lightning-fast performance and rankings.",
    },
    {
      title: "Honest Communication",
      description: "Direct access to experts and regular, transparent project updates.",
    },
    {
      title: "Active Partnership",
      description: "We don't just ship; we stay involved to ensure your long-term success.",
    },
  ];

  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-28 overflow-hidden relative">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#E72F2E] opacity-[0.02] blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 items-start">

          {/* LEFT CONTENT - Fixed/Sticky on scroll feel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#E72F2E] mb-4">
              The Difference
            </span>

            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-[var(--color-text)] leading-[1.1]">
              More Than Delivery <br />
              <span className="text-[#E72F2E] italic">A Strategic Partner</span>
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-[var(--color-text-muted)] max-w-md">
              We provide the clarity and consistency needed to turn digital presence into a measurable business asset.
            </p>
            
            <div className="mt-10 h-1 w-12 bg-[#E72F2E] rounded-full" />
          </motion.div>

          {/* RIGHT GRID - Sleek Minimalist Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="lg:col-span-7 grid gap-4 sm:grid-cols-2"
          >
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={`
                  p-8 rounded-[2rem] border border-[var(--color-border)] 
                  bg-[var(--color-surface)] hover:border-[#E72F2E] 
                  transition-all duration-500 group
                  ${i === 0 ? "sm:col-span-2" : ""} 
                `}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-2 w-2 rounded-full bg-[#E72F2E] group-hover:scale-150 transition-transform" />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-text)]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base leading-relaxed text-[var(--color-text-muted)] opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
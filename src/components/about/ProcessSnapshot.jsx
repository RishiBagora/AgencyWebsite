import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your business goals, audience, and requirements before starting.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We create a clear structure, scope, and timeline to avoid confusion later.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We design a clean, user-friendly interface aligned with your brand.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "We develop a fast, responsive, and SEO-ready website.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "We support and guide you even after the website goes live.",
  },
];

function ProcessSnapshot() {
  return (
    <section className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-28">

        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-[var(--color-accent)]">
            How We Work
          </span>

          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            A Simple, Transparent{" "}
            <span className="text-[var(--color-accent)]">Process</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
            A structured approach that keeps projects clear, predictable, and
            stress-free.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: i * 0.08,
              }}
              className="
                relative
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
                p-6
                transition-colors
                hover:border-[var(--color-accent)]
              "
            >
              {/* Step Number */}
              <div
                className="
                  mb-4
                  flex h-8 w-8 items-center justify-center
                  rounded-full
                  bg-[var(--color-accent)]
                  text-xs font-semibold text-white
                "
              >
                {step.number}
              </div>

              <h3 className="text-sm font-semibold text-[var(--color-text)]">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProcessSnapshot;

// import { motion } from "framer-motion";

// const STEPS = [
//   {
//     number: "01",
//     title: "Understand",
//     description: "Deep dive into your business goals and audience.",
//   },
//   {
//     number: "02",
//     title: "Plan",
//     description: "Structured roadmap with clear scope and timelines.",
//   },
//   {
//     number: "03",
//     title: "Design",
//     description: "Sleek, conversion-focused UI tailored for your brand.",
//   },
//   {
//     number: "04",
//     title: "Build",
//     description: "Clean code development with a focus on speed & SEO.",
//   },
//   {
//     number: "05",
//     title: "Support",
//     description: "Continuous guidance long after the site goes live.",
//   },
// ];

// function ProcessSnapshot() {
//   return (
//     <section className="bg-[var(--color-bg)] py-20 md:py-24 overflow-hidden">
//       <div className="mx-auto max-w-7xl px-6">
        
//         {/* Header - Minimal & Tight */}
//         <div className="max-w-xl mb-16 md:mb-20">
//           <motion.span 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-[9px] uppercase tracking-[0.4em] font-black text-[var(--color-accent)] mb-3 block"
//           >
//             How We Work
//           </motion.span>
//           <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-[var(--color-text)] leading-tight">
//             A Simple, Transparent <br />
//             <span className="text-[var(--color-accent)] italic">Workflow</span>
//           </h2>
//           <p className="mt-4 text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed">
//             A structured approach that keeps your project clear, predictable, and stress-free.
//           </p>
//         </div>

//         {/* Steps Grid - Connected Design */}
//         <div className="relative mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
//           {/* Subtle connecting line (Desktop Only) */}
//           <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-[var(--color-border)] -translate-y-1/2 z-0" />

//           {STEPS.map((step, i) => (
//             <motion.div
//               key={step.number}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="group relative z-10"
//             >
//               <div className="
//                 h-full flex flex-col
//                 rounded-[1.5rem]
//                 border border-[var(--color-border)]
//                 bg-[var(--color-surface)]
//                 p-6 md:p-8
//                 transition-all duration-500
//                 hover:border-[var(--color-accent)]
//                 hover:shadow-2xl hover:shadow-[var(--color-accent-soft)]
//                 hover:-translate-y-2
//               ">
//                 {/* Step Number Badge */}
//                 <div className="
//                   mb-6
//                   flex h-10 w-10 items-center justify-center
//                   rounded-xl
//                   bg-[var(--color-bg-soft)]
//                   text-xs font-black text-[var(--color-accent)]
//                   group-hover:bg-[var(--color-accent)]
//                   group-hover:text-white
//                   transition-all duration-500
//                 ">
//                   {step.number}
//                 </div>

//                 <h3 className="text-base font-bold text-[var(--color-text)] tracking-tight">
//                   {step.title}
//                 </h3>

//                 <p className="mt-2 text-xs md:text-sm leading-relaxed text-[var(--color-text-muted)]">
//                   {step.description}
//                 </p>

//                 {/* Decorative ghost number */}
//                 <span className="absolute -bottom-2 -right-1 text-5xl font-black text-[var(--color-text)] opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
//                   {step.number}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default ProcessSnapshot;
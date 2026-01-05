import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function ProcessSnapshot() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Understanding",
      description:
        "We understand your business, goals, audience, and requirements before starting any work.",
    },
    {
      step: "02",
      title: "Planning & Strategy",
      description:
        "We define scope, structure, timelines, and the right technical approach clearly.",
    },
    {
      step: "03",
      title: "Design & Experience",
      description:
        "We design clean, user-friendly interfaces aligned with your brand and users.",
    },
    {
      step: "04",
      title: "Development & Testing",
      description:
        "We build fast, responsive, and reliable solutions with proper testing.",
    },
    {
      step: "05",
      title: "Launch & Ongoing Support",
      description:
        "We launch confidently and continue supporting improvements and updates.",
    },
  ];

  return (
    <section className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* SECTION HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={item}
          className="mb-16 max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-[#E72F2E]">
            Our Process
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            A Clear, Structured Process From Start to Launch
          </h2>

          <p className="mt-4 text-base text-[var(--color-text-muted)]">
            Our process keeps projects transparent, predictable, and stress-free.
          </p>
        </motion.div>

        {/* DESKTOP / TABLET */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="relative hidden lg:grid grid-cols-5 gap-8"
        >
          {/* CONNECTING LINE */}
          <div className="absolute top-6 left-0 right-0 h-px bg-[var(--color-border)]" />

          {steps.map((step) => (
            <motion.div
              key={step.step}
              variants={item}
              className="relative"
            >
              {/* STEP DOT */}
              <div className="mb-6 flex justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E72F2E] bg-[var(--color-bg)] text-sm font-semibold text-[#E72F2E]">
                  {step.step}
                </span>
              </div>

              {/* CARD */}
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center">
                <h3 className="text-base font-semibold text-[var(--color-text)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* MOBILE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="lg:hidden space-y-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.step}
              variants={item}
              className="flex gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E72F2E] text-sm font-semibold text-[#E72F2E]">
                {step.step}
              </span>

              <div>
                <h3 className="text-base font-semibold text-[var(--color-text)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}



// import { motion } from "framer-motion";

// const container = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// export default function ProcessSnapshot() {
//   const steps = [
//     { step: "01", title: "Discovery", desc: "Understanding your vision, audience, and goals." },
//     { step: "02", title: "Strategy", desc: "Defining clear roadmaps and technical approaches." },
//     { step: "03", title: "Design", desc: "Crafting sleek, user-centric digital experiences." },
//     { step: "04", title: "Build", desc: "High-speed development with rigorous testing." },
//     { step: "05", title: "Growth", desc: "Confident launch and proactive ongoing support." },
//   ];

//   return (
//     <section className="bg-[var(--color-bg)] py-20 md:py-28 overflow-hidden relative">
//       {/* Background Decorative Gradient */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-[#E72F2E] opacity-[0.02] blur-[100px] pointer-events-none" />

//       <div className="mx-auto max-w-7xl px-6 relative z-10">
        
//         {/* Header - Refined & Tight */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-16 md:mb-24 max-w-2xl"
//         >
//           <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#E72F2E] mb-4 block">
//             Workflow
//           </span>
//           <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-[var(--color-text)] leading-tight">
//             A Structured Path From <br />
//             <span className="text-[#E72F2E] italic underline decoration-[#E72F2E]/10 underline-offset-8">Idea to Launch</span>
//           </h2>
//           <p className="mt-6 text-base text-[var(--color-text-muted)] leading-relaxed">
//             Our process keeps projects transparent, predictable, and focused on your ROI.
//           </p>
//         </motion.div>

//         {/* Steps Grid - Connected Aesthetic */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4"
//         >
//           {steps.map((item, i) => (
//             <motion.div
//               key={item.step}
//               variants={fadeUp}
//               className="group relative"
//             >
//               <div className="
//                 h-full flex flex-col
//                 rounded-[2rem]
//                 border border-[var(--color-border)]
//                 bg-[var(--color-surface)]
//                 p-8 md:p-10
//                 transition-all duration-500
//                 hover:border-[#E72F2E]
//                 hover:shadow-2xl hover:shadow-[#E72F2E]/5
//                 hover:-translate-y-2
//               ">
//                 {/* Step Number - Modern Squircle Badge */}
//                 <div className="
//                   mb-8
//                   flex h-12 w-12 items-center justify-center
//                   rounded-2xl
//                   bg-[var(--color-bg-soft)]
//                   text-xs font-black text-[#E72F2E]
//                   group-hover:bg-[#E72F2E]
//                   group-hover:text-white
//                   transition-all duration-500
//                 ">
//                   {item.step}
//                 </div>

//                 <h3 className="text-xl font-bold text-[var(--color-text)] tracking-tight">
//                   {item.title}
//                 </h3>

//                 <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)] opacity-80 group-hover:opacity-100 transition-opacity">
//                   {item.desc}
//                 </p>

//                 {/* Decorative ghost number */}
//                 <span className="absolute -bottom-2 -right-1 text-5xl font-black text-[var(--color-text)] opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
//                   {item.step}
//                 </span>
//               </div>

//               {/* Connecting Arrow (Desktop Only) */}
//               {i < steps.length - 1 && (
//                 <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
//                   <svg className="w-6 h-6 text-[#E72F2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }
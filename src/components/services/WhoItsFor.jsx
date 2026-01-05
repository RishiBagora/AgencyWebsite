// import { motion } from "framer-motion";

// const stagger = {
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: "easeOut" },
//   },
// };

// export default function WhoItsFor() {
//   const audiences = [
//     {
//       title: "Small & Medium Businesses",
//       description:
//         "Businesses looking to build a strong, professional, and reliable online presence.",
//     },
//     {
//       title: "Hotels & Resorts",
//       description:
//         "Hospitality businesses that need visually appealing and conversion-focused websites.",
//     },
//     {
//       title: "Startups",
//       description:
//         "New ventures that need scalable, flexible, and growth-ready digital solutions.",
//     },
//     {
//       title: "Corporate Websites",
//       description:
//         "Organizations that require structured, professional, and dependable web platforms.",
//     },
//     {
//       title: "Personal Brands & Professionals",
//       description:
//         "Individuals who want to build credibility, trust, and visibility online.",
//     },
//   ];

//   return (
//     <section className="bg-[var(--color-bg)]">
//       <div className="mx-auto max-w-7xl px-6 py-24">

//         {/* Header */}
//         <div className="mb-16 max-w-3xl">
//           <span className="text-sm font-semibold uppercase tracking-wide text-[#E72F2E]">
//             Who It’s For
//           </span>
//           <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--color-text)]">
//             Designed for Businesses That Want to{" "}
//             <span className="text-[#E72F2E]">Grow Online</span>
//           </h2>
//           <p className="mt-4 text-base text-[var(--color-text-muted)]">
//             Our services are flexible and scalable, making them suitable for a
//             wide range of business types and growth stages.
//           </p>
//         </div>

//         {/* Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={stagger}
//           className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
//         >
//           {audiences.map((item) => (
//             <motion.div
//               key={item.title}
//               variants={fadeUp}
//               className="
//                 rounded-lg
//                 border border-[var(--color-border)]
//                 bg-[var(--color-surface)]
//                 p-8
//               "
//             >
//               <div className="mb-4 flex items-center gap-3">
//                 <span className="h-2 w-2 rounded-full bg-[#E72F2E]" />
//                 <h3 className="text-lg font-semibold text-[var(--color-text)]">
//                   {item.title}
//                 </h3>
//               </div>

//               <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhoItsFor() {
  const audiences = [
    {
      title: "Small & Medium Businesses",
      description: "Scale your reach with a professional and reliable digital identity.",
      icon: "",
    },
    {
      title: "Hotels & Resorts",
      description: "Captivate guests with high-end, conversion-focused visual storytelling.",
      icon: "",
    },
    {
      title: "Tech Startups",
      description: "Launch fast with scalable, growth-ready, and modern architectures.",
      icon: "",
    },
    {
      title: "Corporate Entities",
      description: "Establish trust with structured, dependable, and high-performance platforms.",
      icon: "",
    },
    {
      title: "Personal Brands",
      description: "Build authority and credibility with a refined professional presence.",
      icon: "",
    },
  ];

  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-28 overflow-hidden relative">
      
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_0%_100%,var(--color-accent-soft)_0%,transparent_50%)] opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* Header - Refined & Tight */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[9px] uppercase tracking-[0.4em] font-black text-[#E72F2E] mb-4 block"
          >
            Our Expertise
          </motion.span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-[var(--color-text)] leading-tight">
            Tailored for Businesses <br />
            Ready to <span className="text-[#E72F2E] italic underline decoration-[#E72F2E]/10 underline-offset-8">Scale Up</span>
          </h2>
          <p className="mt-6 text-base text-[var(--color-text-muted)] leading-relaxed">
            From local hospitality to global startups, we provide the digital foundation needed for every stage of growth.
          </p>
        </div>

        {/* Grid - Bento Style */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {audiences.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="group relative rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10 transition-all duration-500 hover:border-[#E72F2E] hover:shadow-2xl hover:shadow-[#E72F2E]/5"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E72F2E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#E72F2E] opacity-20 group-hover:opacity-100 group-hover:scale-150 transition-all" />
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[var(--color-text)] group-hover:text-[#E72F2E] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {item.description}
                </p>
                
                <div className="mt-8 flex items-center text-[10px] font-black uppercase tracking-widest text-[#E72F2E] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                  Solutions for you →
                </div>
              </div>
            </motion.div>
          ))}

          {/* Special "Let's Talk" Card */}
          <motion.div
            variants={fadeUp}
            className="rounded-[2rem] bg-[#E72F2E] p-8 md:p-10 text-white flex flex-col justify-between shadow-xl shadow-[#E72F2E]/20"
          >
            <h3 className="text-2xl font-bold leading-tight">
              Don't see your industry here?
            </h3>
            <p className="mt-4 text-sm opacity-90 leading-relaxed">
              We love tackling unique challenges. Let's discuss your specific needs.
            </p>
            <a href="/contact" className="mt-8 inline-flex items-center justify-center py-3 px-6 rounded-xl bg-white text-[#E72F2E] text-xs font-black uppercase tracking-widest hover:bg-gray-100 transition-colors">
              Contact Us
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
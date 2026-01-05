// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// const stagger = {
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// export default function ServicesHero() {
//   return (
//     <section className="min-h-[75vh] bg-[var(--color-bg)] flex items-center">
//       <div className="mx-auto max-w-7xl px-6 py-24 w-full">
//         <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-center">

//           {/* LEFT CONTENT */}
//           <motion.div
//             className="lg:col-span-7"
//             initial="hidden"
//             animate="visible"
//             variants={stagger}
//           >
//             {/* Eyebrow */}
//             <motion.span
//               variants={fadeUp}
//               className="inline-block text-sm font-semibold tracking-wide uppercase text-[#E72F2E]"
//             >
//               Our Services
//             </motion.span>

//             {/* Heading */}
//             <motion.h1
//               variants={fadeUp}
//               className="
//                 mt-4 font-heading font-bold
//                 text-4xl md:text-5xl leading-tight
//                 text-[var(--color-text)]
//               "
//             >
//               Website & Digital Services{" "}
//               <span className="text-[#E72F2E]">
//                 Built for Business Growth
//               </span>
//             </motion.h1>

//             {/* Subheading */}
//             <motion.p
//               variants={fadeUp}
//               className="
//                 mt-6 max-w-xl
//                 text-base leading-relaxed
//                 text-[var(--color-text-muted)]
//               "
//             >
//               We provide structured, performance-focused digital services
//               designed to help businesses build trust, generate leads, and grow
//               sustainably — not just look good online.
//             </motion.p>

//             {/* Service Tags */}
//             <motion.div
//               variants={fadeUp}
//               className="mt-8 flex flex-wrap gap-3"
//             >
//               {[
//                 "Website Development",
//                 "E-Commerce Solutions",
//                 "UI / UX Design",
//                 "SEO & Optimization",
//                 "Maintenance & Support",
//               ].map((item) => (
//                 <span
//                   key={item}
//                   className="
//                     rounded-full border border-[var(--color-border)]
//                     px-4 py-1.5 text-sm
//                     text-[var(--color-text)]
//                     hover:border-[#E72F2E]
//                     transition-colors
//                   "
//                 >
//                   {item}
//                 </span>
//               ))}
//             </motion.div>

//             {/* CTAs */}
//             <motion.div
//               variants={fadeUp}
//               className="mt-10 flex flex-col gap-4 sm:flex-row"
//             >
//               <Link
//                 to="/contact"
//                 className="
//                   inline-flex items-center justify-center
//                   px-8 py-4 text-sm font-semibold
//                   text-white
//                   bg-[#E72F2E]
//                   hover:bg-[#c92827]
//                   transition-colors
//                 "
//               >
//                 Discuss Your Project
//               </Link>

//               <Link
//                 to="#services"
//                 className="
//                   inline-flex items-center justify-center
//                   px-8 py-4 text-sm font-semibold
//                   text-[var(--color-text)]
//                   border border-[var(--color-border)]
//                   hover:border-[#E72F2E]
//                   hover:text-[#E72F2E]
//                   transition-colors
//                 "
//               >
//                 View All Services
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT VISUAL */}
//           <motion.div
//             className="lg:col-span-5"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//           >
//             <div
//               className="
//                 relative rounded-md
//                 border border-[var(--color-border)]
//                 bg-[var(--color-surface)]
//                 p-4
//               "
//             >
//               <div
//                 className="
//                   aspect-[16/10]
//                   w-full
//                   bg-[#f2f2f2]
//                   flex items-center justify-center
//                   text-sm
//                   text-[var(--color-text-muted)]
//                 "
//               >
//                 Service Preview / Dashboard Mockup
//               </div>

//               {/* subtle accent */}
//               <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-[#E72F2E]/10"></span>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ServicesHero() {
  const serviceTags = [
    "Web Dev", "E-Commerce", "UI/UX", "SEO", "Maintenance", "Custom Apps"
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center bg-[var(--color-bg)] overflow-hidden pt-20">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E72F2E] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 w-full relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Minimal Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
               <span className="h-px w-8 bg-[#E72F2E]"></span>
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E72F2E]">
                 Our Specializations
               </span>
            </motion.div>

            {/* Heading - Refined Size & Tight Tracking */}
            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold text-4xl md:text-6xl leading-[1.1] tracking-tighter text-[var(--color-text)]"
            >
              Digital Solutions <br />
              <span className="text-[#E72F2E] italic underline decoration-[#E72F2E]/20 underline-offset-8">
                Built to Scale
              </span>
            </motion.h1>

            {/* Refined Subheading */}
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-lg text-base md:text-lg leading-relaxed text-[var(--color-text-muted)]"
            >
              We don't just build websites; we engineer high-performance tools that help Indian businesses automate sales and build unmatched trust.
            </motion.p>

            {/* Service Tags - Sleek Pills */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-2 md:gap-3"
            >
              {serviceTags.map((item) => (
                <span
                  key={item}
                  className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[#E72F2E] hover:text-[#E72F2E] transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Modern CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-col gap-4 sm:flex-row items-center"
            >
              <Link
                to="/contact"
                className="group relative px-8 py-4 w-full sm:w-auto text-center rounded-xl overflow-hidden bg-[#E72F2E] text-white text-sm font-bold shadow-lg shadow-[#E72F2E]/20"
              >
                <span className="relative z-10">Discuss Your Project</span>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
              </Link>

              <Link
                to="#services"
                className="px-8 py-4 w-full sm:w-auto text-center rounded-xl border border-[var(--color-border)] text-[var(--color-text)] text-sm font-bold hover:bg-[var(--color-bg-soft)] transition-all"
              >
                View Full Catalog
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL - Sleek Tech-Stack Showcase */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative p-2 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-border)] to-transparent">
              <div className="relative rounded-[2rem] overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-2xl">
                {/* Mockup Preview */}
                <div className="aspect-[4/3] rounded-xl bg-[var(--color-bg-soft)] flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#E72F2E]/10 to-transparent" />
                 <img className="rounded-2xl" src="https://i.pinimg.com/1200x/7a/35/d6/7a35d626f12e7bf088d01825a64df964.jpg" alt="" />
                </div>
              </div>

              {/* Floating Performance Tag */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white border border-[var(--color-border)] p-4 rounded-2xl shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#E72F2E]/10 flex items-center justify-center text-[#E72F2E]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-[var(--color-text-muted)] uppercase">Site Speed</p>
                    <p className="text-xs font-bold text-[var(--color-text)]">99/100 Score</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
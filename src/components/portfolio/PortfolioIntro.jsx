// import React from "react";
// import { motion } from "framer-motion";

// /* ---------------- Animations ---------------- */

// const fadeUp = {
//   hidden: { opacity: 0, y: 22 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.55,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// const stagger = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.14,
//     },
//   },
// };

// /* ---------------- Component ---------------- */

// export default function PortfolioIntro() {
//   return (
//     <section className="bg-[var(--color-background)]">
//       <div className="mx-auto max-w-4xl px-6 py-24">
//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//           className="flex flex-col"
//         >
//           {/* Eyebrow */}
//           <motion.span
//             variants={fadeUp}
//             className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--color-text-muted)]"
//           >
//             Our Approach to Work
//           </motion.span>

//           {/* Heading */}
//           <motion.h2
//             variants={fadeUp}
//             className="max-w-3xl text-balance text-3xl font-semibold leading-tight text-[var(--color-text)] sm:text-4xl"
//           >
//             Designed With Purpose, Built for Real Businesses
//           </motion.h2>

//           {/* Divider */}
//           <motion.div
//             variants={fadeUp}
//             className="mt-6 h-px w-16 bg-[var(--color-border)]"
//           />

//           {/* Paragraphs */}
//           <motion.p
//             variants={fadeUp}
//             className="mt-8 max-w-3xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
//           >
//             Each project you see here begins with understanding a business, its
//             audience, and its goals before any design or development decisions
//             are made.
//           </motion.p>

//           <motion.p
//             variants={fadeUp}
//             className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
//           >
//             Our focus goes beyond visuals — we care about how a website performs,
//             communicates value, and supports long-term business growth.
//           </motion.p>

//           {/* Key Principles */}
//           <motion.ul
//             variants={fadeUp}
//             className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
//           >
//             {[
//               "Business-first thinking",
//               "Performance and usability focused",
//               "Built for long-term scalability",
//             ].map((item) => (
//               <li
//                 key={item}
//                 className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)]"
//               >
//                 <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
//                 {item}
//               </li>
//             ))}
//           </motion.ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";

export default function PortfolioIntro() {
  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side */}
          <div className="lg:w-1/2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-900 leading-tight">
              Designed for Users, <br /> Built for <span className="italic text-red-600">Business</span>
            </h2>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 lg:pl-12 border-l-0 lg:border-l border-gray-100">
            <p className="text-lg text-gray-800 font-medium mb-6">
              Every project begins with understanding your audience psychology and commercial goals.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Visuals are just the surface. We engineer digital assets that prioritize performance and support long-term growth.
            </p>

            {/* Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Business Strategy", "Performance Focus", "Scalable Tech", "Clean Design"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-red-50 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-600" />
                  </div>
                  <span className="text-xs font-bold uppercase text-gray-900">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
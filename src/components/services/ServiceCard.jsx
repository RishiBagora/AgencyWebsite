import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServiceCard({ service }) {
  return (
    <motion.div
      variants={fadeUp}
      className="
        bg-[var(--color-surface)]
        border border-[var(--color-border)]
        rounded-lg
        p-8 md:p-10
      "
    >
      {/* Title */}
      <h3 className="text-2xl font-semibold text-[var(--color-text)]">
        {service.service_name}
      </h3>

      {/* Short intro */}
      <p className="mt-3 text-base text-[var(--color-text-muted)]">
        {service.short_intro}
      </p>

      {/* Description */}
      <p className="mt-5 text-sm leading-relaxed text-[var(--color-text-muted)] max-w-3xl">
        {service.detailed_description}
      </p>

      {/* Benefits */}
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {service.key_benefits.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 text-sm text-[var(--color-text)]"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-[#E72F2E]" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Deliverables */}
      <div className="mt-8">
        <p className="text-sm font-semibold text-[var(--color-text)]">
          What you get:
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {service.deliverables.map((item) => (
            <li
              key={item}
              className="
                rounded-full border border-[var(--color-border)]
                px-3 py-1 text-xs
                text-[var(--color-text-muted)]
              "
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <Link
          to="/contact"
          className="
            inline-flex items-center justify-center
            rounded-md
            bg-[#E72F2E]
            px-6 py-3
            text-sm font-semibold
            text-white
            hover:bg-[#c92726]
            transition-colors
          "
        >
          {service.cta.label}
        </Link>
      </div>
    </motion.div>
  );
}


// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// export default function ServiceCard({ service, index }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="group relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[2.5rem] p-8 md:p-12 hover:border-[#E72F2E] transition-all duration-500 hover:shadow-2xl hover:shadow-[#E72F2E]/5"
//     >
//       {/* Background Numbering (Sleek Aesthetic) */}
//       <span className="absolute top-10 right-12 text-6xl font-black text-[var(--color-text)] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
//         0{index + 1}
//       </span>

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
//         {/* Left Side: Info */}
//         <div className="lg:col-span-7">
//           <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-[#E72F2E]/10 text-[#E72F2E] mb-6 group-hover:bg-[#E72F2E] group-hover:text-white transition-all duration-500">
//             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
//             </svg>
//           </div>
          
//           <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-[var(--color-text)]">
//             {service.service_name}
//           </h3>
          
//           <p className="mt-4 text-lg font-medium text-[#E72F2E] opacity-90">
//             {service.short_intro}
//           </p>

//           <p className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)] max-w-2xl">
//             {service.detailed_description}
//           </p>

//           <div className="mt-10">
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#E72F2E] group-hover:gap-5 transition-all"
//             >
//               {service.cta.label} <span>→</span>
//             </Link>
//           </div>
//         </div>

//         {/* Right Side: Benefits & Tags */}
//         <div className="lg:col-span-5 flex flex-col justify-center">
//           <div className="bg-[var(--color-bg-soft)] rounded-[2rem] p-8 border border-[var(--color-border)]">
//             <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-6">
//               Key Advantages
//             </p>
            
//             <div className="space-y-4">
//               {service.key_benefits.map((item) => (
//                 <div key={item} className="flex items-center gap-3 text-sm font-bold text-[var(--color-text)]">
//                   <div className="h-1.5 w-1.5 rounded-full bg-[#E72F2E]" />
//                   {item}
//                 </div>
//               ))}
//             </div>

//             <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
//               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">
//                 Deliverables
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {service.deliverables.map((item) => (
//                   <span key={item} className="px-3 py-1 text-[10px] font-bold border border-[var(--color-border)] rounded-full bg-white text-[var(--color-text-muted)] group-hover:border-[#E72F2E]/30 transition-colors">
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
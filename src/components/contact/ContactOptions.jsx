// import React from "react";
// import { motion } from "framer-motion";
// import siteConfig from "../../config/siteConfig";

// /* ---------------- ANIMATIONS ---------------- */
// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 24,
//     filter: "blur(6px)",
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: {
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// export default function ContactOptions() {
//   return (
//     <section className="bg-[var(--surface-muted)] px-6 py-16 md:py-20">
//       <div className="mx-auto max-w-6xl">
//         {/* Header */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="mb-12 max-w-2xl"
//         >
//           <h2 className="mb-3 text-2xl font-semibold text-gray-900 md:text-3xl">
//             Choose the Way You’d Like to Connect
//           </h2>
//           <p className="text-base leading-relaxed text-gray-600">
//             Call us directly, message us on WhatsApp, or share your requirements
//             using the form below.
//           </p>
//         </motion.div>

//         {/* Options Grid */}
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {/* Call */}
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="rounded-xl border border-gray-200 bg-white p-6 transition hover:border-orange-300"
//           >
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-orange-500 text-orange-600">
//               📞
//             </div>

//             <h3 className="mb-2 text-lg font-medium text-gray-900">
//               Call Us
//             </h3>

//             <p className="mb-5 text-sm leading-relaxed text-gray-600">
//               Speak directly with our team to discuss your requirements.
//             </p>

//             <a
//               href={`tel:${siteConfig.phone}`}
//               className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:underline"
//             >
//               Call Now →
//             </a>

//             <p className="mt-3 text-xs text-gray-500">
//               Mon–Sat, 10 AM – 7 PM
//             </p>
//           </motion.div>

//           {/* WhatsApp */}
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="rounded-xl border border-gray-200 bg-white p-6 transition hover:border-orange-300"
//           >
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-orange-500 text-orange-600">
//               💬
//             </div>

//             <h3 className="mb-2 text-lg font-medium text-gray-900">
//               WhatsApp Us
//             </h3>

//             <p className="mb-5 text-sm leading-relaxed text-gray-600">
//               Send us a message on WhatsApp for quick responses.
//             </p>

//             <a
//               href={`https://wa.me/${siteConfig.whatsapp}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:underline"
//             >
//               Chat on WhatsApp →
//             </a>

//             <p className="mt-3 text-xs text-gray-500">
//               Fast replies during business hours
//             </p>
//           </motion.div>

//           {/* Form */}
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="rounded-xl border border-gray-200 bg-white p-6 transition hover:border-orange-300"
//           >
//             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-orange-500 text-orange-600">
//               📝
//             </div>

//             <h3 className="mb-2 text-lg font-medium text-gray-900">
//               Share Project Details
//             </h3>

//             <p className="mb-5 text-sm leading-relaxed text-gray-600">
//               Fill out a short form and your details will be sent directly to us.
//             </p>

//             <a
//               href="#contact-form"
//               className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:underline"
//             >
//               Open Form →
//             </a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import siteConfig from "../../config/siteConfig";

/* ---------------- ANIMATIONS ---------------- */
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ContactOptions() {
  const options = [
    {
      title: "Direct Call",
      desc: "Speak with our strategy team for immediate guidance.",
      action: `tel:${siteConfig.phone}`,
      label: "Call Now",
      sub: "Mon–Sat, 10 AM – 7 PM",
      icon: <svg
  className="w-5 h-5 text-[--color-accent]"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.8"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2
           19.79 19.79 0 0 1-8.63-3.07
           19.5 19.5 0 0 1-6-6
           19.79 19.79 0 0 1-3.07-8.67
           A2 2 0 0 1 4.11 2h3
           a2 2 0 0 1 2 1.72
           12.84 12.84 0 0 0 .7 2.81
           2 2 0 0 1-.45 2.11L8.09 9.91
           a16 16 0 0 0 6 6
           l1.27-1.27
           a2 2 0 0 1 2.11-.45
           12.84 12.84 0 0 0 2.81.7
           A2 2 0 0 1 22 16.92z" />
</svg>

    },
    {
      title: "WhatsApp Chat",
      desc: "Instant messaging for quick queries and updates.",
      action: `https://wa.me/${siteConfig.whatsapp}`,
      label: "Message Us",
      sub: "Average response: 15 mins",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    },
    {
      title: "Project Form",
      desc: "Share detailed requirements for a formal roadmap.",
      action: "/contact#contact-form",
      label: "Open Form",
      sub: "Formal response in 24h",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    }
  ];

  return (
    <section className="bg-[var(--color-surface-muted)] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        
        {/* Header - Refined & Tight */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 block">
            Connectivity
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-gray-900 leading-tight">
            Choose the Way You’d <br />
            <span className="text-orange-600 italic underline decoration-orange-100 underline-offset-8">Like to Connect</span>
          </h2>
        </motion.div>

        {/* Options Grid - Clean Bento Style */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {options.map((opt, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative rounded-[2rem] border border-gray-200 bg-white p-8 md:p-10 transition-all duration-500 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/5 hover:-translate-y-2"
            >
              {/* Icon - Minimalist Squircle */}
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  {opt.icon}
                </svg>
              </div>

              <h3 className="mb-3 text-xl font-bold tracking-tight text-gray-900">
                {opt.title}
              </h3>

              <p className="mb-8 text-sm leading-relaxed text-gray-500 opacity-80">
                {opt.desc}
              </p>

              <div className="mt-auto">
                <a
                  href={opt.action}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-orange-600 group-hover:gap-4 transition-all"
                >
                  {opt.label} <span>→</span>
                </a>
                <p className="mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-tight">
                  {opt.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
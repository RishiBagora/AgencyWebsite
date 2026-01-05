import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function TechStack() {
  const categories = [
    {
      title: "Frontend",
      description:
        "Technologies used to build clean, fast, and responsive user interfaces.",
      items: [
        "React",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
    {
      title: "Backend",
      description:
        "Reliable systems that power logic, performance, and data handling.",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication Systems",
      ],
    },
    {
      title: "CMS & Platforms",
      description:
        "Flexible platforms that make content and business management easy.",
      items: [
        "WordPress",
        "Headless CMS",
        "Custom Admin Panels",
      ],
    },
    {
      title: "Performance & Deployment",
      description:
        "Tools and practices that ensure speed, security, and scalability.",
      items: [
        "SEO Best Practices",
        "Performance Optimization",
        "Secure Hosting Setup",
        "CDN Integration",
      ],
    },
  ];

  return (
    <section className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={item}
          className="mb-16 max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-[#E72F2E]">
            Technology Stack
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            Modern Technologies We Work With
          </h2>

          <p className="mt-4 text-base text-[var(--color-text-muted)]">
            We use proven, modern technologies to build fast, secure, and scalable
            digital solutions that stand the test of time.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                {category.title}
              </h3>

              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {category.description}
              </p>

              <ul className="mt-4 space-y-2">
                {category.items.map((tech) => (
                  <li
                    key={tech}
                    className="text-sm text-[var(--color-text)] flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E72F2E]" />
                    {tech}
                  </li>
                ))}
              </ul>
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

// export default function TechStack() {
//   const categories = [
//     {
//       title: "Frontend",
//       description: "Fast, responsive, and intuitive user interfaces.",
//       items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Framer Motion"],
//     },
//     {
//       title: "Backend",
//       description: "Scalable logic and secure data handling.",
//       items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Auth0"],
//     },
//     {
//       title: "CMS & Tools",
//       description: "Empowering businesses to manage content easily.",
//       items: ["WordPress", "Strapi", "Headless CMS", "Sanity"],
//     },
//     {
//       title: "DevOps",
//       description: "Ensuring 99.9% uptime and lightning speed.",
//       items: ["Vercel", "AWS", "Docker", "Cloudflare", "SEO Native"],
//     },
//   ];

//   return (
//     <section className="bg-[var(--color-bg)] py-20 md:py-28 overflow-hidden relative">
//       {/* Background Decorative Element */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-accent-soft)_0%,transparent_70%)] opacity-30 pointer-events-none" />

//       <div className="mx-auto max-w-7xl px-6 relative z-10">
        
//         {/* Header - Refined & Tight */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-16 md:mb-20"
//         >
//           <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#E72F2E] mb-4 block">
//             Our Stack
//           </span>
//           <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-[var(--color-text)] leading-tight">
//             Proven Technologies for <br />
//             <span className="text-[#E72F2E] italic underline decoration-[#E72F2E]/10 underline-offset-8">Modern Performance</span>
//           </h2>
//         </motion.div>

//         {/* Tech Grid */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {categories.map((category, i) => (
//             <motion.div
//               key={category.title}
//               variants={fadeUp}
//               className="group p-8 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[#E72F2E] transition-all duration-500 hover:shadow-2xl hover:shadow-[#E72F2E]/5"
//             >
//               <div className="h-full flex flex-col">
//                 <h3 className="text-xl font-bold text-[var(--color-text)] tracking-tight mb-2">
//                   {category.title}
//                 </h3>
                
//                 <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-8 opacity-80">
//                   {category.description}
//                 </p>

//                 <div className="mt-auto flex flex-wrap gap-2">
//                   {category.items.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] text-[var(--color-text-muted)] group-hover:border-[#E72F2E]/30 group-hover:text-[var(--color-text)] transition-colors"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// import { motion } from "framer-motion";
// import ServiceCard from "./ServiceCard";

// const stagger = {
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// export default function ServicesList() {
//   const services = [
//     {
//       service_id: "website-development",
//       service_name: "Website Development",
//       short_intro:
//         "Custom-built websites designed for performance, scalability, and business growth.",
//       detailed_description:
//         "We design and develop fast, responsive, and SEO-friendly websites that reflect your brand and support real business objectives.",
//       key_benefits: [
//         "Custom design aligned with your business",
//         "Fast loading and mobile-first",
//         "SEO-ready structure",
//         "Secure and scalable architecture",
//       ],
//       deliverables: [
//         "Responsive website",
//         "Optimized pages",
//         "Basic SEO setup",
//         "Deployment support",
//       ],
//       cta: { label: "Get Website Quote" },
//     },
//     {
//       service_id: "ecommerce",
//       service_name: "E-Commerce Solutions",
//       short_intro:
//         "Online stores built to convert visitors into customers.",
//       detailed_description:
//         "We create secure, easy-to-manage e-commerce platforms that provide smooth shopping experiences and reliable performance.",
//       key_benefits: [
//         "User-friendly shopping flow",
//         "Secure payment integration",
//         "Inventory management",
//         "Performance optimization",
//       ],
//       deliverables: [
//         "E-commerce website",
//         "Payment gateway setup",
//         "Admin dashboard",
//         "Basic training",
//       ],
//       cta: { label: "Discuss E-Commerce Project" },
//     },
//     {
//       service_id: "uiux",
//       service_name: "UI / UX Design",
//       short_intro:
//         "Clean, intuitive designs focused on usability and conversion.",
//       detailed_description:
//         "We design interfaces that improve engagement, usability, and clarity by understanding user behavior and business goals.",
//       key_benefits: [
//         "User-focused design",
//         "Clean & modern UI",
//         "Improved usability",
//         "Brand consistency",
//       ],
//       deliverables: ["Wireframes", "UI designs", "Design system (optional)"],
//       cta: { label: "View Design Services" },
//     },
//     {
//       service_id: "seo",
//       service_name: "SEO & Performance Optimization",
//       short_intro:
//         "Improve visibility, speed, and search performance.",
//       detailed_description:
//         "We optimize websites for search engines and performance to improve rankings, speed, and user experience.",
//       key_benefits: [
//         "On-page SEO",
//         "Core Web Vitals improvement",
//         "Performance tuning",
//         "Technical SEO setup",
//       ],
//       deliverables: ["SEO audit", "Optimized pages", "Performance improvements"],
//       cta: { label: "Improve Website Performance" },
//     },
//     {
//       service_id: "maintenance",
//       service_name: "Website Maintenance & Support",
//       short_intro:
//         "Reliable ongoing support to keep your website running smoothly.",
//       detailed_description:
//         "We provide updates, monitoring, and support to ensure your website remains secure, stable, and up to date.",
//       key_benefits: [
//         "Regular updates",
//         "Security monitoring",
//         "Performance checks",
//         "Technical support",
//       ],
//       deliverables: ["Maintenance plan", "Support hours", "Monitoring setup"],
//       cta: { label: "Request Maintenance Plan" },
//     },
//   ];

//   return (
//     <section className="bg-[var(--color-bg)]">
//       <div className="mx-auto max-w-7xl px-6 py-28">

//         {/* Section Header */}
//         <div className="mb-20 max-w-3xl">
//           <span className="text-sm font-semibold uppercase tracking-wide text-[#E72F2E]">
//             Our Core Services
//           </span>
//           <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--color-text)]">
//             Services Designed to Deliver{" "}
//             <span className="text-[#E72F2E]">Real Business Results</span>
//           </h2>
//         </div>

//         {/* Services */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={stagger}
//           className="space-y-16"
//         >
//           {services.map((service) => (
//             <ServiceCard key={service.service_id} service={service} />
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function ServicesList() {
  const services = [
    {
      service_id: "website-development",
      service_name: "Web Development",
      short_intro: "Performance-first architecture.",
      detailed_description: "We build high-speed, SEO-optimized websites using modern frameworks like React and Next.js, ensuring your business stays ahead of the curve.",
      key_benefits: ["Custom UI/UX Design", "Lighthouse Score 90+", "Mobile-First Response", "SEO Native Structure"],
      deliverables: ["Source Code", "Deployment", "Documentation", "CMS Access"],
      cta: { label: "Request a Quote" },
    },
    {
      service_id: "ecommerce",
      service_name: "E-Commerce",
      short_intro: "Engineered for conversions.",
      detailed_description: "Transform your business with a scalable online store. We integrate secure payments and inventory management for a seamless experience.",
      key_benefits: ["Secure Checkout", "Inventory Sync", "Mobile Shopping", "Sales Analytics"],
      deliverables: ["Online Store", "Payment Setup", "Admin Panel", "Training"],
      cta: { label: "Build My Store" },
    },
    // Add other services here following the same structure...
  ];

  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header - Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#E72F2E] mb-4">
              Core Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[var(--color-text)] leading-tight">
              Services Designed for <br />
              <span className="text-[#E72F2E] italic underline decoration-[#E72F2E]/10 underline-offset-8">Growth</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm font-medium text-[var(--color-text-muted)] border-l border-[var(--color-border)] pl-6 leading-relaxed">
            We bridge the gap between complex technology and real-world business results.
          </p>
        </div>

        {/* Services List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="space-y-10 md:space-y-12"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.service_id} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
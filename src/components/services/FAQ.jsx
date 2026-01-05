// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const faqs = [
//   {
//     q: "How much do your services cost?",
//     a: "Pricing depends on the scope, requirements, and complexity of the project. After understanding your needs, we provide clear and transparent pricing with no hidden costs.",
//   },
//   {
//     q: "How long does a typical project take?",
//     a: "Timelines vary based on the service and project scope. Most standard websites are completed within 2–6 weeks.",
//   },
//   {
//     q: "Do you provide support after project delivery?",
//     a: "Yes. We offer ongoing support and maintenance options to ensure your website remains secure, updated, and high-performing.",
//   },
//   {
//     q: "Will my website be mobile-friendly and SEO-ready?",
//     a: "Absolutely. All our websites are built mobile-first and follow SEO best practices from the start.",
//   },
//   {
//     q: "Do you work with businesses outside your city or state?",
//     a: "Yes. We work with clients across India and collaborate remotely using structured communication and clear processes.",
//   },
//   {
//     q: "Can you redesign or improve an existing website?",
//     a: "Yes. We handle redesigns, performance improvements, SEO fixes, and upgrades for existing websites.",
//   },
//   {
//     q: "What do you need from us to get started?",
//     a: "We typically need basic business details, your goals, and any existing content or references. We guide you step by step.",
//   },
// ];

// export default function FAQs() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggle = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-[var(--color-bg)]">
//       <div className="mx-auto max-w-3xl px-6 py-24">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.35, ease: "easeOut" }}
//           className="mb-14"
//         >
//           <span className="text-sm font-semibold uppercase tracking-wide text-[#E72F2E]">
//             FAQs
//           </span>

//           <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--color-text)]">
//             Frequently Asked Questions
//           </h2>

//           <p className="mt-4 text-base text-[var(--color-text-muted)]">
//             Here are answers to some of the most common questions clients ask
//             before starting a project with us.
//           </p>
//         </motion.div>

//         {/* FAQ LIST */}
//         <div className="space-y-4">
//           {faqs.map((item, index) => {
//             const isOpen = activeIndex === index;

//             return (
//               <div
//                 key={index}
//                 className="border border-[var(--color-border)] rounded-xl bg-[var(--color-surface)]"
//               >
//                 <button
//                   onClick={() => toggle(index)}
//                   className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
//                   aria-expanded={isOpen}
//                 >
//                   <span className="text-base font-medium text-[var(--color-text)]">
//                     {item.q}
//                   </span>

//                   <span className="text-[#E72F2E] text-xl font-semibold">
//                     {isOpen ? "−" : "+"}
//                   </span>
//                 </button>

//                 <AnimatePresence initial={false}>
//                   {isOpen && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3, ease: "easeOut" }}
//                       className="overflow-hidden"
//                     >
//                       <div className="px-6 pb-6 text-sm text-[var(--color-text-muted)] leading-relaxed">
//                         {item.a}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }






import React, { useState } from 'react';

const faqData = [
  {
    question: "How much do your services cost?",
    answer: "Pricing depends on the scope, requirements, and complexity of the project. We offer transparent, milestone-based pricing after a detailed discovery session to understand your specific business needs."
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary based on the service and project scope. Most standard high-performance websites take between 2–6 weeks from kickoff to launch."
  },
  {
    question: "Do you provide support after project delivery?",
    answer: "Yes, we offer ongoing maintenance packages. Whether it's security updates, performance monitoring, or content changes, we ensure your website remains a business asset."
  },
  {
    question: "Will my website be mobile-friendly and SEO-ready?",
    answer: "Absolutely. Every project follows a mobile-first philosophy and incorporates technical SEO best practices (speed, schema, and meta-data) to ensure you rank well."
  },
  {
    question: "Do you work with businesses outside your city or state?",
    answer: "Yes, we collaborate with clients across India and internationally. We use structured project management tools and regular video calls to ensure transparent communication."
  },
  {
    question: "Can you redesign or improve an existing website?",
    answer: "We do. We can audit your current site for performance bottlenecks and UX issues, providing a modern redesign that aligns with your updated business goals."
  },
  {
    question: "What do you need from us to get started?",
    answer: "To hit the ground running, we'll need your brand guidelines, high-level business goals, and any specific content or imagery you want to showcase."
  }
];

const FAQItem = ({ item, isOpen, onClick, id }) => {
  return (
    <div className="border-b  border-gray-200 py-2">
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${id}`}
        className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
      >
        <span className="text-lg md:text-xl font-medium text-gray-800 group-hover:text-[#E72F2E] transition-colors duration-200">
          {item.question}
        </span>
        <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      <div
        id={`faq-content-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[var(--color-surface-muted)} py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-sm font-semibold tracking-wider text-[#E72F2E] uppercase">
            FAQs
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Common Questions About Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Here are answers to some of the most common questions we receive from clients.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              id={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>

        {/* Closing Support Note */}
        <div className="mt-12 text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-gray-700">
            Still have questions? <a href="#contact" className="text-[#E72F2E] font-semibold hover:underline">Get in touch with us</a> for a free consultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import servicesData from "../../data/servicesData";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function ServiceFAQs() {
  const { slug } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);

  const service = servicesData.find((item) => item.slug === slug);

  if (!service || !service.faqs || service.faqs.length === 0) return null;

  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Header - Centered for Focus */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-accent)] mb-4 block">
            Support & Clarity
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-[var(--color-text)] leading-tight">
            Frequently Asked <span className="text-[var(--color-accent)] italic">Questions</span>
          </h2>
          <p className="mt-6 text-base text-[var(--color-text-muted)] max-w-xl mx-auto opacity-80">
            Answers to common queries regarding our {service.serviceName.toLowerCase()} process and delivery.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-3">
          {service.faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.05 }}
                className={`
                  overflow-hidden rounded-[1.5rem] border transition-all duration-500
                  ${isOpen 
                    ? "border-[var(--color-accent)] bg-white shadow-xl shadow-[var(--color-accent)]/5" 
                    : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-gray-300"
                  }
                `}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 md:p-8 text-left outline-none"
                >
                  <span className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${isOpen ? "text-[var(--color-accent)]" : "text-[var(--color-text)]"}`}>
                    {faq.question}
                  </span>

                  {/* Icon - Rotating Plus/Minus */}
                  <div className={`
                    relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500
                    ${isOpen ? "rotate-[135deg] border-[var(--color-accent)] bg-[var(--color-accent)] text-white" : "border-gray-200 text-gray-400"}
                  `}>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                </button>

                {/* Animated Answer Container */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-10">
                        <div className="h-px w-full bg-gray-100 mb-6" />
                        <p className="text-sm md:text-base leading-relaxed text-[var(--color-text-muted)] opacity-90">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Contact Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center text-xs font-bold uppercase tracking-widest text-gray-400"
        >
          Still have questions? <a href="/contact" className="text-[var(--color-accent)] underline underline-offset-4">Get in touch with us</a>
        </motion.p>

      </div>
    </section>
  );
}

export default ServiceFAQs;
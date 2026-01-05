import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactIntro() {
  const steps = [
    {
      title: "Requirement Review",
      desc: "We analyze your business goals and technical needs to prepare a tailored response."
    },
    {
      title: "The 24h Response",
      desc: "You’ll hear from us with clear next steps, estimated timelines, or strategic questions."
    },
    {
      title: "Strategy Session",
      desc: "We discuss the best digital approach for your brand—no pressure, just honest advice."
    }
  ];

  return (
    <section className="bg-[var(--color-surface-muted)] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <motion.span 
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 block"
          >
            Our Workflow
          </motion.span>
          <motion.h2 
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-gray-900 leading-tight"
          >
            What Happens After You <br />
            <span className="text-orange-600 italic underline decoration-orange-200 underline-offset-8">Reach Out?</span>
          </motion.h2>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* FIX: The Middle Line - Perfectly Centered under the dots */}
          <div className="absolute left-[15px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-orange-400 via-orange-200 to-transparent z-0" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative pl-12 group z-10"
              >
                {/* Timeline Dot - Positioned for perfect alignment */}
                <div className="absolute left-0 top-0 h-[32px] w-[32px] rounded-full bg-white border border-orange-200 flex items-center justify-center group-hover:border-orange-500 transition-all duration-500 shadow-sm">
                  <span className="text-[10px] font-black text-orange-600">{i + 1}</span>
                </div>

                <div className="pt-1">
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight group-hover:text-orange-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base leading-relaxed text-gray-500 max-w-xl">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Points Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-gray-200 flex flex-wrap gap-x-8 gap-y-4"
        >
          {["Zero Spam Policy", "No Obligations", "Honest Strategy"].map((note) => (
            <div key={note} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
              <div className="h-1 w-1 rounded-full bg-orange-400" />
              {note}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
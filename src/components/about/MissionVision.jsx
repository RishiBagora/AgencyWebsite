import React from 'react';
import { motion } from 'framer-motion';

/**
 * MissionVision Component
 * A high-stability signal section for the About Page.
 * Built with React + Tailwind CSS.
 */
const MissionVision = () => {
  // Animation variants for a professional entry
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smooth finish
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      className="bg-white py-20 lg:py-32 px-6 sm:px-12 lg:px-24 border-t border-gray-100"
      aria-label="Our Mission and Vision"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" aria-hidden="true" />

          {/* Mission Block */}
          <motion.div 
            className="flex flex-col space-y-6 group"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-slate-900" />
              <p className="text-xs uppercase tracking-widest font-bold text-slate-500">
                01. Our Purpose
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
              Our Mission
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
              To design and develop reliable, high-performance websites that help businesses grow with clarity, confidence, and long-term value.
            </p>
            
            {/* Subtle highlight bar on hover */}
            <div className="w-0 h-1 bg-slate-900 transition-all duration-300 group-hover:w-12 mt-4" />
          </motion.div>

          {/* Vision Block */}
          <motion.div 
            className="flex flex-col space-y-6 group"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-slate-900" />
              <p className="text-xs uppercase tracking-widest font-bold text-slate-500">
                02. Our Aspiration
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
              Our Vision
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
              To become a trusted digital partner for businesses across India by consistently delivering quality, transparency, and measurable results.
            </p>

            {/* Subtle highlight bar on hover */}
            <div className="w-0 h-1 bg-slate-900 transition-all duration-300 group-hover:w-12 mt-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------ ANIMATIONS ------------------ */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ProjectGallery({ project }) {
  if (!project || !project.gallery) return null;

  const [activeTab, setActiveTab] = useState("desktop");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = useMemo(() => 
    activeTab === "desktop" ? project.gallery.desktop : project.gallery.mobile,
  [activeTab, project.gallery]);

  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-40 border-t border-[var(--color-border)]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ---------------- HEADER ---------------- */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--color-accent)] mb-6 block">
              [ Visual Manifest ]
            </span>
            <h2 className="font-heading text-4xl md:text-7xl font-bold tracking-tighter text-[var(--color-text)] leading-[0.95]">
              Interface <br />
              <span className="text-[var(--color-accent)] italic font-light text-3xl md:text-6xl tracking-normal">Architecture.</span>
            </h2>
          </motion.div>

          {/* ---------------- INTERACTIVE TABS ---------------- */}
          <div className="flex bg-[var(--color-surface)] p-1.5 rounded-full border border-[var(--color-border)] shadow-sm">
            {["desktop", "mobile"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-500 ${
                  activeTab === tab ? "text-white" : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                <span className="relative z-10">{tab} View</span>
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[var(--color-accent)] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ---------------- GALLERY GRID ---------------- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.98 }}
            className={`grid gap-10 md:gap-16 ${
              activeTab === "desktop" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                className="group relative cursor-zoom-in"
                onClick={() => setLightboxIndex(index)}
              >
                {/* Browser/Phone Frame Simulation */}
                <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl transition-all duration-700 group-hover:shadow-[var(--color-accent)]/10 group-hover:border-[var(--color-accent)]/30">
                  {activeTab === "desktop" && (
                    <div className="h-8 bg-[var(--color-bg-soft)] border-b border-[var(--color-border)] flex items-center gap-1.5 px-4">
                      <div className="w-2 h-2 rounded-full bg-red-400/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                      <div className="w-2 h-2 rounded-full bg-green-400/50" />
                    </div>
                  )}
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src={img}
                    alt="Gallery item"
                    className="w-full aspect-[16/10] object-cover object-top transition-all duration-700"
                  />
                </div>
                
                {/* Floating Index */}
                <span className="absolute -bottom-6 right-4 text-[10px] font-mono text-[var(--color-accent)] opacity-40 group-hover:opacity-100 transition-opacity">
                  IMG_{index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ---------------- PRO LIGHTBOX ---------------- */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[var(--color-bg)]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightboxIndex]}
                alt="Preview"
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              
              {/* Controls */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-8">
                <button 
                  onClick={() => setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)}
                  className="p-4 rounded-full border border-[var(--color-border)] hover:bg-[var(--color-accent)] hover:text-white transition-all"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <span className="text-xs font-mono font-bold tracking-widest uppercase">
                  {lightboxIndex + 1} / {images.length}
                </span>
                <button 
                  onClick={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
                  className="p-4 rounded-full border border-[var(--color-border)] hover:bg-[var(--color-accent)] hover:text-white transition-all"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";

/* ------------------ ANIMATIONS ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeUpDelayed = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
  },
};

/* ------------------ COMPONENT ------------------ */
export default function ProjectOverview({ project }) {
  if (!project) return null;

  const {
    industry,
    location,
    overview: {
      clientType,
      projectType,
      timeline,
      servicesProvided,
      shortDescription,
    },
  } = project;

  return (
    <section
      className="bg-[var(--color-bg)] py-20"
      aria-labelledby="project-overview-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ---------------- LEFT COLUMN ---------------- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Section Label */}
            <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-4">
              Project Overview
            </p>

            {/* Heading */}
            <h2
              id="project-overview-heading"
              className="text-3xl sm:text-4xl font-semibold text-[var(--color-text)] max-w-md leading-tight"
            >
              Overview & Context
            </h2>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-lg">
              {shortDescription}
            </p>
          </motion.div>

          {/* ---------------- RIGHT COLUMN ---------------- */}
          <motion.div
            variants={fadeUpDelayed}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white border border-[var(--color-border)] rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              {/* Info Rows */}
              <ul className="space-y-5">
                <InfoRow label="Client Type" value={clientType} />
                <InfoRow label="Industry" value={industry} />
                <InfoRow label="Location" value={location} />
                <InfoRow label="Project Type" value={projectType} />
                <InfoRow label="Timeline" value={timeline} />
              </ul>

              {/* Divider */}
              <div className="my-8 h-px bg-[var(--color-border)]" />

              {/* Services */}
              <div>
                <p className="text-sm font-medium text-[var(--color-text)] mb-4">
                  Services Provided
                </p>

                <div className="flex flex-wrap gap-3">
                  {servicesProvided.map((service, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ SUB COMPONENT ------------------ */
function InfoRow({ label, value }) {
  return (
    <li className="flex items-start justify-between gap-6">
      <span className="text-sm text-[var(--color-text-muted)] whitespace-nowrap">
        {label}
      </span>
      <span className="text-sm font-medium text-[var(--color-text)] text-right">
        {value}
      </span>
    </li>
  );
}

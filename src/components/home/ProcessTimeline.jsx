import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    title: "Discovery & Initial Consultation",
    subtitle: "Understanding your business and goals",
    desc: "We start with a detailed discussion to understand your business, audience, competitors, and objectives.",
  },
  {
    title: "Planning & Strategy",
    subtitle: "Creating a clear roadmap",
    desc: "We define structure, features, timelines, and deliverables to ensure transparency.",
  },
  {
    title: "Design & UI/UX",
    subtitle: "Designing a premium experience",
    desc: "Clean, conversion-focused designs tailored for Indian audiences.",
  },
  {
    title: "Development & Implementation",
    subtitle: "Building a high-performance website",
    desc: "Modern development with speed, responsiveness, SEO readiness, and security.",
  },
  {
    title: "Testing & Quality Assurance",
    subtitle: "Ensuring everything works perfectly",
    desc: "Cross-device testing, bug fixing, and optimization before approval.",
  },
  {
    title: "Launch & Ongoing Support",
    subtitle: "Growing together after launch",
    desc: "Post-launch support, maintenance, and continuous improvement.",
  },
];

function ProcessTimeline() {
  /* ================= DESKTOP ================= */
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  /* ================= MOBILE ================= */
  const [mobileStep, setMobileStep] = useState(0);
  const mobileRefs = useRef([]);

  /* DESKTOP OBSERVER */
  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* MOBILE OBSERVER */
  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMobileStep(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    mobileRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-32">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            Our <span className="text-[var(--color-accent)]">Process</span>
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            A structured and transparent workflow designed for confidence.
          </p>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="mt-12 lg:hidden">

          {/* MOBILE PROGRESS BAR */}
          <div className="mb-8">
            <div className="h-1 w-full bg-[var(--color-border)] rounded">
              <div
                className="h-1 bg-[var(--color-accent)] rounded transition-all duration-300"
                style={{
                  width: `${((mobileStep + 1) / STEPS.length) * 100}%`,
                }}
              />
            </div>
            <p className="mt-2 text-xs text-center text-[var(--color-text-muted)]">
              Step {mobileStep + 1} of {STEPS.length}
            </p>
          </div>

          {/* MOBILE CARDS */}
          <div className="space-y-6">
            {STEPS.map((step, index) => (
              <div
                key={index}
                ref={(el) => (mobileRefs.current[index] = el)}
                data-index={index}
                className={`border bg-[var(--color-surface)] p-6 transition-all duration-500
                  ${
                    index === mobileStep
                      ? "border-[var(--color-accent)] opacity-100"
                      : "border-[var(--color-border)] opacity-70"
                  }
                `}
              >
                <span className="mb-3 inline-block rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-semibold text-white">
                  Step {index + 1}
                </span>

                <h3 className="mt-3 text-lg font-semibold text-[var(--color-text)]">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {step.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="mt-24 hidden lg:grid grid-cols-12 gap-12">

          {/* LEFT BAR */}
          <div className="col-span-2">
            <div className="sticky top-32 h-full">
              <div className="relative mx-auto h-full w-[2px] bg-[var(--color-border)]">
                <div
                  className="absolute left-0 top-0 w-[2px] bg-[var(--color-accent)] transition-all duration-500"
                  style={{
                    height: `${((activeStep + 1) / STEPS.length) * 100}%`,
                  }}
                />
                {STEPS.map((_, i) => (
                  <span
                    key={i}
                    className={`absolute left-1/2 -translate-x-1/2 h-3 w-3 rounded-full transition-all
                      ${
                        i === activeStep
                          ? "bg-[var(--color-accent)] scale-125"
                          : i < activeStep
                          ? "bg-[var(--color-accent)] opacity-50"
                          : "bg-[var(--color-border)]"
                      }`}
                    style={{
                      top: `${(i / (STEPS.length - 1)) * 100}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-10 space-y-24">
            {STEPS.map((step, index) => {
              const isActive = index === activeStep;

              return (
                <div
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  data-index={index}
                  className={`transition-all duration-500
                    ${
                      isActive
                        ? "opacity-100 scale-100"
                        : "opacity-50 scale-[0.96]"
                    }
                  `}
                >
                  <div
                    className={`max-w-3xl border bg-[var(--color-surface)] p-10
                      ${
                        isActive
                          ? "border-[var(--color-accent)]"
                          : "border-[var(--color-border)]"
                      }
                    `}
                  >
                    <span className="mb-3 inline-block rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-semibold text-white">
                      Step {index + 1}
                    </span>

                    <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text)]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                      {step.subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProcessTimeline;

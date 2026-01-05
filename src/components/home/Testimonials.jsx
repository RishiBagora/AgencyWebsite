import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useState, useRef, useEffect } from "react";

function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef(null);

  const testimonials = [
    {
      text: "The team understood our requirements perfectly and delivered a website that actually brings genuine inquiries.",
      name: "Rakesh Sharma",
      role: "Hotel Owner, Rajasthan",
      initials: "RS"
    },
    {
      text: "Clear communication, transparent pricing, and timely delivery. Best agency for SMEs in India.",
      name: "Amit Jain",
      role: "Founder, Local Business",
      initials: "AJ"
    },
    {
      text: "Our website looks premium and performs much better than before. Conversion rates have doubled.",
      name: "Neha Verma",
      role: "Managing Director",
      initials: "NV"
    },
    {
      text: "They understand Indian businesses well and focus on results, not just designs.",
      name: "Sanjay Mehta",
      role: "SME Owner",
      initials: "SM"
    },
  ];

  const items = [...testimonials, ...testimonials, ...testimonials];

  // Responsive Width Calculation
  const [cardWidth, setCardWidth] = useState(400);
  
  useEffect(() => {
    const updateSize = () => {
      // Mobile par 300px, desktop par 400px
      setCardWidth(window.innerWidth < 768 ? 300 : 400);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const gap = 32; // gap-8 = 32px
  const TOTAL_WIDTH = (cardWidth + gap) * testimonials.length;

  useAnimationFrame(() => {
    // Agar mouse hover hai ya user drag kar raha hai, toh auto-scroll rok do
    if (isPaused || isDragging) return;
    
    const current = x.get();
    const next = current - 0.5;

    if (Math.abs(next) >= TOTAL_WIDTH) {
      x.set(0);
    } else {
      x.set(next);
    }
  });

  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-32 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-accent-soft)_0%,transparent_70%)] opacity-30 pointer-events-none" />

      <div className="relative z-10">
        <div className="mx-auto max-w-3xl text-center px-6 mb-12 md:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] font-black text-[var(--color-accent)] mb-4 block"
          >
            Testimonials
          </motion.span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--color-text)] tracking-tight">
            Trusted by Leaders <br /> Across <span className="text-[var(--color-accent)] italic">The Nation</span>
          </h2>
        </div>

        {/* Marquee Container */}
        <div 
          className="relative group touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fading Masks */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-8 cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            // Drag limits set to keep the infinite feel
            dragConstraints={{ right: 0, left: -TOTAL_WIDTH * 2 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            ref={containerRef}
          >
            {items.map((t, index) => (
              <div
                key={index}
                style={{ minWidth: cardWidth }}
                className="
                  rounded-[1.5rem] md:rounded-[2rem]
                  border border-[var(--color-border)]
                  bg-[var(--color-surface)]
                  p-6 md:p-10
                  shadow-sm
                  hover:shadow-xl hover:border-[var(--color-accent)]
                  transition-all duration-500
                  flex flex-col justify-between
                  select-none
                "
              >
                <div>
                  <div className="flex gap-1 mb-4 md:mb-6">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-3 h-3 md:w-4 md:h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-sm md:text-lg leading-relaxed text-[var(--color-text)] font-medium italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="mt-8 md:mt-10 flex items-center gap-3 md:gap-4">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg shadow-[var(--color-accent-soft)]">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-bold text-[var(--color-text)] tracking-tight">
                      {t.name}
                    </p>
                    <p className="text-[10px] md:text-xs font-medium text-[var(--color-text-muted)]">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
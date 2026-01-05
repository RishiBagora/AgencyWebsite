import { motion } from "framer-motion";

const STORY = [
  {
    title: "The Problem We Noticed",
    text: "Many businesses invested in websites that looked good but failed to deliver results. Poor performance, lack of support, and no real strategy were common issues.",
  },
  {
    title: "The Gap in the Market",
    text: "Most agencies focused only on delivery, not outcomes. Clients were left confused about how their website actually helped their business grow.",
  },
  {
    title: "Our Decision",
    text: "We decided to build an agency focused on clarity, performance, and long-term value — treating websites as business tools, not just visual assets.",
  },
];

function OurStory() {
  return (
    <section className="bg-[var(--color-bg-soft)] overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        
        {/* Header - Centered for better impact */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-widest font-bold text-[var(--color-accent)]"
          >
            Our Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading text-4xl md:text-5xl font-bold text-[var(--color-text)] tracking-tight"
          >
            Built with Purpose, <br className="hidden md:block" /> Not Just{" "}
            <span className="text-[var(--color-accent)] italic">Projects</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Central Vertical Line (Desktop) */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent -translate-x-1/2 hidden lg:block" />

          <div className="space-y-12">
            {STORY.map((item, i) => (
              <div key={item.title} className={`relative flex flex-col lg:flex-row items-center justify-between w-full ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* 1. Content Card */}
                <div className="w-full lg:w-[45%]">
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ y: -5 }}
                    className="group relative p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-xl font-bold text-[var(--color-text)]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
                      {item.text}
                    </p>
                  </motion.div>
                </div>

                {/* 2. Center Dot (Desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="h-4 w-4 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-accent)] shadow-[0_0_10px_rgba(var(--color-accent-rgb),0.5)]"
                  />
                </div>

                {/* 3. Empty Space for layout balance */}
                <div className="hidden lg:block lg:w-[45%]" />
              </div>
            ))}
          </div>
        </div>

        {/* Closing Quote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <p className="text-lg font-medium text-[var(--color-text-muted)] italic max-w-xl mx-auto">
            "That mindset continues to guide how we work with every client today."
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default OurStory;
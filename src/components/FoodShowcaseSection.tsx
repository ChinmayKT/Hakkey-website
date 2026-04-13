"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const FOOD_CARDS = [
  {
    emoji: "🍛",
    name: "South Indian Thali",
    tag: "Chef's Special",
    rating: "4.9",
    color: "from-amber-900/40 to-orange-950/60",
  },
  {
    emoji: "🫕",
    name: "Dal Makhani",
    tag: "Slow Cooked",
    rating: "4.8",
    color: "from-red-900/40 to-stone-950/60",
  },
  {
    emoji: "🥘",
    name: "Chole Bhature",
    tag: "Bestseller",
    rating: "4.9",
    color: "from-yellow-900/40 to-amber-950/60",
  },
  {
    emoji: "🍲",
    name: "Rasam Rice",
    tag: "Comfort Food",
    rating: "4.7",
    color: "from-orange-900/40 to-red-950/60",
  },
];

const FEATURES = [
  { icon: "🌿", text: "Zero preservatives or additives" },
  { icon: "🔥", text: "Cooked fresh after you order" },
  { icon: "✅", text: "FSSAI-certified home kitchens" },
  { icon: "❤️", text: "Made with genuine love and care" },
];

export default function FoodShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax layers
  const bgY   = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["4%",   "-4%"]);

  return (
    <section
      ref={sectionRef}
      id="food"
      className="relative overflow-hidden"
      style={{ paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      {/* ── PARALLAX WARM ATMOSPHERE ── */}
      <motion.div
        style={{ y: bgY, top: "-15%", bottom: "-15%" }}
        className="absolute inset-x-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/25 via-transparent to-black" />
        <div className="absolute top-1/3 left-1/4  w-[500px] h-[500px] rounded-full bg-orange-600/10  blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-amber-500/8   blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[1px] shadow-[0_0_300px_200px_rgba(255,107,0,0.07)]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── LEFT: TEXT ── */}
          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-7">
                <div className="h-px w-8 bg-orange-500/50" />
                <span className="text-orange-400 text-xs uppercase tracking-[0.25em] font-semibold">
                  Real Home Food
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-white leading-[1.06] tracking-tight">
                Food that tastes
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400">
                  just like home.
                </span>
              </h2>

              {/* Body */}
              <p className="mt-6 text-white/45 text-base sm:text-lg leading-relaxed max-w-md">
                No shortcuts. No preservatives. Every dish is cooked fresh in a real home kitchen — by someone who genuinely cares about what you eat.
              </p>

              {/* Feature list */}
              <ul className="mt-9 space-y-4">
                {FEATURES.map((f, i) => (
                  <motion.li
                    key={f.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.15 * i + 0.4, duration: 0.5, ease: "easeOut" }}
                    className="flex items-start gap-3.5"
                  >
                    <span className="text-xl leading-none mt-0.5 shrink-0">{f.icon}</span>
                    <span className="text-white/55 text-sm leading-relaxed">{f.text}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA nudge */}
              <motion.a
                href="#download"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="mt-10 inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-2xl font-semibold text-sm shadow-lg shadow-primary/20 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download the App
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: FOOD CARD GRID ── */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {FOOD_CARDS.map((card, i) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.12 * i + 0.3, duration: 0.65, ease: "easeOut" }}
                // Stagger vertical offset for depth
                className={i % 2 !== 0 ? "mt-8" : ""}
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-white/8 transition-colors duration-300 cursor-default"
                >
                  {/* Visual */}
                  <div
                    className={`h-32 sm:h-36 bg-gradient-to-br ${card.color} flex items-center justify-center text-5xl sm:text-6xl`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-block"
                    >
                      {card.emoji}
                    </motion.span>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-white text-xs sm:text-sm font-semibold leading-snug">
                        {card.name}
                      </h4>
                      <span className="text-amber-400 text-xs font-bold shrink-0">
                        ⭐ {card.rating}
                      </span>
                    </div>
                    <span className="inline-block text-[10px] text-orange-400/80 bg-orange-500/10 border border-orange-500/15 px-2 py-0.5 rounded-full font-medium">
                      {card.tag}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

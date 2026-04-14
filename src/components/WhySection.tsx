"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ShimmerSpan from "./ShimmerSpan";

const POINTS = [
  {
    emoji: "🏡",
    title: "Homemade",
    description:
      "Cooked in certified home kitchens by people who genuinely care about what lands on your plate.",
    delay: 0.1,
  },
  {
    emoji: "✨",
    title: "Hygienic",
    description:
      "Cooked with the same care and cleanliness as a home kitchen — just like your mom would.",
    delay: 0.25,
  },
  {
    emoji: "🌿",
    title: "Fresh Daily",
    description:
      "Food prepared as part of everyday home cooking, served fresh directly to you.",
    delay: 0.4,
  },
];

export default function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="why"
      className="relative h-screen flex flex-col items-center justify-center px-6 sm:px-12 overflow-hidden"
    >

      <div className="relative z-10 max-w-5xl w-full mx-auto">

        {/* ── HEADLINE ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white/90 leading-tight tracking-tight">
            Why{" "}
            <ShimmerSpan className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Hakkey?
            </ShimmerSpan>
          </h2>
        </motion.div>

        {/* ── 3 POINTS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-16">
          {POINTS.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: p.delay, duration: 0.7, ease: "easeOut" }}
              className="text-center group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-900/30 to-amber-900/20 border border-orange-800/30 rounded-3xl text-4xl mb-6 shadow-sm group-hover:shadow-md group-hover:border-orange-700/50 transition-all"
              >
                {p.emoji}
              </motion.div>

              {/* Text */}
              <h3 className="text-xl sm:text-2xl font-black text-white/90 mb-3 tracking-tight">
                {p.title}
              </h3>
              <p className="text-white/45 text-sm sm:text-base leading-relaxed max-w-[220px] mx-auto">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

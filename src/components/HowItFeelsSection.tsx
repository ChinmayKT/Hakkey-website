"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Quote split into words for staggered reveal
const QUOTE_WORDS = "Like eating at home, even when you're not.".split(" ");

// The word "home" gets highlighted
const HIGHLIGHT = "home,";

export default function HowItFeelsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [shimmerActive, setShimmerActive] = useState(false);

  useEffect(() => {
    if (isInView && !shimmerActive) {
      const t = setTimeout(() => setShimmerActive(true), 1200);
      return () => clearTimeout(t);
    }
  }, [isInView, shimmerActive]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center px-6 sm:px-12 overflow-hidden"
    >
      {/* ── WARM GLOW ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[400px] rounded-full bg-orange-700/14 blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[200px] rounded-full bg-amber-600/8 blur-[120px]" />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-orange-400/50 text-[10px] uppercase tracking-[0.35em] font-semibold mb-12"
        >
          The Hakkey Experience
        </motion.p>

        {/* Word-by-word quote reveal */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-black text-white leading-[1.15] tracking-tight">
          {QUOTE_WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : {}
              }
              transition={{
                delay: i * 0.075 + 0.15,
                duration: 0.45,
                ease: "easeOut",
              }}
              className={`inline-block mr-[0.22em] ${
                word === HIGHLIGHT
                  ? `shimmer-text ${shimmerActive ? "shimmer-active" : ""} text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-300`
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Supporting micro text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: QUOTE_WORDS.length * 0.075 + 0.4,
            duration: 0.65,
          }}
          className="mt-10 text-white/25 text-sm tracking-wider"
        >
          Every meal. Every day.
        </motion.p>

        {/* CTA nudge */}
        <motion.a
          href="#download"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: QUOTE_WORDS.length * 0.075 + 0.7,
            duration: 0.55,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 mt-10 text-orange-400/70 hover:text-orange-300 text-sm font-medium transition-colors group"
        >
          Get the app
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}

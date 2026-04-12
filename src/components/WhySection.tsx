"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
      "Every chef on Hakkey is FSSAI certified and their kitchen is regularly inspected. No compromises.",
    delay: 0.25,
  },
  {
    emoji: "🌿",
    title: "Fresh Daily",
    description:
      "No preservatives. No frozen shortcuts. Every order is prepared fresh — after you place it.",
    delay: 0.4,
  },
];

export default function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="why"
      className="relative h-screen flex flex-col items-center justify-center px-6 sm:px-12 overflow-hidden bg-white"
    >
      {/* Barely-visible warm radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(255,107,0,0.03) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 50%, rgba(255,167,0,0.025) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-5xl w-full mx-auto">

        {/* ── HEADLINE ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-foreground leading-tight tracking-tight">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Hakkey?
            </span>
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
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-3xl text-4xl mb-6 shadow-sm group-hover:shadow-md group-hover:border-orange-200 transition-all"
              >
                {p.emoji}
              </motion.div>

              {/* Text */}
              <h3 className="text-xl sm:text-2xl font-black text-foreground mb-3 tracking-tight">
                {p.title}
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed max-w-[220px] mx-auto">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

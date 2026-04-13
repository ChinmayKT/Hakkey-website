"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ShimmerSpan from "./ShimmerSpan";

export default function RealHomeCookingSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Warm glow layer drifts slower than scroll (parallax)
  const glowY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── PARALLAX WARM ATMOSPHERE ── */}
      <motion.div
        style={{ y: glowY, top: "-15%", bottom: "-15%" }}
        className="absolute inset-x-0 pointer-events-none"
      >
        {/* Central warm bloom */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-orange-700/12 blur-[180px]" />
        {/* Off-center accent */}
        <div className="absolute top-1/3 right-1/3 w-[350px] h-[250px] rounded-full bg-amber-600/8 blur-[120px]" />
      </motion.div>

      {/* ── SUBTLE GRID TEXTURE ── */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Eyebrow line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-10 origin-center"
        >
          <div className="h-px w-8 bg-orange-500/40" />
          <span className="text-orange-400/70 text-[10px] uppercase tracking-[0.3em] font-semibold">
            Our Promise
          </span>
          <div className="h-px w-8 bg-orange-500/40" />
        </motion.div>

        {/* Main statement */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-black text-white leading-[1.06] tracking-tight"
        >
          Not restaurants.
          <br />
          Not factories.
          <br />
          <ShimmerSpan className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400">
            Just real homes.
          </ShimmerSpan>
        </motion.h2>

        {/* Underline accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
          className="mt-10 w-24 h-0.5 bg-gradient-to-r from-orange-500/50 via-amber-400/30 to-transparent mx-auto origin-left"
        />

        {/* Supporting line */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-7 text-white/30 text-sm sm:text-base tracking-wide"
        >
          Home kitchens &nbsp;·&nbsp; Family recipes &nbsp;·&nbsp; Real care
        </motion.p>
      </div>
    </section>
  );
}

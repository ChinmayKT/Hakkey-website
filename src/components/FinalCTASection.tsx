"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ShimmerSpan from "./ShimmerSpan";

const STORE_BUTTONS = [
  {
    label: "Google Play",
    sub: "Get it on",
    icon: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" />
      </svg>
    ),
  },
  {
    label: "App Store",
    sub: "Download on the",
    icon: (
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
];

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="download"
      className="relative h-screen flex items-center justify-center px-6 sm:px-12 overflow-hidden"
    >
      {/* ── ATMOSPHERE ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central bloom */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[600px] rounded-full bg-orange-600/10 blur-[200px]" />
        {/* Top-right accent */}
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[280px] rounded-full bg-amber-700/7 blur-[140px]" />
        {/* Concentric rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-orange-500/6" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full border border-orange-500/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-orange-500/[0.025]" />
      </div>

      {/* ── GLASSMORPHISM CARD ── */}
      <motion.div
        initial={{ opacity: 0, y: 56, scale: 0.94 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 w-full max-w-xl"
      >
        <div className="glass rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.6)] px-8 sm:px-12 py-12 sm:py-16 text-center">

          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-[0.25em] font-semibold mb-7 block">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available on iOS &amp; Android
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.85, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-white leading-[1.06] tracking-tight"
          >
            Bring home back
            <br />
            <ShimmerSpan className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400">
              to your plate.
            </ShimmerSpan>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.52, duration: 0.65 }}
            className="mt-5 text-white/35 text-sm sm:text-base leading-relaxed max-w-xs mx-auto"
          >
            Order fresh homemade food from trusted local chefs, delivered to your door.
          </motion.p>

          {/* Download buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
          >
            {STORE_BUTTONS.map((btn) => (
              <motion.button
                key={btn.label}
                onClick={() => (window as unknown as Record<string, () => void>).__hakkeyEarlyAccess?.()}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 24px 48px rgba(255,107,0,0.18)",
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3.5 bg-white text-[#111111] rounded-2xl px-6 py-4 shadow-2xl shadow-black/25 transition-shadow cursor-pointer"
              >
                {btn.icon}
                <div className="text-left">
                  <div className="text-[9px] text-black/40 uppercase tracking-widest font-medium leading-none mb-0.5">
                    {btn.sub}
                  </div>
                  <div className="text-sm sm:text-base font-black leading-tight">{btn.label}</div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Fine print */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-7 text-white/18 text-[10px] uppercase tracking-widest"
          >
            Free download &nbsp;·&nbsp; No subscription &nbsp;·&nbsp; Bangalore
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

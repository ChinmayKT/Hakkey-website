"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ShimmerSpan from "./ShimmerSpan";

/* ────────────────────────────────────────────────────────────────────────────
   SECTION 11 — REAL LIFE PAIN  (PG / Away from home)
──────────────────────────────────────────────────────────────────────────── */
function S11_PGLife() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="practical-pg"
      className="relative min-h-screen flex items-center overflow-hidden px-6 sm:px-12 lg:px-20"
    >
      {/* Atmosphere — shifts from cold neutral → warm orange */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[28%] left-[14%] w-[480px] h-[400px] rounded-full bg-neutral-600/8 blur-[200px]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.6, delay: 0.5 }}
          className="absolute top-[32%] right-[16%] w-[580px] h-[480px] rounded-full bg-orange-600/12 blur-[200px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label mb-8"
        >
          PG Life
        </motion.p>

        {/* Line 1 — dull tone */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.18 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-white/40 leading-[1.06] tracking-tight"
        >
          PG food is boring.
        </motion.h2>

        {/* Line 2 — energised answer */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.42 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-white leading-[1.06] tracking-tight mt-3"
        >
          Why not try{" "}
          <ShimmerSpan className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400">
            OG food?
          </ShimmerSpan>
        </motion.h2>

        {/* Subtext — two-beat emotional pull */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.65 }}
          className="mt-10 space-y-1"
        >
          <p className="text-xl sm:text-2xl text-white/35 font-light">Missing mummy&apos;s food?</p>
          <p className="text-xl sm:text-2xl text-white/65 font-medium">Hakkey brings it back.</p>
        </motion.div>

        {/* Dull ↔ Warm mini-comparison strip */}
        <div className="mt-14 flex gap-4 max-w-xs">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.82 }}
            className="flex-1 h-28 rounded-2xl bg-neutral-600/20 border border-white/[0.04] flex items-center justify-center"
          >
            <div className="text-center">
              <span className="text-3xl opacity-30 select-none">🍚</span>
              <p className="text-white/20 text-[10px] tracking-widest uppercase mt-2">PG meal</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.94 }}
            className="flex-1 h-28 rounded-2xl bg-gradient-to-br from-orange-600/20 to-amber-700/15 border border-orange-400/15 flex items-center justify-center"
          >
            <div className="text-center">
              <span className="text-3xl select-none">🍛</span>
              <p className="text-orange-300/70 text-[10px] tracking-widest uppercase mt-2">Mummy&apos;s food</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   SECTION 12 — HEALTH + TRUST + PRICE
──────────────────────────────────────────────────────────────────────────── */
const HEALTH_PILLARS = [
  { icon: "🥗", label: "Clean Food" },
  { icon: "💪", label: "Gym Friendly" },
  { icon: "✅", label: "Transparent Pricing" },
] as const;

function S12_HealthTrust() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="practical-health"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-12"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[560px] rounded-full bg-green-900/8 blur-[220px]" />
        <div className="absolute top-[24%] right-[22%] w-[380px] h-[300px] rounded-full bg-orange-600/10 blur-[180px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label mb-8"
        >
          Health &amp; Trust
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.18 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-[5rem] font-black text-white leading-[1.06] tracking-tight"
        >
          Looking for clean,{" "}
          <ShimmerSpan className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400">
            gym-friendly
          </ShimmerSpan>{" "}
          food?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.42 }}
          className="mt-8 text-lg sm:text-xl lg:text-2xl text-white/40 font-light leading-relaxed max-w-xl mx-auto"
        >
          Healthy meals. Transparent pricing. No hidden charges.
        </motion.p>

        {/* Three pillars — slide up staggered */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {HEALTH_PILLARS.map(({ icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.58 + i * 0.14 }}
              className="glass border border-white/10 rounded-2xl px-8 py-6 flex items-center gap-4 w-full sm:w-auto min-w-[180px] justify-center sm:justify-start shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
            >
              <span className="text-3xl select-none" style={{ lineHeight: 1 }}>{icon}</span>
              <span className="text-white/75 text-sm sm:text-base font-semibold tracking-wide">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   SECTION 13 — DISCOVERY + OPPORTUNITY  (eat vs earn split)
──────────────────────────────────────────────────────────────────────────── */
function S13_Discovery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="practical-discovery"
      className="relative min-h-screen flex items-center overflow-hidden px-6 sm:px-12 lg:px-20"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[28%] left-[22%] w-[520px] h-[440px] rounded-full bg-amber-800/10 blur-[200px]" />
        <div className="absolute bottom-[24%] right-[22%] w-[400px] h-[340px] rounded-full bg-orange-600/10 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label mb-8"
        >
          Eat · Earn · Explore
        </motion.p>

        {/* Two-line headline with crossfade feel */}
        <div className="space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.18 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-white leading-[1.04] tracking-tight"
          >
            Taste local cuisines.
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.38 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400 leading-[1.04] tracking-tight"
          >
            Or earn from yours.
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.58 }}
          className="mt-8 text-xl sm:text-2xl text-white/40 font-light leading-relaxed max-w-xl"
        >
          Whether you want to eat or earn — Hakkey works for you.
        </motion.p>

        {/* Split screen cards — eat ↔ earn */}
        <div className="mt-14 grid grid-cols-2 gap-4 max-w-sm">
          <motion.div
            initial={{ opacity: 0, x: -28, scale: 0.97 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.72 }}
            className="glass border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3 shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
          >
            <span className="text-4xl select-none" style={{ lineHeight: 1 }}>🍜</span>
            <p className="text-white/55 text-xs font-semibold tracking-widest uppercase text-center">Just Eat</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28, scale: 0.97 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.84 }}
            className="bg-gradient-to-br from-orange-600/25 to-amber-700/20 border border-orange-400/20 rounded-2xl p-6 flex flex-col items-center gap-3 shadow-[0_8px_40px_rgba(255,107,0,0.12)]"
          >
            <span className="text-4xl select-none" style={{ lineHeight: 1 }}>💰</span>
            <p className="text-orange-300/80 text-xs font-semibold tracking-widest uppercase text-center">Also Earn</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   SECTION 14 — GEN Z PUNCH  (final hit before CTA)
──────────────────────────────────────────────────────────────────────────── */
function S14_GenZ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="practical-genz"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-12"
    >
      {/* Climax bloom — mirrors S10 punchline energy */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[680px] rounded-full bg-orange-600/11 blur-[220px]" />
        <div className="absolute top-[22%] left-[28%] w-[360px] h-[280px] rounded-full bg-amber-600/10 blur-[160px]" />
        {/* Rings — progressively light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-orange-500/[0.05]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full border border-orange-500/[0.03]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label mb-10"
        >
          Made for You
        </motion.p>

        {/* Bold reveal with scale punch */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.93 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.18 }}
          className="text-5xl sm:text-7xl lg:text-[6.5rem] xl:text-[8rem] font-black text-white leading-none tracking-tight"
        >
          Gen Z, you&apos;ve got{" "}
          <ShimmerSpan className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400">
            Hakkey.
          </ShimmerSpan>
        </motion.h2>

        {/* Subtext — two lines, staggered */}
        <div className="mt-10 space-y-1">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.44 }}
            className="text-xl sm:text-2xl text-white/35 font-light"
          >
            Healthy. Dependable.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.58 }}
            className="text-xl sm:text-2xl text-white/55 font-medium"
          >
            No junk. No 10-minute shortcuts.
          </motion.p>
        </div>

        {/* Closing divider — echoes S10's signature line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.78 }}
          className="mt-16 mx-auto h-px w-40 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent origin-center"
        />
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   EXPORT — 4 practical sections in sequence
──────────────────────────────────────────────────────────────────────────── */
export default function PracticalNarrativeSections() {
  return (
    <>
      <S11_PGLife />
      <S12_HealthTrust />
    </>
  );
}

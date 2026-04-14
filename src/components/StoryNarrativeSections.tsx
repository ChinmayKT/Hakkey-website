"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ShimmerSpan from "./ShimmerSpan";

/* ────────────────────────────────────────────────────────────────────────────
   SECTION 1 — AI VS HUMAN  (Hook / Problem)
──────────────────────────────────────────────────────────────────────────── */
function S1_AIvsHuman() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="story-hook"
      className="relative min-h-screen flex items-center overflow-hidden px-6 sm:px-12 lg:px-20"
    >
      {/* ── Atmospheric blobs with slow Ken-Burns scale ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={isInView ? { scale: 1.06 } : {}}
          transition={{ duration: 9, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="absolute top-[30%] right-[22%] w-[650px] h-[550px] rounded-full bg-orange-600/10 blur-[200px]" />
          <div className="absolute bottom-[28%] left-[12%] w-[480px] h-[400px] rounded-full bg-rose-900/15 blur-[180px]" />
        </motion.div>

        {/* Right-panel kitchen warmth — desktop only */}
        <div className="absolute right-0 top-0 bottom-0 w-[42%] hidden lg:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="relative flex items-center justify-center"
          >
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-orange-500/15 to-amber-700/10 blur-[90px]" />
            <div
              className="absolute text-[13rem] opacity-[0.06] select-none pointer-events-none"
              style={{ lineHeight: 1 }}
            >
              🍳
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="section-label mb-8"
        >
          The Reality
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 44 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-white leading-[1.04] tracking-tight max-w-3xl"
        >
          AI is taking jobs.
          <br />
          <ShimmerSpan className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400">
            But it can&apos;t cook your food.
          </ShimmerSpan>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.42 }}
          className="mt-8 text-xl sm:text-2xl text-white/40 font-light leading-relaxed"
        >
          Real food needs real people.
        </motion.p>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   SECTION 2 — LAYOFF TO OPPORTUNITY
──────────────────────────────────────────────────────────────────────────── */
const COOK_EARN_WORDS = ["Cook.", "Earn.", "Restart."];

function S2_LayoffOpportunity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="story-opportunity"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-12"
    >
      {/* Soft glow behind the text */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[520px] rounded-full bg-amber-700/10 blur-[220px]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[300px] rounded-full bg-orange-500/10 blur-[120px]"
        />
      </div>

      {/* ── Content (centered) ── */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 44 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[5rem] sm:text-[7rem] lg:text-[9rem] xl:text-[10rem] font-black text-white leading-none tracking-tight"
        >
          Laid off?
        </motion.h2>

        {/* Word-by-word stagger reveal */}
        <div className="mt-10 flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
          {COOK_EARN_WORDS.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.36 + i * 0.16 }}
            >
              <ShimmerSpan
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400"
                delay={900 + i * 300}
              >
                {word}
              </ShimmerSpan>
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 text-lg sm:text-xl text-white/35 font-light"
        >
          Your next chapter starts in your kitchen.
        </motion.p>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   SECTION 3 — NO RESTAURANT NEEDED
──────────────────────────────────────────────────────────────────────────── */
function S3_NoRestaurant() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="story-sell"
      className="relative min-h-screen flex items-center overflow-hidden px-6 sm:px-12 lg:px-20"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[25%] left-[25%] w-[550px] h-[450px] rounded-full bg-amber-800/10 blur-[200px]" />
        <div className="absolute bottom-[22%] right-[18%] w-[400px] h-[350px] rounded-full bg-orange-600/10 blur-[180px]" />
      </div>

      {/* ── Two-column layout ── */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Text — slides in from left */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label mb-8"
          >
            For Sellers
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: -48 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-black text-white leading-[1.06] tracking-tight"
          >
            You don&apos;t need a{" "}
            <ShimmerSpan className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-400">
              restaurant
            </ShimmerSpan>{" "}
            to sell food.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
            className="mt-8 text-xl sm:text-2xl text-white/40 font-light leading-relaxed"
          >
            Start your business from home.
          </motion.p>
        </div>

        {/* Visual card — fades in from right */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.28 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-700/15 blur-[50px]" />
            <div className="relative glass border border-white/10 rounded-[2rem] w-full h-full flex items-center justify-center shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
              <div className="text-center">
                <div className="text-7xl mb-4 select-none" style={{ lineHeight: 1 }}>🏠</div>
                <p className="text-white/55 text-sm font-medium tracking-wide">Your kitchen.</p>
                <p className="text-white/90 text-lg font-black mt-1">Your business.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   SECTION 4 — BUYER PAIN POINT (split reveal)
──────────────────────────────────────────────────────────────────────────── */
function S4_BuyerPain() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="story-buyers"
      className="relative min-h-screen flex items-center overflow-hidden px-6 sm:px-12 lg:px-20"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[28%] left-[18%] w-[500px] h-[420px] rounded-full bg-orange-700/10 blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label mb-8"
        >
          For Buyers
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black leading-[1.04] tracking-tight"
        >
          <span className="text-white/45">Bored of the same</span>
          <br />
          <span className="text-white">restaurant food?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.38 }}
          className="mt-8 text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-400"
        >
          Try real home-made meals.
        </motion.p>

        {/* Split comparison panels */}
        <div className="mt-14 flex gap-4 max-w-sm">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
            className="flex-1 h-32 rounded-2xl bg-neutral-700/25 border border-white/[0.05] flex items-center justify-center"
          >
            <div className="text-center">
              <span className="text-4xl opacity-40 select-none">🍔</span>
              <p className="text-white/25 text-[10px] tracking-widest uppercase mt-2">Same. Every. Day.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.65 }}
            className="flex-1 h-32 rounded-2xl bg-gradient-to-br from-orange-600/20 to-amber-700/15 border border-orange-400/15 flex items-center justify-center"
          >
            <div className="text-center">
              <span className="text-4xl select-none">🍱</span>
              <p className="text-orange-300/75 text-[10px] tracking-widest uppercase mt-2">Made with love.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   SECTION 5 — SIDE INCOME
──────────────────────────────────────────────────────────────────────────── */
function S5_SideIncome() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="story-income"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-12"
    >
      {/* Night cooking atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[22%] right-[28%] w-[300px] h-[260px] rounded-full bg-amber-900/15 blur-[160px]" />
        <div className="absolute bottom-[28%] left-[28%] w-[460px] h-[380px] rounded-full bg-orange-800/10 blur-[200px]" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label mb-8"
        >
          Side Hustle
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-white leading-[1.04] tracking-tight"
        >
          Looking for{" "}
          <ShimmerSpan className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400">
            side income?
          </ShimmerSpan>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.38 }}
          className="mt-8 text-xl sm:text-2xl text-white/40 font-light leading-relaxed"
        >
          Hakkey lets you cook and earn.
        </motion.p>

        {/* Night-cooking icon strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 flex items-center justify-center gap-6 sm:gap-10"
        >
          {(["🌙", "👩‍🍳", "💰"] as const).map((icon, i) => (
            <span
              key={i}
              className={`text-5xl sm:text-6xl select-none ${i === 1 ? "opacity-70" : "opacity-35"}`}
            >
              {icon}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   SECTION 6 — CRAVING  (blur → clear via scale + opacity)
──────────────────────────────────────────────────────────────────────────── */
function S6_Craving() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="story-craving"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-12"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[600px] rounded-full bg-orange-600/10 blur-[220px]" />
        <div className="absolute top-[22%] right-[22%] w-[300px] h-[260px] rounded-full bg-amber-600/10 blur-[160px]" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label mb-8"
        >
          The Craving
        </motion.p>

        {/* Scale from slightly small → full = blur-to-clear illusion */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.04] tracking-tight"
        >
          Craving{" "}
          <ShimmerSpan className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400">
            home-made food?
          </ShimmerSpan>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.42 }}
          className="mt-8 text-xl sm:text-2xl text-white/40 font-light leading-relaxed"
        >
          Hakkey is your one-stop solution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 0.22, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-12 text-8xl sm:text-9xl select-none leading-none"
        >
          🍛
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   SECTION 7 — PASSION TO INCOME  (warm glow pulse)
──────────────────────────────────────────────────────────────────────────── */
function S7_Passion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="story-passion"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-12"
    >
      {/* Pulsing warm glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={isInView ? { opacity: [0.5, 1, 0.5] } : {}}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[520px] rounded-full bg-orange-600/10 blur-[200px]"
        />
        <div className="absolute bottom-[25%] left-[25%] w-[350px] h-[280px] rounded-full bg-amber-700/10 blur-[160px]" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label mb-8"
        >
          Passion + Income
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="text-[4.5rem] sm:text-[6rem] lg:text-[8rem] font-black text-white leading-none tracking-tight"
        >
          Love <ShimmerSpan className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400" delay={800}>cooking?</ShimmerSpan>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.38 }}
          className="mt-8 text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400"
        >
          Earn from what you love.
        </motion.p>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   SECTION 8 — FAMILY EMOTION  (slow emotional fade)
──────────────────────────────────────────────────────────────────────────── */
function S8_Family() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="story-family"
      className="relative min-h-screen flex items-center overflow-hidden px-6 sm:px-12 lg:px-20"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[28%] right-[22%] w-[600px] h-[500px] rounded-full bg-rose-900/12 blur-[200px]" />
        <div className="absolute bottom-[28%] left-[28%] w-[420px] h-[360px] rounded-full bg-amber-800/10 blur-[180px]" />
      </div>

      {/* Two-column: glass card (left) · text (right) */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Emotional glass card — desktop only, slow fade */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-80 h-96">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-500/15 to-rose-900/15 blur-[50px]" />
            <div className="relative glass border border-white/10 rounded-[2rem] w-full h-full flex flex-col items-center justify-center gap-5 shadow-[0_25px_80px_rgba(0,0,0,0.5)] px-8">
              <div className="text-6xl select-none" style={{ lineHeight: 1 }}>👩‍🍳</div>
              <p className="text-white/50 text-sm font-light text-center leading-relaxed">
                Made with the same love<br />as every meal at home.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="section-label mb-8"
          >
            Family
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 44 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.06] tracking-tight"
          >
            Your mom cooks{" "}
            <ShimmerSpan className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-400">
              amazing food?
            </ShimmerSpan>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.42 }}
            className="mt-8 text-xl sm:text-2xl text-white/40 font-light leading-relaxed"
          >
            Help her become a seller.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   SECTION 9 — DECISION CONTRAST  (line-by-line reveal)
──────────────────────────────────────────────────────────────────────────── */
function S9_Decision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="story-decision"
      className="relative min-h-screen flex items-center overflow-hidden px-6 sm:px-12 lg:px-20"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[28%] right-[28%] w-[520px] h-[420px] rounded-full bg-orange-600/10 blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label mb-10"
        >
          You Decide
        </motion.p>

        {/* Line-by-line reveal */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white/40 leading-[1.08] tracking-tight"
          >
            Fast food in 10 minutes
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.42 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.08] tracking-tight"
          >
            or{" "}
            <ShimmerSpan className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-400">
              home food
            </ShimmerSpan>{" "}
            within 10 km?
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.72 }}
          className="mt-10 text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400"
        >
          You decide.
        </motion.p>

        {/* Split mini-panels */}
        <div className="mt-12 flex gap-4 max-w-xs">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.88 }}
            className="flex-1 h-28 rounded-2xl bg-neutral-700/25 border border-white/[0.05] flex items-center justify-center"
          >
            <div className="text-center">
              <span className="text-4xl opacity-40 select-none">🚚</span>
              <p className="text-white/25 text-[10px] tracking-widest uppercase mt-1.5">Fast food</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.98 }}
            className="flex-1 h-28 rounded-2xl bg-gradient-to-br from-orange-600/20 to-amber-700/15 border border-orange-400/15 flex items-center justify-center"
          >
            <div className="text-center">
              <span className="text-4xl select-none">🍲</span>
              <p className="text-orange-300/70 text-[10px] tracking-widest uppercase mt-1.5">Home food</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   SECTION 10 — BRAND PUNCHLINE  (bold fade-in + scale impact)
──────────────────────────────────────────────────────────────────────────── */
function S10_Punchline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="story-punchline"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-12"
    >
      {/* Strongest atmospheric bloom — climax of the story */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[700px] rounded-full bg-orange-600/12 blur-[220px]" />
        <div className="absolute top-[22%] right-[22%] w-[400px] h-[320px] rounded-full bg-amber-600/10 blur-[180px]" />
        {/* Signature concentric rings — echoes the FinalCTA design */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full border border-orange-500/[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[880px] h-[880px] rounded-full border border-orange-500/[0.025]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label mb-10"
        >
          The Truth
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.94 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-[5.25rem] font-black text-white leading-[1.06] tracking-tight"
        >
          Aunty&apos;s kitchen{" "}
          <ShimmerSpan className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400">
            beats
          </ShimmerSpan>{" "}
          unhealthy fast food.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.42 }}
          className="mt-8 text-xl sm:text-2xl font-semibold text-white/40"
        >
          Choose better.{" "}
          <span className="text-white/70">Choose real.</span>
        </motion.p>

        {/* Signature closing line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.7 }}
          className="mt-16 mx-auto h-px w-48 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent origin-center"
        />
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   EXPORT — composite of all 10 story sections in narrative sequence
──────────────────────────────────────────────────────────────────────────── */
export default function StoryNarrativeSections() {
  return (
    <>
      <S1_AIvsHuman />
      <S3_NoRestaurant />
      <S4_BuyerPain />
      <S8_Family />
      <S9_Decision />
    </>
  );
}

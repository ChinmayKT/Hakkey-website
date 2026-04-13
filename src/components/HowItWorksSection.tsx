"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    number: "01",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Browse Home Chefs",
    description:
      "Discover verified chefs in your neighbourhood. Filter by cuisine, diet, price, or rating — find your perfect match.",
    accent: "from-orange-400 to-amber-400",
    glow: "rgba(255,107,0,0.15)",
  },
  {
    number: "02",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Place Your Order",
    description:
      "Choose your dishes and pay securely in seconds. Multiple payment options, zero hassle.",
    accent: "from-primary to-orange-500",
    glow: "rgba(255,107,0,0.18)",
  },
  {
    number: "03",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Enjoy at Home",
    description:
      "Your chef cooks fresh after your order. Hot, hygienic, homemade — delivered right to your door.",
    accent: "from-green-400 to-emerald-500",
    glow: "rgba(34,197,94,0.15)",
  },
];

function Step({
  step,
  index,
  isLast,
}: {
  step: (typeof STEPS)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="relative"
    >
      {/* Connector line (between steps on desktop) */}
      {!isLast && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="hidden lg:block absolute top-10 left-[calc(50%+3rem)] right-[calc(-50%+3rem)] h-px bg-gradient-to-r from-border to-border origin-left"
          style={{ zIndex: 0 }}
        />
      )}

      <div className="relative z-10 flex flex-col items-center text-center group">
        {/* Number + Icon circle */}
        <div className="relative mb-7">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center text-white shadow-xl`}
            style={{ boxShadow: `0 12px 40px ${step.glow}` }}
          >
            {step.icon}
          </motion.div>

          {/* Step number badge */}
          <div className="absolute -top-3 -right-3 w-7 h-7 bg-white border-2 border-border rounded-full flex items-center justify-center shadow-sm">
            <span className="text-[10px] font-black text-primary">{step.number}</span>
          </div>
        </div>

        {/* Text */}
        <h3 className="font-black text-foreground text-lg sm:text-xl mb-3 tracking-tight">
          {step.title}
        </h3>
        <p className="text-muted text-sm sm:text-base leading-relaxed max-w-[220px] sm:max-w-xs">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowItWorksSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: false, margin: "-100px" });
  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: false, margin: "-100px" });

  return (
    <section id="how" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="section-label">Simple & Fast</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
            From craving to doorstep{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              in three steps
            </span>
          </h2>
          <p className="mt-4 text-muted text-base sm:text-lg max-w-md mx-auto">
            We&apos;ve made ordering homemade food as simple as it gets.
          </p>
        </motion.div>

        {/* ── STEPS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          {STEPS.map((step, i) => (
            <Step key={step.number} step={step} index={i} isLast={i === STEPS.length - 1} />
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Start Ordering — Download the App
          </motion.a>
          <p className="mt-3 text-muted text-xs">Free download · No subscription fees</p>
        </motion.div>
      </div>
    </section>
  );
}

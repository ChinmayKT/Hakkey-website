"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const REASONS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Real Home Kitchens",
    description:
      "Not a cloud kitchen. Every meal comes from a certified home kitchen — a real family recipe, cooked the right way.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "FSSAI Certified",
    description:
      "Every chef on Hakkey is FSSAI licensed and hygiene verified. You order with complete peace of mind.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Local Trust",
    description:
      "Your neighbours are your chefs. Discover culinary talent just streets away — food that connects community.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cooked Fresh, Always",
    description:
      "No reheated food. Orders are prepared after you place them — every meal arrives piping hot and alive.",
  },
];

const STATS = [
  { value: "500+", label: "Home Chefs" },
  { value: "4.8★", label: "Avg Rating" },
  { value: "50K+", label: "Meals Served" },
];

export default function WhyHakkeySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="why" ref={ref} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* ── LEFT: STICKY TEXT BLOCK ── */}
          <div className="lg:sticky lg:top-32 self-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <span className="section-label">The Hakkey Difference</span>

              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-foreground leading-[1.06] tracking-tight">
                Not delivery.
                <br />
                A{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  home-cooked
                </span>
                <br />
                experience.
              </h2>

              <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-md">
                We&apos;re not a cloud kitchen. We&apos;re a platform connecting real home cooks with food lovers who miss the taste of home.
              </p>

              {/* Stats strip */}
              <div className="mt-10 grid grid-cols-3 gap-3">
                {STATS.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15 * i + 0.4, duration: 0.5, ease: "easeOut" }}
                    className="text-center bg-white border border-border rounded-2xl py-4 px-2 card-shadow"
                  >
                    <div className="text-xl sm:text-2xl font-black text-primary">{s.value}</div>
                    <div className="text-xs text-muted mt-1">{s.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#download"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex items-center gap-2 text-primary font-semibold text-sm group"
              >
                Download the app
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* ── RIGHT: FEATURE CARDS ── */}
          <div className="space-y-4">
            {REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.12 * i + 0.2, duration: 0.65, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{ x: 4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group bg-white border border-border rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 flex items-start gap-5 cursor-default"
                >
                  {/* Icon */}
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/8 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {r.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-bold text-foreground text-base mb-1.5 group-hover:text-primary transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">{r.description}</p>
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

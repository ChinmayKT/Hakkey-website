"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[640px] overflow-hidden">

      {/* ── VIDEO: cinematic 16:9 fill — Ken Burns via CSS ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="hero-video-fill"
      >
        <source src="/videos/20260403_213444753.mp4" type="video/mp4" />
      </video>

      {/* ── OVERLAYS ── */}
      {/* Left-heavy gradient for text legibility — warm maroon tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0500]/88 via-[#0d0200]/52 to-transparent" />
      {/* Bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#100300]/65 via-transparent to-[#0a0100]/18" />
      {/* Subtle grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-28 max-w-7xl mx-auto w-full">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          className="mb-7"
        >
          <span className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Serving fresh homemade food near you
          </span>
        </motion.div>

        {/* H1 — Logo Image */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.4 }}
          className="relative z-20 h-[4.5rem] sm:h-[6rem] md:h-[7.5rem] lg:h-[8rem] xl:h-[13.5rem]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hakkey-hero-logo.png"
            alt="Hakkey"
            className="h-full w-auto object-contain mix-blend-screen"
          />
          <div
            className="absolute inset-0 pointer-events-none animate-[heroShimmer_7s_ease-in-out_infinite]"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 45%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.25) 55%, transparent 60%)",
              backgroundSize: "200% 100%",
              WebkitMaskImage: "url(/hakkey-hero-logo-mask.png)",
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "left center",
              maskImage: "url(/hakkey-hero-logo-mask.png)",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "left center",
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
          className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-white/80 tracking-tight"
        >
          Home Food Near You
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
          className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-white/60 max-w-md leading-relaxed font-light"
        >
          Freshly prepared by home chefs with love &amp; care.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-start gap-3.5"
        >
          <motion.button
            onClick={() => (window as unknown as Record<string, () => void>).__hakkeyEarlyAccess?.()}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-4 bg-white text-foreground rounded-2xl px-6 py-4 shadow-2xl shadow-black/30 hover:shadow-orange-300/10 transition-shadow cursor-pointer"
          >
            <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" />
            </svg>
            <div>
              <div className="text-[9px] text-foreground/40 uppercase tracking-widest font-medium">Get it on</div>
              <div className="text-sm font-black leading-tight">Google Play</div>
            </div>
          </motion.button>

          <motion.button
            onClick={() => (window as unknown as Record<string, () => void>).__hakkeyEarlyAccess?.()}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-4 bg-white text-foreground rounded-2xl px-6 py-4 shadow-2xl shadow-black/30 hover:shadow-orange-300/10 transition-shadow cursor-pointer"
          >
            <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div>
              <div className="text-[9px] text-foreground/40 uppercase tracking-widest font-medium">Download on the</div>
              <div className="text-sm font-black leading-tight">App Store</div>
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-white/30 text-[9px] uppercase tracking-[0.25em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
        >
          <svg className="w-4 h-4 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const APP_RATINGS = [
  { store: "Google Play", rating: "4.8", reviews: "2.1K reviews", icon: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" />
    </svg>
  )},
  { store: "App Store", rating: "4.9", reviews: "1.8K reviews", icon: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )},
];

function MiniStars() {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(s => (
        <svg key={s} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="download" ref={ref} className="relative overflow-hidden bg-[#111111]">
      {/* ── ATMOSPHERE ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central warm glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-orange-600/10 blur-[150px]" />
        {/* Corner glows */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-800/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-700/8 rounded-full blur-[80px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,107,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 py-28 sm:py-36 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white/70 text-xs font-semibold uppercase tracking-[0.2em] px-4 py-2.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available on iOS &amp; Android
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.04] tracking-tight"
        >
          Get the Hakkey App.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400">
            Eat better today.
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-white/40 text-base sm:text-lg leading-relaxed max-w-md mx-auto"
        >
          Join 10,000+ customers already eating fresh homemade food every day — cooked with love, delivered to your door.
        </motion.p>

        {/* ── DOWNLOAD BUTTONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          {APP_RATINGS.map((app) => (
            <motion.a
              key={app.store}
              href="#"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-4 bg-white text-[#111111] rounded-2xl px-7 py-4 sm:py-5 shadow-2xl shadow-black/30 hover:shadow-orange-500/10 transition-shadow"
            >
              <div className="shrink-0 text-[#111111]">{app.icon}</div>
              <div className="text-left">
                <div className="text-[10px] text-black/40 uppercase tracking-widest font-medium leading-none mb-1">
                  {app.store === "Google Play" ? "Get it on" : "Download on the"}
                </div>
                <div className="text-base font-black leading-tight">{app.store}</div>
                <div className="flex items-center gap-1.5 mt-1">
                  <MiniStars />
                  <span className="text-[10px] text-black/40 font-medium">{app.rating}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* ── APP RATINGS ROW ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-12 flex items-center justify-center gap-6 sm:gap-10"
        >
          <div className="text-center">
            <div className="text-white/80 font-black text-2xl">4.8</div>
            <MiniStars />
            <div className="text-white/30 text-[10px] mt-1 uppercase tracking-wider">Google Play</div>
          </div>

          <div className="w-px h-10 bg-white/10" />

          <div className="text-center">
            <div className="text-white/80 font-black text-2xl">4.9</div>
            <MiniStars />
            <div className="text-white/30 text-[10px] mt-1 uppercase tracking-wider">App Store</div>
          </div>

          <div className="w-px h-10 bg-white/10" />

          <div className="text-center">
            <div className="text-white/80 font-black text-2xl">10K+</div>
            <div className="flex justify-center gap-0.5 mt-1">
              {["👨‍🍳","👩‍🍳","🍛","❤️"].map(e => (
                <span key={e} className="text-sm">{e}</span>
              ))}
            </div>
            <div className="text-white/30 text-[10px] mt-1 uppercase tracking-wider">Happy users</div>
          </div>
        </motion.div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 text-white/20 text-xs"
        >
          Free to download · No subscription · Available across Bangalore
        </motion.p>
      </div>
    </section>
  );
}

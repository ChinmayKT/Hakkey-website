"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function VideoSection() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  }

  return (
    <section
      ref={ref}
      className="relative bg-[#0C0800] px-6 sm:px-12 lg:px-20 py-24 overflow-hidden"
    >
      {/* ── ATMOSPHERE ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-orange-700/10 blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── LABEL ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-px w-8 bg-orange-500/40" />
          <span className="text-orange-400/70 text-[10px] uppercase tracking-[0.3em] font-semibold">
            See It In Action
          </span>
          <div className="h-px w-8 bg-orange-500/40" />
        </motion.div>

        {/* ── VIDEO WRAPPER ── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          className="group relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/[0.07]"
          style={{ aspectRatio: "16 / 9" }}
        >
          {/* Video */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          >
            <source src="/videos/20260403_213444753.mp4" type="video/mp4" />
          </video>

          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.35)] pointer-events-none" />

          {/* Mute toggle — appears on hover */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white/80 hover:text-white hover:bg-black/70 cursor-pointer"
            aria-label={muted ? "Unmute video" : "Mute video"}
          >
            {muted ? (
              /* Muted icon */
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              /* Sound icon */
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-3.536-9.536A5 5 0 004 12a5 5 0 004.464 2.464M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>
        </motion.div>

        {/* ── CAPTION ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-5 text-center text-white/20 text-xs tracking-widest uppercase"
        >
          Real kitchens. Real chefs. Real food.
        </motion.p>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ── Link data ─────────────────────────────────────────────────────────────────
const NAV_COLUMNS = [
  {
    section: "Product",
    links: [
      { label: "About", href: "#" },
      { label: "How it works", href: "#why" },
      { label: "Become a chef", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    section: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
  {
    section: "Connect",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Twitter (X)", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 py-20 overflow-hidden"
    >
      {/* ── ATMOSPHERE ────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full bg-orange-600/[0.07] blur-[240px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[420px] h-[320px] rounded-full bg-amber-700/[0.06] blur-[180px]" />
        <div className="absolute top-1/4 right-1/4 w-[320px] h-[260px] rounded-full bg-orange-500/[0.04] blur-[150px]" />
        {/* Concentric ghost rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border border-orange-500/[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] rounded-full border border-orange-500/[0.025]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-orange-500/[0.015]" />
      </div>

      {/* ── CONTENT ───────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-16 sm:gap-20">

        {/* TOP — EMOTIONAL HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white/90 tracking-tight leading-[1.1]">
            Still craving{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400">
              home?
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base font-light tracking-wide text-white/40">
            There&apos;s always a kitchen waiting for you.
          </p>
        </motion.div>

        {/* CENTER — GLASSMORPHISM GRID */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-60px" }}
          className="w-full glass rounded-[2rem] sm:rounded-[2.5rem] border border-white/[0.09] shadow-[0_40px_120px_rgba(0,0,0,0.55)] px-8 sm:px-12 lg:px-16 py-12 sm:py-14"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">

            {/* Column 1 — Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-5"
            >
              <Link href="#hero" className="flex items-center gap-2.5 group w-fit">
                <div className="w-9 h-9 bg-gradient-to-br from-primary to-orange-400 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 transition-shadow duration-300 group-hover:shadow-orange-500/40">
                  <span className="text-white font-black text-sm">H</span>
                </div>
                <span className="font-bold text-base transition-colors duration-300 text-white/50 group-hover:text-white/80">
                  Hakkey
                </span>
              </Link>
              <p className="text-sm leading-relaxed max-w-[180px] text-white/30">
                Bringing home back to your plate.
              </p>
            </motion.div>

            {/* Columns 2–4 — Links */}
            {NAV_COLUMNS.map(({ section, links }, colIdx) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 + colIdx * 0.08 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-white/25">
                  {section}
                </span>
                <ul className="flex flex-col gap-3">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="group relative inline-block text-sm leading-none transition-colors duration-300 cursor-pointer text-white/35 hover:text-orange-300"
                      >
                        {label}
                        {/* Underline — slides left → right on hover */}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-orange-400 to-amber-300 group-hover:w-full transition-[width] duration-300 ease-out" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* BOTTOM — MICRO COPYRIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center flex flex-col gap-2"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/20">
            &copy; 2026 Hakkey Technologies Pvt. Ltd.
          </p>
          <p className="text-[11px] tracking-wide text-white/15">
            Made with ❤️ in Bangalore
          </p>
        </motion.div>

      </div>
    </footer>
  );
}

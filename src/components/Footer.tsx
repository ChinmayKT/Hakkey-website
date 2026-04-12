"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#090600] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-gradient-to-br from-primary to-orange-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-xs">H</span>
          </div>
          <span className="text-white/50 font-semibold text-sm group-hover:text-white/70 transition-colors">
            Hakkey
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-white/20 text-xs text-center">
          &copy; {new Date().getFullYear()} Hakkey Technologies Pvt. Ltd.
        </p>

        {/* Links */}
        <div className="flex items-center gap-5">
          {["Privacy", "Terms", "Contact"].map((label) => (
            <Link
              key={label}
              href="#"
              className="text-white/25 hover:text-white/50 text-xs transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

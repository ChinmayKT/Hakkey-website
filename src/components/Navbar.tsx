"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Collections", href: "#collections" },
  { label: "Chefs", href: "#chefs" },
  { label: "Menu", href: "#dishes" },
  { label: "Why Hakkey", href: "#why" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg sm:text-xl">H</span>
            </div>
            <span
              className={`text-xl sm:text-2xl font-bold transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Hakkey
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-foreground/70" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="#download"
              className="hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download App
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
                <span
                  className={`block h-0.5 w-5 rounded transition-all ${
                    mobileOpen
                      ? `rotate-45 translate-y-1 ${scrolled ? "bg-foreground" : "bg-white"}`
                      : scrolled
                      ? "bg-foreground"
                      : "bg-white"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded transition-all ${
                    mobileOpen
                      ? `-rotate-45 -translate-y-1 ${scrolled ? "bg-foreground" : "bg-white"}`
                      : scrolled
                      ? "bg-foreground"
                      : "bg-white"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary-light rounded-xl text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#download"
                onClick={() => setMobileOpen(false)}
                className="block mt-3 text-center bg-primary text-white px-4 py-3 rounded-xl text-sm font-semibold"
              >
                Download App
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

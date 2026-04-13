"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CHEFS = [
  {
    name: "Yashas D.B.",
    specialty: "South Indian",
    rating: 4.8,
    orders: "120+ orders",
    badge: "Home Chef",
    badgeColor: "bg-orange-50 text-primary border-orange-100",
    avatar: "YD",
    avatarGrad: "from-orange-300 to-amber-400",
    emoji: "👨‍🍳",
    tags: ["Idli", "Dosa", "Sambar"],
  },
  {
    name: "Ramesh Kumar",
    specialty: "North Indian",
    rating: 4.9,
    orders: "250+ orders",
    badge: "Top Rated",
    badgeColor: "bg-green-50 text-green-700 border-green-100",
    avatar: "RK",
    avatarGrad: "from-green-300 to-emerald-400",
    emoji: "👨‍🍳",
    tags: ["Dal Makhani", "Naan", "Paneer"],
  },
  {
    name: "Priya Sharma",
    specialty: "Continental",
    rating: 4.7,
    orders: "90+ orders",
    badge: "Home Chef",
    badgeColor: "bg-orange-50 text-primary border-orange-100",
    avatar: "PS",
    avatarGrad: "from-pink-300 to-rose-400",
    emoji: "👩‍🍳",
    tags: ["Pasta", "Salad", "Soups"],
  },
  {
    name: "Lakshmi Devi",
    specialty: "Kerala Cuisine",
    rating: 4.9,
    orders: "180+ orders",
    badge: "Premium",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
    avatar: "LD",
    avatarGrad: "from-purple-300 to-violet-400",
    emoji: "👩‍🍳",
    tags: ["Appam", "Fish Curry", "Puttu"],
  },
];

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`w-3.5 h-3.5 ${s <= Math.round(value) ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ChefCard({
  chef,
  index,
  isInView,
}: {
  chef: (typeof CHEFS)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.65, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="group bg-white border border-border rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-300 cursor-default h-full"
      >
        {/* ── Top band ── */}
        <div className="relative h-36 bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center overflow-hidden">
          {/* Abstract warm pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-2 left-4 w-20 h-20 rounded-full bg-orange-200/60 blur-xl" />
            <div className="absolute bottom-2 right-4 w-16 h-16 rounded-full bg-amber-200/60 blur-xl" />
          </div>

          {/* Avatar */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${chef.avatarGrad} flex items-center justify-center text-3xl shadow-lg`}
          >
            {chef.emoji}
          </motion.div>

          {/* Badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full border ${chef.badgeColor}`}
            >
              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {chef.badge}
            </span>
          </div>
        </div>

        {/* ── Info ── */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-1">
            <div>
              <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
                {chef.name}
              </h3>
              <p className="text-muted text-xs mt-0.5">{chef.specialty}</p>
            </div>
            <div className="text-right">
              <div className="text-foreground font-black text-sm">{chef.rating}</div>
              <StarRating value={chef.rating} />
            </div>
          </div>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {chef.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-muted/80 bg-border/60 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
            <span className="text-xs text-muted flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-muted/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {chef.orders}
            </span>
            <span className="text-xs text-muted flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-muted/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              25–35 min
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TopChefsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="chefs" ref={ref} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-foreground/[0.015]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="section-label">Our Community</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
              Top Home{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Chefs
              </span>
            </h2>
            <p className="mt-3 text-muted text-base sm:text-lg max-w-md">
              Verified local cooks who pour their heart into every meal they make.
            </p>
          </div>

          <motion.a
            href="#download"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex items-center gap-2 border border-border text-foreground/70 hover:text-primary hover:border-primary px-5 py-2.5 rounded-full text-sm font-medium transition-colors shrink-0"
          >
            View all chefs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Grid — 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {CHEFS.map((chef, i) => (
            <ChefCard key={chef.name} chef={chef} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

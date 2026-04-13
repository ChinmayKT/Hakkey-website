"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DISHES = [
  {
    emoji: "🍛",
    name: "South Thali",
    chef: "Yashas D.B.",
    grad: "from-amber-900/50 via-orange-950/60 to-amber-900/40",
    ring: "ring-orange-800/30",
  },
  {
    emoji: "🫕",
    name: "Dal Makhani",
    chef: "Ramesh Kumar",
    grad: "from-red-900/50 via-rose-950/60 to-red-900/40",
    ring: "ring-red-800/30",
  },
  {
    emoji: "🥘",
    name: "Chole Bhature",
    chef: "Sunita Devi",
    grad: "from-yellow-900/50 via-amber-950/60 to-yellow-900/40",
    ring: "ring-yellow-800/30",
  },
  {
    emoji: "🍲",
    name: "Rasam Rice",
    chef: "Lakshmi Rao",
    grad: "from-orange-900/50 via-amber-950/60 to-orange-900/40",
    ring: "ring-orange-800/30",
  },
  {
    emoji: "🧆",
    name: "Masala Dosa",
    chef: "Priya Iyer",
    grad: "from-amber-900/50 via-yellow-950/60 to-amber-900/40",
    ring: "ring-amber-800/30",
  },
  {
    emoji: "🍱",
    name: "Home Tiffin",
    chef: "Kavitha S.",
    grad: "from-rose-900/50 via-pink-950/60 to-rose-900/40",
    ring: "ring-rose-800/30",
  },
];

function DishCard({
  dish,
  index,
  isInView,
}: {
  dish: (typeof DISHES)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: 0.07 * index, duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 280, damping: 18 }}
        className="group cursor-default select-none"
      >
        {/* Visual */}
        <div
          className={`relative rounded-2xl bg-gradient-to-br ${dish.grad} h-36 sm:h-44 lg:h-48 flex items-center justify-center overflow-hidden mb-3.5 ring-1 ${dish.ring}`}
        >
          {/* Subtle inner glow on hover */}
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 rounded-2xl" />

          <motion.span
            whileHover={{ scale: 1.2, rotate: 6 }}
            transition={{ type: "spring", stiffness: 280, damping: 15 }}
            className="text-5xl sm:text-6xl inline-block relative z-10"
          >
            {dish.emoji}
          </motion.span>

          {/* "Home-made" badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur-sm text-orange-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-orange-800/30 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block" />
              Home-made
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="px-0.5">
          <h3 className="font-bold text-white/85 text-sm sm:text-base leading-snug group-hover:text-orange-300 transition-colors duration-200">
            {dish.name}
          </h3>
          <p className="mt-0.5 text-white/40 text-xs">by {dish.chef}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function DishesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="dishes"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-24"
    >

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* ── HEADING ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="mb-12 sm:mb-14"
        >
          <span className="section-label mb-4 block">The Menu</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white/90 leading-[1.05] tracking-tight max-w-2xl">
            Every dish
            <br />
            has a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              story.
            </span>
          </h2>
          <p className="mt-4 text-white/45 text-base sm:text-lg max-w-md leading-relaxed">
            Cooked in a real kitchen, with real ingredients, by someone who truly loves to cook.
          </p>
        </motion.div>

        {/* ── DISH GRID ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {DISHES.map((dish, i) => (
            <DishCard key={dish.name} dish={dish} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

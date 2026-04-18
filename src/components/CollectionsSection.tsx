"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const COLLECTIONS = [
  {
    title: "Breakfast",
    emoji: "🥞",
    description: "Start your morning right",
    gradient: "from-amber-100 to-orange-50",
    border: "border-amber-200",
  },
  {
    title: "Lunch",
    emoji: "🍛",
    description: "Hearty homemade meals",
    gradient: "from-red-50 to-orange-50",
    border: "border-red-200",
  },
  {
    title: "Dinner",
    emoji: "🍲",
    description: "End the day deliciously",
    gradient: "from-purple-50 to-pink-50",
    border: "border-purple-200",
  },
  {
    title: "Snacks",
    emoji: "🥘",
    description: "Quick bites anytime",
    gradient: "from-green-50 to-emerald-50",
    border: "border-green-200",
  },
  {
    title: "Desserts",
    emoji: "🍰",
    description: "Sweet homemade treats",
    gradient: "from-pink-50 to-rose-50",
    border: "border-pink-200",
  },
  {
    title: "Beverages",
    emoji: "🥤",
    description: "Freshly made drinks",
    gradient: "from-sky-50 to-blue-50",
    border: "border-sky-200",
  },
];

export default function CollectionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="collections" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-10 sm:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Collections
        </h2>
        <p className="mt-3 text-muted text-base sm:text-lg">
          Explore curated food categories from home kitchens near you
        </p>
      </motion.div>

      <div className="overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 hide-scrollbar">
        {COLLECTIONS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            className={`flex-shrink-0 w-44 sm:w-52 bg-gradient-to-br ${item.gradient} rounded-2xl p-6 border ${item.border} cursor-pointer group transition-all hover:shadow-lg hover:shadow-orange-100/50 hover:-translate-y-1`}
          >
            <span className="text-4xl sm:text-5xl block mb-4 group-hover:scale-110 transition-transform">
              {item.emoji}
            </span>
            <h3 className="font-bold text-foreground text-base sm:text-lg">{item.title}</h3>
            <p className="text-muted text-xs sm:text-sm mt-1">{item.description}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}

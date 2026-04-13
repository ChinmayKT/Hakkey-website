"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DISHES = [
  {
    name: "South Special Thali",
    chef: "Yashas DB",
    price: 149,
    originalPrice: 199,
    rating: 4.8,
    tags: ["VEG", "Popular"],
    prepTime: "25 min",
    emoji: "🍛",
  },
  {
    name: "Butter Chicken & Naan",
    chef: "Ramesh Kumar",
    price: 229,
    originalPrice: 279,
    rating: 4.9,
    tags: ["NON-VEG", "Bestseller"],
    prepTime: "30 min",
    emoji: "🍗",
  },
  {
    name: "Paneer Tikka Masala",
    chef: "Priya Sharma",
    price: 189,
    originalPrice: 249,
    rating: 4.7,
    tags: ["VEG", "Spicy"],
    prepTime: "20 min",
    emoji: "🧀",
  },
  {
    name: "Hyderabadi Biryani",
    chef: "Lakshmi Devi",
    price: 199,
    originalPrice: 259,
    rating: 4.9,
    tags: ["NON-VEG", "Popular"],
    prepTime: "35 min",
    emoji: "🍚",
  },
  {
    name: "Masala Dosa Combo",
    chef: "Yashas DB",
    price: 99,
    originalPrice: 139,
    rating: 4.6,
    tags: ["VEG", "Breakfast"],
    prepTime: "15 min",
    emoji: "🥞",
  },
  {
    name: "Chicken Fried Rice",
    chef: "Ramesh Kumar",
    price: 169,
    originalPrice: 219,
    rating: 4.8,
    tags: ["NON-VEG"],
    prepTime: "25 min",
    emoji: "🍜",
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
  const isVeg = dish.tags.includes("VEG");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.08 * index, duration: 0.5 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-orange-100/40 transition-all hover:-translate-y-1 cursor-pointer"
    >
      {/* Dish Image Placeholder */}
      <div className="relative h-40 sm:h-44 bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-300">
            {dish.emoji}
          </span>
        </div>

        {/* Tags */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          <span
            className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-md ${
              isVeg
                ? "bg-green-100 text-green-700 border border-green-200"
                : "bg-red-100 text-red-700 border border-red-200"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-sm border ${
                isVeg ? "border-green-600 bg-green-600" : "border-red-600 bg-red-600"
              }`}
            />
            {isVeg ? "VEG" : "NON-VEG"}
          </span>
        </div>

        {/* Popular / Bestseller badge */}
        {dish.tags.filter((t) => t !== "VEG" && t !== "NON-VEG").length > 0 && (
          <div className="absolute top-3 right-3">
            <span className="bg-primary/90 text-white text-[10px] font-bold px-2 py-1 rounded-md">
              {dish.tags.find((t) => t !== "VEG" && t !== "NON-VEG")}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors line-clamp-1">
          {dish.name}
        </h3>
        <p className="text-muted text-xs mt-1">by {dish.chef}</p>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-foreground font-bold text-base">
              ₹{dish.price}
            </span>
            <span className="text-muted text-xs line-through">
              ₹{dish.originalPrice}
            </span>
            <span className="text-green-600 text-xs font-semibold">
              {Math.round(((dish.originalPrice - dish.price) / dish.originalPrice) * 100)}% OFF
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-semibold text-foreground">{dish.rating}</span>
          </div>
          <span className="text-xs text-muted flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {dish.prepTime}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function RecommendedDishes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="dishes" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-10 sm:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Recommended For You
        </h2>
        <p className="mt-3 text-muted text-base sm:text-lg">
          Handpicked dishes you&apos;ll love
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
        {DISHES.map((dish, i) => (
          <DishCard key={dish.name} dish={dish} index={i} isInView={isInView} />
        ))}
      </div>
    </section>
  );
}

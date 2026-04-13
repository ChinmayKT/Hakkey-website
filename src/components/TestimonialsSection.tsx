"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Aditya Rao",
    location: "Indiranagar, Bangalore",
    avatar: "AR",
    avatarGrad: "from-orange-400 to-amber-400",
    rating: 5,
    text: "I ordered a South Indian thali from a home chef 2 km away. It tasted exactly like my mom's cooking. I've never felt that comfort from a restaurant. Hakkey is my daily go-to now.",
    dish: "South Indian Thali",
    highlight: "tastes like mom's cooking",
  },
  {
    name: "Sneha Patel",
    location: "Koramangala, Bangalore",
    avatar: "SP",
    avatarGrad: "from-rose-400 to-pink-400",
    rating: 5,
    text: "As a working mom I love Hakkey. The food is fresh, the portions are generous, and knowing it's from a real home kitchen gives me peace of mind. My kids love it!",
    dish: "Butter Chicken & Naan",
    highlight: "real home kitchen",
  },
  {
    name: "Karthik Menon",
    location: "HSR Layout, Bangalore",
    avatar: "KM",
    avatarGrad: "from-blue-400 to-indigo-400",
    rating: 5,
    text: "The chef was super responsive, packaging was neat, and the biryani was phenomenal. Can't believe this level of food is available at this price. Far better than any restaurant.",
    dish: "Hyderabadi Biryani",
    highlight: "phenomenal biryani",
  },
  {
    name: "Divya Krishnan",
    location: "Whitefield, Bangalore",
    avatar: "DK",
    avatarGrad: "from-green-400 to-emerald-400",
    rating: 5,
    text: "Hakkey feels personal — like ordering from a friend who's an amazing cook. Smooth app, on-time delivery, and the food was outstanding. Highly recommended!",
    dish: "Paneer Tikka Masala",
    highlight: "like ordering from a friend",
  },
  {
    name: "Rahul Verma",
    location: "Electronic City, Bangalore",
    avatar: "RV",
    avatarGrad: "from-violet-400 to-purple-400",
    rating: 5,
    text: "After months of eating out, Hakkey reminded me what real food tastes like. The dal tadka from chef Ramesh was unbelievable. Now I order every single day.",
    dish: "Dal Tadka",
    highlight: "reminded me what real food tastes like",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: false, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 overflow-hidden bg-foreground/[0.015]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

        {/* ── HEADER ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-12"
        >
          <div>
            <span className="section-label">Customer Love</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
              10,000+ happy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                customers
              </span>
            </h2>
            <p className="mt-3 text-muted text-base sm:text-lg max-w-md">
              Real stories from real food lovers who found their home away from home.
            </p>
          </div>

          {/* Aggregate rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-4 bg-white border border-border rounded-2xl px-6 py-4 card-shadow shrink-0"
          >
            <div className="text-center">
              <div className="text-3xl font-black text-foreground">4.8</div>
              <Stars count={5} />
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-sm font-bold text-foreground">2,400+ reviews</div>
              <div className="text-xs text-muted mt-0.5">96% would recommend</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── HORIZONTAL SNAP SCROLL ── */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 hide-scrollbar"
        style={{ paddingLeft: "clamp(1.5rem, 4vw, 5rem)", paddingRight: "clamp(1.5rem, 4vw, 5rem)" }}
      >
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ delay: 0.08 * i, duration: 0.55, ease: "easeOut" }}
            className="snap-start flex-shrink-0 w-[300px] sm:w-[360px]"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="h-full bg-white border border-border rounded-2xl p-6 sm:p-7 card-shadow hover:card-shadow-hover transition-shadow duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div className="text-primary/15 mb-4">
                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              {/* Stars */}
              <Stars count={t.rating} />

              {/* Quote with highlight */}
              <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed flex-1">
                {t.text.split(t.highlight).map((part, idx, arr) =>
                  idx < arr.length - 1 ? (
                    <span key={idx}>
                      {part}
                      <span className="text-foreground font-semibold">{t.highlight}</span>
                    </span>
                  ) : (
                    <span key={idx}>{part}</span>
                  )
                )}
              </p>

              {/* Dish pill */}
              <div className="mt-5">
                <span className="inline-flex items-center gap-1.5 bg-primary/6 text-primary text-[11px] font-semibold px-3 py-1.5 rounded-full border border-primary/10">
                  🍽️ {t.dish}
                </span>
              </div>

              {/* Reviewer */}
              <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarGrad} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted mt-0.5">{t.location}</div>
                </div>
                {/* Verified badge */}
                <div className="ml-auto">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Trailing spacer so last card isn't cut */}
        <div className="flex-shrink-0 w-6 sm:w-12" />
      </div>

      {/* Scroll hint */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mt-4">
        <p className="text-muted/50 text-xs flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          Scroll to see more reviews
        </p>
      </div>
    </section>
  );
}

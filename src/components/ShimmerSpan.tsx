"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

interface ShimmerSpanProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ShimmerSpan({
  children,
  className = "",
  delay = 1000,
}: ShimmerSpanProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isInView && !active) {
      const t = setTimeout(() => setActive(true), delay);
      return () => clearTimeout(t);
    }
    if (!isInView && active) {
      setActive(false);
    }
  }, [isInView, active, delay]);

  return (
    <span
      ref={ref}
      className={`shimmer-text ${active ? "shimmer-active" : ""} ${className}`}
    >
      {children}
    </span>
  );
}

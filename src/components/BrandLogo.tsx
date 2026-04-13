"use client";

import { motion } from "framer-motion";

export default function BrandLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute top-6 left-6 sm:left-12 lg:left-20 xl:left-28 z-50"
    >
      <div className="hakkey-logo">
        <span className="logo-ha">Ha</span>
        <span className="logo-kk">
          k
          <span className="logo-flame" />
          k
        </span>
        <span className="logo-ey">ey</span>
      </div>
    </motion.div>
  );
}

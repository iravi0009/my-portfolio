"use client";

import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -12, 0],
        }}
        transition={{
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="relative flex h-80 w-80 items-center justify-center rounded-full border-4 border-blue-500 bg-gradient-to-bg from-blue-500/20 via-cyan-500/10 to-purple-500/20 shadow-[0_0_60px_rgba(59,130,246,0.35)]"
      >
        {/* Glow Ring */}
        <div className="absolute inset-0 rounded-full border border-blue-400/40 animate-pulse" />

        {/* Emoji (Replace later with your photo) */}
        <span className="text-8xl">👨‍💻</span>
      </motion.div>
    </div>
  );
}
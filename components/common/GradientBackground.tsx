"use client";

import { motion } from "framer-motion";

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-20 top-40 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -120, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-purple-600/15 blur-3xl"
      />

    </div>
  );
}
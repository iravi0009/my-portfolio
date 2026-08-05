"use client";

import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio";

export default function HeroSocials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 1,
      }}
      className="mt-8 flex items-center gap-5"
    >
      {/* GitHub */}
      <motion.a
        whileHover={{
          scale: 1.15,
          rotate: 8,
        }}
        whileTap={{ scale: 0.95 }}
        href={portfolioData.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-700 bg-zinc-900 text-2xl shadow-lg transition hover:border-blue-500 hover:bg-blue-500/10"
        title="GitHub"
      >
        🐙
      </motion.a>

      {/* LinkedIn */}
      <motion.a
        whileHover={{
          scale: 1.15,
          rotate: -8,
        }}
        whileTap={{ scale: 0.95 }}
        href={portfolioData.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-700 bg-zinc-900 text-2xl shadow-lg transition hover:border-blue-500 hover:bg-blue-500/10"
        title="LinkedIn"
      >
        💼
      </motion.a>

      {/* Email */}
      <motion.a
        whileHover={{
          scale: 1.15,
          rotate: 8,
        }}
        whileTap={{ scale: 0.95 }}
        href={`mailto:${portfolioData.email}`}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-700 bg-zinc-900 text-2xl shadow-lg transition hover:border-blue-500 hover:bg-blue-500/10"
        title="Email"
      >
        📧
      </motion.a>
    </motion.div>
  );
}
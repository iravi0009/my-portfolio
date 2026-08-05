"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.8,
      }}
      className="mt-8 flex flex-wrap gap-4"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button href="/resume.pdf" download>
          📄 Download Resume
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button href="#projects">
          🚀 View Projects
        </Button>
</motion.div>
        <Button href="#hire-me">
          🚀 Hire Me
        </Button>
      
    </motion.div>
  );
}
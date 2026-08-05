"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import portfolioData from "@/data/portfolio";

export default function HeroContent() {
  return (
    <div className="space-y-6">

      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg font-medium text-blue-400"
      >
        👋 Hello, I am
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-5xl font-extrabold tracking-tight md:text-7xl"
      >
        {portfolioData.name}
      </motion.h1>

      {/* Animated Role */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <TypeAnimation
          sequence={[
            "Software Engineer", 2000,
            "Backend Developer", 2000,
            "Full Stack Developer", 2000,
            "AI Engineer", 2000,
            "Machine Learning Engineer", 2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="text-2xl font-semibold text-gray-300 md:text-3xl"
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-xl font-semibold text-blue-400"
      >
        Passionate About Software Engineering, AI & Backend Development
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-2xl text-lg leading-8 text-gray-400"
      >
        {portfolioData.about}
      </motion.p>

    </div>
  );
}
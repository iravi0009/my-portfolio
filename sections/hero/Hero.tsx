"use client";

import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import HeroCanvas from "@/components/hero3d/HeroCanvas";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6">
      <div className="mx-auto grid max-w-screen-7xl items-center gap-20 md:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <HeroContent />
          <HeroButtons />
          <HeroSocials />
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          <HeroCanvas />
        </motion.div>

      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type LoadingScreenProps = {
  isLoading: boolean;
};

export default function LoadingScreen({
  isLoading,
}: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mb-8 h-[170px] w-[170px] overflow-hidden rounded-full border border-blue-500/30 bg-blue-500/10"
          >
            <Image
              src="/profile.png"
              alt="Ravi Raj"
              width={170}
              height={170}
              priority
              className="h-full w-full rounded-full object-cover"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            className="text-4xl font-bold text-white"
          >
            Ravi Raj
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
            }}
            className="mt-3 text-xl text-blue-400"
          >
            Software Developer
          </motion.p>

          {/* Progress Bar */}
          <div className="mt-12 h-1 w-64 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 2.2,
                ease: "easeInOut",
              }}
              className="h-full bg-blue-500"
            />
          </div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="mt-6 text-sm tracking-[0.3em] text-gray-400"
          >
            LOADING...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
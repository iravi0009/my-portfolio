"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type StatCardProps = {
  value: number;
  suffix?: string;
  title: string;
};

export default function StatCard({
  value,
  suffix = "",
  title,
}: StatCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.div
      ref={ref}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="rounded-2xl border border-gray-800 bg-zinc-900 p-8 text-center shadow-lg transition hover:border-blue-500 hover:shadow-blue-500/20"
    >
      <h2 className="text-5xl font-bold text-blue-400">
        {inView && (
          <CountUp
            end={value}
            duration={2}
          />
        )}
        {suffix}
      </h2>

      <p className="mt-3 text-lg text-gray-300">
        {title}
      </p>
    </motion.div>
  );
}
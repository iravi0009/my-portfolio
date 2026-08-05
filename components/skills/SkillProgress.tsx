"use client";

import { motion } from "framer-motion";

type SkillProgressProps = {
  name: string;
  percentage: number;
  color?: string;
};

export default function SkillProgress({
  name,
  percentage,
  color = "#3b82f6",
}: SkillProgressProps) {
  return (
    <div className="space-y-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-white">
          {name}
        </h3>

        <span className="font-semibold text-blue-400">
          {percentage}%
        </span>
      </div>

      {/* Background Bar */}
      <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="h-full rounded-full"
          style={{
            background: color,
            boxShadow: `0 0 15px ${color}`,
          }}
        />
      </div>
    </div>
  );
}
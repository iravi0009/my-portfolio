"use client";

import { motion } from "framer-motion";

type ResearchCardProps = {
  title: string;
  conference: string;
  description: string;
  year: string;
  github?: string;
  paper?: string;
};

export default function ResearchCard({
  title,
  conference,
  description,
  year,
  github,
  paper,
}: ResearchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-gray-800 bg-zinc-900 p-8 shadow-xl transition hover:border-blue-500 hover:shadow-blue-500/20"
    >
      {/* Badge */}

      <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-400">
        🏛 IEEE Conference Paper
      </span>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-blue-400 font-medium">
        {conference}
      </p>

      <p className="mt-4 leading-7 text-gray-400">
        {description}
      </p>

      <p className="mt-6 text-gray-500">
        📅 {year}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">

        {paper && (
          <a
            href={paper}
            target="_blank"
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-700"
          >
            📄 View Paper
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            className="rounded-xl border border-gray-700 px-5 py-3 font-medium transition hover:border-white hover:bg-white hover:text-black"
          >
            🐙 GitHub
          </a>
        )}

      </div>

    </motion.div>
  );
}
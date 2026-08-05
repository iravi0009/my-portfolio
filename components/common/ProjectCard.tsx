"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Tilt from "react-parallax-tilt";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  isResearch?: boolean;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
  isResearch,
}: ProjectCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1200}
      transitionSpeed={1500}
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="#3b82f6"
      glarePosition="all"
      scale={1.02}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          y: -10,
        }}
        className="group overflow-hidden rounded-2xl border border-gray-800 bg-zinc-900 shadow-xl transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]"
      >
        {/* Banner */}
        <div className="flex h-52 items-center justify-center bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-purple-600/20">
          <span className="text-7xl transition-transform duration-300 group-hover:scale-110">
            💻
          </span>
        </div>

        {/* Content */}
        <div className="p-6">

         {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/15 px-3 py-1 text-sm font-medium text-blue-400">
            <Star size={16} />
            Featured Project
          </div>

          {/* IEEE Badge */}
          {title.includes("DNN") ||
          title.includes("Devanagari") ? (
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-400">
                🏛 IEEE Conference Accepted
              </span>
            </div>
          ) : null}

          {/* Project Title */}
          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-4 leading-7 text-gray-400">
            {description}
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.08 }}
                className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Highlights */}
          <div className="mt-6 rounded-xl border border-gray-800 bg-black/30 p-4">
            <h4 className="mb-3 font-semibold text-white">
              Key Highlights
            </h4>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>✅ Responsive Design</li>
              <li>✅ Clean Architecture</li>
              <li>✅ Modern UI / UX</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-gray-700 px-5 py-3 font-medium transition hover:border-white hover:bg-white hover:text-black"
            >
              🐙 GitHub
            </motion.a>

            {demo && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                🚀 Live Demo
              </motion.a>
            )}

          </div>

        </div>
      </motion.div>
    </Tilt>
  );
}
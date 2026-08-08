"use client";

import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Calendar,
  FolderOpen,
} from "lucide-react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectHero({ project }: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

      {/* Background Image */}
      <div className="relative h-[420px] overflow-hidden">

        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-10">

          {/* Category + Year */}
          <div className="mb-5 flex flex-wrap gap-3">

            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-2 text-blue-400">
              <FolderOpen size={16} />
              {project.category}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-gray-300">
              <Calendar size={16} />
              {project.year}
            </span>

          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-extrabold text-white md:text-6xl"
          >
            {project.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-5 max-w-3xl text-lg leading-8 text-gray-300"
          >
            {project.description}
          </motion.p>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              <Github size={20} />
              GitHub
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 font-semibold transition hover:bg-zinc-800"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
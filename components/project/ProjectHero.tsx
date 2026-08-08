"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Calendar,
  FolderOpen,
} from "lucide-react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
    </svg>
  );
}



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
              <GithubIcon size={18} />
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
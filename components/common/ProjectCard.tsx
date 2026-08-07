"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import Tilt from "react-parallax-tilt";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const isIEEE =
    project.title.includes("DNN") ||
    project.title.includes("Devanagari");

  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      perspective={1200}
      glareEnable={false}
      transitionSpeed={1200}
      className="h-full"
    >
      <Link href={`/projects/${project.slug}`}>
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -10 }}
          className="group h-full cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]"
        >
          {/* Banner */}
          <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
            <div className="absolute inset-0 bg-black/40" />

            <ArrowUpRight className="relative z-10 h-12 w-12 text-white transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Featured Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/15 px-3 py-1 text-sm font-medium text-blue-400">
              <Star size={16} />
              Featured Project
            </div>

            {/* IEEE Badge */}
            {isIEEE && (
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-400">
                  🏛 IEEE Conference Accepted
                </span>
              </div>
            )}

            {/* Title */}
            <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-4 line-clamp-3 leading-7 text-gray-400">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-6 rounded-xl border border-zinc-800 bg-black/30 p-4">
              <h4 className="mb-3 font-semibold text-white">
                Key Highlights
              </h4>

              <ul className="space-y-2 text-sm text-gray-300">
                <li>✅ Modern Architecture</li>
                <li>✅ Responsive Design</li>
                <li>✅ Production Ready</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-8 flex items-center justify-between border-t border-zinc-800 pt-6">
              <span className="font-medium text-blue-400 transition-colors group-hover:text-blue-300">
                View Case Study
              </span>

              <ArrowUpRight className="h-5 w-5 text-blue-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </motion.article>
      </Link>
    </Tilt>
  );
}
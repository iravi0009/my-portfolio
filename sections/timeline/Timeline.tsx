"use client";

import { motion } from "framer-motion";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";

const timeline = [
  {
    year: "2022",
    title: "Started B.E. Computer Science & Business Systems",
    description:
      "Began my engineering journey at Chandigarh University, building strong foundations in programming and software engineering.",
    icon: "🎓",
  },
  {
    year: "2024",
    title: "Machine Learning & AI Projects",
    description:
      "Developed AI-powered applications, deep learning models, and computer vision projects using Python and TensorFlow.",
    icon: "🤖",
  },
  {
    year: "2025",
    title: "Full Stack Development",
    description:
      "Built scalable web applications using Next.js, React, TypeScript, Tailwind CSS, Node.js, and MongoDB.",
    icon: "💻",
  },
  {
    year: "2026",
    title: "IEEE Conference Papers Accepted",
    description:
      "Research papers on Autonomous DNN Repair and Handwritten Character Recognition accepted at IEEE conferences.",
    icon: "🏛️",
  },

  {
    year: "Now",
    title: "Seeking Software Developer Opportunities",
    description:
    "Actively seeking Software Developer, Backend Developer, and AI/ML opportunities.",
    icon: "🚀",
  },
];

export default function Timeline() {
  return (
    <Section id="timeline">
      <FadeIn>
        <SectionTitle>My Journey</SectionTitle>

        <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-400">
          A timeline highlighting my learning journey, research achievements,
          and software engineering experience.
        </p>

        <div className="relative mx-auto max-w-5xl">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-blue-600/40 md:left-1/2 md:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative mb-14 flex items-center ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              {/* Card */}
              <div className="ml-16 w-full rounded-2xl border border-gray-800 bg-zinc-900 p-6 shadow-xl md:ml-0 md:w-[45%]">
                <span className="text-sm font-semibold text-blue-400">
                  {item.year}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>

              {/* Circle */}
              <div className="absolute left-6 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-blue-500 bg-zinc-950 text-2xl shadow-lg md:left-1/2">
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
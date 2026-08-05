"use client";

import SkillProgress from "@/components/skills/SkillProgress";

const skills = [
  {
    name: "Frontend Development",
    percentage: 92,
  },
  {
    name: "Backend Development",
    percentage: 88,
  },
  {
    name: "Artificial Intelligence",
    percentage: 90,
  },
  {
    name: "Machine Learning",
    percentage: 89,
  },
  {
    name: "Database",
    percentage: 84,
  },
  {
    name: "DevOps & Cloud",
    percentage: 75,
  },
];

export default function SkillsDashboard() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Technical Expertise
      </h2>

      <div className="space-y-6">
        {skills.map((skill) => (
          <SkillProgress
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
}
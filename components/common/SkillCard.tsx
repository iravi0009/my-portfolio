type SkillCardProps = {
  title: string;
  skills: string[];
};

export default function SkillCard({
  title,
  skills,
}: SkillCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:scale-105 hover:border-blue-500">
      <h3 className="mb-5 text-xl font-bold text-blue-400">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-blue-500/10 px-4 py-2 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
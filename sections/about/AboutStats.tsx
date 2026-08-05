import portfolioData from "@/data/portfolio";

export default function AboutStats() {
  const { stats } = portfolioData;

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="rounded-xl border border-gray-800 bg-zinc-900 p-6 text-center">
        <h3 className="text-3xl font-bold text-blue-400">
          {stats.projects}
        </h3>
        <p className="mt-2 text-gray-400">
          Projects
        </p>
      </div>

      <div className="rounded-xl border border-gray-800 bg-zinc-900 p-6 text-center">
        <h3 className="text-3xl font-bold text-blue-400">
          {stats.technologies}
        </h3>
        <p className="mt-2 text-gray-400">
          Technologies
        </p>
      </div>

      <div className="rounded-xl border border-gray-800 bg-zinc-900 p-6 text-center">
        <h3 className="text-3xl font-bold text-blue-400">
          {stats.education}
        </h3>
        <p className="mt-2 text-gray-400">
          Education
        </p>
      </div>

      <div className="rounded-xl border border-gray-800 bg-zinc-900 p-6 text-center">
        <h3 className="text-3xl font-bold text-blue-400">
          {stats.experience}
        </h3>
        <p className="mt-2 text-gray-400">
          Experience
        </p>
      </div>
    </div>
  );
}
type AchievementCardProps = {
  title: string;
  paper: string;
  year: string;
  proof: string;
};

export default function AchievementCard({
  title,
  paper,
  year,
  proof,
}: AchievementCardProps) {
  return (
    <div className="rounded-xl border border-gray-800 bg-zinc-900 p-6 transition hover:border-blue-500">
      <p className="text-blue-400 font-semibold">
        {year}
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-gray-400 leading-7">
        {paper}
      </p>

      <a
        href={proof}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
      >
        📄 View Acceptance Letter
      </a>
    </div>
  );
}
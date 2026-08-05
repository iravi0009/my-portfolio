type EducationCardProps = {
  degree: string;
  institution: string;
  duration: string;
  score: string;
};

export default function EducationCard({
  degree,
  institution,
  duration,
  score,
}: EducationCardProps) {
  return (
    <div className="rounded-xl border border-gray-800 bg-zinc-900 p-6">
      <p className="text-blue-400 font-semibold">{duration}</p>

      <h3 className="mt-2 text-2xl font-bold">
        {degree}
      </h3>

      <p className="mt-2 text-gray-400">
        {institution}
      </p>

      <p className="mt-4 font-medium">
        {score}
      </p>
    </div>
  );
}
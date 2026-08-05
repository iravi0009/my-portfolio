import portfolioData from "@/data/portfolio";

export default function AboutHighlights() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {portfolioData.aboutHighlights.map((item) => (
        <div
          key={item}
          className="rounded-lg border border-gray-800 bg-zinc-900 p-4"
        >
          <span className="text-blue-400">✔</span>
          <span className="ml-3">{item}</span>
        </div>
      ))}
    </div>
  );
}
import portfolioData from "@/data/portfolio";

export default function AboutContent() {
  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-bold">
        Who am I?
      </h3>

      <p className="text-lg leading-8 text-gray-400">
        {portfolioData.about}
      </p>
    </div>
  );
}
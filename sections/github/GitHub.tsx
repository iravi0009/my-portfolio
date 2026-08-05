import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import portfolioData from "@/data/portfolio";

export default function GitHub() {
  const username = portfolioData.githubUsername;

  return (
    <Section id="github">
      <FadeIn>
        <SectionTitle>GitHub Activity</SectionTitle>

        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-400">
          Explore my coding activity, open-source contributions, and programming
          statistics through GitHub.
        </p>

        {/* Contribution Calendar */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-gray-800 bg-zinc-900 p-5">
          <img
            src={`https://ghchart.rshah.org/3b82f6/iravi0009`}
            alt="GitHub Contribution Graph"
            className="w-full rounded-lg"
          />
        </div>

        {/* Stats */}
        <div className="grid gap-8 lg:grid-cols-2">

          <img
            src={`https://github-readme-stats.vercel.app/api?username=iravi0009&show_icons=true&theme=tokyonight`}
            alt="GitHub Stats"
            className="w-full rounded-xl"
          />

          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=iravi0009&layout=compact&theme=tokyonighte`}
            alt="Top Languages"
            className="w-full rounded-xl"
          />

        </div>

        {/* Streak */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-800 bg-zinc-900 p-5">
          <img
            src={`https://streak-stats.demolab.com?user=iravi0009&theme=tokyonight`}
            alt="GitHub Streak"
            className="mx-auto"
          />
        </div>

        {/* Button */}
        <div className="mt-10 text-center">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold transition hover:bg-blue-700"
          >
            🐙 Visit GitHub Profile
          </a>
        </div>
      </FadeIn>
    </Section>
  );
}
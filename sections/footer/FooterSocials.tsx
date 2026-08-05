import portfolioData from "@/data/portfolio";

export default function FooterSocials() {
  return (
    <div>
      <h3 className="text-xl font-semibold">
        Connect
      </h3>

      <div className="mt-5 space-y-3">

        <a
          href={portfolioData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-gray-400 hover:text-blue-400"
        >
          GitHub
        </a>

        <a
          href={portfolioData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-gray-400 hover:text-blue-400"
        >
          LinkedIn
        </a>

        <a
          href={`mailto:${portfolioData.email}`}
          className="block text-gray-400 hover:text-blue-400"
        >
          Email
        </a>

      </div>
    </div>
  );
}
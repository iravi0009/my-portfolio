type CertificationCardProps = {
  title: string;
  issuer: string;
  year: string;
  link: string;
};

export default function CertificationCard({
  title,
  issuer,
  year,
  link,
}: CertificationCardProps) {
  return (
    <div className="rounded-xl border border-gray-800 bg-zinc-900 p-6">
      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-2 text-gray-400">
        {issuer}
      </p>

      <p className="mt-2 text-blue-400">
        {year}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        View Certificate
      </a>
    </div>
  );
}
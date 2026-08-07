import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-6xl font-bold">404</h1>

      <p className="mb-8 text-gray-400">
        Project not found.
      </p>

      <Link
        href="/"
        className="rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-700"
      >
        Back Home
      </Link>
    </div>
  );
}
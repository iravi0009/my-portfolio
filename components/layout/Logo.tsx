import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl font-bold tracking-wide transition hover:text-blue-500"
    >
      Ravi Raj
    </Link>
  );
}
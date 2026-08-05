import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  external?: boolean;
  download?: boolean;
  onClick?: () => void;
};

const buttonStyle =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-gray-200";

export default function Button({
  children,
  href,
  external = false,
  download = false,
  onClick,
}: ButtonProps) {
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyle}
      >
        {children}
      </a>
    );
  }

  if (href && download) {
    return (
      <a href={href} download className={buttonStyle}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={buttonStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
}
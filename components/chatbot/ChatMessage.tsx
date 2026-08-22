"use client";

import ReactMarkdown from "react-markdown";

type ChatMessageProps = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatMessage({
  role,
  content,
}: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
          isUser
            ? "rounded-br-md bg-blue-600 text-white"
            : "rounded-bl-md border border-zinc-800 bg-zinc-900 text-gray-200"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">
            {content}
          </p>
        ) : (
          <div className="prose prose-invert prose-sm max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="mb-3 mt-1 text-lg font-bold text-white">
                    {children}
                  </h1>
                ),

                h2: ({ children }) => (
                  <h2 className="mb-2 mt-3 text-base font-bold text-white">
                    {children}
                  </h2>
                ),

                h3: ({ children }) => (
                  <h3 className="mb-2 mt-3 font-semibold text-blue-400">
                    {children}
                  </h3>
                ),

                p: ({ children }) => (
                  <p className="mb-3 last:mb-0">
                    {children}
                  </p>
                ),

                ul: ({ children }) => (
                  <ul className="mb-3 ml-5 list-disc space-y-1">
                    {children}
                  </ul>
                ),

                ol: ({ children }) => (
                  <ol className="mb-3 ml-5 list-decimal space-y-1">
                    {children}
                  </ol>
                ),

                li: ({ children }) => (
                  <li className="pl-1">
                    {children}
                  </li>
                ),

                strong: ({ children }) => (
                  <strong className="font-semibold text-white">
                    {children}
                  </strong>
                ),

                em: ({ children }) => (
                  <em className="text-gray-300">
                    {children}
                  </em>
                ),

                blockquote: ({ children }) => (
                  <blockquote className="my-3 border-l-2 border-blue-500 pl-3 text-gray-400">
                    {children}
                  </blockquote>
                ),

                code: ({ children }) => (
                  <code className="rounded-md bg-black/40 px-1.5 py-0.5 font-mono text-xs text-blue-300">
                    {children}
                  </code>
                ),

                pre: ({ children }) => (
                  <pre className="my-3 overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs leading-5">
                    {children}
                  </pre>
                ),

                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-400 underline underline-offset-2 transition hover:text-blue-300"
                  >
                    {children}
                  </a>
                ),

                hr: () => (
                  <hr className="my-4 border-zinc-800" />
                ),

                table: ({ children }) => (
                  <div className="my-3 overflow-x-auto rounded-lg border border-zinc-800">
                    <table className="w-full text-left text-xs">
                      {children}
                    </table>
                  </div>
                ),

                th: ({ children }) => (
                  <th className="border-b border-zinc-800 bg-zinc-950 px-3 py-2 font-semibold text-white">
                    {children}
                  </th>
                ),

                td: ({ children }) => (
                  <td className="border-b border-zinc-800 px-3 py-2 text-gray-300">
                    {children}
                  </td>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
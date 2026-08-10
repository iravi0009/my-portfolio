"use client";

import { FormEvent, useState } from "react";
import { ArrowUp } from "lucide-react";

type ChatInputProps = {
  onSend: (message: string) => void;
  disabled?: boolean;
};

export default function ChatInput({
  onSend,
  disabled = false,
}: ChatInputProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = input.trim();

    if (!message || disabled) return;

    onSend(message);
    setInput("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border-t border-zinc-800 p-3"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
        placeholder="Ask me about Ravi..."
        className="min-w-0 flex-1 rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
      />

      <button
        type="submit"
        disabled={disabled || !input.trim()}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Send message"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </form>
  );
}
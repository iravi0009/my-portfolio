"use client";

import {
  FormEvent,
  KeyboardEvent,
  useState,
} from "react";
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

  function submitMessage() {
    const message = input.trim();

    if (!message || disabled) return;

    onSend(message);
    setInput("");
  }

  function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    submitMessage();
  }

  function handleKeyDown(
    e: KeyboardEvent<HTMLTextAreaElement>
  ) {
    // Enter = send
    // Shift + Enter = new line
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitMessage();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-2 border-t border-zinc-800 p-3"
    >
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        rows={1}
        placeholder="Ask me about Ravi..."
        aria-label="Ask Ravi AI a question"
        className="
          min-h-[44px]
          max-h-32
          min-w-0
          flex-1
          resize-none
          rounded-xl
          border
          border-zinc-700
          bg-zinc-950
          px-4
          py-3
          text-sm
          leading-5
          text-white
          outline-none
          placeholder:text-gray-500
          focus:border-blue-500
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      />

      <button
        type="submit"
        disabled={disabled || !input.trim()}
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-blue-600
          text-white
          transition
          hover:bg-blue-700
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
        aria-label="Send message"
        title="Send message"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </form>
  );
}
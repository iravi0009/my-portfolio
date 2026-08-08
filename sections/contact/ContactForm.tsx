"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  if (!formRef.current) return;

  setLoading(true);
  setMessage("");

  console.log("Service:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
  console.log("Template:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
  console.log("Public Key:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

  try {
    const result = await emailjs.sendForm(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  formRef.current!,
  {
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
  }
);
    console.log("Email sent:", result);

    setMessage("✅ Your message has been sent successfully!");

    formRef.current.reset();
} catch (error) {
  console.error("EmailJS Error:", error);

  if (typeof error === "object" && error !== null) {
    console.log("Status:", (error as { status?: number }).status);
    console.log("Text:", (error as { text?: string }).text);
  }

  alert(JSON.stringify(error));

  setMessage("❌ Failed to send message. Please try again.");
}finally {
    setLoading(false);
  }
}

  return (
    <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-8">
      <h3 className="text-3xl font-bold">
        Send a Message
      </h3>

      <p className="mt-4 text-gray-400">
        Have an opportunity, project, or collaboration in mind?
        Send me a message and I will respond as soon as possible.
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Name
          </label>

          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            required
            placeholder="Project Discussion"
            className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Message
          </label>

          <textarea
            rows={6}
            name="message"
            required
            placeholder="Tell me about your project..."
            className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "🚀 Send Message"}
        </button>

        {message && (
          <p className="text-center text-sm text-green-400">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
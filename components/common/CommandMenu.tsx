"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function down(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", down);

    return () => window.removeEventListener("keydown", down);
  }, []);

  function goTo(id: string) {
    setOpen(false);

    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/60 pt-32 backdrop-blur-sm">

      <Command className="w-full max-w-xl overflow-hidden rounded-2xl border border-gray-700 bg-zinc-900 shadow-2xl">

        <Command.Input
          placeholder="Search..."
          className="w-full border-b border-gray-800 bg-transparent px-5 py-4 text-lg outline-none"
        />

        <Command.List className="max-h-96 overflow-y-auto p-2">

          <Command.Item
            onSelect={() => goTo("#about")}
            className="cursor-pointer rounded-lg px-4 py-3 hover:bg-gray-800"
          >
            👤 About
          </Command.Item>

          <Command.Item
            onSelect={() => goTo("#skills")}
            className="cursor-pointer rounded-lg px-4 py-3 hover:bg-gray-800"
          >
            ⚡ Skills
          </Command.Item>

          <Command.Item
            onSelect={() => goTo("#projects")}
            className="cursor-pointer rounded-lg px-4 py-3 hover:bg-gray-800"
          >
            💻 Projects
          </Command.Item>

          <Command.Item
            onSelect={() => goTo("#github")}
            className="cursor-pointer rounded-lg px-4 py-3 hover:bg-gray-800"
          >
            🐙 GitHub
          </Command.Item>

          <Command.Item
            onSelect={() => goTo("#contact")}
            className="cursor-pointer rounded-lg px-4 py-3 hover:bg-gray-800"
          >
            📩 Contact
          </Command.Item>

        </Command.List>

      </Command>

    </div>
  );
}
"use client";

import { useState } from "react";
import navigation from "@/data/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="rounded-md border border-gray-700 px-3 py-2 text-white"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            absolute
            right-0
            mt-3
            w-52
            rounded-lg
            border
            border-gray-700
            bg-black
            shadow-lg
          "
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="
                block
                px-4
                py-3
                hover:bg-gray-900
              "
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
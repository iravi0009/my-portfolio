"use client";

import { useState } from "react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import ResumeModal from "@/components/common/ResumeModal";

export default function Navbar() {
  const [openResume, setOpenResume] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-black/80 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Logo />

          <div className="hidden md:block">
            <NavLinks />
          </div>

            <div className="flex items-center gap-4">

            {/* Ctrl + K Hint */}
            <div className="hidden rounded-lg border border-gray-700 bg-zinc-900 px-3 py-2 text-xs text-gray-400 md:flex md:items-center md:gap-2">
              <span>⌘ / Ctrl</span>
              <span className="rounded bg-gray-800 px-2 py-1">K</span>
            </div>

            {/* Resume Button */}
            <button
              onClick={() => setOpenResume(true)}
              className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-gray-200"
            >
              📄 Resume
            </button>

            <MobileMenu />

          </div>
        </nav>
      </header>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={openResume}
        onClose={() => setOpenResume(false)}
      />
    </>
  );
}
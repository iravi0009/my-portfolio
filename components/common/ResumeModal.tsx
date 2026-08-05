"use client";

import { X } from "lucide-react";

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ResumeModal({
  isOpen,
  onClose,
}: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

      <div className="relative h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-700 bg-zinc-900 shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">

          <h2 className="text-2xl font-bold">
            📄 Resume Preview
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-gray-800"
          >
            <X size={24} />
          </button>

        </div>

        {/* PDF */}
        <iframe
          src="/resume.pdf"
          className="h-[calc(100%-80px)] w-full"
        />

      </div>

    </div>
  );
}
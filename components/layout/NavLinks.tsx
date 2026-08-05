"use client";

import navigation from "@/data/navigation";
import useActiveSection from "@/hooks/useActiveSection";

export default function NavLinks() {
  const activeSection = useActiveSection();

  return (
    <ul className="flex items-center gap-8">
      {navigation.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <li key={item.id}>
            <a
              href={item.href}
              className={`group relative font-medium transition-colors duration-300 ${
                isActive
                  ? "text-blue-500"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}

              {/* Animated Underline */}
              <span
                className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-blue-500 transition-all duration-300 ${
                  isActive
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
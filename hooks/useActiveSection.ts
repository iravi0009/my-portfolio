"use client";

import { useEffect, useState } from "react";
import navigation from "@/data/navigation";

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      let currentSection = "about";

      for (const item of navigation) {
        const section = document.querySelector(item.href);

        if (!section) continue;

        const element = section as HTMLElement;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          currentSection = item.id;
          break;
        }
      }

      setActiveSection((prev) =>
        prev !== currentSection ? currentSection : prev
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
}
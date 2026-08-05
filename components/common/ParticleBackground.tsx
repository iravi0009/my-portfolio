"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    async function initParticles() {
      const { tsParticles } = await import("@tsparticles/engine");
      await loadSlim(tsParticles as Engine);
      setInit(true);
    }

    initParticles();
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="particles"
      className="fixed inset-0 -z-10"
      options={{
        fullScreen: false,

        background: {
          color: {
            value: "#09090b",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 70,
          },

          color: {
            value: "#3b82f6",
          },

          links: {
            enable: true,
            color: "#3b82f6",
            distance: 150,
            opacity: 0.25,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.35,
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },

          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 0.6,
              },
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}
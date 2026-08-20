"use client";

import { useEffect, useState } from "react";
import BackToTop from "@/components/common/BackToTop";
import LoadingScreen from "@/components/common/LoadingScreen";
import ParticleBackground from "@/components/common/ParticleBackground";
import GradientBackground from "@/components/common/GradientBackground";
import ScrollProgress from "@/components/common/ScrollProgress";
import CommandMenu from "@/components/common/CommandMenu";
import Chatbot from "../chatbot/Chatbot";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={loading} />

      {!loading && (
        <>
          <GradientBackground />
          <ParticleBackground />
          <ScrollProgress />
          <CommandMenu />
          <BackToTop />
          <Chatbot />
          {children}
        </>
      )}
    </>
  );
}
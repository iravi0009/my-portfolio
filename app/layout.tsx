import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Chatbot from "@/components/chatbot/Chatbot";
import ClientLayout from "@/components/layout/ClientLayout";
import CommandMenu from "@/components/common/CommandMenu";
import ParticleBackground from "@/components/common/ParticleBackground";
import GradientBackground from "@/components/common/GradientBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rajravi.vercel.app"),

  title: {
    default: "Ravi Raj | Software Developer",
    template: "%s | Ravi Raj",
  },

  description:
    "Ravi Raj is a Software Developer specializing in Backend Engineering, Full Stack Development, Artificial Intelligence, and Machine Learning. Explore his projects, IEEE research, technical skills, and software development work.",

  keywords: [
    "Ravi Raj",
    "Software Developer",
    "Software Development",
    "Backend Developer",
    "Backend Engineering",
    "Full Stack Developer",
    "AI Developer",
    "Artificial Intelligence",
    "Machine Learning",
    "Python Developer",
    "C++ Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "REST API",
    "FastAPI",
    "Flask",
    "MySQL",
    "TensorFlow",
    "IEEE Research",
    "Software Developer Portfolio",
  ],

  authors: [
    {
      name: "Ravi Raj",
    },
  ],

  creator: "Ravi Raj",
  publisher: "Ravi Raj",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Ravi Raj | Software Developer",

    description:
      "Ravi Raj is a Software Developer specializing in Backend Engineering, Full Stack Development, Artificial Intelligence, and Machine Learning.",

    url: "https://rajravi.vercel.app",

    siteName: "Ravi Raj | Software Developer",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ravi Raj | Software Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Ravi Raj | Software Developer",

    description:
      "Ravi Raj is a Software Developer specializing in Backend Engineering, Full Stack Development, Artificial Intelligence, and Machine Learning.",

    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full bg-black text-white antialiased`}
      >
        {/* Animated background */}
        <GradientBackground />

        {/* Particle background */}
        <ParticleBackground />

        {/* Command menu */}
        <CommandMenu />

        {/* Global chatbot */}
        <Chatbot />

        {/* Client layout */}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
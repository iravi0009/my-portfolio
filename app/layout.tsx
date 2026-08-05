import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"), // Change after deployment

  title: {
    default: "Ravi Raj | Software Engineer",
    template: "%s | Ravi Raj",
  },

  description:
    "Software Engineer specializing in Full Stack Development, AI, Machine Learning, and Backend Engineering. Explore my portfolio, projects, IEEE research papers, and technical skills.",

  keywords: [
    "Ravi Raj",
    "Software Engineer",
    "Full Stack Developer",
    "Backend Developer",
    "AI Engineer",
    "Machine Learning",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "IEEE Research",
    "TensorFlow",
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
    title: "Ravi Raj | Software Engineer",

    description:
      "Software Engineer specializing in Full Stack Development, Artificial Intelligence, and Machine Learning.",

    url: "https://your-domain.vercel.app",

    siteName: "Ravi Raj Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ravi Raj Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Ravi Raj | Software Engineer",

    description:
      "Software Engineer specializing in Full Stack Development, AI, and Backend Engineering.",

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
  <ClientLayout>
    {children}
  </ClientLayout>
</body>
    </html>
  );
}

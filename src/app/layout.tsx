import type { Metadata } from "next";
import { Inter, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Chinchakar | Product Design Engineer",
  description: "Senior Product Designer & Engineer specializing in AI, Design Systems, and Accessibility (WCAG 2.2). Founder of Aulys.",
  keywords: "Product Designer, UX Engineer, Design Systems, React, AI Design, Accessibility",
};

import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geist.variable} ${jetbrainsMono.variable} antialiased bg-zinc-950 text-zinc-400`}
      >
        <div className="pointer-events-none fixed inset-0 bg-grain opacity-[0.05] z-50 mix-blend-overlay"></div>
        <SmoothScroll>
          <Header />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

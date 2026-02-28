import type { Metadata } from "next";
import { Inter, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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
  metadataBase: new URL("https://adityachinchakar.com"),
  title: "Aditya Chinchakar | Product Design Engineer",
  description: "Senior Product Designer & Engineer specializing in AI, Design Systems, and Accessibility (WCAG 2.2). Founder of Aulys.",
  keywords: "Product Designer, UX Engineer, Design Systems, React, AI Design, Accessibility",
  authors: [{ name: "Aditya Chinchakar" }],
  creator: "Aditya Chinchakar",
  publisher: "Aditya Chinchakar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adityachinchakar.com",
    siteName: "Aditya Chinchakar",
    title: "Aditya Chinchakar | Product Design Engineer",
    description: "Senior Product Designer & Engineer specializing in AI, Design Systems, and Accessibility (WCAG 2.2). Founder of Aulys.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aditya Chinchakar - Product Design Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Chinchakar | Product Design Engineer",
    description: "Senior Product Designer & Engineer specializing in AI, Design Systems, and Accessibility (WCAG 2.2). Founder of Aulys.",
    images: ["/og-image.png"],
    creator: "@adityachinchakar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geist.variable} ${jetbrainsMono.variable} antialiased bg-zinc-50 text-zinc-600`}
        suppressHydrationWarning
      >
        <div className="pointer-events-none fixed inset-0 bg-grain opacity-[0.05] z-50 mix-blend-overlay" aria-hidden="true" />
        <SmoothScroll>
          {/* Skip to main content — WCAG 2.4.1 Bypass Blocks */}
          <a
            href="#main-content"
            className="absolute left-4 top-4 z-[9999] -translate-y-20 rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-transform"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

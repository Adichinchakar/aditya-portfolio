import type { Metadata } from "next";
import { Inter, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next";

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
  title: {
    default: "Aditya Chinchakar | Senior Product Designer — AI, Design Systems & 0→1 Products",
    template: "%s | Aditya Chinchakar",
  },
  description: "Senior Product Designer with 6+ years shipping AI products, design systems, and 0→1 builds. Founder of Aulys. Currently at Infosys. Portfolio of work in AI UX, WCAG accessibility, and enterprise product design.",
  keywords: [
    "Senior Product Designer",
    "Founding Designer",
    "Product Designer India",
    "UX Designer Portfolio",
    "Design Systems Lead",
    "AI UX Designer",
    "WCAG Accessibility Designer",
    "Figma Plugin Developer",
    "Product Designer Infosys",
    "0 to 1 Product Designer",
    "Staff Product Designer",
    "Design Lead Portfolio",
    "Enterprise UX Designer",
    "Product Designer AI",
    "React Product Designer",
    "Aditya Chinchakar",
  ],
  authors: [{ name: "Aditya Chinchakar", url: "https://adityachinchakar.com" }],
  creator: "Aditya Chinchakar",
  publisher: "Aditya Chinchakar",
  alternates: {
    canonical: "https://adityachinchakar.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adityachinchakar.com",
    siteName: "Aditya Chinchakar — Product Designer",
    title: "Aditya Chinchakar | Senior Product Designer — AI, Design Systems & 0→1 Products",
    description: "Senior Product Designer with 6+ years shipping AI products, design systems, and 0→1 builds. Founder of Aulys. Currently at Infosys.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Chinchakar | Senior Product Designer",
    description: "Senior Product Designer shipping AI products, design systems, and 0→1 builds. Founder of Aulys. Currently at Infosys.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://adityachinchakar.com/#person",
      name: "Aditya Chinchakar",
      url: "https://adityachinchakar.com",
      jobTitle: "Senior Product Designer",
      description: "Senior Product Designer with 6+ years shipping AI products, design systems, and 0-to-1 builds. Founder of Aulys. Currently at Infosys.",
      email: "adichinchakar@gmail.com",
      image: "https://adityachinchakar.com/opengraph-image",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion: "India",
      },
      sameAs: [
        "https://linkedin.com/in/adityachinchakar",
        "https://github.com/Adichinchakar",
        "https://medium.com/@adichinchakar",
      ],
      knowsAbout: [
        "Product Design", "UX Design", "Design Systems", "AI UX Design",
        "React", "Next.js", "TypeScript", "Figma", "WCAG 2.2 Accessibility",
        "Design Ops", "0-to-1 Product Development", "Enterprise UX",
        "FinTech UX", "Healthcare UX", "Design Leadership",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Senior Product Designer",
        occupationLocation: { "@type": "Country", name: "India" },
        skills: "Product Design, Design Systems, AI UX, Accessibility, React, Figma",
      },
      worksFor: {
        "@type": "Organization",
        name: "Infosys",
        url: "https://www.infosys.com",
      },
      founder: {
        "@type": "Organization",
        name: "Aulys",
        url: "https://aulys-app.vercel.app",
        description: "AI-powered Figma plugin for WCAG 2.2 accessibility compliance automation",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "AI Associate",
          credentialCategory: "certification",
          recognizedBy: { "@type": "Organization", name: "Salesforce" },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Design Accessibility",
          credentialCategory: "certification",
          recognizedBy: { "@type": "Organization", name: "Uxcel" },
        },
      ],
      award: "Simplifai Hackathon 2.0 Winner — 1st place, AI-driven workflow builder",
    },
    {
      "@type": "WebSite",
      "@id": "https://adityachinchakar.com/#website",
      url: "https://adityachinchakar.com",
      name: "Aditya Chinchakar — Product Designer Portfolio",
      description: "Portfolio of Senior Product Designer Aditya Chinchakar. Case studies in AI UX, design systems, accessibility, and 0→1 product development.",
      author: { "@id": "https://adityachinchakar.com/#person" },
      inLanguage: "en-US",
    },
    {
      "@type": "ItemList",
      name: "Product Design Case Studies",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Simplifai AI Workflow Engine", url: "https://adityachinchakar.com/work/simplifai" },
        { "@type": "ListItem", position: 2, name: "Aulys WCAG Accessibility Plugin", url: "https://adityachinchakar.com/work/aulys" },
        { "@type": "ListItem", position: 3, name: "Simplifai Design System", url: "https://adityachinchakar.com/work/simplifai-design-system" },
        { "@type": "ListItem", position: 4, name: "MedSecure Blockchain Medical Records", url: "https://adityachinchakar.com/work/medsecure" },
        { "@type": "ListItem", position: 5, name: "Nexus FinTech UX Audit", url: "https://adityachinchakar.com/work/nexus-banking" },
        { "@type": "ListItem", position: 6, name: "Infosys × Imagine Learning AI Design", url: "https://adityachinchakar.com/work/infosys" },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
        <Analytics />
      </body>
    </html>
  );
}

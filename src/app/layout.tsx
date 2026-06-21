import type { Metadata } from "next";
import { Inter, Geist, JetBrains_Mono, Epilogue } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { CommandMenu } from "@/components/ui/command-menu";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adityachinchakar.com"),
  title: {
    default: "Aditya Chinchakar | Senior Product Designer — Freelance AI UX & Enterprise Design",
    template: "%s | Aditya Chinchakar",
  },
  description: "Senior Product Designer & Founder with 9+ years shipping AI-powered enterprise products. Open to remote, hybrid, and onsite roles globally. Founder of Aulys (WCAG 2.2 Figma Plugin). Currently on notice period · Available August 2026. Enterprise AI, design systems, 0→1 product design.",
  keywords: [
    "Freelance Senior Product Designer",
    "Contract UX Designer",
    "Remote Product Designer for hire",
    "AI UX Designer freelance",
    "Enterprise Product Designer",
    "Founding Designer",
    "Staff Product Designer",
    "AI Product Designer",
    "Product Designer India",
    "UX Designer Portfolio",
    "Design Systems Lead",
    "AI UX Designer",
    "WCAG Accessibility Designer",
    "Figma Plugin Developer",
    "Product Designer Infosys",
    "0 to 1 Product Designer",
    "Lead Designer Portfolio",
    "Enterprise UX Designer",
    "EdTech UX Designer",
    "React Product Designer",
    "Senior UX Designer remote",
    "Toptal Product Designer",
    "AI UX Consultant",
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
    siteName: "Aditya Chinchakar — Senior Product Designer",
    title: "Aditya Chinchakar | Senior Product Designer — Freelance AI UX & Enterprise Design",
    description: "9+ years shipping AI enterprise products. Currently on notice period · Available August 2026. Open to remote, hybrid, and onsite roles globally. Founder of Aulys (WCAG 2.2 Figma Plugin).",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Chinchakar | Senior Product Designer — Freelance & Contract",
    description: "9+ years shipping AI enterprise products. Available for freelance. Founder of Aulys (WCAG 2.2 Figma Plugin). Fortune 500 at Infosys.",
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
      jobTitle: "Senior Product Designer — Available for Hire",
      description: "Senior Product Designer with 9+ years shipping AI-powered EdTech, FinTech, and Enterprise SaaS products. Founder of Aulys — an AI accessibility SaaS and Figma plugin, conceived, designed, and coded solo. Immediately available for full-time and contract roles worldwide.",
      email: "adichinchakar@gmail.com",
      image: "https://adityachinchakar.com/opengraph-image",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressCountry: "IN",
        addressRegion: "Maharashtra",
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
        "EdTech UX", "FinTech UX", "AI Product Design", "Design Leadership",
        "Figma Plugin Development", "Generative AI Interfaces", "Prompt UX",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Founding Designer",
        occupationLocation: { "@type": "City", name: "Pune, India" },
        skills: "Product Design, AI UX Design, Design Systems, Accessibility (WCAG 2.2), React, Next.js, Figma",
      },
      alumniOf: [
        { "@type": "Organization", name: "Infosys", url: "https://www.infosys.com" },
        { "@type": "Organization", name: "Simplifai", url: "https://simplifai.ai" },
      ],
      founder: {
        "@type": "Organization",
        name: "Aulys",
        url: "https://aulys-app.vercel.app",
        description: "AI-powered accessibility SaaS: Figma Plugin scanning 500+ layers in under 10s for WCAG 2.2 compliance, plus a Web Audit tool with AI-powered remediation",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Google UX Design Professional Certificate",
          credentialCategory: "certification",
          recognizedBy: { "@type": "Organization", name: "Google" },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Accessibility Specialist",
          credentialCategory: "certification",
          recognizedBy: { "@type": "Organization", name: "Uxcel" },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "AI Associate",
          credentialCategory: "certification",
          recognizedBy: { "@type": "Organization", name: "Salesforce" },
          validFrom: "2024-09",
          validUntil: "2029-09",
        },
      ],
      award: "Simplifai Hackathon 2.0 Winner — 1st place, AI-driven workflow builder",
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Senior Product Designer — Freelance & Contract",
          description: "AI UX design, enterprise product design, design systems architecture, 0→1 product development, and design leadership for remote clients worldwide. Immediately available for full-time or contract roles.",
          serviceType: "Product Design Consulting",
        },
        availability: "https://schema.org/InStock",
        availableAtOrFrom: {
          "@type": "Place",
          name: "Remote — Worldwide",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://adityachinchakar.com/#website",
      url: "https://adityachinchakar.com",
      name: "Aditya Chinchakar — Founding Designer Portfolio",
      description: "Portfolio of Founding Designer Aditya Chinchakar. Case studies in AI UX, design systems, EdTech, FinTech, accessibility, and 0→1 product development.",
      author: { "@id": "https://adityachinchakar.com/#person" },
      inLanguage: "en-US",
    },
    {
      "@type": "ItemList",
      name: "Product Design Case Studies by Aditya Chinchakar",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Simplifai AI Workflow Engine Redesign", url: "https://adityachinchakar.com/work/simplifai" },
        { "@type": "ListItem", position: 2, name: "Aulys — WCAG 2.2 AI Accessibility Plugin", url: "https://adityachinchakar.com/work/aulys" },
        { "@type": "ListItem", position: 3, name: "Simplifai Design System (60+ components)", url: "https://adityachinchakar.com/work/simplifai-design-system" },
        { "@type": "ListItem", position: 4, name: "MedSecure — Blockchain Medical Records UX", url: "https://adityachinchakar.com/work/medsecure" },
        { "@type": "ListItem", position: 5, name: "Nexus FinTech UX Audit", url: "https://adityachinchakar.com/work/nexus-banking" },
        { "@type": "ListItem", position: 6, name: "Infosys × Imagine Learning — AI Teacher Suite", url: "https://adityachinchakar.com/work/infosys" },
        { "@type": "ListItem", position: 7, name: "Orbit — Spatial Onboarding for Apple Vision Pro", url: "https://adityachinchakar.com/work/orbit" },
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
        className={`${inter.variable} ${geist.variable} ${jetbrainsMono.variable} ${epilogue.variable} antialiased bg-zinc-50 text-zinc-600`}
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
        <SpeedInsights />
        <GoogleAnalytics />
        <CommandMenu />
      </body>
    </html>
  );
}

import { MetadataRoute } from "next";

const BASE_URL = "https://adityachinchakar.com";

const CASE_STUDY_SLUGS = [
    "simplifai",
    "aulys",
    "simplifai-design-system",
    "medsecure",
    "nexus-banking",
    "infosys",
];

const WRITING_SLUGS = [
    "super-app-paradox-neobanks",
    "figma-plugin-solo-build",
    "designing-for-bharat",
    "design-systems-are-products",
    "ai-ux-trust-over-intelligence",
    "senior-designer-to-founder",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
        { url: `${BASE_URL}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
        { url: `${BASE_URL}/resume`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
        { url: `${BASE_URL}/writing`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    ];

    const caseStudyRoutes: MetadataRoute.Sitemap = CASE_STUDY_SLUGS.map((slug) => ({
        url: `${BASE_URL}/work/${slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    const writingRoutes: MetadataRoute.Sitemap = WRITING_SLUGS.map((slug) => ({
        url: `${BASE_URL}/writing/${slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...caseStudyRoutes, ...writingRoutes];
}

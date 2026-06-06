import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CASE_STUDIES: Record<string, {
    title: string;
    company: string;
    category: string;
    metric: string;
    accent: string;
}> = {
    simplifai: {
        title: "Workflow Engine",
        company: "Simplifai",
        category: "Enterprise SaaS · AI Automation",
        metric: "73% user adoption increase",
        accent: "#a855f7",
    },
    aulys: {
        title: "Accessibility Engine",
        company: "Aulys",
        category: "AI Figma Plugin · WCAG 2.2",
        metric: "500+ frames · under 10 seconds",
        accent: "#10b981",
    },
    "aulys-code": {
        title: "Code Accessibility Extension",
        company: "Aulys Code",
        category: "VS Code Extension · WCAG · AI",
        metric: "Real-time WCAG in the IDE",
        accent: "#3b82f6",
    },
    "simplifai-design-system": {
        title: "Design System",
        company: "Simplifai",
        category: "Design Systems · Enterprise",
        metric: "42% faster dev cycles",
        accent: "#6366f1",
    },
    medsecure: {
        title: "Medical Records Platform",
        company: "MedSecure",
        category: "Blockchain · Healthcare · ABDM",
        metric: "34% fewer medical errors in pilot",
        accent: "#3b82f6",
    },
    "nexus-banking": {
        title: "Fintech App Strategy",
        company: "Nexus",
        category: "FinTech · UX Strategy",
        metric: "Unsolicited strategy case study",
        accent: "#f59e0b",
    },
    infosys: {
        title: "AI Educational Tools",
        company: "Infosys × Imagine Learning",
        category: "GenAI · Enterprise · EdTech",
        metric: "70% reduction in assessment time",
        accent: "#8b5cf6",
    },
    orbit: {
        title: "Spatial Onboarding",
        company: "Orbit",
        category: "Apple Vision Pro · AI",
        metric: "3 weeks → 3 hours context-building",
        accent: "#ec4899",
    },
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study = CASE_STUDIES[slug] ?? {
        title: "Case Study",
        company: "Aditya Chinchakar",
        category: "Product Design",
        metric: "",
        accent: "#6366f1",
    };

    return new ImageResponse(
        (
            <div
                style={{
                    background: "#09090b",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px 80px",
                    fontFamily: "sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Background accent glow */}
                <div
                    style={{
                        position: "absolute",
                        top: -100,
                        right: -100,
                        width: 500,
                        height: 500,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${study.accent}22 0%, transparent 70%)`,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: -60,
                        left: 200,
                        width: 300,
                        height: 300,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${study.accent}11 0%, transparent 70%)`,
                    }}
                />

                {/* Top — Category chip */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 18px",
                        borderRadius: 999,
                        background: `${study.accent}18`,
                        border: `1px solid ${study.accent}35`,
                        width: "auto",
                    }}
                >
                    <span style={{ color: study.accent, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em" }}>
                        CASE STUDY — {study.category.toUpperCase()}
                    </span>
                </div>

                {/* Center — Title block */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div
                        style={{
                            fontSize: 22,
                            fontWeight: 700,
                            color: study.accent,
                            letterSpacing: "0.02em",
                        }}
                    >
                        {study.company}
                    </div>
                    <div
                        style={{
                            fontSize: 68,
                            fontWeight: 900,
                            color: "#ffffff",
                            lineHeight: 1.0,
                            letterSpacing: "-0.03em",
                        }}
                    >
                        {study.title}
                    </div>
                    {study.metric && (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                marginTop: 8,
                            }}
                        >
                            <div
                                style={{
                                    width: 4,
                                    height: 28,
                                    borderRadius: 2,
                                    background: study.accent,
                                }}
                            />
                            <span
                                style={{
                                    fontSize: 22,
                                    fontWeight: 600,
                                    color: "#a1a1aa",
                                }}
                            >
                                {study.metric}
                            </span>
                        </div>
                    )}
                </div>

                {/* Bottom — Author attribution */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <div
                            style={{
                                width: 44,
                                height: 44,
                                borderRadius: "50%",
                                background: `linear-gradient(135deg, ${study.accent}, #6366f1)`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <span style={{ color: "#fff", fontSize: 16, fontWeight: 900 }}>AC</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <span style={{ color: "#ffffff", fontSize: 16, fontWeight: 700 }}>Aditya Chinchakar</span>
                            <span style={{ color: "#71717a", fontSize: 13 }}>Senior Product Designer</span>
                        </div>
                    </div>
                    <div style={{ color: "#52525b", fontSize: 14, fontWeight: 600, letterSpacing: "0.04em" }}>
                        adityachinchakar.com
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}

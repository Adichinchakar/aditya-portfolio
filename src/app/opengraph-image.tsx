import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Aditya Chinchakar | Senior Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
                {/* Background gradient orbs */}
                <div
                    style={{
                        position: "absolute",
                        top: -120,
                        right: -120,
                        width: 600,
                        height: 600,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: -80,
                        left: -80,
                        width: 400,
                        height: 400,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
                    }}
                />

                {/* Top — Availability badge */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 18px",
                        borderRadius: 999,
                        background: "rgba(34,197,94,0.12)",
                        border: "1px solid rgba(34,197,94,0.25)",
                        width: "fit-content",
                    }}
                >
                    <div
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "#22c55e",
                        }}
                    />
                    <span style={{ color: "#86efac", fontSize: 14, fontWeight: 700, letterSpacing: "0.08em" }}>
                        OPEN TO REMOTE · LEAD / STAFF DESIGNER
                    </span>
                </div>

                {/* Center — Name and title */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 900,
                            color: "#ffffff",
                            lineHeight: 1.0,
                            letterSpacing: "-0.03em",
                        }}
                    >
                        Aditya Chinchakar
                    </div>
                    <div
                        style={{
                            fontSize: 28,
                            fontWeight: 600,
                            color: "#a1a1aa",
                            letterSpacing: "-0.01em",
                        }}
                    >
                        Senior Product Designer · AI & Design Systems
                    </div>
                    <div
                        style={{
                            fontSize: 18,
                            color: "#71717a",
                            marginTop: 4,
                        }}
                    >
                        Infosys · Simplifai · Aulys · MedSecure
                    </div>
                </div>

                {/* Bottom — Stats row */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div style={{ display: "flex", gap: 48 }}>
                        {[
                            { value: "7+", label: "Years" },
                            { value: "10+", label: "Products Shipped" },
                            { value: "WCAG AAA", label: "Accessibility" },
                        ].map((stat) => (
                            <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                <span
                                    style={{
                                        fontSize: 28,
                                        fontWeight: 900,
                                        color: "#ffffff",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {stat.value}
                                </span>
                                <span style={{ fontSize: 13, color: "#71717a", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div
                        style={{
                            fontSize: 16,
                            color: "#52525b",
                            fontWeight: 600,
                            letterSpacing: "0.04em",
                        }}
                    >
                        adityachinchakar.com
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}

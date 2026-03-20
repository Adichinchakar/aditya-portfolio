"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BLUE = "#005EB8";
const BLUE_LIGHT = "#EBF3FB";
const PHONE_W = 290;

// ── Record type icons ────────────────────────────────────────────────────────
function DropletIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2C9 2 3.5 8.5 3.5 12a5.5 5.5 0 0011 0C14.5 8.5 9 2 9 2z" fill="currentColor" />
            <path d="M9 14.5c-1.4 0-2.5-1-2.5-2.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
    );
}

function PillIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2.5" y="7" width="13" height="4" rx="2" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.4" />
            <rect x="2.5" y="7" width="6.5" height="4" rx="2" fill="currentColor" />
            <path d="M9 7v4" stroke="white" strokeWidth="1.2" />
        </svg>
    );
}

function ScanIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2.5" y="2.5" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" fill="currentColor" opacity="0.15" />
            <path d="M9 5.5v2.5M9 10v2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M6 9h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M6.5 7L7.8 9 6.5 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.5 7L10.2 9l1.3 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function SyringeIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M12.5 2.5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M11 4L14 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M4.5 11.5L10.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M3 13l-1 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M7 7.5L10.5 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 1.5" />
            <path d="M5.5 9l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 1.5" />
        </svg>
    );
}

// ── Bottom navigation icons ──────────────────────────────────────────────────
function NavHome({ active }: { active: boolean }) {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
                d="M3 10.5L11 3l8 7.5V19a1 1 0 01-1 1H4a1 1 0 01-1-1v-8.5z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
                fill={active ? "currentColor" : "none"}
                fillOpacity={active ? 0.15 : 0}
            />
            <path d="M8 20v-6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
    );
}

function NavFile({ active }: { active: boolean }) {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect
                x="4" y="2" width="14" height="18" rx="2.5"
                stroke="currentColor" strokeWidth="1.6"
                fill={active ? "currentColor" : "none"} fillOpacity={active ? 0.12 : 0}
            />
            <path d="M8 8h6M8 11.5h6M8 15h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
}

function NavShield({ active }: { active: boolean }) {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
                d="M11 2l8 3.5V12c0 4-3 7-8 8.5C6 19 3 16 3 12V5.5L11 2z"
                stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"
                fill={active ? "currentColor" : "none"} fillOpacity={active ? 0.12 : 0}
            />
            <path d="M8 11l2.5 2.5 4-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function NavPerson({ active }: { active: boolean }) {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle
                cx="11" cy="8" r="3.5"
                stroke="currentColor" strokeWidth="1.6"
                fill={active ? "currentColor" : "none"} fillOpacity={active ? 0.15 : 0}
            />
            <path d="M3.5 20c0-4 3.4-6.5 7.5-6.5S18.5 16 18.5 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
}

function BottomNav({ activeIndex }: { activeIndex: number }) {
    const items = [
        { label: "Home", Icon: NavHome },
        { label: "Records", Icon: NavFile },
        { label: "Access", Icon: NavShield },
        { label: "Profile", Icon: NavPerson },
    ];
    return (
        <div style={{ display: "flex", background: "#fff", borderTop: "1px solid #f1f5f9", paddingTop: 8, paddingBottom: 4 }}>
            {items.map(({ label, Icon }, i) => (
                <div key={label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                    <div style={{ color: i === activeIndex ? BLUE : "#9ca3af" }}>
                        <Icon active={i === activeIndex} />
                    </div>
                    <span style={{ fontSize: 9.5, fontWeight: i === activeIndex ? 700 : 500, color: i === activeIndex ? BLUE : "#9ca3af", letterSpacing: 0.1 }}>
                        {label}
                    </span>
                </div>
            ))}
        </div>
    );
}

// ── Phone frame ──────────────────────────────────────────────────────────────
function PhoneFrame({ headerBg = BLUE, children }: { headerBg?: string; children: React.ReactNode }) {
    return (
        <div
            className="flex-shrink-0 mx-auto relative"
            style={{
                width: PHONE_W,
                background: "#0d0d0f",
                borderRadius: 52,
                padding: 3,
                boxShadow: "0 40px 100px rgba(0,0,0,0.28), 0 8px 32px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.07)",
            }}
        >
            {/* Silent switch */}
            <div style={{ position: "absolute", left: -2.5, top: 68, width: 2.5, height: 26, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
            {/* Volume up */}
            <div style={{ position: "absolute", left: -2.5, top: 104, width: 2.5, height: 44, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
            {/* Volume down */}
            <div style={{ position: "absolute", left: -2.5, top: 158, width: 2.5, height: 44, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
            {/* Power */}
            <div style={{ position: "absolute", right: -2.5, top: 120, width: 2.5, height: 64, background: "#3a3a3c", borderRadius: "0 2px 2px 0" }} />

            {/* Screen */}
            <div style={{ borderRadius: 49, overflow: "hidden", background: "#fff" }}>
                {/* Status bar */}
                <div style={{ background: headerBg, height: 52, display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: 22, paddingRight: 14, position: "relative" }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#fff", position: "relative", zIndex: 1 }}>9:41</span>
                    {/* Dynamic island */}
                    <div style={{ position: "absolute", left: "50%", top: 10, transform: "translateX(-50%)", width: 86, height: 28, background: "#000", borderRadius: 20, zIndex: 0 }} />
                    {/* Status icons */}
                    <div style={{ display: "flex", alignItems: "center", gap: 6, position: "relative", zIndex: 1 }}>
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                            <rect x="0" y="8" width="3" height="4" rx="1" fill="white" opacity="0.35" />
                            <rect x="4.5" y="5.5" width="3" height="6.5" rx="1" fill="white" opacity="0.6" />
                            <rect x="9" y="3" width="3" height="9" rx="1" fill="white" opacity="0.8" />
                            <rect x="13.5" y="0" width="3" height="12" rx="1" fill="white" />
                        </svg>
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
                            <circle cx="7.5" cy="9.5" r="1.2" fill="white" />
                            <path d="M4.8 6.8C5.7 6 6.5 5.6 7.5 5.6s1.8.4 2.7 1.2" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                            <path d="M2.2 4.2C3.7 2.7 5.5 1.8 7.5 1.8s3.8.9 5.3 2.4" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.55" />
                        </svg>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ width: 24, height: 12, border: "1.5px solid rgba(255,255,255,0.65)", borderRadius: 3.5, padding: "1.5px 2px", display: "flex" }}>
                                <div style={{ flex: 1, background: "white", borderRadius: 1.5 }} />
                            </div>
                            <div style={{ width: 2, height: 5.5, background: "rgba(255,255,255,0.45)", borderRadius: "0 1.5px 1.5px 0" }} />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {children}
                </div>

                {/* Home indicator */}
                <div style={{ background: "#fff", paddingTop: 7, paddingBottom: 10, display: "flex", justifyContent: "center" }}>
                    <div style={{ width: 110, height: 4, background: "#c7d2da", borderRadius: 10 }} />
                </div>
            </div>
        </div>
    );
}

// ── Screen 1: Patient Home ───────────────────────────────────────────────────
function PatientHome() {
    const records = [
        { Icon: DropletIcon, iconBg: "#fce7e7", iconColor: "#f87171", name: "Blood Test", org: "Apollo Hospitals", date: "15 Mar", badge: "New", badgeBg: "#dcfce7", badgeColor: "#15803d" },
        { Icon: PillIcon, iconBg: "#fefce8", iconColor: "#ca8a04", name: "Prescription", org: "Dr. Mehta Clinic", date: "10 Mar", badge: "Viewed", badgeBg: "#f1f5f9", badgeColor: "#64748b" },
        { Icon: ScanIcon, iconBg: "#ede9fe", iconColor: "#7c3aed", name: "Radiology Report", org: "SRL Diagnostics", date: "2 Mar", badge: "Viewed", badgeBg: "#f1f5f9", badgeColor: "#64748b" },
        { Icon: SyringeIcon, iconBg: BLUE_LIGHT, iconColor: BLUE, name: "Vaccination", org: "PHC Andheri", date: "10 Jan", badge: "Shared", badgeBg: BLUE_LIGHT, badgeColor: BLUE },
    ];

    return (
        <PhoneFrame>
            {/* App header — same bg as status bar = seamless */}
            <div style={{ background: BLUE, padding: "14px 20px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <div>
                        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, marginBottom: 4, letterSpacing: 0.2 }}>Namaste,</div>
                        <div style={{ color: "#fff", fontSize: 19, fontWeight: 700, lineHeight: 1 }}>Rajesh Kumar</div>
                    </div>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.18)", border: "1.5px solid rgba(255,255,255,0.28)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>RK</span>
                    </div>
                </div>
                {/* ABHA chip */}
                <div style={{ background: "rgba(255,255,255,0.13)", borderRadius: 14, padding: "9px 14px", border: "1px solid rgba(255,255,255,0.18)" }}>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 9, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 5 }}>ABHA ID</div>
                    <div style={{ color: "#fff", fontSize: 13.5, fontFamily: "monospace", fontWeight: 700, letterSpacing: 0.4 }}>91-1234-5678-9012</div>
                </div>
            </div>

            {/* Body */}
            <div style={{ background: "#f6f8fb", flex: 1 }}>
                {/* Pending alert */}
                <div style={{ margin: "14px 16px 0", background: "#fffbeb", border: "1px solid #fcd34d", borderRadius: 14, padding: "11px 14px", display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#f59e0b", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>3</span>
                    </div>
                    <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#92400e" }}>3 access requests pending</div>
                        <div style={{ fontSize: 10.5, color: "#b45309", marginTop: 2 }}>Tap to review →</div>
                    </div>
                </div>

                {/* Records */}
                <div style={{ padding: "14px 16px 8px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", letterSpacing: 1, textTransform: "uppercase" }}>MY RECORDS</span>
                        <span style={{ fontSize: 11.5, fontWeight: 600, color: BLUE }}>See all</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {records.map((r) => (
                            <div key={r.name} style={{ background: "#fff", borderRadius: 14, padding: "10px 14px", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)" }}>
                                <div style={{ width: 38, height: 38, borderRadius: 12, background: r.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: r.iconColor }}>
                                    <r.Icon />
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ fontSize: 12.5, fontWeight: 700, color: "#0f172a" }}>{r.name}</div>
                                    <div style={{ fontSize: 10.5, color: "#94a3b8", marginTop: 2 }}>{r.org}</div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                                    <span style={{ fontSize: 9.5, fontWeight: 700, padding: "2.5px 8px", borderRadius: 20, background: r.badgeBg, color: r.badgeColor }}>{r.badge}</span>
                                    <span style={{ fontSize: 10, color: "#94a3b8" }}>{r.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <BottomNav activeIndex={0} />
        </PhoneFrame>
    );
}

// ── Screen 2: Doctor Access Request ─────────────────────────────────────────
function DoctorRequest() {
    return (
        <PhoneFrame>
            {/* Header */}
            <div style={{ background: BLUE, padding: "12px 20px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 3L5 8l5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <span style={{ color: "#fff", fontSize: 15.5, fontWeight: 600 }}>Access Request</span>
            </div>

            <div style={{ background: "#f6f8fb", flex: 1, padding: "18px 18px 14px", display: "flex", flexDirection: "column", gap: 14 }}>
                {/* Doctor profile card */}
                <div style={{ background: "#fff", borderRadius: 18, padding: "20px 16px", textAlign: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: BLUE_LIGHT, border: `2.5px solid ${BLUE}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <circle cx="17" cy="12" r="5.5" fill={BLUE_LIGHT} stroke={BLUE} strokeWidth="1.8" />
                            <path d="M6.5 28c0-5.5 4.7-9 10.5-9s10.5 3.5 10.5 9" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" fill="none" />
                            <path d="M17 21v3M15.5 22.5h3" stroke={BLUE} strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>Dr. Vikram Mehta</div>
                    <div style={{ fontSize: 11.5, color: "#64748b", marginBottom: 3 }}>Apollo Hospitals · Mumbai</div>
                    <div style={{ fontSize: 10.5, color: "#94a3b8" }}>MBBS, MD · Reg #MH-12345</div>
                    <div style={{ marginTop: 10, display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10, fontWeight: 700, padding: "4px 12px", borderRadius: 20, background: "#dcfce7", color: "#15803d" }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#15803d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        Verified Provider
                    </div>
                </div>

                {/* Request detail */}
                <div style={{ background: "#eff6ff", borderRadius: 14, padding: "12px 16px", border: "1px solid #bfdbfe" }}>
                    <div style={{ fontSize: 12, color: "#374151", lineHeight: 1.6 }}>
                        <span style={{ fontWeight: 700, color: "#0f172a" }}>Dr. Mehta</span> is requesting access to your{" "}
                        <span style={{ fontWeight: 700, color: BLUE }}>Blood Test Report</span>{" "}
                        for consultation on <span style={{ fontWeight: 600 }}>18 March 2025</span>.
                    </div>
                </div>

                {/* Duration selector */}
                <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Access Duration</div>
                    <div style={{ display: "flex", gap: 8 }}>
                        {[
                            { label: "24 Hours", active: false },
                            { label: "7 Days", active: true },
                            { label: "Permanent", active: false },
                        ].map((d) => (
                            <div
                                key={d.label}
                                style={{
                                    flex: 1, textAlign: "center", fontSize: 11, fontWeight: 600,
                                    padding: "10px 0", borderRadius: 12, cursor: "pointer",
                                    border: `1.5px solid ${d.active ? BLUE : "#e2e8f0"}`,
                                    background: d.active ? BLUE_LIGHT : "#fff",
                                    color: d.active ? BLUE : "#94a3b8",
                                }}
                            >
                                {d.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA row */}
                <div style={{ display: "flex", gap: 10 }}>
                    <div style={{ flex: 1, textAlign: "center", fontSize: 13, fontWeight: 700, padding: "14px 0", borderRadius: 14, background: "#f1f5f9", color: "#475569", border: "1px solid #e2e8f0", cursor: "pointer" }}>
                        Deny
                    </div>
                    <div style={{ flex: 2, textAlign: "center", fontSize: 13, fontWeight: 700, padding: "14px 0", borderRadius: 14, background: BLUE, color: "#fff", cursor: "pointer" }}>
                        Allow Access
                    </div>
                </div>

                {/* Trust footnote */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "#94a3b8", fontSize: 10 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1l5 2.2V6.5C11 9.3 8.5 11 6 12 3.5 11 1 9.3 1 6.5V3.2L6 1z" stroke="#94a3b8" strokeWidth="0.9" fill="none" />
                        <path d="M4 6l1.5 1.5L8 4.5" stroke="#94a3b8" strokeWidth="0.9" strokeLinecap="round" />
                    </svg>
                    NHA verified · Consent logged on blockchain
                </div>
            </div>

            <BottomNav activeIndex={2} />
        </PhoneFrame>
    );
}

// ── Screen 3: Care Circle ────────────────────────────────────────────────────
function CareCircleUI() {
    const guardians = [
        { name: "Sunita Kumar", relation: "Mother", initials: "SK", canApprove: true },
        { name: "Ramesh Kumar", relation: "Father", initials: "RK", canApprove: false },
        { name: "Priya Kumar", relation: "Spouse", initials: "PK", canApprove: true },
    ];

    return (
        <PhoneFrame>
            {/* Header */}
            <div style={{ background: BLUE, padding: "12px 20px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M10 3L5 8l5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span style={{ color: "#fff", fontSize: 15.5, fontWeight: 600 }}>Care Circle</span>
                    </div>
                    <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "3px 12px" }}>
                        <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 10.5, fontWeight: 600 }}>3 members</span>
                    </div>
                </div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 11, lineHeight: 1.4 }}>
                    Family members who can manage your health records
                </div>
            </div>

            <div style={{ background: "#f6f8fb", flex: 1, padding: "14px 16px" }}>
                {/* Permission legend */}
                <div style={{ background: "#fff", borderRadius: 12, padding: "10px 14px", marginBottom: 12, display: "flex", gap: 16, border: "1px solid #f1f5f9" }}>
                    {[
                        { color: "#22c55e", label: "Can view" },
                        { color: BLUE, label: "Can approve" },
                        { color: "#d1d5db", label: "Not granted" },
                    ].map((p) => (
                        <div key={p.label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
                            <span style={{ fontSize: 10, color: "#64748b" }}>{p.label}</span>
                        </div>
                    ))}
                </div>

                {/* Guardian cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {guardians.map((g) => (
                        <div key={g.name} style={{ background: "#fff", borderRadius: 16, padding: "13px 14px", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                                <div style={{ width: 42, height: 42, borderRadius: "50%", background: BLUE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>{g.initials}</span>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{g.name}</div>
                                    <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{g.relation}</div>
                                </div>
                                {/* Toggle on */}
                                <div style={{ width: 44, height: 26, borderRadius: 20, background: BLUE, display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 3px", flexShrink: 0, cursor: "pointer" }}>
                                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.22)" }} />
                                </div>
                            </div>
                            {/* Permission pills */}
                            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#f0fdf4", borderRadius: 20, padding: "5px 12px", border: "1px solid #bbf7d0" }}>
                                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e" }} />
                                    <span style={{ fontSize: 10.5, fontWeight: 600, color: "#15803d" }}>View</span>
                                </div>
                                <div style={{
                                    display: "flex", alignItems: "center", gap: 5, borderRadius: 20, padding: "5px 12px",
                                    background: g.canApprove ? "#eff6ff" : "#f8fafc",
                                    border: `1px solid ${g.canApprove ? "#bfdbfe" : "#e2e8f0"}`,
                                }}>
                                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: g.canApprove ? BLUE : "#d1d5db" }} />
                                    <span style={{ fontSize: 10.5, fontWeight: 600, color: g.canApprove ? BLUE : "#94a3b8" }}>Approve</span>
                                </div>
                                <div style={{ marginLeft: "auto", fontSize: 10.5, fontWeight: 600, color: BLUE, cursor: "pointer" }}>Edit</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add Guardian CTA */}
                <div style={{ marginTop: 14, background: BLUE, color: "#fff", fontSize: 13.5, fontWeight: 700, textAlign: "center", padding: "14px 0", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer" }}>
                    <span style={{ fontSize: 18, lineHeight: 1 }}>+</span> Add Guardian
                </div>
            </div>

            <BottomNav activeIndex={2} />
        </PhoneFrame>
    );
}

// ── Screens config ───────────────────────────────────────────────────────────
const screens = [
    {
        shortLabel: "Patient Home",
        Component: PatientHome,
        caption: "ABHA ID–linked health record dashboard. Icon-first record cards, 8-language support, large touch targets (min 44×44px). The pending-request alert surfaced from field testing — rural users missed badge notifications but responded to explicit banners.",
    },
    {
        shortLabel: "Doctor Access",
        Component: DoctorRequest,
        caption: "Consent-based record sharing with tiered duration control. V1 defaulted to 'Permanent' access — pilot feedback found 30% of patients refused because of this. V2 defaults to '7 Days' which matched how patients conceptualized a consultation window.",
    },
    {
        shortLabel: "Care Circle",
        Component: CareCircleUI,
        caption: "Family guardian model with granular view/approve permissions. Designed after field research revealed families manage healthcare decisions for elders — a 65-year-old farmer in rural Pune doesn't independently navigate a digital consent flow.",
    },
];

// ── Export ───────────────────────────────────────────────────────────────────
export function MedSecureUI() {
    const [active, setActive] = useState(0);

    return (
        <div>
            {/* Tab bar */}
            <div className="flex gap-1 mb-10 border-b border-zinc-200">
                {screens.map((s, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`relative px-4 py-2.5 text-sm font-semibold transition-colors ${active === i ? "" : "text-zinc-400 hover:text-zinc-600"}`}
                        style={active === i ? { color: BLUE } : {}}
                    >
                        {s.shortLabel}
                        {active === i && (
                            <motion.div
                                layoutId="medsecure-tab-underline"
                                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t"
                                style={{ background: BLUE }}
                            />
                        )}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-start gap-12"
                >
                    {(() => { const Screen = screens[active].Component; return <Screen />; })()}

                    <div className="flex-1 pt-4">
                        <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: BLUE }}>Mobile UI · Bharat-first design</div>
                        <p className="text-base text-zinc-600 leading-relaxed">{screens[active].caption}</p>

                        {/* Design principles */}
                        <div className="mt-6 space-y-4">
                            {[
                                { title: "Icon-first hierarchy", desc: "No literacy assumption. Every action has an icon before a text label." },
                                { title: "44×44px minimum touch targets", desc: "WCAG 2.5.5 (Target Size) applied to every interactive element." },
                                { title: "8-language support", desc: "Hindi, Tamil, Telugu, Bengali, Marathi, Kannada, Malayalam, English." },
                            ].map((p) => (
                                <div key={p.title} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: BLUE_LIGHT }}>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                            <path d="M2 5l2 2 4-4" stroke={BLUE} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-zinc-800">{p.title}</div>
                                        <div className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{p.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

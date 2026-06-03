"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { Shield, Eye, ClipboardCheck, AlertTriangle, ChevronDown, ChevronUp, Users, Lock } from "lucide-react";

type Permission = {
    id: string;
    label: string;
    icon: React.ElementType;
    description: string;
};

type FamilyMember = {
    id: string;
    name: string;
    relation: string;
    avatar: string;
    avatarBg: string;
    status: "active" | "emergency" | "revoked";
    permissions: Record<string, boolean>;
};

const PERMISSIONS: Permission[] = [
    { id: "view_history", label: "View Full History", icon: Eye, description: "Access complete medical records" },
    { id: "approve_procedures", label: "Approve Procedures", icon: ClipboardCheck, description: "Sign consent for treatments" },
    { id: "emergency_access", label: "Emergency Access", icon: AlertTriangle, description: "Access in emergencies only" },
    { id: "share_records", label: "Share Records", icon: Shield, description: "Forward records to third parties" },
];

const STATUS_CONFIG = {
    active: { label: "Active Access", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200", dot: "bg-emerald-500" },
    emergency: { label: "Emergency Only", color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200", dot: "bg-amber-500" },
    revoked: { label: "Access Revoked", color: "text-zinc-500", bg: "bg-zinc-50", border: "border-zinc-200", dot: "bg-zinc-400" },
};

const INITIAL_MEMBERS: FamilyMember[] = [
    {
        id: "spouse",
        name: "Meera Sharma",
        relation: "Spouse",
        avatar: "M",
        avatarBg: "bg-violet-500",
        status: "active",
        permissions: { view_history: true, approve_procedures: true, emergency_access: true, share_records: false },
    },
    {
        id: "parent",
        name: "Rajiv Sharma",
        relation: "Father",
        avatar: "R",
        avatarBg: "bg-blue-500",
        status: "emergency",
        permissions: { view_history: false, approve_procedures: false, emergency_access: true, share_records: false },
    },
    {
        id: "sibling",
        name: "Ananya Sharma",
        relation: "Sister",
        avatar: "A",
        avatarBg: "bg-rose-300",
        status: "revoked",
        permissions: { view_history: false, approve_procedures: false, emergency_access: false, share_records: false },
    },
];

function deriveStatus(permissions: Record<string, boolean>): FamilyMember["status"] {
    const active = Object.values(permissions).filter(Boolean).length;
    if (active === 0) return "revoked";
    if (active === 1 && permissions.emergency_access) return "emergency";
    return "active";
}

function MemberCard({ member, onToggle }: { member: FamilyMember; onToggle: (memberId: string, permId: string) => void }) {
    const [expanded, setExpanded] = useState(false);
    const status = STATUS_CONFIG[member.status];

    return (
        <motion.div
            layout
            className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm"
        >
            {/* Card Header */}
            <button
                onClick={() => setExpanded(e => !e)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-zinc-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005EB8] focus-visible:ring-inset"
                aria-expanded={expanded}
                aria-controls={`permissions-${member.id}`}
            >
                <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl ${member.avatarBg} flex items-center justify-center text-white font-black text-base shadow`}>
                        {member.avatar}
                    </div>
                    <div>
                        <div className="font-bold text-zinc-900 text-sm">{member.name}</div>
                        <div className="text-xs text-zinc-500">{member.relation}</div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {/* Status badge */}
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${status.color} ${status.bg} ${status.border}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} aria-hidden="true" />
                        {status.label}
                    </div>
                    {expanded
                        ? <ChevronUp className="w-4 h-4 text-zinc-400" aria-hidden="true" />
                        : <ChevronDown className="w-4 h-4 text-zinc-400" aria-hidden="true" />
                    }
                </div>
            </button>

            {/* Expanded Permissions */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        id={`permissions-${member.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-5 pt-2 border-t border-zinc-100 space-y-3">
                            <p className="text-xs text-zinc-500 font-medium mb-3">Manage Permissions</p>
                            {PERMISSIONS.map((perm) => {
                                const enabled = member.permissions[perm.id];
                                return (
                                    <div
                                        key={perm.id}
                                        className="flex items-center justify-between gap-3 py-2"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${enabled ? "bg-[#005EB8]/10" : "bg-zinc-100"}`}>
                                                <perm.icon className={`w-4 h-4 ${enabled ? "text-[#005EB8]" : "text-zinc-400"}`} aria-hidden="true" />
                                            </div>
                                            <div>
                                                <div className={`text-sm font-semibold ${enabled ? "text-zinc-900" : "text-zinc-500"}`}>{perm.label}</div>
                                                <div className="text-xs text-zinc-400">{perm.description}</div>
                                            </div>
                                        </div>

                                        {/* Toggle */}
                                        <button
                                            role="switch"
                                            aria-checked={enabled}
                                            aria-label={`Toggle ${perm.label} for ${member.name}`}
                                            onClick={() => onToggle(member.id, perm.id)}
                                            className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005EB8] focus-visible:ring-offset-2 ${enabled ? "bg-[#005EB8]" : "bg-zinc-200"
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 rounded-full bg-white shadow-lg transform transition-transform ${enabled ? "translate-x-6" : "translate-x-1"
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function CareCircle() {
    const [members, setMembers] = useState(INITIAL_MEMBERS);

    const handleToggle = (memberId: string, permId: string) => {
        setMembers(prev =>
            prev.map(m => {
                if (m.id !== memberId) return m;
                const newPerms = { ...m.permissions, [permId]: !m.permissions[permId] };
                return { ...m, permissions: newPerms, status: deriveStatus(newPerms) };
            })
        );
    };

    const activeCount = members.filter(m => m.status !== "revoked").length;

    return (
        <section className="py-24 px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left — Section intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xs font-mono font-bold text-[#005EB8] uppercase tracking-[0.2em] mb-4">
                            03 — Key Feature
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                            Family Consent Management
                        </h2>
                        <p className="text-xl text-zinc-600 leading-relaxed mb-8">
                            The <strong>Care Circle</strong> — a consent dashboard that lets patients grant granular, revocable access to family members. Blockchain-logged, instantly auditable.
                        </p>

                        <div className="space-y-4">
                            {[
                                { icon: Lock, title: "Blockchain-Logged", desc: "Every permission change is written to an immutable ledger — a full audit trail with timestamp." },
                                { icon: Users, title: "Role-Based Access", desc: "Spouse gets full access. Elderly parent gets emergency-only. You decide." },
                                { icon: Shield, title: "Instant Revocation", desc: "One tap revokes access immediately — no waiting for admin approval." },
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4 items-start p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                                    <div className="w-10 h-10 rounded-xl bg-[#005EB8]/10 flex items-center justify-center shrink-0">
                                        <item.icon className="w-5 h-5 text-[#005EB8]" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-zinc-900 text-sm">{item.title}</div>
                                        <div className="text-sm text-zinc-600 mt-0.5">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Interactive Component */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                    >
                        {/* Dashboard Shell */}
                        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 overflow-hidden shadow-xl">
                            {/* Header */}
                            <div className="p-6 border-b border-zinc-200 bg-white">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-black text-zinc-900 text-base">Care Circle</h3>
                                        <p className="text-xs text-zinc-500 mt-0.5">{activeCount} of {members.length} members with access</p>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                                        <span className="text-xs font-semibold text-emerald-700">Ledger Active</span>
                                    </div>
                                </div>
                            </div>

                            {/* Member list */}
                            <div className="p-4 space-y-3" role="list" aria-label="Family members and permissions">
                                {members.map((member) => (
                                    <MemberCard key={member.id} member={member} onToggle={handleToggle} />
                                ))}
                            </div>

                            {/* Footer note */}
                            <div className="px-6 py-4 border-t border-zinc-200 bg-white">
                                <p className="text-xs text-zinc-400 text-center font-medium flex items-center justify-center gap-1.5">
                                    <Lock className="w-3 h-3" aria-hidden="true" />
                                    All changes logged to Hyperledger Fabric blockchain
                                </p>
                            </div>
                        </div>

                        <p className="text-center text-xs text-zinc-400 mt-4 font-medium">
                            💡 Click any family member to toggle permissions
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

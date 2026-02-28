"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Wifi, WifiOff, Hospital, Stethoscope, User } from "lucide-react";

const PERSONAS = [
    {
        name: "Priya Sharma",
        tag: "Urban Patient",
        age: "28 · Software Engineer · Bangalore",
        avatar: "P",
        avatarBg: "bg-violet-500",
        tagColor: "text-violet-700 bg-violet-50 border-violet-200",
        icon: Wifi,
        iconColor: "text-violet-500",
        connectivity: "Online",
        location: "Bangalore",
        locationIcon: MapPin,
        goal: "Manage her scattered records from 4 different hospitals across Mumbai and Bangalore without carrying physical files.",
        painPoints: [
            "Diagnosed at Fortis Mumbai, but current doctor at Manipal Bangalore can't access those records",
            "Has to repeat expensive blood panels every new hospital visit (₹3,200 each time)",
            "Worried about her CT scan data being stored on hospital servers she doesn't control",
        ],
        designImplication: "Digital-first, privacy-focused UI. Fast QR-based record sharing for appointments.",
        quote: "I want to own my own health data, not beg every hospital for a printout.",
        accentGrad: "from-violet-50 to-purple-50",
        border: "border-violet-100",
    },
    {
        name: "Ramesh Kumar",
        tag: "Rural Patient",
        age: "52 · Farmer · Hisar, Haryana",
        avatar: "R",
        avatarBg: "bg-amber-500",
        tagColor: "text-amber-700 bg-amber-50 border-amber-200",
        icon: WifiOff,
        iconColor: "text-amber-500",
        connectivity: "Intermittent 4G",
        location: "Haryana",
        locationIcon: MapPin,
        goal: "Access his diabetes and hypertension records at the district hospital, even when there is no connectivity.",
        painPoints: [
            "Paper records destroyed in the 2023 Yamuna floods — started treatment history from scratch",
            "District hospital is 40km away; primary care is at a village PHC with no EMR system",
            "Limited Hindi literacy; needs audio/icon-first UI",
        ],
        designImplication: "Offline-first PWA, icon-based navigation, Hindi voice support, SMS fallback for OTP.",
        quote: "When papers got lost in flood, I didn't know what medicines I was on.",
        accentGrad: "from-amber-50 to-orange-50",
        border: "border-amber-100",
    },
    {
        name: "Dr. Rajesh Mehta",
        tag: "ER Physician",
        age: "41 · Emergency Medicine · AIIMS Delhi",
        avatar: "D",
        avatarBg: "bg-[#005EB8]",
        tagColor: "text-blue-700 bg-blue-50 border-blue-200",
        icon: Hospital,
        iconColor: "text-[#005EB8]",
        connectivity: "Hospital WiFi",
        location: "New Delhi",
        locationIcon: Stethoscope,
        goal: "Access a patient's full medical history, allergies, and current medications within 60 seconds of ER admission.",
        painPoints: [
            "Unconscious patients arrive with zero documentation — allergies unknown",
            "Interstate patients have records in state-specific portals requiring separate logins",
            "Current ABDM system requires 5 screens + OTP before seeing any data",
        ],
        designImplication: "Critical-info-first layout. Blood group and allergies visible on scan. Maximum 2 taps to full history.",
        quote: "In the golden 60 seconds, I can't be navigating 5 login screens.",
        accentGrad: "from-blue-50 to-sky-50",
        border: "border-blue-100",
    },
];

export function Personas() {
    return (
        <section className="py-24 px-6 bg-zinc-50 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,94,184,0.04),transparent_60%)]" aria-hidden="true" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xs font-mono font-bold text-[#005EB8] uppercase tracking-[0.2em] mb-4">
                        02 — User Research
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                        Three Users. <span className="text-zinc-500">One System.</span>
                    </h2>
                    <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">
                        Each persona represented a fundamentally different context — connectivity, literacy, urgency. All three had to be served simultaneously.
                    </p>
                </motion.div>

                {/* Persona Cards Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {PERSONAS.map((persona, i) => (
                        <motion.article
                            key={persona.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            className={`rounded-[2rem] border ${persona.border} bg-gradient-to-br ${persona.accentGrad} p-8 overflow-hidden relative flex flex-col`}
                            aria-label={`Persona: ${persona.name}`}
                        >
                            {/* Top - Avatar + Name */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-14 h-14 rounded-2xl ${persona.avatarBg} flex items-center justify-center text-white text-xl font-black shadow-lg`}>
                                    {persona.avatar}
                                </div>
                                <div>
                                    <div className="font-black text-zinc-900 text-lg">{persona.name}</div>
                                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-bold border ${persona.tagColor}`}>
                                        {persona.tag}
                                    </span>
                                </div>
                            </div>

                            <div className="text-xs text-zinc-500 font-medium mb-4 flex items-center gap-1.5">
                                <User className="w-3 h-3" aria-hidden="true" />
                                {persona.age}
                            </div>

                            {/* Connectivity badge */}
                            <div className="flex items-center gap-2 mb-6">
                                <persona.icon className={`w-4 h-4 ${persona.iconColor}`} aria-hidden="true" />
                                <span className="text-xs font-semibold text-zinc-600">{persona.connectivity}</span>
                            </div>

                            {/* Goal */}
                            <div className="mb-5">
                                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2">Goal</h3>
                                <p className="text-sm text-zinc-700 leading-relaxed font-medium">{persona.goal}</p>
                            </div>

                            {/* Pain Points */}
                            <div className="mb-5 flex-1">
                                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2">Pain Points</h3>
                                <ul className="space-y-2" role="list">
                                    {persona.painPoints.map((p, j) => (
                                        <li key={j} className="flex gap-2 items-start text-sm text-zinc-600">
                                            <span className="text-red-400 font-bold shrink-0 mt-0.5">·</span>
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Design Implication */}
                            <div className="mb-6 p-4 rounded-2xl bg-white/60 border border-white/80">
                                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-1">Design Implication</h3>
                                <p className="text-sm text-zinc-700 font-semibold">{persona.designImplication}</p>
                            </div>

                            {/* Quote */}
                            <blockquote className="border-l-2 border-zinc-300 pl-4">
                                <p className="text-sm text-zinc-600 italic leading-relaxed">&quot;{persona.quote}&quot;</p>
                            </blockquote>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

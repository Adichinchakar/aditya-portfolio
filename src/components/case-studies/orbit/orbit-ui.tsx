"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";

/* ─── Screen 1: Spatial Org Directory ────────────────────── */
export function OrgMapScreen() {
    const employees = [
        { name: "Rahul Choudhury", role: "Frontend Lead", dept: "Engineering", status: "In a meeting", jira: "ORB-142", tz: "PST", online: true, img: "https://api.dicebear.com/7.x/notionists/svg?seed=Rahul&backgroundColor=e2e8f0" },
        { name: "Sarah Jenkins", role: "Product Manager", dept: "Product", status: "Focus Mode", jira: "ORB-129", tz: "EST", online: true, img: "https://api.dicebear.com/7.x/notionists/svg?seed=Sarah&backgroundColor=e2e8f0" },
        { name: "David Kim", role: "Backend Eng", dept: "Engineering", status: "Active", jira: "ORB-144", tz: "PST", online: true, img: "https://api.dicebear.com/7.x/notionists/svg?seed=David&backgroundColor=e2e8f0" },
        { name: "Elena Rostova", role: "Staff Designer", dept: "Design", status: "Offline", jira: "None", tz: "CET", online: false, img: "https://api.dicebear.com/7.x/notionists/svg?seed=Elena&backgroundColor=e2e8f0" },
        { name: "Michael Chen", role: "Data Scientist", dept: "Data", status: "Active", jira: "ORB-98", tz: "PST", online: true, img: "https://api.dicebear.com/7.x/notionists/svg?seed=Mike&backgroundColor=e2e8f0" },
    ];

    return (
        <div className="relative w-full h-full flex flex-col bg-black/40 overflow-hidden">
            {/* Atmospheric Background Grid */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_100%)] z-0 pointer-events-none" />

            {/* Spatial Top Chrome */}
            <div className="px-8 py-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white font-black tracking-widest text-[10px]">ORB</div>
                    <div>
                        <h2 className="text-[18px] font-bold text-white tracking-tight leading-none mb-1">Global Directory</h2>
                        <div className="text-[11px] font-mono text-white/50 tracking-widest uppercase">142 Employees Online</div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="relative">
                        <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                        <input type="text" placeholder="Search by name, role, skill..." className="w-64 pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-full text-[12px] text-white focus:outline-none focus:bg-white/10 backdrop-blur-md transition-colors" />
                    </div>
                    <button className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-full text-[12px] font-bold backdrop-blur-md hover:bg-white/20 transition-colors flex items-center gap-2">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
                        Filter
                    </button>
                </div>
            </div>

            {/* Dense Data Table (Spatial Glass Style) */}
            <div className="flex-1 px-8 pb-8 z-10 overflow-hidden flex flex-col">
                <div className="bg-white/5 border border-white/10 rounded-[24px] backdrop-blur-[60px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] flex-1 flex flex-col overflow-hidden">
                    
                    {/* Table Header */}
                    <div className="grid grid-cols-[minmax(200px,1fr)_120px_160px_140px_100px] gap-4 px-6 py-4 border-b border-white/10 bg-black/20 text-[10px] font-bold uppercase tracking-widest text-white/40">
                        <div>Employee</div>
                        <div>Department</div>
                        <div>Current Status</div>
                        <div>Active Ticket</div>
                        <div>Local Time</div>
                    </div>

                    {/* Table Body */}
                    <div className="flex-1 overflow-y-auto">
                        {employees.map((emp, i) => (
                            <div key={i} className="grid grid-cols-[minmax(200px,1fr)_120px_160px_140px_100px] gap-4 px-6 py-4 border-b border-white/5 hover:bg-white/5 transition-colors items-center group cursor-pointer">
                                
                                {/* Employee Col */}
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden border border-white/20 shadow-inner">
                                            <img src={emp.img} alt={emp.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#1a1a1a] ${emp.online ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" : "bg-white/20"}`} />
                                    </div>
                                    <div>
                                        <div className="text-[13px] font-bold text-white group-hover:text-[#00f0ff] transition-colors">{emp.name}</div>
                                        <div className="text-[11px] text-white/50">{emp.role}</div>
                                    </div>
                                </div>

                                {/* Dept Col */}
                                <div>
                                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-bold text-white/70">
                                        {emp.dept}
                                    </span>
                                </div>

                                {/* Status Col */}
                                <div className="flex items-center gap-2">
                                    {emp.status === "In a meeting" && <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 10l3 3 3-3"/></svg>}
                                    {emp.status === "Focus Mode" && <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg>}
                                    {emp.status === "Active" && <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>}
                                    {emp.status === "Offline" && <svg className="w-4 h-4 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>}
                                    <span className={`text-[12px] font-medium ${emp.status === "Offline" ? "text-white/30" : "text-white/80"}`}>{emp.status}</span>
                                </div>

                                {/* Jira Col */}
                                <div>
                                    {emp.jira !== "None" ? (
                                        <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded w-fit">
                                            <div className="w-3 h-3 rounded-sm bg-blue-500 flex items-center justify-center text-[8px] text-white font-black">J</div>
                                            <span className="text-[11px] font-mono text-blue-300">{emp.jira}</span>
                                        </div>
                                    ) : (
                                        <span className="text-[11px] text-white/30 italic">No active task</span>
                                    )}
                                </div>

                                {/* TZ Col */}
                                <div className="text-[12px] font-mono text-white/60">
                                    {emp.tz}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Spatial Floating Toolbar */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]">
                    <button className="px-4 py-1.5 rounded-full bg-white text-black text-[11px] font-bold shadow-[0_0_15px_rgba(255,255,255,0.5)]">Directory</button>
                    <button className="px-4 py-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 text-[11px] font-bold transition-colors">Org Chart (3D)</button>
                    <button className="px-4 py-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 text-[11px] font-bold transition-colors">Activity Map</button>
                </div>
            </div>
        </div>
    );
}

/* ─── Screen 2: Spatial AI Assistant ─────────────────── */
function AIAssistantScreen() {
    return (
        <div className="relative w-full h-full flex flex-col bg-black/40 overflow-hidden justify-center items-center">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none z-0" />
            
            {/* Glass Modal */}
            <div className="relative z-10 w-[600px] bg-white/10 border border-white/20 rounded-[32px] backdrop-blur-[80px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.3)] overflow-hidden flex flex-col">
                <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-[#00f0ff] p-[1px] shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                            <div className="w-full h-full bg-black/50 rounded-full backdrop-blur-sm flex items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                            </div>
                        </div>
                        <span className="text-[13px] font-bold text-white tracking-wide">Ava — Workspace Intelligence</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-white/20 shadow-inner" />
                        <div className="w-3 h-3 rounded-full bg-white/20 shadow-inner" />
                        <div className="w-3 h-3 rounded-full bg-white/20 shadow-inner" />
                    </div>
                </div>

                <div className="p-6 flex flex-col gap-5">
                    {/* User Message */}
                    <div className="flex items-start gap-4 justify-end">
                        <div className="px-4 py-3 bg-white/10 border border-white/20 rounded-2xl rounded-tr-sm text-[13px] text-white/90 backdrop-blur-md shadow-sm max-w-[80%] leading-relaxed font-medium">
                            I need to schedule a design sync with Elena, but she's in CET. When is the best time tomorrow for both of us, assuming I'm in PST?
                        </div>
                    </div>

                    {/* System Tool Execution */}
                    <div className="flex items-center gap-3 justify-center my-2">
                        <div className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-full text-[10px] font-mono text-white/40 uppercase tracking-widest flex items-center gap-2">
                            <svg className="w-3 h-3 animate-spin text-[#00f0ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                            Querying Calendars (Exchange API)
                        </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-[#00f0ff] p-[1px] shrink-0 mt-1">
                            <div className="w-full h-full bg-black/50 rounded-full flex items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 max-w-[85%]">
                            <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm text-[13px] text-white/90 backdrop-blur-md shadow-sm leading-relaxed font-medium">
                                Elena's calendar is open tomorrow between <strong>8:00 AM - 10:00 AM PST</strong> (which is 5:00 PM - 7:00 PM her time in CET).
                            </div>
                            
                            {/* Realistic UI Card within AI Chat */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md flex flex-col gap-3">
                                <div className="text-[11px] font-bold text-white/50 uppercase tracking-widest">Suggested Slots (Tomorrow)</div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20 transition-colors cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                            </div>
                                            <div>
                                                <div className="text-[12px] font-bold text-white">8:30 AM - 9:00 AM PST</div>
                                                <div className="text-[11px] text-white/50">Both available</div>
                                            </div>
                                        </div>
                                        <button className="px-3 py-1.5 bg-white text-black text-[10px] font-bold rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">Schedule</button>
                                    </div>
                                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20 transition-colors cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                            </div>
                                            <div>
                                                <div className="text-[12px] font-bold text-white">9:00 AM - 9:30 AM PST</div>
                                                <div className="text-[11px] text-white/50">Both available</div>
                                            </div>
                                        </div>
                                        <button className="px-3 py-1.5 bg-white text-black text-[10px] font-bold rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">Schedule</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-white/10 bg-black/20">
                    <div className="relative flex items-center">
                        <div className="absolute left-4 flex gap-1 items-end h-4">
                            <div className="w-1 bg-[#00f0ff] rounded-full animate-[pulse_1s_ease-in-out_infinite]" style={{ height: "40%" }} />
                            <div className="w-1 bg-[#00f0ff] rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" style={{ height: "100%" }} />
                            <div className="w-1 bg-[#00f0ff] rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" style={{ height: "60%" }} />
                        </div>
                        <input type="text" placeholder="Speak or type a command..." className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-12 py-3 text-[13px] text-white focus:outline-none focus:bg-white/10 backdrop-blur-md transition-colors" />
                        <button className="absolute right-2 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─── Main Component ───────────────────────────────────── */
export function OrbitUI() {
    const [view, setView] = useState<"directory" | "ai">("directory");

    return (
        <section className="py-24 px-6 bg-[#000000] relative overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-[11px] font-black uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                            04e — Spatial Workspace
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                            Production-Grade Reality
                        </h2>
                        <p className="text-lg text-white/50 font-medium leading-relaxed">
                            Moving beyond abstract floating concepts, this iteration grounds the visionOS experience with authentic, highly-dense enterprise data. It features real Jira integration badges, complex multi-column layouts, and a sophisticated AI scheduling interface that renders interactive components directly inside the spatial chat.
                        </p>
                    </div>

                    <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-md">
                        <button
                            onClick={() => setView("directory")}
                            className={`px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all ${view === "directory" ? "bg-white/10 text-white shadow-sm border border-white/20" : "text-white/50 hover:text-white"}`}
                        >
                            Global Directory
                        </button>
                        <button
                            onClick={() => setView("ai")}
                            className={`px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all ${view === "ai" ? "bg-white/10 text-white shadow-sm border border-white/20" : "text-white/50 hover:text-white"}`}
                        >
                            Ava Assistant
                        </button>
                    </div>
                </motion.div>

                {/* visionOS Environment Frame */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="relative w-full overflow-x-auto pb-6 -mx-6 px-6 sm:mx-0 sm:px-0">
                        <div className="min-w-[900px] relative rounded-[40px] overflow-hidden bg-white/5 backdrop-blur-3xl"
                            style={{
                                border: "1px solid rgba(255,255,255,0.15)",
                                boxShadow: "0 60px 140px -20px rgba(0,0,0,1), 0 0 40px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 0 20px rgba(255,255,255,0.05)",
                            }}
                        >
                            {/* Screen Viewport */}
                            <div className="relative h-[640px] w-full bg-gradient-to-br from-[#111] to-[#000]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={view}
                                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0"
                            >
                                {view === "directory" ? <OrgMapScreen /> : <AIAssistantScreen />}
                            </motion.div>
                        </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";

/* ─── Mock Data ────────────────────────────────────────── */
const MOCK_CODE = `import { useState, useEffect } from 'react';
import { fetchUserProfile } from '@/lib/api';

export function UserDashboard({ userId }: { userId: string }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      // ⚠️ Uncaught TypeError: Cannot read properties of undefined (reading 'avatarUrl')
      const data = await fetchUserProfile(userId);
      setUser(data);
      setLoading(false);
    }
    loadUser();
  }, [userId]);

  if (loading) return <Spinner />;

  return (
    <div className="flex items-center gap-4">
      <img src={user.profile.avatarUrl} alt="Avatar" className="w-12 h-12 rounded-full" />
      <div>
        <h2 className="text-lg font-bold">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  );
}`;

const FIXED_CODE = `import { useState, useEffect } from 'react';
import { fetchUserProfile } from '@/lib/api';

export function UserDashboard({ userId }: { userId: string }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const data = await fetchUserProfile(userId);
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, [userId]);

  if (loading) return <Spinner />;
  if (!user || !user.profile) return <ErrorState message="User data unavailable" />;

  return (
    <div className="flex items-center gap-4">
      <img src={user.profile?.avatarUrl ?? '/default-avatar.png'} alt="Avatar" className="w-12 h-12 rounded-full" />
      <div>
        <h2 className="text-lg font-bold">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  );
}`;

/* ─── Components ───────────────────────────────────────── */
function IDEView() {
    return (
        <div className="flex h-[500px] bg-[#1e1e1e] rounded-xl border border-[#333] shadow-2xl overflow-hidden font-mono text-sm">
            {/* Activity Bar */}
            <div className="w-12 bg-[#333333] flex flex-col items-center py-4 border-r border-[#252526] shrink-0 gap-6">
                <div className="w-6 h-6 rounded text-gray-400 hover:text-white cursor-pointer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
                <div className="w-6 h-6 rounded text-gray-400 hover:text-white cursor-pointer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></div>
                <div className="w-6 h-6 rounded text-gray-400 hover:text-white cursor-pointer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M6 9v12"/></svg></div>
                <div className="w-6 h-6 rounded text-[#00f0ff] cursor-pointer mt-auto shadow-[0_0_10px_rgba(0,240,255,0.3)]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
            </div>

            {/* Sidebar Explorer */}
            <div className="w-56 bg-[#252526] border-r border-[#333] flex flex-col shrink-0 hidden md:flex">
                <div className="px-4 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Explorer</div>
                <div className="flex-1 overflow-y-auto pb-4">
                    <div className="px-4 py-1 text-[13px] text-gray-300 hover:bg-[#2a2d2e] cursor-pointer font-bold flex items-center gap-2"><span className="text-gray-500">▼</span> frontend-app</div>
                    <div className="px-8 py-1 text-[13px] text-gray-400 hover:bg-[#2a2d2e] cursor-pointer">📂 src</div>
                    <div className="px-12 py-1 text-[13px] text-gray-400 hover:bg-[#2a2d2e] cursor-pointer">📂 components</div>
                    <div className="px-16 py-1 text-[13px] text-[#00f0ff] bg-[#37373d] cursor-pointer flex items-center gap-2">📄 UserDashboard.tsx</div>
                    <div className="px-12 py-1 text-[13px] text-gray-400 hover:bg-[#2a2d2e] cursor-pointer">📂 lib</div>
                    <div className="px-16 py-1 text-[13px] text-gray-400 hover:bg-[#2a2d2e] cursor-pointer">📄 api.ts</div>
                    <div className="px-8 py-1 text-[13px] text-gray-400 hover:bg-[#2a2d2e] cursor-pointer">📄 package.json</div>
                </div>
            </div>

            {/* Editor Area */}
            <div className="flex-1 bg-[#1e1e1e] flex flex-col min-w-0">
                <div className="flex border-b border-[#333] bg-[#2d2d2d] shrink-0">
                    <div className="px-4 py-2 text-[13px] text-white bg-[#1e1e1e] border-t-2 border-[#00f0ff] flex items-center gap-2">
                        📄 UserDashboard.tsx <span className="text-gray-500 text-xs">x</span>
                    </div>
                    <div className="px-4 py-2 text-[13px] text-gray-400 hover:bg-[#1e1e1e] flex items-center gap-2 cursor-pointer">
                        📄 api.ts <span className="text-gray-500 text-xs">x</span>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4 text-[13px] leading-relaxed relative">
                    <pre className="text-[#d4d4d4] font-mono">
                        {MOCK_CODE.split('\n').map((line, i) => (
                            <div key={i} className={`flex ${i === 21 ? 'bg-red-500/20 border-l-2 border-red-500' : ''}`}>
                                <span className="text-[#858585] w-8 shrink-0 select-none text-right pr-4">{i + 1}</span>
                                <span className={`${i === 21 ? 'text-red-300' : ''}`}>{line}</span>
                            </div>
                        ))}
                    </pre>
                    {/* Inline error tooltip */}
                    <div className="absolute top-[320px] left-12 bg-red-950 border border-red-800 rounded shadow-lg p-2 z-10 flex items-start gap-2 max-w-[400px]">
                        <svg className="w-4 h-4 text-red-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        <div>
                            <div className="text-[12px] font-bold text-red-400">TypeError</div>
                            <div className="text-[11px] text-red-200">Cannot read properties of undefined (reading 'avatarUrl')</div>
                            <button className="mt-2 text-[10px] text-[#00f0ff] hover:underline flex items-center gap-1"><svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg> Analyze with Aulys</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Aulys AI Sidebar */}
            <div className="w-[320px] bg-[#252526] border-l border-[#333] flex flex-col shrink-0">
                <div className="px-4 py-3 border-b border-[#333] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 text-[#00f0ff]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg></div>
                        <span className="text-[12px] font-bold text-white uppercase tracking-wider">Aulys AI</span>
                    </div>
                    <div className="w-4 h-4 rounded text-gray-400 hover:text-white cursor-pointer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
                </div>
                
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                    <div className="bg-[#1e1e1e] border border-[#333] rounded-md p-3 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[11px] text-red-400 font-bold uppercase tracking-widest">Crash Detected</span>
                            <span className="text-[10px] text-gray-500">Just now</span>
                        </div>
                        <div className="text-[12px] text-gray-300 leading-snug">
                            The API response from <code className="bg-[#333] text-[#d4d4d4] px-1 rounded text-[10px]">fetchUserProfile</code> is returning null or missing the <code className="bg-[#333] text-[#d4d4d4] px-1 rounded text-[10px]">profile</code> object, causing a crash on render.
                        </div>
                    </div>

                    <div>
                        <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-2 px-1">Suggested Fix</div>
                        <div className="bg-[#1e1e1e] border border-[#333] rounded-md overflow-hidden flex flex-col">
                            <div className="bg-[#2d2d2d] px-3 py-1.5 flex justify-between items-center border-b border-[#333]">
                                <span className="text-[11px] text-gray-400 font-mono">UserDashboard.tsx</span>
                                <div className="flex gap-2">
                                    <button className="text-[10px] bg-[#333] hover:bg-[#444] text-white px-2 py-0.5 rounded">Diff</button>
                                </div>
                            </div>
                            <div className="p-3 text-[11px] text-[#d4d4d4] overflow-x-auto">
                                <div className="flex bg-red-950/30 text-red-300"><span className="w-4 select-none">-</span><span>{`if (loading) return <Spinner />;`}</span></div>
                                <div className="flex bg-green-950/30 text-green-300"><span className="w-4 select-none">+</span><span>{`if (loading) return <Spinner />;`}</span></div>
                                <div className="flex bg-green-950/30 text-green-300"><span className="w-4 select-none">+</span><span>{`if (!user || !user.profile) return <ErrorState />;`}</span></div>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/30 py-2 rounded-md text-[12px] font-bold transition-colors flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                        Apply Fix
                    </button>
                </div>
            </div>
        </div>
    );
}

function WebDashboard() {
    return (
        <div className="flex flex-col h-[500px] bg-[#0d0d10] rounded-xl border border-[#222] shadow-2xl overflow-hidden font-sans text-sm">
            {/* Header */}
            <div className="h-14 border-b border-[#222] flex items-center justify-between px-6 bg-[#121215]">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-white font-bold tracking-wide">
                        <div className="w-5 h-5 text-[#00f0ff]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg></div>
                        Aulys
                    </div>
                    <div className="h-4 w-px bg-[#333]" />
                    <div className="flex gap-4 text-[13px] font-medium text-gray-400">
                        <span className="text-white">Issues</span>
                        <span className="hover:text-white cursor-pointer">Metrics</span>
                        <span className="hover:text-white cursor-pointer">Deployments</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-[#1e1e24] border border-[#333] text-[12px] text-gray-400 px-3 py-1.5 rounded-md flex items-center gap-2 w-48">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                        Search...
                    </div>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-[#00f0ff] border border-[#222]" />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* List View */}
                <div className="w-1/3 border-r border-[#222] bg-[#0d0d10] flex flex-col shrink-0">
                    <div className="p-4 border-b border-[#222] flex justify-between items-center">
                        <span className="text-[13px] font-bold text-white">Active Issues</span>
                        <span className="bg-[#1e1e24] text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded border border-[#333]">3 Unresolved</span>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {[
                            { title: "TypeError: Cannot read props", path: "src/components/UserDash...", time: "2m ago", env: "production", hits: "1.2k", active: true },
                            { title: "Unhandled Rejection (Network)", path: "src/lib/api.ts", time: "1hr ago", env: "staging", hits: "43", active: false },
                            { title: "React Hook useEffect warning", path: "src/hooks/useAuth.ts", time: "3hr ago", env: "development", hits: "12", active: false },
                        ].map((issue, i) => (
                            <div key={i} className={`p-4 border-b border-[#222] cursor-pointer transition-colors ${issue.active ? "bg-[#1e1e24] border-l-2 border-l-red-500" : "hover:bg-[#121215]"}`}>
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-[13px] font-bold text-red-400 truncate pr-2">{issue.title}</span>
                                    <span className="text-[11px] text-gray-500 shrink-0">{issue.time}</span>
                                </div>
                                <div className="text-[12px] text-gray-400 font-mono truncate mb-2">{issue.path}</div>
                                <div className="flex items-center gap-2">
                                    <span className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded border ${issue.env === 'production' ? 'border-purple-500/30 text-purple-400 bg-purple-500/10' : 'border-[#333] text-gray-500 bg-[#1e1e24]'}`}>{issue.env}</span>
                                    <span className="text-[11px] text-gray-500 flex items-center gap-1"><svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> {issue.hits} events</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detail View */}
                <div className="flex-1 bg-[#121215] flex flex-col overflow-y-auto">
                    <div className="p-6 border-b border-[#222]">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="text-xl font-bold text-white mb-2">TypeError: Cannot read properties of undefined (reading 'avatarUrl')</h2>
                                <div className="flex items-center gap-3 text-[12px] text-gray-400 font-mono">
                                    <span className="flex items-center gap-1 text-gray-300"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg> src/components/UserDashboard.tsx:21</span>
                                    <span className="bg-[#222] px-1.5 py-0.5 rounded text-gray-300 border border-[#333]">Node.js 18.x</span>
                                    <span className="bg-purple-500/10 text-purple-400 px-1.5 py-0.5 rounded border border-purple-500/30">production</span>
                                </div>
                            </div>
                            <div className="flex gap-2 shrink-0">
                                <button className="bg-[#222] hover:bg-[#333] text-white px-3 py-1.5 text-[12px] font-bold rounded-md border border-[#444] transition-colors">Assign</button>
                                <button className="bg-white hover:bg-gray-200 text-black px-3 py-1.5 text-[12px] font-bold rounded-md transition-colors flex items-center gap-2"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg> AI Root Cause</button>
                            </div>
                        </div>

                        {/* AI Root Cause Panel */}
                        <div className="bg-gradient-to-r from-[#00f0ff]/10 to-transparent border border-[#00f0ff]/30 rounded-xl p-4 shadow-inner mb-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/10 blur-3xl rounded-full pointer-events-none" />
                            <div className="flex gap-3 relative z-10">
                                <div className="w-6 h-6 text-[#00f0ff] shrink-0 mt-0.5"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
                                <div>
                                    <h3 className="text-[13px] font-bold text-white mb-1.5">AI Analysis</h3>
                                    <p className="text-[12px] text-gray-300 leading-relaxed max-w-2xl">
                                        The <code className="bg-[#222] px-1 py-0.5 rounded text-[#00f0ff]">user.profile</code> object is frequently undefined in production because the new <code className="bg-[#222] px-1 py-0.5 rounded text-[#00f0ff]">/api/users/v2</code> endpoint requires an explicit <code className="bg-[#222] px-1 py-0.5 rounded text-[#00f0ff]">?include=profile</code> parameter. 
                                        This was introduced in commit <a href="#" className="text-blue-400 hover:underline">#a1b2c3d</a> by <strong>Alex M.</strong> 2 days ago.
                                    </p>
                                    <div className="mt-4 flex gap-2">
                                        <button className="bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40 px-3 py-1.5 text-[11px] font-bold rounded shadow-sm hover:bg-[#00f0ff]/30 transition-colors">View PR #402</button>
                                        <button className="bg-[#222] text-gray-300 border border-[#333] px-3 py-1.5 text-[11px] font-bold rounded hover:bg-[#333] transition-colors">Generate Fix Patch</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stack Trace */}
                        <div>
                            <h3 className="text-[13px] font-bold text-white mb-3">Stack Trace</h3>
                            <div className="bg-[#0d0d10] border border-[#222] rounded-lg p-4 font-mono text-[11px] text-gray-400 overflow-x-auto shadow-inner leading-loose">
                                <div className="text-red-400 mb-2">TypeError: Cannot read properties of undefined (reading 'avatarUrl')</div>
                                <div className="pl-4 border-l-2 border-red-500/50 text-gray-300 bg-red-950/20 py-1"><span className="text-purple-400">at UserDashboard</span> (src/components/UserDashboard.tsx:21:28)</div>
                                <div className="pl-4 text-gray-500"><span className="text-purple-400">at renderWithHooks</span> (node_modules/react-dom/cjs/react-dom.development.js:16305:18)</div>
                                <div className="pl-4 text-gray-500"><span className="text-purple-400">at mountIndeterminateComponent</span> (node_modules/react-dom/cjs/react-dom.development.js:20074:13)</div>
                                <div className="pl-4 text-gray-500"><span className="text-purple-400">at beginWork</span> (node_modules/react-dom/cjs/react-dom.development.js:21587:16)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─── Main Component ───────────────────────────────────── */
export function AulysUI() {
    const [view, setView] = useState<"ide" | "dashboard">("ide");

    return (
        <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f0ff]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] text-[11px] font-black uppercase tracking-[0.2em] mb-6">
                            04a — Developer Tools
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                            Production-Grade Reality
                        </h2>
                        <p className="text-lg text-gray-400 font-medium leading-relaxed">
                            Aulys integrates directly into developers' existing workflows. From IDE extensions to dense web dashboards, the UI is built to handle authentic code traces, git metadata, and complex error logs without simplifying the data.
                        </p>
                    </div>

                    <div className="flex bg-[#121215] p-1 rounded-xl border border-[#222]">
                        <button
                            onClick={() => setView("ide")}
                            className={`px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all ${view === "ide" ? "bg-[#222] text-white shadow-md border border-[#333]" : "text-gray-500 hover:text-white"}`}
                        >
                            IDE Extension
                        </button>
                        <button
                            onClick={() => setView("dashboard")}
                            className={`px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all ${view === "dashboard" ? "bg-[#222] text-white shadow-md border border-[#333]" : "text-gray-500 hover:text-white"}`}
                        >
                            Web Dashboard
                        </button>
                    </div>
                </motion.div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={view}
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            {view === "ide" ? <IDEView /> : <WebDashboard />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

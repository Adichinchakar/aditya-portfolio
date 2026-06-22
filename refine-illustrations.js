const fs = require('fs');

const code = fs.readFileSync('c:/Users/Admin/Desktop/Portfolio Website/src/app/work/page.tsx', 'utf8');

// I will extract the ProjectIllustration function and modify it.
const startIdx = code.indexOf('function ProjectIllustration({ slug }: { slug: string }) {');
const endIdx = code.indexOf('function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {');

if (startIdx === -1 || endIdx === -1) {
    console.error('Could not find ProjectIllustration function bounds');
    process.exit(1);
}

let oldIllustrationFunc = code.substring(startIdx, endIdx);

// --- Simplifai Workflow Engine ---
const simplifaiStart = oldIllustrationFunc.indexOf('case "simplifai":');
const simplifaiEnd = oldIllustrationFunc.indexOf('case "simplifai-design-system":');

const newSimplifai = `case "simplifai":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-950 overflow-hidden group-hover:bg-[#0a0a0c] transition-colors duration-1000">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(249,115,22,0.1),transparent_50%)]" />
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Background SVG connections */}
                        <svg className="absolute inset-0 w-full h-full" fill="none">
                            <path d="M 30% 50% C 50% 50%, 50% 30%, 70% 30%" className="stroke-orange-500/20 stroke-2" />
                            <path d="M 30% 50% C 50% 50%, 50% 70%, 70% 70%" className="stroke-orange-500/20 stroke-2" />
                            <path d="M 70% 30% L 85% 30%" className="stroke-orange-500/20 stroke-2" />
                            <path d="M 70% 70% L 85% 70%" className="stroke-orange-500/20 stroke-2" />
                            
                            {/* Animated pulses */}
                            <path d="M 30% 50% C 50% 50%, 50% 30%, 70% 30%" className="stroke-orange-500 stroke-2 animate-[dash_3s_linear_infinite]" strokeDasharray="10 100" />
                            <path d="M 30% 50% C 50% 50%, 50% 70%, 70% 70%" className="stroke-orange-500 stroke-2 animate-[dash_3s_linear_infinite] [animation-delay:1.5s]" strokeDasharray="10 100" />
                        </svg>

                        {/* Trigger Node */}
                        <div className="absolute left-[30%] -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10 transform group-hover:scale-110 transition-transform duration-700">
                            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.2)] group-hover:bg-orange-500/20 group-hover:border-orange-500/60 transition-colors">
                                <div className="w-6 h-6 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)] animate-pulse" />
                            </div>
                            <div className="h-1.5 w-10 bg-orange-500/40 rounded-full" />
                        </div>

                        {/* Action Nodes */}
                        <div className="absolute left-[70%] -translate-x-1/2 top-[30%] -translate-y-1/2 flex items-center gap-4 z-10 transform group-hover:translate-x-2 transition-transform duration-700 delay-75">
                            <div className="w-24 h-12 rounded-xl bg-zinc-900 border border-orange-500/30 flex items-center justify-center shadow-xl">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                                    <div className="w-2 h-2 rounded-full bg-orange-600" />
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-[70%] -translate-x-1/2 top-[70%] -translate-y-1/2 flex items-center gap-4 z-10 transform group-hover:translate-x-2 transition-transform duration-700 delay-150">
                            <div className="w-24 h-12 rounded-xl bg-zinc-900 border border-orange-500/30 flex items-center px-3 shadow-xl">
                                <div className="w-12 h-2 bg-orange-500/50 rounded-full" />
                            </div>
                        </div>
                        
                        {/* Final Output Node */}
                        <div className="absolute left-[85%] -translate-x-1/2 top-[30%] -translate-y-1/2 w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.6)] animate-ping" />
                        <div className="absolute left-[85%] -translate-x-1/2 top-[70%] -translate-y-1/2 w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.6)] animate-ping [animation-delay:1s]" />
                    </div>
                </div>
            );
        `;

// --- Simplifai Design System ---
const dsStart = oldIllustrationFunc.indexOf('case "simplifai-design-system":');
const dsEnd = oldIllustrationFunc.indexOf('case "orbit":');

const newDS = `case "simplifai-design-system":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 overflow-hidden group-hover:bg-indigo-50/50 transition-colors duration-1000">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(99,102,241,0.1),transparent_60%)]" />
                    
                    {/* Architectural Grid Backdrop */}
                    <div className="absolute inset-0 pattern-grid opacity-30 text-indigo-900/10 group-hover:opacity-50 transition-opacity duration-1000" />
                    
                    {/* Isometric UI Construction */}
                    <div className="relative w-full h-full flex items-center justify-center perspective-[1200px]">
                        <div className="relative w-64 h-64 transform rotate-x-[60deg] rotate-z-[45deg] group-hover:rotate-x-[50deg] group-hover:rotate-z-[35deg] group-hover:scale-110 transition-all duration-[1500ms] ease-out preserve-3d">
                            
                            {/* Base Canvas */}
                            <div className="absolute inset-0 bg-white border-2 border-indigo-100 rounded-3xl shadow-2xl" />
                            
                            {/* Navigation Skeleton (Floats up on hover) */}
                            <div className="absolute top-4 left-4 right-4 h-12 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center px-4 gap-4 transform translate-z-0 group-hover:translate-z-12 shadow-lg transition-transform duration-[1500ms] delay-100">
                                <div className="w-8 h-8 rounded-lg bg-indigo-500/20" />
                                <div className="flex-1" />
                                <div className="w-16 h-4 rounded-full bg-indigo-200" />
                                <div className="w-8 h-8 rounded-full bg-indigo-200" />
                            </div>

                            {/* Sidebar Skeleton */}
                            <div className="absolute top-20 left-4 bottom-4 w-16 bg-white border border-indigo-50 rounded-xl flex flex-col gap-3 p-3 transform translate-z-0 group-hover:translate-z-6 shadow-md transition-transform duration-[1500ms] delay-200">
                                <div className="w-full h-4 rounded bg-indigo-100" />
                                <div className="w-3/4 h-4 rounded bg-zinc-100" />
                                <div className="w-5/6 h-4 rounded bg-zinc-100" />
                            </div>

                            {/* Main Content Area */}
                            <div className="absolute top-20 left-24 right-4 bottom-4 flex flex-col gap-4 transform translate-z-0 group-hover:translate-z-8 transition-transform duration-[1500ms] delay-300">
                                <div className="w-1/2 h-8 rounded-lg bg-indigo-50" />
                                
                                {/* Component Library Cards */}
                                <div className="flex gap-4">
                                    <div className="w-24 h-24 rounded-xl bg-white border-2 border-indigo-500 shadow-[0_8px_30px_rgba(99,102,241,0.2)] flex items-center justify-center transform group-hover:translate-z-4 group-hover:-translate-y-2 transition-all duration-[1500ms] delay-500">
                                        <div className="w-12 h-6 rounded bg-indigo-500" />
                                    </div>
                                    <div className="w-24 h-24 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center opacity-70">
                                        <div className="w-12 h-6 rounded border-2 border-dashed border-zinc-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        `;

// --- Nexus Banking ---
const nexusStart = oldIllustrationFunc.indexOf('case "nexus-banking":');
const nexusEnd = oldIllustrationFunc.indexOf('default:');

const newNexus = `case "nexus-banking":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-[#001731] overflow-hidden group-hover:bg-[#002244] transition-colors duration-1000">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.2),transparent_70%)]" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20" />
                    
                    {/* Financial Data Visualization */}
                    <div className="relative w-full h-full flex items-center justify-center perspective-[800px]">
                        
                        {/* Dynamic Wealth Curves */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="nexusGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#93c5fd" stopOpacity="1" />
                                </linearGradient>
                            </defs>
                            <path d="M 0 150 C 100 150, 150 80, 400 40" fill="none" stroke="url(#nexusGradient)" strokeWidth="3" className="drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] stroke-dasharray-[1000] stroke-dashoffset-[1000] animate-[dash_4s_ease-out_forwards]" />
                            <path d="M 0 180 C 150 180, 200 120, 400 90" fill="none" stroke="url(#nexusGradient)" strokeWidth="1.5" opacity="0.5" className="stroke-dasharray-[1000] stroke-dashoffset-[1000] animate-[dash_4s_ease-out_forwards] [animation-delay:0.5s]" />
                        </svg>

                        {/* Floating Glass Cards */}
                        <div className="absolute w-40 h-24 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transform -translate-x-24 translate-y-12 rotate-y-[15deg] group-hover:-translate-y-4 group-hover:rotate-y-[0deg] transition-all duration-1000 flex flex-col p-4 justify-between">
                            <div className="flex justify-between items-center">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
                                </div>
                                <div className="h-1.5 w-8 bg-white/20 rounded-full" />
                            </div>
                            <div>
                                <div className="h-3 w-16 bg-white/80 rounded mb-1.5" />
                                <div className="h-2 w-10 bg-white/40 rounded" />
                            </div>
                        </div>

                        <div className="absolute w-48 h-28 rounded-2xl bg-gradient-to-br from-blue-600/40 to-blue-900/40 backdrop-blur-xl border border-blue-400/30 shadow-[0_15px_40px_rgba(59,130,246,0.4)] transform translate-x-20 -translate-y-8 -rotate-y-[15deg] group-hover:-translate-y-16 group-hover:rotate-y-[0deg] group-hover:scale-110 transition-all duration-1000 flex flex-col p-5 justify-between z-10">
                            <div className="flex justify-between items-start">
                                <div className="h-2 w-12 bg-blue-200/60 rounded-full" />
                                <div className="w-5 h-5 rounded-md border border-blue-300/50 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-sm bg-blue-300" />
                                </div>
                            </div>
                            <div>
                                <div className="h-5 w-24 bg-white rounded mb-2 shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                                <div className="flex gap-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        `;

const part1 = oldIllustrationFunc.substring(0, simplifaiStart);
const part2 = oldIllustrationFunc.substring(simplifaiEnd, dsStart);
const part3 = oldIllustrationFunc.substring(dsEnd, nexusStart);
const part4 = oldIllustrationFunc.substring(nexusEnd);

let finalIllustrationFunc = part1 + newSimplifai + newDS + part3 + newNexus + part4;

let finalFileCode = code.substring(0, startIdx) + finalIllustrationFunc + code.substring(endIdx);

fs.writeFileSync('c:/Users/Admin/Desktop/Portfolio Website/src/app/work/page.tsx', finalFileCode);
console.log('Update complete');

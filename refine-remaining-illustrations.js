const fs = require('fs');

const code = fs.readFileSync('c:/Users/Admin/Desktop/Portfolio Website/src/app/work/page.tsx', 'utf8');

const startIdx = code.indexOf('function ProjectIllustration({ slug }: { slug: string }) {');
const endIdx = code.indexOf('function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {');

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
                        {/* Background SVG connections (Hidden initially, draw on hover) */}
                        <svg className="absolute inset-0 w-full h-full" fill="none">
                            {/* Static tracks */}
                            <path d="M 30% 50% C 50% 50%, 50% 30%, 70% 30%" className="stroke-orange-500/10 stroke-2" />
                            <path d="M 30% 50% C 50% 50%, 50% 70%, 70% 70%" className="stroke-orange-500/10 stroke-2" />
                            <path d="M 70% 30% L 85% 30%" className="stroke-orange-500/10 stroke-2" />
                            <path d="M 70% 70% L 85% 70%" className="stroke-orange-500/10 stroke-2" />
                            
                            {/* Animated pulses that only appear on hover */}
                            <path d="M 30% 50% C 50% 50%, 50% 30%, 70% 30%" className="stroke-orange-500 stroke-2 opacity-0 group-hover:opacity-100 group-hover:animate-[dash_2s_linear_infinite]" strokeDasharray="20 100" />
                            <path d="M 30% 50% C 50% 50%, 50% 70%, 70% 70%" className="stroke-orange-500 stroke-2 opacity-0 group-hover:opacity-100 group-hover:animate-[dash_2s_linear_infinite] [animation-delay:1s]" strokeDasharray="20 100" />
                            
                            {/* Connection lines that "draw" to connect nodes on hover */}
                            <path d="M 30% 50% C 50% 50%, 50% 30%, 70% 30%" className="stroke-orange-400/60 stroke-[3px] stroke-dasharray-[1000] stroke-dashoffset-[1000] group-hover:stroke-dashoffset-[0] transition-all duration-[1500ms] ease-in-out" />
                            <path d="M 30% 50% C 50% 50%, 50% 70%, 70% 70%" className="stroke-orange-400/60 stroke-[3px] stroke-dasharray-[1000] stroke-dashoffset-[1000] group-hover:stroke-dashoffset-[0] transition-all duration-[1500ms] ease-in-out delay-150" />
                        </svg>

                        {/* Trigger Node (Starts left, locks in) */}
                        <div className="absolute left-[30%] -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10 transform group-hover:scale-110 transition-transform duration-700">
                            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.2)] group-hover:bg-orange-500/20 group-hover:border-orange-500/60 transition-colors">
                                <div className="w-6 h-6 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)] opacity-50 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
                            </div>
                        </div>

                        {/* Action Nodes (Start detached and offset, snap into place on hover) */}
                        <div className="absolute left-[70%] -translate-x-1/2 top-[30%] -translate-y-1/2 flex items-center gap-4 z-10 transform translate-x-8 group-hover:translate-x-0 transition-transform duration-700 delay-300">
                            <div className="w-24 h-12 rounded-xl bg-zinc-900 border border-orange-500/20 group-hover:border-orange-500/60 flex items-center justify-center shadow-xl transition-colors duration-700">
                                <div className="flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity duration-700 delay-500">
                                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                                    <div className="w-2 h-2 rounded-full bg-orange-600" />
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-[70%] -translate-x-1/2 top-[70%] -translate-y-1/2 flex items-center gap-4 z-10 transform translate-x-8 group-hover:translate-x-0 transition-transform duration-700 delay-500">
                            <div className="w-24 h-12 rounded-xl bg-zinc-900 border border-orange-500/20 group-hover:border-orange-500/60 flex items-center px-3 shadow-xl transition-colors duration-700">
                                <div className="w-0 group-hover:w-12 h-2 bg-orange-500/50 rounded-full transition-all duration-[1000ms] delay-700" />
                            </div>
                        </div>
                        
                        {/* Final Output Node (Lights up last) */}
                        <div className="absolute left-[85%] -translate-x-1/2 top-[30%] -translate-y-1/2 w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.6)] opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-700 delay-[1200ms]" />
                        <div className="absolute left-[85%] -translate-x-1/2 top-[70%] -translate-y-1/2 w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.6)] opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-700 delay-[1400ms]" />
                    </div>
                </div>
            );
        `;

// --- Orbit ---
const orbitStart = oldIllustrationFunc.indexOf('case "orbit":');
const orbitEnd = oldIllustrationFunc.indexOf('case "medsecure":');

const newOrbit = `case "orbit":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-violet-50/30 overflow-hidden group-hover:bg-violet-100/40 transition-colors duration-1000">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]" />
                    
                    {/* Spatial Rings & Vision OS UI */}
                    <div className="relative w-full h-full flex items-center justify-center perspective-[1200px]">
                        
                        {/* Orbiting Rings */}
                        <div className="absolute w-72 h-72 border-[1px] border-violet-300/40 rounded-full transform rotate-x-[75deg] group-hover:rotate-x-[65deg] group-hover:scale-110 transition-all duration-1000 animate-[spin_20s_linear_infinite]" />
                        <div className="absolute w-56 h-56 border-[1.5px] border-violet-400/50 rounded-full transform rotate-x-[75deg] group-hover:rotate-x-[55deg] transition-all duration-1000 animate-[spin_15s_linear_infinite_reverse]">
                            <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                        </div>
                        
                        {/* 3D Glass UI Stack */}
                        <div className="absolute inset-0 flex items-center justify-center transform preserve-3d rotate-y-[-20deg] group-hover:rotate-y-[0deg] transition-all duration-[1500ms]">
                            
                            {/* Layer 1: Background Glass Panel */}
                            <div className="absolute w-48 h-32 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 shadow-[0_10px_30px_rgba(139,92,246,0.15)] transform translate-z-[-40px] group-hover:translate-z-[-60px] opacity-60 group-hover:opacity-40 transition-all duration-1000 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full border border-violet-300/30" />
                            </div>

                            {/* Layer 2: Main Active Panel */}
                            <div className="absolute w-56 h-40 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_40px_rgba(139,92,246,0.2)] transform translate-z-[0px] group-hover:translate-z-[40px] group-hover:scale-105 transition-all duration-1000 flex flex-col p-4 gap-3">
                                <div className="flex justify-between items-center w-full">
                                    <div className="h-2 w-16 bg-violet-200 rounded-full" />
                                    <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                                    </div>
                                </div>
                                <div className="flex-1 rounded-xl bg-white/40 border border-white/50 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-violet-300/20 border border-violet-300/40 flex items-center justify-center">
                                        <div className="w-8 h-8 rounded-full bg-violet-400/40 blur-sm" />
                                    </div>
                                </div>
                            </div>

                            {/* Layer 3: Floating UI Elements */}
                            <div className="absolute w-24 h-12 rounded-xl bg-violet-500/10 backdrop-blur-md border border-violet-400/30 shadow-lg transform translate-z-[30px] translate-x-24 translate-y-16 group-hover:translate-z-[80px] group-hover:translate-x-32 group-hover:translate-y-20 transition-all duration-1000 flex items-center px-3 gap-2">
                                <div className="w-3 h-3 rounded-full bg-violet-400" />
                                <div className="h-1.5 w-10 bg-violet-300 rounded-full" />
                            </div>
                        </div>

                    </div>
                </div>
            );
        `;

// --- MedSecure ---
const medsecureStart = oldIllustrationFunc.indexOf('case "medsecure":');
const medsecureEnd = oldIllustrationFunc.indexOf('case "nexus-banking":');

const newMedsecure = `case "medsecure":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-emerald-50/30 overflow-hidden group-hover:bg-emerald-100/40 transition-colors duration-1000">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_70%)]" />
                    
                    {/* Isometric 3D Blockchain */}
                    <div className="relative w-full h-full flex items-center justify-center perspective-[1200px]">
                        
                        <div className="relative w-64 h-64 transform rotate-x-[65deg] rotate-z-[45deg] group-hover:rotate-x-[55deg] group-hover:rotate-z-[35deg] group-hover:scale-110 transition-all duration-[1500ms] preserve-3d">
                            
                            {/* Bottom Layer: Verified Ledger */}
                            <div className="absolute inset-0 border-2 border-emerald-200/50 rounded-2xl bg-emerald-50/40 transform translate-z-[0px] group-hover:translate-z-[-20px] transition-transform duration-1000 flex items-center justify-center">
                                <svg width="100%" height="100%" viewBox="0 0 100 100" className="opacity-20">
                                    <pattern id="hex" width="20" height="34.64" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
                                        <path d="M10,0 L20,5.77 L20,17.32 L10,23.09 L0,17.32 L0,5.77 Z" fill="none" stroke="#10b981" strokeWidth="2" />
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#hex)" />
                                </svg>
                            </div>

                            {/* Middle Layer: Active Node */}
                            <div className="absolute inset-4 border border-emerald-300/60 rounded-xl bg-white/60 backdrop-blur-sm transform translate-z-[30px] group-hover:translate-z-[40px] shadow-[0_20px_40px_rgba(16,185,129,0.15)] transition-transform duration-1000 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full border-4 border-emerald-400/30 flex items-center justify-center border-t-emerald-500 animate-spin">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20" />
                                </div>
                            </div>

                            {/* Top Layer: Floating Encrypted Data Block */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-emerald-400 rounded-lg bg-emerald-500/10 backdrop-blur-md transform translate-z-[60px] group-hover:translate-z-[100px] shadow-[0_30px_50px_rgba(16,185,129,0.2)] transition-transform duration-1000 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/20 to-transparent" />
                                {/* Cross/Health Symbol */}
                                <div className="relative w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <div className="absolute w-8 h-2.5 bg-emerald-500 rounded-sm" />
                                    <div className="absolute h-8 w-2.5 bg-emerald-500 rounded-sm" />
                                </div>
                            </div>
                            
                            {/* Connection Beams (Appears on Hover) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-[80px] bg-emerald-400/0 group-hover:bg-emerald-400/30 blur-[2px] transform rotate-x-[90deg] translate-z-[50px] transition-colors duration-1000 delay-300" />
                        </div>

                    </div>
                </div>
            );
        `;

const part1 = oldIllustrationFunc.substring(0, simplifaiStart);
const part2 = oldIllustrationFunc.substring(simplifaiEnd, orbitStart);
const part3 = oldIllustrationFunc.substring(orbitEnd, medsecureStart);
const part4 = oldIllustrationFunc.substring(medsecureEnd);

let finalIllustrationFunc = part1 + newSimplifai + part2 + newOrbit + newMedsecure + part4;

let finalFileCode = code.substring(0, startIdx) + finalIllustrationFunc + code.substring(endIdx);

fs.writeFileSync('c:/Users/Admin/Desktop/Portfolio Website/src/app/work/page.tsx', finalFileCode);
console.log('Update complete');

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src/data');
const componentsDir = path.join(__dirname, 'src/components/work');

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir, { recursive: true });

let pageCode = fs.readFileSync('src/app/work/page.tsx', 'utf8');

// 1. Extract Data
const domainFiltersIdx = pageCode.indexOf('export const DOMAIN_FILTERS');
const projectsEndIdx = pageCode.indexOf('];', pageCode.indexOf('export const PROJECTS')) + 2;

const dataCode = `export type DomainFilter = "All" | "Design Systems" | "Healthcare" | "Enterprise" | "Fintech";

${pageCode.substring(domainFiltersIdx, projectsEndIdx)}
`;
fs.writeFileSync(path.join(dataDir, 'projects.ts'), dataCode);

// 2. Extract ProjectIllustration
const illusStartIdx = pageCode.indexOf('function ProjectIllustration');
const cardStartIdx = pageCode.indexOf('function ProjectCard');

let illusCodeStr = pageCode.substring(illusStartIdx, cardStartIdx);

// Update Infosys illustration
const infosysStart = illusCodeStr.indexOf('case "infosys":');
const infosysEnd = illusCodeStr.indexOf('case "simplifai":');

const newInfosys = `case "infosys":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-blue-50/30 overflow-hidden group-hover:bg-blue-100/30 transition-colors duration-1000">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(59,130,246,0.5) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                    
                    {/* Deep Learning / AI Node Network (3D Isometric) */}
                    <div className="relative w-full h-full flex items-center justify-center perspective-[1200px]">
                        <div className="relative w-64 h-64 transform rotate-x-[60deg] rotate-z-[45deg] group-hover:rotate-x-[50deg] group-hover:rotate-z-[35deg] group-hover:scale-110 transition-all duration-[1500ms] ease-out preserve-3d">
                            
                            {/* Base Grid Layer */}
                            <div className="absolute inset-0 border border-blue-200/50 rounded-xl bg-blue-50/20 transform translate-z-[0px] shadow-lg flex items-center justify-center overflow-hidden">
                                <div className="w-[150%] h-[150%] animate-[spin_30s_linear_infinite] opacity-30" style={{ background: 'conic-gradient(from 0deg, transparent 0 340deg, rgba(59,130,246,0.4) 360deg)' }} />
                            </div>

                            {/* Middle Layer: Node Matrix */}
                            <div className="absolute inset-8 transform translate-z-[40px] group-hover:translate-z-[60px] transition-transform duration-1000 flex items-center justify-center">
                                <svg width="100%" height="100%" viewBox="0 0 100 100" className="overflow-visible">
                                    <defs>
                                        <filter id="glow">
                                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                            <feMerge>
                                                <feMergeNode in="coloredBlur"/>
                                                <feMergeNode in="SourceGraphic"/>
                                            </feMerge>
                                        </filter>
                                    </defs>
                                    {/* Connections */}
                                    <path d="M 20 20 L 50 50 L 80 20 M 20 80 L 50 50 L 80 80 M 50 20 L 50 80 M 20 50 L 80 50" stroke="rgba(59,130,246,0.3)" strokeWidth="1" className="group-hover:stroke-blue-400 transition-colors duration-1000" />
                                    
                                    {/* Data Pulses */}
                                    <circle cx="20" cy="20" r="2" fill="#3b82f6" filter="url(#glow)">
                                        <animate attributeName="cx" values="20;50" dur="2s" repeatCount="indefinite" />
                                        <animate attributeName="cy" values="20;50" dur="2s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="80" cy="80" r="2" fill="#3b82f6" filter="url(#glow)">
                                        <animate attributeName="cx" values="80;50" dur="2.5s" repeatCount="indefinite" />
                                        <animate attributeName="cy" values="80;50" dur="2.5s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
                                    </circle>
                                    
                                    {/* Nodes */}
                                    <circle cx="20" cy="20" r="4" fill="rgba(255,255,255,0.8)" stroke="#3b82f6" strokeWidth="2" />
                                    <circle cx="80" cy="20" r="4" fill="rgba(255,255,255,0.8)" stroke="#3b82f6" strokeWidth="2" />
                                    <circle cx="20" cy="80" r="4" fill="rgba(255,255,255,0.8)" stroke="#3b82f6" strokeWidth="2" />
                                    <circle cx="80" cy="80" r="4" fill="rgba(255,255,255,0.8)" stroke="#3b82f6" strokeWidth="2" />
                                    <circle cx="50" cy="20" r="3" fill="rgba(255,255,255,0.8)" stroke="#60a5fa" strokeWidth="1.5" />
                                    <circle cx="50" cy="80" r="3" fill="rgba(255,255,255,0.8)" stroke="#60a5fa" strokeWidth="1.5" />
                                    <circle cx="20" cy="50" r="3" fill="rgba(255,255,255,0.8)" stroke="#60a5fa" strokeWidth="1.5" />
                                    <circle cx="80" cy="50" r="3" fill="rgba(255,255,255,0.8)" stroke="#60a5fa" strokeWidth="1.5" />
                                </svg>
                            </div>

                            {/* Top Layer: Central AI Core */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-blue-500/20 backdrop-blur-md border border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.3)] transform translate-z-[80px] group-hover:translate-z-[120px] group-hover:bg-blue-500/30 transition-all duration-1000 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full border-2 border-blue-200 border-t-blue-500 animate-spin" />
                                <div className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)] animate-pulse" />
                            </div>

                        </div>
                    </div>
                </div>
            );
        `;

illusCodeStr = illusCodeStr.substring(0, infosysStart) + newInfosys + illusCodeStr.substring(infosysEnd);

const illusComponentCode = `"use client";

import { motion } from "@/lib/motion";

${illusCodeStr}
export { ProjectIllustration };
`;
fs.writeFileSync(path.join(componentsDir, 'project-illustration.tsx'), illusComponentCode);

// 3. Extract ProjectCard
const workIndexStart = pageCode.indexOf('export default function WorkIndex()');
let cardCodeStr = pageCode.substring(cardStartIdx, workIndexStart);

const cardComponentCode = `"use client";

import { MouseEvent } from "react";
import { motion } from "@/lib/motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/data/projects";
import { ProjectIllustration } from "./project-illustration";

${cardCodeStr}
export { ProjectCard };
`;
fs.writeFileSync(path.join(componentsDir, 'project-card.tsx'), cardComponentCode);

// 4. Update Work Page
const imports = `"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/ui/text-reveal";
import { PROJECTS, DomainFilter, DOMAIN_FILTERS } from "@/data/projects";
import { ProjectCard } from "@/components/work/project-card";

`;

const workPageCode = imports + pageCode.substring(workIndexStart);
fs.writeFileSync('src/app/work/page.tsx', workPageCode);

console.log("Refactoring complete");

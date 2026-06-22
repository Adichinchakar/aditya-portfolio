const fs = require('fs');

const code = fs.readFileSync('c:/Users/Admin/Desktop/Portfolio Website/src/app/work/page.tsx', 'utf8');

// The replacement should be targeted to the graphic side block
const startComment = '{/* Graphic Side for Highlighted Project */}';
const endComment = '</article>';

const startIdx = code.indexOf(startComment);
const endIdx = code.indexOf(endComment);

const replacement = `{/* Graphic Side for Highlighted Project */}
                    {project.highlight && (
                        <div className="hidden md:flex flex-1 relative overflow-hidden items-center justify-center border-l border-white/5 bg-[#0a0a0c]">
                            {/* Ambient Gradients - Aulys Colors */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,188,124,0.15),transparent_60%)]" aria-hidden="true" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,188,124,0.05),transparent_60%)]" aria-hidden="true" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#00BC7C] opacity-10 blur-[100px] rounded-full group-hover:opacity-20 transition-opacity duration-700" aria-hidden="true" />
                            
                            {/* Grid Pattern */}
                            <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                            {project.slug === 'aulys' ? (
                                <div className="relative z-10 w-full h-full flex items-center justify-center">
                                    {/* Abstract illustration of layers being scanned */}
                                    <div className="relative w-64 h-64 flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700">
                                        
                                        {/* Layer 3 (Bottom) */}
                                        <div className="absolute top-[60%] w-48 h-48 border border-white/10 rounded-2xl bg-white/5 transform rotate-x-[60deg] rotate-z-[45deg] shadow-2xl transition-all duration-700 group-hover:-translate-y-2"></div>
                                        
                                        {/* Layer 2 (Middle) */}
                                        <div className="absolute top-[50%] w-48 h-48 border border-white/10 rounded-2xl bg-white/5 transform rotate-x-[60deg] rotate-z-[45deg] shadow-2xl transition-all duration-700 delay-75 group-hover:-translate-y-6"></div>
                                        
                                        {/* Layer 1 (Top - Active Scan) */}
                                        <div className="absolute top-[40%] w-48 h-48 border border-[#00BC7C]/40 rounded-2xl bg-[#00BC7C]/10 transform rotate-x-[60deg] rotate-z-[45deg] shadow-[0_0_30px_rgba(0,188,124,0.2)] transition-all duration-700 delay-150 group-hover:-translate-y-10 overflow-hidden">
                                            {/* Scanning laser line */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BC7C] to-transparent w-full h-1 opacity-50 blur-[1px] animate-[pulse_2s_ease-in-out_infinite]" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BC7C]/20 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
                                        </div>

                                        {/* Aulys Logo hovering above */}
                                        <div className="absolute top-[15%] w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl shadow-[#00BC7C]/20 flex items-center justify-center transition-all duration-700 delay-200 group-hover:-translate-y-12">
                                            <svg viewBox="0 0 128 106" fill="none" className="w-8 h-8 text-[#00BC7C]" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M61.6982 10.0812C75.1001 9.44539 75.2754 12.4175 80.8997 23.4662L118 95.5453C112.67 95.6015 106.321 96.0207 101.144 94.9411C97.7722 94.2378 95.4385 88.1796 93.9116 85.1711L87.9193 73.4022L65.0721 28.8272L64.146 27.1631C63.2026 29.2586 61.5496 32.2502 60.4668 34.364L53.124 48.7154L39.1459 75.928C36.683 80.72 32.8562 89.686 30.6221 94.2303C29.591 96.3277 10 95.9782 10 95.9782L47.9697 22.3418C51.9076 14.6116 52.2777 10.9168 61.6982 10.0812Z" fill="currentColor"/>
                                                <path d="M50.9006 76.4027C60.5242 76.4027 71.5227 76.4032 81.1464 76.4029C82.3369 79.6171 84.3806 85.878 84.6639 89.358C84.9751 93.1817 83.5523 95.9782 75.6471 95.9782H53.3065C49.1821 95.9782 44.7139 95.9782 40.5895 95.9782C42.8461 90.7806 46.5323 81.6215 48.9746 76.4242L50.9006 76.4027Z" fill="currentColor"/>
                                                <path d="M62.6225 54.5018C66.6223 53.6239 70.5664 56.2033 71.4414 60.2695C72.3164 64.3357 69.7923 68.3554 65.7977 69.2575C61.7864 70.1636 57.8144 67.5829 56.9356 63.4994C56.0569 59.4162 58.6058 55.3835 62.6225 54.5018Z" fill="currentColor"/>
                                            </svg>
                                        </div>

                                        {/* Aulys Logo Text */}
                                        <div className="absolute bottom-[5%] font-black text-2xl tracking-[0.2em] text-[#00BC7C] opacity-80 drop-shadow-2xl transition-all duration-700 group-hover:opacity-100">AULYS</div>

                                    </div>
                                </div>
                            ) : null}
                        </div>
                    )}
                `;

let leftReplacement = code.substring(0, startIdx);
leftReplacement = leftReplacement.replace(/border-emerald-500\/40/g, 'border-[#00BC7C]/40');
leftReplacement = leftReplacement.replace(/text-emerald-400/g, 'text-[#00BC7C]');
leftReplacement = leftReplacement.replace(/border-emerald-500\/20/g, 'border-[#00BC7C]/20');
leftReplacement = leftReplacement.replace(/bg-emerald-500\/10/g, 'bg-[#00BC7C]/10');
leftReplacement = leftReplacement.replace(/group-hover:bg-emerald-500\/20/g, 'group-hover:bg-[#00BC7C]/20');
leftReplacement = leftReplacement.replace(/group-hover:border-emerald-500\/30/g, 'group-hover:border-[#00BC7C]/30');
leftReplacement = leftReplacement.replace(/group-hover:text-emerald-400/g, 'group-hover:text-[#00BC7C]');
leftReplacement = leftReplacement.replace(/focus-visible:ring-emerald-500/g, 'focus-visible:ring-[#00BC7C]');

const finalCode = leftReplacement + replacement + code.substring(endIdx);

fs.writeFileSync('c:/Users/Admin/Desktop/Portfolio Website/src/app/work/page.tsx', finalCode);
console.log('Success');

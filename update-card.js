const fs = require('fs');

const code = fs.readFileSync('c:/Users/Admin/Desktop/Portfolio Website/src/app/work/page.tsx', 'utf8');

const startIdx = code.indexOf('function ProjectCard(');
const endIdx = code.indexOf('export default function WorkIndex()');

const newProjectCard = `function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        currentTarget.style.setProperty("--mouse-x", \`\${clientX - left}px\`);
        currentTarget.style.setProperty("--mouse-y", \`\${clientY - top}px\`);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.07, type: "spring", stiffness: 260, damping: 22 }}
            className={cn(project.highlight && "md:col-span-2")}
        >
            <Link href={\`/work/\${project.slug}\`} className="block group h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-[2rem]">
                <article
                    onMouseMove={handleMouseMove}
                    className={cn(
                        "relative h-full overflow-hidden rounded-[2rem] border transition-all duration-700 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] min-h-[280px]",
                        project.highlight 
                            ? "bg-zinc-950 border-white/10 flex flex-col md:flex-row items-stretch group-hover:border-emerald-500/40" 
                            : "bg-white/40 backdrop-blur-xl border-white/40 p-7 md:p-8 flex flex-col justify-between",
                        !project.highlight && project.border
                    )}
                >
                    {/* Cursor spotlight */}
                    <div
                        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100 z-20"
                        style={{
                            background: \`radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), \${project.spotlight}, transparent 80%)\`,
                        }}
                    />

                    <div className={cn("relative z-10 flex flex-col gap-6", project.highlight ? "flex-1 p-8 md:p-12 md:pr-10" : "h-full")}>
                        {/* Top row */}
                        <div className="flex justify-between items-start mb-2">
                            <span className={cn("text-sm font-bold font-mono tracking-widest", project.highlight ? "text-zinc-500" : "text-zinc-600")}>
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shadow-sm backdrop-blur-md transform group-hover:scale-110 transition-all duration-500", project.highlight ? "bg-white/5 border border-white/10 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30" : "bg-white/70 border border-white/80")}>
                                <ArrowUpRight className={cn("w-4 h-4 transition-colors duration-500", project.highlight ? "text-zinc-400 group-hover:text-emerald-400" : "text-zinc-700 group-hover:text-zinc-900")} aria-hidden="true" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <p className={cn("text-xs font-mono font-bold uppercase tracking-widest mb-3", project.highlight ? "text-emerald-400" : "text-zinc-400")}>
                                {project.category}
                            </p>
                            <h2 className={cn("text-3xl md:text-4xl font-black tracking-tight mb-4 transition-colors", project.highlight ? "text-white group-hover:text-zinc-100" : "text-zinc-900 group-hover:text-zinc-950")}>
                                {project.title}
                            </h2>
                            <p className={cn("leading-relaxed font-medium mb-8", project.highlight ? "text-zinc-400 text-lg max-w-xl" : "text-zinc-500 line-clamp-3")}>
                                {project.description}
                            </p>

                            {/* Impact Info */}
                            <div className="flex flex-col gap-3 mb-8">
                                <div className="flex items-center gap-3">
                                    <span className={cn("text-xs font-bold uppercase tracking-wider w-16", project.highlight ? "text-zinc-500" : "text-zinc-400")}>Role</span>
                                    <span className={cn("text-sm font-semibold", project.highlight ? "text-zinc-200" : "text-zinc-700")}>{project.role}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={cn("text-xs font-bold uppercase tracking-wider w-16", project.highlight ? "text-zinc-500" : "text-zinc-400")}>Impact</span>
                                    <span className={cn("text-sm border px-2.5 py-1 rounded-md font-bold backdrop-blur-sm shadow-sm", project.highlight ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" : "border-zinc-200 bg-white/50 text-zinc-800")}>{project.metric}</span>
                                </div>
                                {project.concept && (
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider w-16">Type</span>
                                        <span className="text-xs border border-amber-300 bg-amber-50 px-2.5 py-1 rounded-full font-bold text-amber-700 tracking-wide">Concept Project · Speculative Design</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className={cn("px-3 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-md shadow-sm", project.highlight ? "bg-white/5 border-white/10 text-zinc-400" : "bg-white/60 border-white/80 text-zinc-700")}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    {/* Graphic Side for Highlighted Project */}
                    {project.highlight && (
                        <div className="hidden md:flex flex-1 relative overflow-hidden items-center justify-center border-l border-white/5 bg-zinc-900/50">
                            {/* Ambient Gradients */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_60%)]" aria-hidden="true" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_60%)]" aria-hidden="true" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full group-hover:bg-emerald-500/30 transition-colors duration-700" aria-hidden="true" />
                            
                            {/* Grid Pattern */}
                            <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                            {project.slug === 'aulys' ? (
                                <div className="relative z-10 w-72 h-48 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl flex flex-col overflow-hidden transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-700 ease-out">
                                    {/* Plugin Header */}
                                    <div className="h-10 border-b border-white/10 flex items-center px-4 bg-white/5">
                                        <div className="w-5 h-5 rounded bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-inner">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
                                                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <span className="ml-2 text-xs font-bold text-white tracking-widest">AULYS</span>
                                    </div>
                                    {/* Plugin Body */}
                                    <div className="flex-1 p-5 flex flex-col gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xs font-bold">96</div>
                                            <div className="w-3/4 h-2.5 rounded-full bg-white/10" />
                                        </div>
                                        <div className="w-full h-1.5 rounded-full bg-white/5 mt-2" />
                                        <div className="w-5/6 h-1.5 rounded-full bg-white/5" />
                                        <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2">
                                            <div className="w-full h-8 rounded-md bg-emerald-500 border border-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                                <div className="w-16 h-1.5 rounded-full bg-emerald-950/30" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    )}
                </article>
            </Link>
        </motion.div>
    );
}
`;

const newCode = code.substring(0, startIdx) + newProjectCard + code.substring(endIdx);
fs.writeFileSync('c:/Users/Admin/Desktop/Portfolio Website/src/app/work/page.tsx', newCode);
console.log('Success');

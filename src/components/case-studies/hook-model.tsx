import React from "react";

interface HookModelProps {
    external: string;
    internal: string;
    action: string;
    reward: string;
    investment: string;
    accentColor?: string;
}

const steps = [
    {
        key: "trigger" as const,
        num: "01",
        label: "Trigger",
        sublabels: ["External", "Internal"],
    },
    {
        key: "action" as const,
        num: "02",
        label: "Action",
        sublabels: ["Simplest behavior"],
    },
    {
        key: "reward" as const,
        num: "03",
        label: "Variable Reward",
        sublabels: ["Unpredictable outcome"],
    },
    {
        key: "investment" as const,
        num: "04",
        label: "Investment",
        sublabels: ["What raises switching cost"],
    },
];

export function HookModel({
    external,
    internal,
    action,
    reward,
    investment,
    accentColor = "text-blue-400",
}: HookModelProps) {
    return (
        <section className="py-20 px-6 bg-zinc-900 relative overflow-hidden">
            {/* Subtle radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.06),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <div className="mb-12">
                    <p className={`text-xs font-mono font-bold uppercase tracking-[0.2em] mb-3 ${accentColor}`}>
                        Hook Model — Nir Eyal
                    </p>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-3">
                        Why They Came Back
                    </h2>
                    <p className="text-zinc-400 text-base max-w-2xl leading-relaxed">
                        Great product design doesn&apos;t just solve a problem once — it builds a loop that keeps users returning. Here&apos;s the behavioral architecture behind this product.
                    </p>
                </div>

                {/* Steps grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Trigger card — split into external + internal */}
                    <div className="rounded-[1.5rem] bg-white/5 border border-white/10 p-6 flex flex-col gap-4 hover:border-white/20 transition-colors">
                        <div className="flex items-center gap-3">
                            <span className={`text-[10px] font-black uppercase tracking-widest ${accentColor}`}>01</span>
                            <div className={`text-xs font-bold uppercase tracking-widest ${accentColor}`}>Trigger</div>
                        </div>
                        <div className="space-y-4 flex-1">
                            <div>
                                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">External</div>
                                <p className="text-sm text-zinc-300 leading-relaxed font-medium">{external}</p>
                            </div>
                            <div className="border-t border-white/5 pt-4">
                                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Internal</div>
                                <p className="text-sm text-zinc-300 leading-relaxed font-medium">{internal}</p>
                            </div>
                        </div>
                    </div>

                    {/* Action */}
                    <div className="rounded-[1.5rem] bg-white/5 border border-white/10 p-6 flex flex-col gap-4 hover:border-white/20 transition-colors">
                        <div className="flex items-center gap-3">
                            <span className={`text-[10px] font-black uppercase tracking-widest ${accentColor}`}>02</span>
                            <div className={`text-xs font-bold uppercase tracking-widest ${accentColor}`}>Action</div>
                        </div>
                        <div className="flex-1">
                            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Simplest behavior</div>
                            <p className="text-sm text-zinc-300 leading-relaxed font-medium">{action}</p>
                        </div>
                        <div className="text-[10px] text-zinc-600 italic">Friction removed by design</div>
                    </div>

                    {/* Variable Reward */}
                    <div className="rounded-[1.5rem] bg-white/5 border border-white/10 p-6 flex flex-col gap-4 hover:border-white/20 transition-colors">
                        <div className="flex items-center gap-3">
                            <span className={`text-[10px] font-black uppercase tracking-widest ${accentColor}`}>03</span>
                            <div className={`text-xs font-bold uppercase tracking-widest ${accentColor}`}>Variable Reward</div>
                        </div>
                        <div className="flex-1">
                            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Unpredictable outcome</div>
                            <p className="text-sm text-zinc-300 leading-relaxed font-medium">{reward}</p>
                        </div>
                        <div className="text-[10px] text-zinc-600 italic">Variability drives return visits</div>
                    </div>

                    {/* Investment */}
                    <div className="rounded-[1.5rem] bg-white/5 border border-white/10 p-6 flex flex-col gap-4 hover:border-white/20 transition-colors">
                        <div className="flex items-center gap-3">
                            <span className={`text-[10px] font-black uppercase tracking-widest ${accentColor}`}>04</span>
                            <div className={`text-xs font-bold uppercase tracking-widest ${accentColor}`}>Investment</div>
                        </div>
                        <div className="flex-1">
                            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">What raises switching cost</div>
                            <p className="text-sm text-zinc-300 leading-relaxed font-medium">{investment}</p>
                        </div>
                        <div className="text-[10px] text-zinc-600 italic">Loads the next trigger</div>
                    </div>
                </div>

                {/* Loop arrow — decorative text on desktop */}
                <p className="mt-6 text-center text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
                    Investment → Trigger → Action → Reward → Investment · · · Hook Model by Nir Eyal
                </p>
            </div>
        </section>
    );
}

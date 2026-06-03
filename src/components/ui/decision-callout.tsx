import { CheckCircle2, XCircle } from "lucide-react";

interface DecisionCalloutProps {
    chose: string;
    rejected: string;
    why: string;
}

export function DecisionCallout({ chose, rejected, why }: DecisionCalloutProps) {
    return (
        <div className="my-10 rounded-2xl border border-zinc-200 bg-zinc-50 overflow-hidden">
            <div className="px-6 py-3 border-b border-zinc-200 bg-white">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">Key Decision</span>
            </div>
            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200">
                <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" aria-hidden="true" />
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Chose</span>
                    </div>
                    <p className="text-sm font-semibold text-zinc-900 leading-snug">{chose}</p>
                </div>
                <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0" aria-hidden="true" />
                        <span className="text-xs font-bold uppercase tracking-wider text-red-600">Rejected</span>
                    </div>
                    <p className="text-sm font-semibold text-zinc-900 leading-snug">{rejected}</p>
                </div>
            </div>
            <div className="px-5 py-4 border-t border-zinc-200 bg-white/60">
                <p className="text-sm text-zinc-600 leading-relaxed"><strong className="text-zinc-800 font-semibold">Why:</strong> {why}</p>
            </div>
        </div>
    );
}

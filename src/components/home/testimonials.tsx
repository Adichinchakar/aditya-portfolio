"use client";

import { Card } from "@/components/ui/card";

const testimonials = [
    {
        quote:
            "Aditya's AI tools reduced our assessment time by 70%. He doesn't just design; he solves business problems.",
        role: "Stakeholder @ Infosys",
    },
    {
        quote:
            "Reduced user onboarding friction by 40%. One of the few designers who understands the API as well as the UI.",
        role: "PM @ Simplifai",
    },
    {
        quote:
            "His motion design work directly contributed to a 15% increase in customer inquiries.",
        role: "Client @ Shell",
    },
    {
        quote:
            "Aditya's design system accelerated our dev cycles by 42%. A true force multiplier.",
        role: "Team Member",
    },
];

export function Testimonials() {
    return (
        <div className="w-full py-20 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, i) => (
                    <Card
                        key={i}
                        className="w-[350px] shrink-0 mx-4 p-6 bg-zinc-900/50 backdrop-blur-xl border-zinc-800"
                    >
                        <p className="text-zinc-300 text-sm italic mb-4">"{testimonial.quote}"</p>
                        <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">
                            {testimonial.role}
                        </p>
                    </Card>
                ))}
            </div>
        </div>
    );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies | Aditya Chinchakar",
    description: "Product design case studies spanning AI tooling, design systems, enterprise SaaS, healthcare, and fintech — by Aditya Chinchakar, Senior Product Designer.",
    openGraph: {
        title: "Case Studies | Aditya Chinchakar",
        description: "Product design case studies spanning AI tooling, design systems, enterprise SaaS, healthcare, and fintech.",
        url: "https://adityachinchakar.com/work",
    },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

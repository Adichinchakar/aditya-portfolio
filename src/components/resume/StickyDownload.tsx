"use client";

import { Download } from "lucide-react";
import { motion } from "@/lib/motion";

interface StickyDownloadProps {
    pdfUrl: string;
}

export function StickyDownload({ pdfUrl }: StickyDownloadProps) {
    return (
        <motion.a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Download PDF"
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full bg-zinc-900 text-white text-sm font-semibold shadow-lg shadow-zinc-900/20 hover:bg-zinc-700 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
            <Download className="w-4 h-4" />
            Download PDF
        </motion.a>
    );
}

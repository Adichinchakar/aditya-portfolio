"use client";

import { motion } from "@/lib/motion";
import Link from "next/link";
import { Download, Mail, Globe, MapPin, Linkedin, ArrowLeft } from "lucide-react";
import { ExperienceBlock } from "@/components/resume/ExperienceBlock";
import { SkillList } from "@/components/resume/SkillList";
import { StickyDownload } from "@/components/resume/StickyDownload";
import { resumeData } from "@/data/resume";

type ResumeData = typeof resumeData;

interface ResumePageProps {
    data: ResumeData;
}

const fadeUpProps = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">{children}</span>
        <div className="flex-1 h-px bg-zinc-200" />
    </div>
);

export function ResumePage({ data }: ResumePageProps) {
    return (
        <>
            {/* Page background — linen/cream paper feel */}
            <div className="min-h-screen bg-[#f5f3ef]">
                {/* Back nav */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="sticky top-0 z-40 w-full px-6 py-4 bg-[#f5f3ef]/80 backdrop-blur-md border-b border-zinc-200/60"
                >
                    <div className="max-w-3xl mx-auto flex items-center justify-between">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            Back
                        </Link>
                        <a
                            href={data.pdfUrl}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-700 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                            <Download className="w-3.5 h-3.5" />
                            Download PDF
                        </a>
                    </div>
                </motion.div>

                {/* Paper card */}
                <div className="max-w-3xl mx-auto px-6 py-16 pb-32">
                    <div className="bg-white rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.06)] border border-zinc-100 overflow-hidden">

                        {/* ── Hero ─────────────────────────────── */}
                        <div className="px-10 pt-12 pb-10 border-b border-zinc-100">
                            <motion.p
                                {...fadeUpProps(0)}
                                className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-500 mb-3"
                            >
                                {data.title}
                            </motion.p>
                            <motion.h1
                                {...fadeUpProps(0.1)}
                                className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 mb-5"
                            >
                                {data.name}
                            </motion.h1>
                            <motion.p
                                {...fadeUpProps(0.2)}
                                className="text-base text-zinc-500 leading-relaxed max-w-lg mb-8"
                            >
                                {data.summary}
                            </motion.p>

                            {/* Contact row */}
                            <motion.div
                                {...fadeUpProps(0.3)}
                                className="flex flex-wrap gap-x-6 gap-y-2 mb-5"
                            >
                                <a
                                    href={`mailto:${data.contact.email}`}
                                    className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-blue-600 transition-colors"
                                >
                                    <Mail className="w-3.5 h-3.5 shrink-0" />
                                    {data.contact.email}
                                </a>
                                <a
                                    href={`https://${data.contact.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-blue-600 transition-colors"
                                >
                                    <Globe className="w-3.5 h-3.5 shrink-0" />
                                    {data.contact.website}
                                </a>
                                <a
                                    href={`https://${data.contact.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-blue-600 transition-colors"
                                >
                                    <Linkedin className="w-3.5 h-3.5 shrink-0" />
                                    {data.contact.linkedin}
                                </a>
                                <span className="inline-flex items-center gap-1.5 text-sm text-zinc-400">
                                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                                    {data.contact.location}
                                </span>
                            </motion.div>

                            {/* Open To badges */}
                            {data.openTo && data.openTo.length > 0 && (
                                <motion.div
                                    {...fadeUpProps(0.4)}
                                    className="flex flex-wrap gap-2"
                                >
                                    <span className="text-xs font-semibold text-zinc-400 self-center mr-1">Open to:</span>
                                    {data.openTo.map((role) => (
                                        <span key={role} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                            {role}
                                        </span>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        {/* ── Main Body ─────────────────────────── */}
                        <div className="px-10 py-10 space-y-12">

                            {/* Skills */}
                            <section aria-labelledby="skills-heading">
                                <SectionLabel>
                                    <span id="skills-heading">Core Skills</span>
                                </SectionLabel>
                                <div className="space-y-7">
                                    {data.skills.map((group, i) => (
                                        <SkillList key={group.category} category={group.category} items={group.items} index={i} />
                                    ))}
                                </div>
                            </section>

                            {/* Experience */}
                            <section aria-labelledby="experience-heading">
                                <SectionLabel>
                                    <span id="experience-heading">Experience</span>
                                </SectionLabel>
                                <div>
                                    {data.experience.map((exp, i) => (
                                        <ExperienceBlock
                                            key={exp.company + exp.role}
                                            company={exp.company}
                                            role={exp.role}
                                            period={exp.period}
                                            location={exp.location}
                                            highlights={exp.highlights}
                                            index={i}
                                        />
                                    ))}
                                </div>
                            </section>

                            {/* Featured Project */}
                            {data.featuredProject && (
                                <section aria-labelledby="project-heading">
                                    <SectionLabel>
                                        <span id="project-heading">Featured Project</span>
                                    </SectionLabel>
                                    <motion.div
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, ease: "easeOut" as const }}
                                        className="rounded-xl border border-zinc-200 bg-zinc-50 p-5"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                                            <div>
                                                <h3 className="text-base font-semibold text-zinc-900 tracking-tight">{data.featuredProject.name}</h3>
                                                <p className="text-sm text-zinc-500">{data.featuredProject.role}</p>
                                            </div>
                                            <a
                                                href={`https://${data.featuredProject.url}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="shrink-0 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                                            >
                                                View case study →
                                            </a>
                                        </div>
                                        <ul className="space-y-2">
                                            {data.featuredProject.highlights.map((item, i) => (
                                                <li key={i} className="flex gap-2.5 text-sm text-zinc-600 leading-relaxed">
                                                    <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-zinc-400" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </section>
                            )}

                            {/* Education */}
                            <section aria-labelledby="education-heading">
                                <SectionLabel>
                                    <span id="education-heading">Education</span>
                                </SectionLabel>
                                {data.education.map((edu, i) => (
                                    <motion.div
                                        key={edu.institution}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" as const }}
                                        className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3 last:mb-0"
                                    >
                                        <div>
                                            <h3 className="text-base font-semibold text-zinc-900 tracking-tight">{edu.institution}</h3>
                                            <p className="text-sm text-zinc-500">{edu.degree} · {edu.field}</p>
                                        </div>
                                        <span className="shrink-0 text-xs font-medium text-zinc-400 bg-zinc-100 px-2.5 py-1 rounded-full h-fit mt-0.5">
                                            {edu.period}
                                        </span>
                                    </motion.div>
                                ))}
                            </section>

                            {/* Certifications */}
                            {data.certifications && data.certifications.length > 0 && (
                                <section aria-labelledby="certs-heading">
                                    <SectionLabel>
                                        <span id="certs-heading">Certifications</span>
                                    </SectionLabel>
                                    <div className="flex flex-wrap gap-2">
                                        {data.certifications.map((cert) => (
                                            <motion.span
                                                key={cert.name}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, ease: "easeOut" as const }}
                                                className="inline-flex flex-col px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm"
                                            >
                                                <span className="font-medium text-zinc-900">{cert.name}</span>
                                                <span className="text-xs text-zinc-400 mt-0.5">{cert.issuer}</span>
                                                {'issued' in cert && cert.issued && (
                                                    <span className="text-xs text-zinc-400 mt-0.5">
                                                        {cert.issued}{('expires' in cert && cert.expires) ? ` · Exp ${cert.expires}` : ""}
                                                    </span>
                                                )}
                                            </motion.span>
                                        ))}
                                    </div>
                                </section>
                            )}

                        </div>

                        {/* ── Footer CTA ───────────────────────── */}
                        <div className="px-10 py-8 bg-zinc-50 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <p className="text-sm text-zinc-500">
                                Want to work together?{" "}
                                <a href={`mailto:${data.contact.email}`} className="text-zinc-900 font-medium hover:text-blue-600 transition-colors underline underline-offset-2">
                                    Let&apos;s connect →
                                </a>
                            </p>
                            <a
                                href={data.pdfUrl}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-700 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            >
                                <Download className="w-3.5 h-3.5" />
                                Download PDF Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky FAB */}
            <StickyDownload pdfUrl={data.pdfUrl} />
        </>
    );
}

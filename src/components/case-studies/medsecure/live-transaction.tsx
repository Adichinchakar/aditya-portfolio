"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { Terminal, Database, Shield, FileCheck2, Cpu } from "lucide-react";

const STEPS = [
    { text: "Initiating ABHA biometric verification...", delay: 800 },
    { text: "Identity confirmed. Generating ephemeral keypair.", delay: 600 },
    { text: "Querying Smart Contract on channel 'medsecure-net'...", delay: 1200 },
    { text: "Validating patient consent signature against public ledger.", delay: 900 },
    { text: "Consent verified. Fetching encrypted payload from IPFS...", delay: 1500 },
    { text: "IPFS Hash: QmYwAPJzv5CZsnA625s3Xf2bXnEQRV3v...", delay: 500 },
    { text: "Decrypting payload with ephemeral private key...", delay: 800 },
    { text: "[SUCCESS] Clinical records ready for rendering.", delay: 400 },
];

export function LiveTransaction() {
    const [isSimulating, setIsSimulating] = useState(false);
    const [currentStep, setCurrentStep] = useState<number>(-1);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (!isSimulating) return;

        let totalDelay = 0;
        const timeouts: NodeJS.Timeout[] = [];

        STEPS.forEach((step, index) => {
            totalDelay += step.delay;
            const timeout = setTimeout(() => {
                setCurrentStep(index);
                if (index === STEPS.length - 1) {
                    setTimeout(() => setIsComplete(true), 600);
                }
            }, totalDelay);
            timeouts.push(timeout);
        });

        return () => timeouts.forEach(clearTimeout);
    }, [isSimulating]);

    const handleStart = () => {
        setIsSimulating(true);
        setIsComplete(false);
        setCurrentStep(-1);
    };

    const handleReset = () => {
        setIsSimulating(false);
        setIsComplete(false);
        setCurrentStep(-1);
    };

    return (
        <section className="py-24 px-6 bg-zinc-950 text-white border-t border-zinc-900 overflow-hidden relative">
            {/* Background wireframe pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Explanation */}
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                            <Cpu className="w-4 h-4" />
                            Technical Architecture in Action
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                            Zero-Trust by Design.
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-medium">
                            MedSecure doesn't store health records in a centralized database. We store encrypted pointers on a Hyperledger Fabric blockchain, while the actual encrypted data lives on IPFS.
                            <br /><br />
                            Every time a doctor requests access, a zero-trust cryptographic handshake occurs. Experience the backend flow in real-time.
                        </p>

                        {!isSimulating && !isComplete && (
                            <button
                                onClick={handleStart}
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-0.5"
                            >
                                <Terminal className="w-5 h-5" />
                                Simulate Record Fetch
                            </button>
                        )}
                        {isComplete && (
                            <button
                                onClick={handleReset}
                                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-6 py-3 rounded-xl font-bold transition-all"
                            >
                                Run Simulation Again
                            </button>
                        )}
                    </div>

                    {/* Right: The Terminal */}
                    <div className="relative">
                        {/* Terminal Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-20" />

                        <div className="relative bg-[#0A0A0A] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm h-[400px] flex flex-col">
                            {/* Window Header */}
                            <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                                </div>
                                <div className="text-zinc-500 text-xs font-semibold">medsecure-node-01 ~ zsh</div>
                                <div className="w-12" /> {/* Spacer */}
                            </div>

                            {/* Terminal Body */}
                            <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-3">
                                <div className="text-zinc-500">
                                    <span className="text-blue-400 font-bold">root@node-01</span>:<span className="text-emerald-400">~/medsecure-core</span>$ ./fetch-record.sh --patient_id=ABHA-9876
                                </div>

                                {isSimulating && (
                                    <div className="space-y-3 mt-4">
                                        <AnimatePresence>
                                            {STEPS.map((step, index) => (
                                                index <= currentStep && (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className={`flex gap-3 leading-relaxed ${index === STEPS.length - 1 ? "text-emerald-400 font-bold" : "text-zinc-300"
                                                            }`}
                                                    >
                                                        <span className="text-zinc-600 select-none shrink-0">{`[${new Date().toISOString().split('T')[1].slice(0, 12)}]`}</span>
                                                        <span className="break-all">{step.text}</span>

                                                        {index === currentStep && !isComplete && (
                                                            <motion.span
                                                                animate={{ opacity: [1, 0] }}
                                                                transition={{ repeat: Infinity, duration: 0.8 }}
                                                                className="inline-block w-2.5 h-4 bg-zinc-400 ml-1 translate-y-0.5"
                                                            />
                                                        )}
                                                    </motion.div>
                                                )
                                            ))}
                                        </AnimatePresence>
                                    </div>
                                )}

                                {!isSimulating && currentStep === -1 && (
                                    <div className="text-zinc-600 mt-4 italic">
                                        Waiting for incoming transaction request...
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Floating Status Cards */}
                        <AnimatePresence>
                            {currentStep >= 2 && currentStep < 4 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="absolute -right-6 top-1/4 bg-blue-900 border border-blue-700 p-4 rounded-xl shadow-2xl flex items-center gap-3 z-20 backdrop-blur-md"
                                >
                                    <Database className="w-5 h-5 text-blue-300" />
                                    <div className="text-blue-100 font-bold text-sm">Validating Ledger</div>
                                </motion.div>
                            )}

                            {currentStep >= 4 && currentStep < 7 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="absolute -left-6 bottom-1/4 bg-purple-900 border border-purple-700 p-4 rounded-xl shadow-2xl flex items-center gap-3 z-20 backdrop-blur-md"
                                >
                                    <Shield className="w-5 h-5 text-purple-300" />
                                    <div className="text-purple-100 font-bold text-sm">IPFS Decryption</div>
                                </motion.div>
                            )}

                            {isComplete && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className="absolute -right-4 bottom-12 bg-emerald-900 border border-emerald-700 p-4 rounded-xl shadow-2xl flex items-center gap-3 z-20 backdrop-blur-md"
                                >
                                    <FileCheck2 className="w-5 h-5 text-emerald-300" />
                                    <div className="text-emerald-100 font-bold text-sm">Payload Ready</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

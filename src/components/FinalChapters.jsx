import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Layout, Sparkles } from 'lucide-react';
import ParticleField from './ParticleField';
import FloatingOrbs from './FloatingOrbs';

export const WhatsAppExperience = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-40">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <span className="text-white/40 font-semibold uppercase text-[10px] md:text-xs mb-8 block tracking-[0.3em]">
                    Delivery — Seamless
                </span>
                <h2 className="heading-section text-white mb-10">
                    Intelligence, <span className="text-gradient">Unboxed</span>.
                </h2>
                <p className="text-body mb-20 max-w-xl mx-auto">
                    No new interfaces. No learning curve. Just a contact in your existing flow.
                </p>

                <div className="max-w-sm mx-auto glass-card p-10 text-left border-white/[0.05]">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                            <MessageCircle className="text-white/40" size={18} />
                        </div>
                        <div className="text-white font-bold tracking-tight">MYSA</div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white/[0.03] p-4 rounded-2xl rounded-tl-none text-white/50 text-sm">"Summarize the lease agreement."</div>
                        <div className="bg-[#2997ff]/[0.08] border border-[#2997ff]/10 p-4 rounded-2xl rounded-tr-none text-white/80 text-sm ml-auto max-w-[90%]">"Reviewing. Synthesized summary ready."</div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

export const WebDashboard = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-40">
        <ParticleField density={20} color="rgba(255, 255, 255, 0.4)" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
            >
                <span className="text-white/40 font-semibold uppercase text-[10px] md:text-xs mb-8 block tracking-[0.3em]">
                    Interface — Command
                </span>
                <h2 className="heading-section text-white mb-20">
                    The Dashboard of <span className="text-gradient">One</span>.
                </h2>

                <div className="glass-card p-10 md:p-16 border-white/[0.05] relative group">
                    <div className="flex items-center gap-4 mb-12 border-b border-white/[0.05] pb-8">
                        <Layout className="text-white/20" size={20} />
                        <div className="text-white/40 font-semibold text-xs tracking-widest uppercase">Central Intelligence</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="h-48 rounded-2xl bg-white/[0.02] border border-white/[0.05] p-8 text-left">
                            <div className="w-8 h-[1px] bg-[#2997ff] mb-6" />
                            <div className="text-white/20 text-[10px] font-bold uppercase mb-4 tracking-widest">Active Synthesis</div>
                            <div className="space-y-3">
                                <div className="h-2 bg-white/5 rounded w-full" />
                                <div className="h-2 bg-white/5 rounded w-2/3" />
                            </div>
                        </div>
                        <div className="md:col-span-2 h-48 rounded-2xl bg-white/[0.01] border border-white/[0.03] p-8" />
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

export const FinalChapters = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-60">
        <ParticleField density={80} speed={0.05} />
        <div className="absolute inset-0 noise-overlay pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
            >
                <Sparkles className="text-[#2997ff] mx-auto mb-16 opacity-60" size={48} />
                <h2 className="heading-hero text-white mb-16">
                    <span className="opacity-40">Own your</span>
                    <br />
                    <span className="text-gradient">Focus.</span>
                </h2>
                <p className="text-body max-w-xl mx-auto mb-20">
                    Join the waitlist for the definitive platform in personal intelligence. Launching Summer 2026.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 80px rgba(255, 255, 255, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-16 py-6 bg-white text-black rounded-full font-bold text-lg transition-all duration-300 hover:bg-[#2997ff] hover:text-white"
                >
                    Reserve Your Spot
                </motion.button>

                <div className="mt-64 pt-20 border-t border-white/[0.05] text-white/20 text-[10px] uppercase font-bold tracking-[0.4em]">
                    MYSA Intelligence · US Market Launch 2026
                </div>
            </motion.div>
        </div>
    </section>
);

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const CalendarIntelligence = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-40">
            <div className="mesh-gradient-2" style={{ top: '10%', left: '-10%', opacity: 0.3 }} />
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 text-left"
                    >
                        <span className="text-white/40 font-semibold uppercase text-[10px] md:text-xs mb-8 block tracking-[0.3em]">
                            Time — Mastery
                        </span>
                        <h2 className="heading-section text-white mb-10">
                            Frictionless <span className="text-gradient">Optimization</span>.
                        </h2>
                        <p className="text-body mb-12 max-w-lg">
                            MYSA understands the physics of your day. Buffers, energy levels, and travel—handled with precision.
                        </p>

                        <div className="flex gap-10">
                            <div>
                                <div className="text-white text-3xl font-bold mb-2">100%</div>
                                <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Autonomy</div>
                            </div>
                            <div className="w-[1px] bg-white/10 self-stretch" />
                            <div>
                                <div className="text-white text-3xl font-bold mb-2">0</div>
                                <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Friction</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full max-w-lg"
                    >
                        <div className="glass-card p-10 border-white/[0.05]">
                            <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/[0.05]">
                                <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">March Focus</div>
                                <div className="w-8 h-[1px] bg-[#2997ff]" />
                            </div>

                            <div className="grid grid-cols-5 gap-4">
                                {Array.from({ length: 15 }).map((_, i) => (
                                    <div key={i} className={`aspect-square rounded-xl border border-white/[0.05] transition-colors duration-500 ${i === 6 ? 'bg-white/10 border-white/20' : 'bg-white/[0.02]'}`} />
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-6"
                            >
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                                    <Clock size={16} className="text-white/60" />
                                </div>
                                <div className="text-left">
                                    <div className="text-white text-sm font-semibold tracking-tight">Review Session</div>
                                    <div className="text-white/30 text-xs mt-1">Moved to optimize your focus gap.</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CalendarIntelligence;

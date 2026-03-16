import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, PhoneOff, MessageSquare } from 'lucide-react';

const CallAssistant = () => {
    const [isCalling, setIsCalling] = useState(false);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-40">
            <div className="mesh-gradient-1" style={{ top: '20%', right: '-10%', opacity: 0.4 }} />
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 text-left"
                    >
                        <span className="text-white/40 font-semibold uppercase text-[10px] md:text-xs mb-8 block tracking-[0.3em]">
                            Voice — The Synthesis
                        </span>
                        <h2 className="heading-section text-white mb-10">
                            The New <span className="text-gradient">Standard</span>
                            <br />
                            for Incoming.
                        </h2>
                        <p className="text-body mb-12 max-w-lg">
                            MYSA screens, synthesizes, and manages your incoming voice stream with unprecedented autonomy.
                        </p>

                        <motion.button
                            onClick={() => setIsCalling(!isCalling)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-white text-black rounded-full font-bold text-sm transition-all duration-300 hover:bg-[#2997ff] hover:text-white"
                        >
                            {isCalling ? 'Terminate Demo' : 'Simulate Call Control'}
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="flex-1 max-w-xs relative"
                    >
                        <div className="bg-[#0a0a0b] border border-white/10 rounded-[3rem] p-8 aspect-[9/19] shadow-2xl relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                {!isCalling ? (
                                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col items-center justify-center">
                                        <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center mb-8">
                                            <Phone size={24} className="text-white/10" />
                                        </div>
                                        <div className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Awaiting Pulse</div>
                                    </motion.div>
                                ) : (
                                    <motion.div key="active" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center">
                                        <div className="mt-16 text-center">
                                            <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">Screening Active</div>
                                            <div className="text-white text-2xl font-semibold tracking-tight">Unknown Stream</div>
                                        </div>

                                        <div className="mt-16 w-full p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                                            <div className="text-[#2997ff] text-[9px] font-bold uppercase mb-3">SYNTHESIS IN PROGRESS</div>
                                            <div className="text-white/70 text-xs italic leading-relaxed">"Tushar is unavailable. Please state your intent..."</div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 section-divider opacity-20" />
        </section>
    );
};

export default CallAssistant;

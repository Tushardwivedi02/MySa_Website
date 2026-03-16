import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Lightbulb } from 'lucide-react';

const NotesAndIdeas = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-40">
            <div className="mesh-gradient-1" style={{ top: '-10%', left: '20%', opacity: 0.3 }} />
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <span className="text-white/40 font-semibold uppercase text-[10px] md:text-xs mb-8 block tracking-[0.3em]">
                        Input — Spontaneous
                    </span>
                    <h2 className="heading-section text-white mb-10">
                        Speed of <span className="text-gradient">Thought</span>.
                    </h2>
                    <p className="text-body max-w-xl mx-auto">
                        Raw noise refined into actionable intelligence. Voice memos, stray thoughts, and midnight sparks.
                    </p>
                </motion.div>

                <div className="relative h-[400px] flex items-center justify-center">
                    {/* Monochromatic Refined Waveform */}
                    <div className="absolute flex items-center gap-[2px]">
                        {Array.from({ length: 32 }).map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    height: [20, 40 + Math.random() * 100, 20],
                                    opacity: [0.1, 0.4, 0.1],
                                }}
                                transition={{
                                    duration: 2 + Math.random(),
                                    repeat: Infinity,
                                    delay: i * 0.05,
                                    ease: 'easeInOut',
                                }}
                                className="w-[1.5px] rounded-full bg-white/40"
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, rotate: -5, y: 50 }}
                        whileInView={{ opacity: 1, rotate: -2, y: -40 }}
                        transition={{ delay: 0.5, duration: 1.2 }}
                        className="absolute glass-card p-8 w-64 md:w-72 border-white/[0.05] shadow-2xl z-20"
                        style={{ left: '5%', top: '10%' }}
                    >
                        <div className="w-8 h-[1px] bg-[#2997ff] mb-6" />
                        <h4 className="text-white text-sm font-semibold mb-4">Voice Capture</h4>
                        <p className="text-white/30 text-xs italic leading-relaxed">
                            "Synthesize the project brief by Friday EOD..."
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NotesAndIdeas;

import React from 'react';
import { motion } from 'framer-motion';

const MeetMysa = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Muted Atmospheric Background */}
            <div className="mesh-gradient-1" style={{ top: '10%', left: '-5%', opacity: 0.5 }} />
            <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-40">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-white/40 font-semibold uppercase text-[10px] md:text-xs mb-8 block tracking-[0.3em]"
                    >
                        Context — The Mission
                    </motion.span>

                    <h2 className="heading-section text-white mb-16">
                        Intentional <span className="text-gradient">Clarity</span>.
                        <br />
                        Personalized for you.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
                        {[
                            {
                                title: 'Whisper-level Presence',
                                desc: "MYSA doesn't want to be your primary device. It lives where you already are, removing friction through simple conversation.",
                                accent: '#ffffff'
                            },
                            {
                                title: 'Long-term Memory',
                                desc: "It synthesizes the details that fade. The names, the documents, the fleeting ideas—recorded and recalled with perfect context.",
                                accent: '#2997ff'
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.2, duration: 1 }}
                                viewport={{ once: true }}
                                className="glass-card glass-card-hover p-10 text-left border-white/[0.05]"
                            >
                                <div className="mb-10 w-12 h-[1px]" style={{ backgroundColor: item.accent }} />
                                <h3 className="text-white text-2xl font-semibold mb-6">{item.title}</h3>
                                <p className="text-body leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 section-divider opacity-30" />
        </section>
    );
};

export default MeetMysa;

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Search } from 'lucide-react';

const DocumentMemory = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-40">
            <div className="mesh-gradient-2" style={{ top: '20%', right: '-15%', opacity: 0.3 }} />
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
                            Recall — Intelligence
                        </span>
                        <h2 className="heading-section text-white mb-10">
                            Digital <span className="text-gradient">Total Recall</span>.
                        </h2>
                        <p className="text-body mb-12 max-w-lg">
                            MYSA synthesizes your chaotic document stream into a unified, queryable intelligence layer.
                        </p>

                        <div className="space-y-10 group">
                            {[
                                { title: 'Seamless Extraction', desc: 'Auto-identified key dates and terms.' },
                                { title: 'Intuitive Search', desc: 'Query your data using natural language.' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-6">
                                    <div className="w-[1px] h-12 bg-white/10 group-hover:bg-[#2997ff]/40 transition-colors duration-700" />
                                    <div>
                                        <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                                        <p className="text-white/30 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="flex-1 relative w-full max-w-sm"
                    >
                        <div className="relative z-10 glass-card p-10 overflow-hidden border-white/[0.05]" style={{ aspectRatio: '3/4' }}>
                            <div className="flex items-center gap-4 mb-10 border-b border-white/[0.05] pb-6">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/40 font-bold text-xs">PDF</div>
                                <div className="text-left">
                                    <div className="text-white text-sm font-semibold tracking-tight">Contract_v2.pdf</div>
                                    <div className="text-white/20 text-xs mt-1">Ready for synthesis</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {[80, 100, 90, 70, 95, 50].map((w, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scaleX: 0 }}
                                        whileInView={{ opacity: 1, scaleX: 1 }}
                                        transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className="h-[2px] bg-white/10 rounded-full origin-left"
                                        style={{ width: `${w}%` }}
                                    />
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5, duration: 1 }}
                                viewport={{ once: true }}
                                className="mt-16 p-6 rounded-2xl border border-[#2997ff]/20 bg-[#2997ff]/[0.05]"
                            >
                                <div className="text-[#2997ff] text-[9px] font-bold uppercase tracking-widest mb-3">MYSA INSIGHT</div>
                                <div className="text-white/80 text-sm leading-relaxed font-medium">Auto-renew date identified: Sept 14. Added to your focus gap.</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DocumentMemory;

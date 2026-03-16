import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Talk to MySA in WhatsApp",
            description: "Send a chat, a voice note, or drop a document. MySA is always listening, ready to take the mental load off your shoulders.",
            icon: (
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#00E5B8" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 1 1 0 0 1 0 2V7a5.5 5.5 0 1 0 2.5 10.3c.3.2.7.2 1.1 0l3.9 1-1-3.9c-.2-.4-.2-.8 0-1.1A5.4 5.4 0 0 0 19 8.5c0-.1 0-.1 0-.2z"></path></svg>
            )
        },
        {
            id: 2,
            title: "She Acts Instantly",
            description: "From scheduling focused work to summarizing complex legal docs or even answering incoming calls when you're busy.",
            icon: (
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#00E5B8" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            )
        },
        {
            id: 3,
            title: "Everything is Synced",
            description: "Your calendar is updated, your tasks are set, and your memory is sharp. MySA keeps your world perfectly in sync.",
            icon: (
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#00E5B8" strokeWidth="2"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
            )
        }
    ];

    return (
        <section className="relative min-h-screen w-full bg-white pt-[10vh] pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Ready to experience <span className="text-gradient-teal">Superpowers?</span>
                    </motion.h2>
                    <p className="text-xl text-gray-500">How MySA works her magic on your schedule.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-50 -translate-y-1/2 hidden lg:block z-0" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center p-8 bg-white"
                            >
                                <div className="w-24 h-24 rounded-3xl bg-[#00E5B8]/5 flex items-center justify-center mb-10 border border-[#00E5B8]/10 shadow-lg shadow-[#00E5B8]/5">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{step.description}</p>

                                {index === 2 && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1, type: "spring" }}
                                        className="mt-12 flex flex-col items-center"
                                    >
                                        <img src="/mascot.png" alt="Mascot High-five" className="w-32 h-auto mascot-glow" />
                                        <p className="mt-4 text-[#00c49a] font-bold text-sm uppercase tracking-widest">High Five!</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

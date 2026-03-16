import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
    const features = [
        {
            title: "Call Assist",
            badge: "Star Feature",
            description: "Mascot answering your incoming calls and summarizing them instantly. Never miss important info while you're focused.",
            icon: (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            )
        },
        {
            title: "Document Chat",
            badge: "Instant Recap",
            description: "Upload PDFs, receipts, or images. MySA reads and organizes them for you. Ask questions and get answers in seconds.",
            icon: (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            )
        },
        {
            title: "Smart Calendar",
            badge: "Voice-Sync",
            description: "Schedule anything with a quick voice note. MySA understands your time and syncs everything with Google and Apple.",
            icon: (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            )
        },
        {
            title: "Friends Reminders",
            badge: "Relationship Support",
            description: "Never forget a birthday or a catch-up. MySA keeps track of your social circle and sends gentle nudges when it matters.",
            icon: (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l9.94-9.94 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            )
        },
        {
            title: "Voice Notes",
            badge: "Memory Engine",
            description: "Record your midnight thoughts. MySA remembers your style and turns messy memos into actionable todos and notes.",
            icon: (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
            )
        }
    ];

    return (
        <section className="relative min-h-screen w-full bg-[#fbfbfd] py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                        >
                            Everything She Does for <span className="text-gradient-teal">You</span>
                        </motion.h2>
                        <p className="text-xl text-gray-500">Your busy life, simplified by a superhero.</p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="hidden md:block"
                    >
                        <img src="/mascot.png" alt="Mascot Feature Guide" className="w-40 h-auto mascot-glow" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card glass-card-hover p-8"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#00E5B8]/10 text-[#00c49a] flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <h3 className="text-xl font-bold">{feature.title}</h3>
                                <span className="px-2 py-0.5 rounded-md bg-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{feature.badge}</span>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">{feature.description}</p>
                            <div className="flex items-center gap-2 text-[#00c49a] font-bold text-xs cursor-pointer group">
                                Learn more <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-black rounded-3xl flex flex-col justify-center text-white"
                    >
                        <h3 className="text-2xl font-bold mb-4">And so much more...</h3>
                        <p className="text-gray-400 text-sm mb-8">We're constantly adding new skills to MySA's superhero toolkit.</p>
                        <button className="w-full py-4 bg-[#00E5B8] text-black font-bold rounded-2xl hover:bg-white transition-colors">Start for Free</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Features;

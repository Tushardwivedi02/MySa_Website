import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Clock, CheckCircle } from 'lucide-react';
import FloatingOrbs from './FloatingOrbs';

const SmartReminders = () => {
    const reminders = [
        { type: 'Immediate', title: 'Contextual Cue', context: 'Triggered by proximity and priority.', icon: <Bell className="text-white" size={20} /> },
        { type: 'Predictive', title: 'Schedule Gap', context: 'Suggested during identified focus windows.', icon: <Clock className="text-white/60" size={20} /> },
        { type: 'Intelligent', title: 'Action Item', context: 'Extracted from your recent interactions.', icon: <CheckCircle className="text-white/40" size={20} /> },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-40">
            <FloatingOrbs count={3} colors={['#ffffff', '#2997ff']} />
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <span className="text-white/40 font-semibold uppercase text-[10px] md:text-xs mb-8 block tracking-[0.3em]">
                        Utility — Automation
                    </span>
                    <h2 className="heading-section text-white mb-10">
                        Never Miss a <span className="text-gradient">Beat</span>.
                    </h2>
                    <p className="text-body max-w-xl mx-auto">
                        Reminders that understand your location, your schedule, and your priorities. Automatically.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reminders.map((reminder, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 1 }}
                            viewport={{ once: true }}
                            className="glass-card glass-card-hover p-12 text-left relative group border-white/[0.05]"
                        >
                            <div className="mb-10 p-4 w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                                {reminder.icon}
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block text-white/40">
                                {reminder.type}
                            </span>
                            <h3 className="text-white text-2xl font-semibold mb-6">{reminder.title}</h3>
                            <p className="text-white/30 text-sm leading-relaxed">{reminder.context}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 section-divider opacity-20" />
        </section>
    );
};

export default SmartReminders;

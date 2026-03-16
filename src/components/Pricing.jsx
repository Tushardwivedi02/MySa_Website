import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
    const plans = [
        {
            name: "Basic",
            price: "2.99",
            yearly: "24",
            features: ["WhatsApp Chat", "Smart Reminders", "Basic Task Sync", "Email Support"],
            highlight: false
        },
        {
            name: "Pro",
            price: "6.99",
            yearly: "59",
            features: ["Everything in Basic", "Call Assistant (USA Only)", "Document Chat (PDF/Images)", "Voice Note Synthesis", "Priority Support"],
            highlight: true,
            badge: "Most Popular"
        },
        {
            name: "Premium",
            price: "12.99",
            yearly: "119",
            features: ["Everything in Pro", "Unlimited Document Storage", "Advanced Relationship Intelligence", "Beta Access to New Skills", "Dedicated Account Hero"],
            highlight: false
        }
    ];

    return (
        <section className="relative min-h-screen w-full bg-white py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Superhero Support for <span className="text-gradient-teal">Everyone</span>
                    </motion.h2>
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <span className="text-sm font-bold text-[#00c49a] bg-[#00E5B8]/10 px-3 py-1 rounded-full">14-day money-back</span>
                        <span className="text-sm font-bold text-gray-400">Cancel anytime</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end relative">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 ${plan.highlight
                                    ? 'bg-[#00E5B8] text-white border-[#00E5B8] shadow-[0_30px_60px_rgba(0,229,184,0.3)] z-10 scale-105'
                                    : 'bg-[#fbfbfd] text-gray-800 border-gray-100'
                                }`}
                        >
                            {plan.badge && (
                                <div className="absolute top-0 right-10 -translate-y-1/2 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="mb-10">
                                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-sm opacity-60 font-medium">$</span>
                                    <span className="text-6xl font-black">{plan.price}</span>
                                    <span className="text-sm opacity-60 font-medium">/mo</span>
                                </div>
                                <div className="mt-2 text-sm font-bold opacity-60">or ${plan.yearly}/year (save ~30%)</div>
                            </div>

                            <div className="space-y-4 mb-12">
                                {plan.features.map(f => (
                                    <div key={f} className="flex items-center gap-3">
                                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" className={plan.highlight ? 'text-white' : 'text-[#00c49a]'}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        <span className="text-sm font-medium">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-5 rounded-2xl font-bold text-lg transition-all ${plan.highlight
                                    ? 'bg-black text-white hover:bg-white hover:text-[#00E5B8]'
                                    : 'bg-white text-gray-800 border-2 border-gray-100 hover:border-[#00E5B8] hover:text-[#00E5B8]'
                                }`}>
                                Start with MySA
                            </button>
                        </motion.div>
                    ))}

                    {/* Mascot Cheering Beside the Table */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="absolute -right-24 bottom-0 hidden xl:block"
                    >
                        <img src="/mascot.png" alt="Mascot Cheering" className="w-56 h-auto drop-shadow-2xl" />
                        <div className="absolute -top-12 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 rotate-[-10deg]">
                            <p className="text-xs font-bold text-gray-700">"Pick Pro for the<br />full USA experience!"</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;

import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
    return (
        <footer className="relative w-full bg-white pt-32 pb-12 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00E5B8]/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <img src="/mascot.png" alt="Ready Mascot" className="w-48 h-auto mx-auto mb-12 mascot-glow animate-float" />
                    <h2 className="text-5xl md:text-7xl font-bold mb-8">
                        Ready to meet your <span className="text-gradient-teal">Superhero?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto">
                        Join the thousand of Americans who have already leveled up their life with MySA. Free for your first 14 days.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-6 bg-[#00E5B8] text-white rounded-full font-bold text-xl shadow-[0_0_30px_rgba(0,229,184,0.4)] flex items-center gap-3 mx-auto"
                    >
                        Start on WhatsApp Now
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 5l7 7-7 7"></path></svg>
                    </motion.button>
                </motion.div>

                {/* Footer Links & Trust Signals */}
                <div className="pt-24 border-t border-gray-100 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-[#00E5B8] flex items-center justify-center font-black text-white text-lg">M</div>
                            <span className="text-2xl font-bold tracking-tighter">MySA</span>
                        </div>
                        <p className="text-gray-400 max-w-sm mb-8 text-sm leading-relaxed">
                            The world's first WhatsApp-native AI superhero sidekick. Built with love for the dreamers, the doers, and the busy bees of America.
                        </p>
                        <div className="flex gap-4 items-center bg-gray-50 inline-flex p-2 rounded-xl border border-gray-100">
                            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest px-2 border-r border-gray-200">Secure • Stripe</span>
                            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest px-2 border-r border-gray-200">CCPA Compliant</span>
                            <span className="text-[10px] font-bold text-[#00c49a] uppercase tracking-widest px-2">Made for the USA</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-gray-800">Product</h4>
                        <ul className="space-y-4 text-sm font-medium text-gray-400">
                            <li className="hover:text-[#00E5B8] transition-colors cursor-pointer">Call Assist</li>
                            <li className="hover:text-[#00E5B8] transition-colors cursor-pointer">Document Chat</li>
                            <li className="hover:text-[#00E5B8] transition-colors cursor-pointer">Smart Calendar</li>
                            <li className="hover:text-[#00E5B8] transition-colors cursor-pointer">Pricing</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-gray-800">Support</h4>
                        <ul className="space-y-4 text-sm font-medium text-gray-400">
                            <li className="hover:text-[#00E5B8] transition-colors cursor-pointer">Help Center</li>
                            <li className="hover:text-[#00E5B8] transition-colors cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-[#00E5B8] transition-colors cursor-pointer">Terms of Service</li>
                            <li className="hover:text-[#00E5B8] transition-colors cursor-pointer">Contact Us</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-medium text-gray-400">© 2026 MySA Intelligence Inc. All rights reserved.</p>
                    <div className="flex gap-6 text-gray-400">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="hover:text-[#00E5B8] cursor-pointer"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="hover:text-[#00E5B8] cursor-pointer"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FinalCTA;

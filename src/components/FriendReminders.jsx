import React from 'react';
import { motion } from 'framer-motion';
import { Heart, User } from 'lucide-react';
import FloatingOrbs from './FloatingOrbs';

const FriendReminders = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-40">
            <FloatingOrbs count={4} colors={['#ffffff', '#2997ff']} />
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <span className="text-white/40 font-semibold uppercase text-[10px] md:text-xs mb-8 block tracking-[0.3em]">
                        Social — Intelligence
                    </span>
                    <h2 className="heading-section text-white mb-10">
                        Nurture Your <span className="text-gradient">Circle</span>.
                    </h2>
                    <p className="text-body max-w-xl mx-auto">
                        MYSA identifies the relationships that matter, ensuring you stay present in the lives of those who deserve it.
                    </p>
                </motion.div>

                {/* Refined social graph */}
                <div className="relative h-[400px] flex items-center justify-center">
                    <motion.div
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="absolute w-[350px] h-[350px] rounded-full border border-white/10"
                    />

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative z-20 w-32 h-32 rounded-full bg-black border border-white/20 flex items-center justify-center shadow-2xl"
                    >
                        <span className="text-white font-bold text-xs tracking-widest text-gradient">MYSA</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 1, type: 'spring' }}
                        className="absolute w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center"
                        style={{ transform: 'translate(140px, -60px)' }}
                    >
                        <User size={20} className="text-white/60" />
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 section-divider opacity-20" />
        </section>
    );
};

export default FriendReminders;

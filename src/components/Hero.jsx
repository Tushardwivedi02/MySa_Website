import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MascotSequence from './MascotSequence';
import finalFrame from '../assets/Clip_last.png';

const Hero = () => {
    const [mascotDone, setMascotDone] = useState(false);
    const [isEightyPercent, setIsEightyPercent] = useState(false);

    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#F5F5F7]">
            {/* Soft Gradient Glow behind mascot - Aparece after animation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={mascotDone ? {
                    opacity: 1,
                    scale: 1,
                    x: [0, 20, -20, 0],
                    y: [0, -15, 15, 0],
                    rotate: [0, 5, -5, 0]
                } : { opacity: 0, scale: 0.8 }}
                transition={mascotDone ? {
                    opacity: { duration: 2 },
                    scale: { duration: 2 },
                    x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 15, repeat: Infinity, ease: "easeInOut" }
                } : { duration: 1 }}
                className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60%] h-[90%] z-0 pointer-events-none"
            >
                <div
                    className="w-full h-full opacity-60 blur-[150px]"
                    style={{
                        background: `
                            radial-gradient(circle at 50% 50%, #7DD3FC 0%, transparent 45%),
                            radial-gradient(circle at 30% 70%, #4ADE80 0%, transparent 45%),
                            radial-gradient(circle at 70% 30%, #C084FC 0%, transparent 50%)
                        `
                    }}
                />
            </motion.div>

            {/* Full-screen Image Sequence Background */}
            <MascotSequence
                onComplete={() => setMascotDone(true)}
                onProgress={(p) => {
                    if (p >= 0.8) setIsEightyPercent(true);
                }}
            />

            {/* High-res Final Frame Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={mascotDone ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 top-[80px] w-full h-[calc(100vh-80px)] overflow-hidden z-1 pointer-events-none flex items-center justify-center"
            >
                <img
                    src={finalFrame}
                    alt="Final Frame"
                    className="w-full h-full object-cover object-center"
                />
            </motion.div>

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00E5B8]/10 rounded-full blur-[100px] animate-pulse z-0 pointer-events-none" />

            {/* Main Content (Left aligned) */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-start w-full mt-24">

                {/* Badge with Line */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-badge-container mb-8"
                >
                    <motion.div
                        className="hero-badge"
                        animate={{
                            background: isEightyPercent
                                ? 'linear-gradient(135deg, #0071e3 0%, #00E5B8 100%)'
                                : 'rgba(255, 255, 255, 0)',
                            color: isEightyPercent ? '#ffffff' : '#00E5B8',
                            borderColor: isEightyPercent ? 'transparent' : '#00E5B8'
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        NOW LIVE GLOBALLY. POWER YOUR PRODUCTIVITY.
                    </motion.div>
                    <div className="hero-badge-line" />
                </motion.div>

                {/* Multi-line Headline */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="text-left max-w-3xl"
                >
                    <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 text-gray-900 drop-shadow-sm tracking-tight text-nowrap">
                        <span className="text-[0.7em] block mb-2">Power Your Life</span>
                        <span className="text-[0.7em]">with </span><motion.span
                            initial={{ opacity: 0 }}
                            animate={mascotDone ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-blue-green-gradient inline-block"
                        >
                            MySA.
                        </motion.span><br />
                        <span className="text-[0.7em]">The Ultimate</span><br />
                        AI <span className="text-shimmer-silver">Super-Agent</span><br />
                        <span className="text-[0.7em]">Inside </span><span className="text-[#25D366] text-3d-green inline-block">WhatsApp.</span>
                    </h1>
                </motion.div>
            </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
                <svg className="relative block h-[100px] w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,-1.14,1200,0.43V120H0Z" fill="#fbfbfd"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;

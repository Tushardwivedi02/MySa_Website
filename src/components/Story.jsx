import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SpaceScene from './SpaceScene';
import mascotImg from '../assets/Adobe Express - file.png';

const Story = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yContent = useTransform(scrollYProgress, [0, 1], [-150, -450]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const mascotScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.1]);

    return (
        <section ref={containerRef} className="relative min-h-[120vh] w-full flex flex-col overflow-hidden bg-black">
            <SpaceScene />

            <div className="relative z-10 flex-1 w-full max-w-[1900px] mx-auto flex flex-col items-center justify-center px-6">
                {/* Mascot Integration */}
                <motion.div
                    style={{ scale: mascotScale, opacity: opacityContent }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] z-20 w-[690px] h-[690px] flex items-center justify-center pointer-events-none"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                >
                    <img
                        src={mascotImg}
                        alt="MySA Mascot"
                        className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(0,229,184,0.3)]"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 30%, transparent 80%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 80%)'
                        }}
                    />
                </motion.div>

                {/* Headline Section */}
                <motion.div
                    style={{ y: yContent, opacity: opacityContent }}
                    className="text-center z-10 relative"
                >
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-6xl md:text-8xl lg:text-[10.8rem] font-bold mb-12 leading-none tracking-tighter"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">From Chaos <br /> to </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5B8] via-[#80FFEA] to-[#00E5B8] drop-shadow-[0_0_30px_rgba(0,229,184,0.4)]">Calm</span>
                    </motion.h2>
                </motion.div>

                {/* Subtle bottom glow to transition to next section */}
                <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            </div>
        </section>
    );
};

export default Story;

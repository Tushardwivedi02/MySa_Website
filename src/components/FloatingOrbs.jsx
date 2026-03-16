import React from 'react';
import { motion } from 'framer-motion';

const FloatingOrbs = ({ count = 5, colors = ['#9d5bb3', '#0071e3', '#ffffff'] }) => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: count }).map((_, i) => {
                const color = colors[i % colors.length];
                const size = 200 + Math.random() * 400;
                const startX = Math.random() * 100;
                const startY = Math.random() * 100;
                const duration = 15 + Math.random() * 20;

                return (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: size,
                            height: size,
                            left: `${startX}%`,
                            top: `${startY}%`,
                            background: `radial-gradient(circle, ${color}15 0%, transparent 70%)`,
                            filter: 'blur(60px)',
                        }}
                        animate={{
                            x: [0, 50 * (i % 2 === 0 ? 1 : -1), -30, 0],
                            y: [0, -40, 30 * (i % 2 === 0 ? -1 : 1), 0],
                            scale: [1, 1.2, 0.9, 1],
                            opacity: [0.4, 0.7, 0.3, 0.4],
                        }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: i * 2,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default FloatingOrbs;

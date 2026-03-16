import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const reviews = [
        {
            name: "Sarah Jenkins",
            title: "Marketing Director, NYC",
            text: "I used to drown in missed calls and forgotten tasks. Now, MySA handles my intake so I can actually focus on my work. It's like having a personal assistant in my pocket.",
            avatar: "https://i.pravatar.cc/100?img=32"
        },
        {
            name: "Marcus Thorne",
            title: "Real Estate Agent, Miami",
            text: "The Call Assist feature is a game-changer. MySA screens my calls and tells me exactly what people want before I even talk to them. Truly a superhero sidekick.",
            avatar: "https://i.pravatar.cc/100?img=12"
        },
        {
            name: "Elena Rodriguez",
            title: "Entrepreneur, Austin",
            text: "WhatsApp is where my life happens, so having MySA there is perfect. No new apps, no friction. Just smart help when I need it most.",
            avatar: "https://i.pravatar.cc/100?img=44"
        },
        {
            name: "David Chen",
            title: "Tech Lead, Seattle",
            text: "The document synthesis is incredible. I drop a PDF and MySA gives me a summary and sets my follow-up tasks. It saved me hours this week alone.",
            avatar: "https://i.pravatar.cc/100?img=59"
        }
    ];

    return (
        <section className="relative w-full bg-[#fbfbfd] py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <img src="/mascot.png" alt="Mascot Thumbs up" className="w-32 h-auto mascot-glow" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Built for <span className="text-gradient-teal">Busy Americans</span>
                    </motion.h2>
                    <p className="text-xl text-gray-500">See how early adopters are reclaiming their time.</p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="break-inside-avoid glass-card p-10 flex flex-col gap-6"
                        >
                            <div className="flex gap-1 text-[#00E5B8]">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <svg key={i} viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                ))}
                            </div>
                            <p className="text-gray-800 font-medium leading-relaxed italic">"{review.text}"</p>
                            <div className="flex items-center gap-4 mt-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                                    <img src={review.avatar} alt={review.name} />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm font-bold text-gray-800">{review.name}</p>
                                    <p className="text-xs text-gray-400 font-medium">{review.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

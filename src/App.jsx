import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 3D scale and opacity effect for the Hero section when overlaying
  // We want the hero to scale down slightly as the next section comes in
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "0%"]); // Keep it pinned

  return (
    <div ref={containerRef} className="bg-ue5-dark min-h-screen">
      <Navbar />
      <main className="relative">
        {/* Sticky Hero Section */}
        <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
          <motion.div
            style={{
              scale: heroScale,
              opacity: heroOpacity,
              y: heroY
            }}
            className="w-full h-full"
          >
            <Hero />
          </motion.div>
        </div>

        {/* Story Section that overlays the Hero */}
        <div className="relative z-10 bg-ue5-dark shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <Story />
        </div>

        {/* Following sections */}
        <div className="relative z-10 bg-white">
          <div id="how-it-works">
            <HowItWorks />
          </div>
          <div id="features">
            <Features />
          </div>
          <div id="pricing">
            <Pricing />
          </div>
          <div id="testimonials">
            <Testimonials />
          </div>
          <div id="final-cta">
            <FinalCTA />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const MascotSequence = ({ onComplete, onProgress }) => {
    const canvasRef = useRef(null);
    const frameCount = 239;
    const fps = 34;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Create an array to hold all image objects
        const images = [];
        let loadedFrames = 0;
        let isPlaying = false;

        let currentFrame = 0;
        let lastTime = 0;
        const interval = 1000 / fps;

        const startAnimation = () => {
            const render = (time) => {
                animationFrameId = requestAnimationFrame(render);

                if (!lastTime) lastTime = time;
                const delta = time - lastTime;

                if (delta > interval) {
                    lastTime = time - (delta % interval);

                    const img = images[currentFrame];
                    // Only draw if the image has fully loaded and canvas has dimensions
                    if (img && img.complete && img.naturalWidth > 0 && canvas.width > 0) {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    }

                    if (onProgress) {
                        onProgress(currentFrame / frameCount);
                    }

                    if (currentFrame >= frameCount - 1) {
                        isPlaying = false;
                        if (onComplete) onComplete();
                        return; // Stop animation loop and stay on last frame
                    } else {
                        currentFrame++;
                    }
                }
            };
            animationFrameId = requestAnimationFrame(render);
        };

        // Preload the images
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            // Ensure padding matches the generated files (Clip_00000.png)
            const indexStr = i.toString().padStart(5, '0');
            // Assuming we moved the folder to public/mascot_sequence
            img.src = `/mascot_sequence/Clip_${indexStr}.png`;

            img.onload = () => {
                loadedFrames++;

                // Initialize canvas dimensions on the very first frame
                if (i === 0) {
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                }

                // Once enough frames (or all) are loaded, start the loop
                // We start when all are loaded for the smoothest 34fps playback
                if (loadedFrames >= frameCount && !isPlaying) {
                    isPlaying = true;
                    startAnimation();
                }
            };
            images.push(img);
        }

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <div className="absolute inset-0 top-[80px] w-full h-[calc(100vh-80px)] overflow-hidden z-0 pointer-events-none flex items-center justify-center bg-transparent">
            <canvas
                ref={canvasRef}
                className="w-full h-full object-cover object-center opacity-100"
                style={{ imageRendering: 'high-quality' }}
            />
        </div>
    );
};

export default MascotSequence;

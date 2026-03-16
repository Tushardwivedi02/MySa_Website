import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const MilkyWayParticles = ({ count = 10000 }) => {
    const meshRef = useRef();
    const { mouse, viewport } = useThree();

    // High-quality circular texture with soft glow
    const circleTexture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 128; canvas.height = 128;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.6)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 128, 128);
        return new THREE.CanvasTexture(canvas);
    }, []);

    // Spiral Galaxy Distribution
    const [positions, colors, initialPositions] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);
        const colorPalette = [
            new THREE.Color("#4f46e5"), // Indigo
            new THREE.Color("#8b5cf6"), // Purple
            new THREE.Color("#ec4899"), // Pink
            new THREE.Color("#00e5b8"), // Teal
            new THREE.Color("#3b82f6"), // Blue
            new THREE.Color("#ffffff"), // White
        ];

        const branches = 3; // Number of spiral arms
        const spread = 0.5;

        for (let i = 0; i < count; i++) {
            const radius = Math.random() * 50;
            const branchAngle = ((i % branches) / branches) * Math.PI * 2;
            const spinAngle = radius * 0.2; // How much it spins as it goes out

            const x = Math.cos(branchAngle + spinAngle) * radius + (Math.random() - 0.5) * radius * spread;
            const y = (Math.random() - 0.5) * (15 / (1 + radius * 0.1)); // Flattened disk
            const z = Math.sin(branchAngle + spinAngle) * radius + (Math.random() - 0.5) * radius * spread;

            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;

            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            col[i * 3] = color.r;
            col[i * 3 + 1] = color.g;
            col[i * 3 + 2] = color.b;
        }
        return [pos, col, new Float32Array(pos)];
    }, [count]);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();

        // Subtle global rotation
        meshRef.current.rotation.y = time * 0.03;

        // Fluid Mouse Parallax
        state.camera.position.x += (mouse.x * 5 - state.camera.position.x) * 0.05;
        state.camera.position.y += (mouse.y * 3 - state.camera.position.y) * 0.05;
        state.camera.lookAt(0, 0, 0);

        // Individual particle "twinkle"
        const colorsAttr = meshRef.current.geometry.attributes.color;
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const noise = Math.sin(time + i) * 0.1;
            // No need for heavy loop, just a placeholder if needed.
            // For performance on 10k particles, we keep it simple.
        }
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
                <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial
                size={0.18}
                map={circleTexture}
                vertexColors
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
                sizeAttenuation={true}
            />
        </points>
    );
};

const SpaceScene = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
            <Canvas camera={{ position: [0, 0, 40], fov: 75 }} dpr={[1, 2]}>
                <color attach="background" args={["#000000"]} />
                <MilkyWayParticles count={10000} />
                <ambientLight intensity={1} />
            </Canvas>

            {/* Cinematic Nebulas (CSS Overlays) */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black opacity-60" />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40" />

            {/* Ambient Nebula Glow */}
            <div className="absolute inset-0 pointer-events-none opacity-20 filter blur-[100px]">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-indigo-900 rounded-full mix-blend-screen animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-teal-900 rounded-full mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
        </div>
    );
};

export default SpaceScene;

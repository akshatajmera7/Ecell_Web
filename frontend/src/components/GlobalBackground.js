import React from 'react';
import { motion } from 'framer-motion';

const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1] bg-black">
            {/* Soft Ambient Bubbles */}

            {/* Top Right - Purple */}
            <motion.div
                animate={{
                    x: [0, 40, -20, 0],
                    y: [0, -30, 20, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[10%] -right-[5%] w-[60vw] h-[60vw] bg-[#6F66FF]/10 rounded-full blur-[120px] md:blur-[160px]"
            />

            {/* Middle Left - Lime */}
            <motion.div
                animate={{
                    x: [0, -50, 30, 0],
                    y: [0, 60, -40, 0],
                    scale: [1, 0.95, 1.05, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-[30%] -left-[10%] w-[50vw] h-[50vw] bg-[#BCFF2F]/5 rounded-full blur-[100px] md:blur-[140px]"
            />

            {/* Bottom Right - Deep Purple/Blue */}
            <motion.div
                animate={{
                    x: [0, 30, -30, 0],
                    y: [0, -40, 50, 0],
                    scale: [1, 1.1, 1, 1],
                }}
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
                className="absolute -bottom-[15%] right-[10%] w-[55vw] h-[55vw] bg-[#6F66FF]/8 rounded-full blur-[130px] md:blur-[170px]"
            />

            {/* Center - Subtle White Glow */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-white/2 rounded-full blur-[150px]"
            />

            {/* Grain Overlay for Texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
    );
};

export default GlobalBackground;

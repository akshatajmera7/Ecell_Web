import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yMove = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    useEffect(() => {
        const updateMousePosition = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <div ref={containerRef} className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">

            {/* Background elements */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#6F66FF]/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#BCFF2F]/5 blur-[150px] rounded-full pointer-events-none"></div>

            {/* Grid & Glow */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
            <div
                className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"
                style={{
                    maskImage: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
                }}
            ></div>

            {/* Main Content */}
            <motion.div
                className="relative z-10 w-full flex flex-col items-center justify-center select-none px-4"
                style={{ y: yMove, opacity: opacityFade }}
            >
                <div className="flex flex-col items-start w-full max-w-fit mx-auto">

                    {/* IDEATE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-[9.5vw] sm:text-[9vw] md:text-[8.5vw] font-black font-syne leading-[0.8] tracking-tighter uppercase gradient-text">
                            IDEATE
                        </h1>
                    </motion.div>

                    {/* INNOVATE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="-mt-1 md:-mt-4 ml-[6vw] sm:ml-[8vw] md:ml-[10vw]"
                    >
                        <h1 className="text-[9.5vw] sm:text-[9vw] md:text-[8.5vw] font-black font-syne leading-[0.8] tracking-tighter uppercase gradient-text">
                            INNOVATE
                        </h1>
                    </motion.div>

                    {/* INCUBATE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="-mt-1 md:-mt-4 ml-[12vw] sm:ml-[16vw] md:ml-[20vw]"
                    >
                        <h1 className="text-[9.5vw] sm:text-[9vw] md:text-[8.5vw] font-black font-syne leading-[0.8] tracking-tighter uppercase gradient-text">
                            INCUBATE
                        </h1>
                    </motion.div>

                </div>
            </motion.div>

            {/* Bottom Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
            </motion.div>

            <style jsx>{`
                .gradient-text {
                    background: linear-gradient(90deg, #6F66FF 0%, #A5B6FF 30%, #BCFF2F 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    display: inline-block;
                    white-space: nowrap;
                }
                
                @media (max-width: 768px) {
                    .gradient-text {
                        background: linear-gradient(135deg, #6F66FF 0%, #BCFF2F 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    }
                }
            `}</style>
        </div>
    );
};

export default Hero;


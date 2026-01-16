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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 3.5, ease: "easeOut" }}
                    >
                        <h1 className="text-[9.5vw] sm:text-[9vw] md:text-[8.5vw] font-black font-syne leading-[0.8] tracking-tighter uppercase gradient-text grad-1">
                            IDEATE
                        </h1>
                    </motion.div>

                    {/* INNOVATE */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 4.5, ease: "easeOut" }}
                        className="-mt-1 md:-mt-4 ml-[6vw] sm:ml-[8vw] md:ml-[10vw]"
                    >
                        <h1 className="text-[9.5vw] sm:text-[9vw] md:text-[8.5vw] font-black font-syne leading-[0.8] tracking-tighter uppercase gradient-text grad-2">
                            INNOVATE
                        </h1>
                    </motion.div>

                    {/* INCUBATE */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 5.5, ease: "easeOut" }}
                        className="-mt-1 md:-mt-4 ml-[12vw] sm:ml-[16vw] md:ml-[20vw]"
                    >
                        <h1 className="text-[9.5vw] sm:text-[9vw] md:text-[8.5vw] font-black font-syne leading-[0.8] tracking-tighter uppercase gradient-text grad-3">
                            INCUBATE
                        </h1>
                    </motion.div>

                </div>
            </motion.div>

            {/* Bottom Scroll Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 6.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group z-20"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="relative flex flex-col items-center">
                    <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden rounded-full">
                        <motion.div
                            className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#BCFF2F] to-transparent shadow-[0_0_10px_#BCFF2F]"
                            animate={{
                                y: ["100%", "-200%"]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>

                    <div className="absolute -top-6 flex flex-col items-center">
                        {[0, 1].map((i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    opacity: [0, 1, 0],
                                    y: [10, -15],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.5,
                                    ease: "easeOut"
                                }}
                                className="absolute"
                            >
                                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L7 1L13 7" stroke="#BCFF2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            <style jsx>{`
                .gradient-text {
                    background: linear-gradient(
                        90deg, 
                        #6F66FF 0%, 
                        #A5B6FF 25%, 
                        #BCFF2F 50%, 
                        #A5B6FF 75%, 
                        #6F66FF 100%
                    );
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    display: inline-block;
                    white-space: nowrap;
                    animation: gradient-flow 12s linear infinite;
                }

                .grad-1 { animation-delay: 0s; }
                .grad-2 { animation-delay: 4s; }
                .grad-3 { animation-delay: 8s; }

                @keyframes gradient-flow {
                    0% {
                        background-position: 0% center;
                    }
                    100% {
                        background-position: 200% center;
                    }
                }
                
                @media (max-width: 768px) {
                    .gradient-text {
                        background: linear-gradient(
                            135deg, 
                            #6F66FF 0%, 
                            #A5B6FF 50%, 
                            #BCFF2F 100%
                        );
                        background-size: 200% auto;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        animation: gradient-flow 8s linear infinite;
                    }
                    .grad-1 { animation-delay: 0s; }
                    .grad-2 { animation-delay: 2.6s; }
                    .grad-3 { animation-delay: 5.2s; }
                }
            `}</style>
        </div >
    );
};

export default Hero;


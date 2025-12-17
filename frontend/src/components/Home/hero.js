import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import maskImage from '../../assets/startup_expo.JPG';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yMove = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Text Rotator Logic
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const rotatingTexts = ["IDEA", "INNOVATE", "INCUBATE"];

    useEffect(() => {
        const updateMousePosition = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }, 2000); // Change text every 2 seconds
        return () => clearInterval(interval);
    }, []);

    // Staggered Text setup
    const tagline = "BITS Pilani Hyderabad Campus";
    const taglineWords = tagline.split(" ");

    return (
        <div ref={containerRef} className="relative w-full min-h-[110vh] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] text-white">

            {/* 1. Background Grain (Global CSS handles it, but adding local for specific texture if needed) */}

            {/* 2. Mesh Gradients (Nebulae) */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-ecell-secondary/15 blur-[150px] rounded-full mix-blend-screen pointer-events-none animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-ecell-primary/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none animate-pulse-slow"></div>

            {/* 3. Grid & Glow */}
            {/* Base faint grid */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
            {/* Active glow grid masked by mouse */}
            <div
                className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none transition-opacity duration-200"
                style={{
                    maskImage: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
                }}
            ></div>

            {/* Content Content Content */}
            <motion.div
                className="relative z-10 flex flex-col items-center text-center w-full"
                style={{ y: yMove, opacity: opacityFade }}
            >
                {/* PART 1: Top Content (Constrained width) */}
                <div className="max-w-7xl px-4 w-full flex flex-col items-center">
                    {/* 4. "E-CELL" Main Title: Outline to Filled */}
                    <div className="relative mb-4 md:mb-8">
                        {/* The Fill Animation Layer */}
                        <motion.h1
                            className="text-7xl md:text-[10rem] font-bold font-syne leading-none tracking-tighter text-transparent bg-clip-text bg-white bg-gradient-to-b from-white to-gray-400 relative z-10"
                            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
                            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                            transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                        >
                            E-CELL
                        </motion.h1>

                        {/* The Outline Layer (Always visible behind or initially) */}
                        <h1
                            className="absolute inset-0 text-7xl md:text-[10rem] font-bold font-syne leading-none tracking-tighter text-transparent z-0 select-none"
                            style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)' }}
                        >
                            E-CELL
                        </h1>
                    </div>

                    {/* 5. Staggered Subheading Reveal */}
                    <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mb-12 overflow-hidden">
                        {taglineWords.map((word, i) => (
                            <motion.span
                                key={i}
                                className="text-xl md:text-3xl font-manrope font-light text-gray-300 tracking-wide"
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.8 + (i * 0.1), ease: "easeOut" }}
                                whileHover={{ scale: 1.05, fontWeight: 500, color: "#fff" }} // Weight shift simulation
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* PART 2: Middle Content (Full Width / No max-w constraint) */}
                {/* 6. Masked Rotating Text */}
                <motion.div
                    className="relative w-full overflow-hidden hidden md:block min-h-[15vw] flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <div className="relative group cursor-pointer w-full text-center">
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={rotatingTexts[currentTextIndex]}
                                initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -50, filter: "blur(20px)" }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="text-[11vw] font-black font-syne leading-none tracking-tighter text-center uppercase transition-all duration-700 hover:tracking-wide inline-block relative py-4"
                            >
                                {/* Background Image Mask */}
                                <span
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-clip-text text-transparent animate-pan-image"
                                    style={{
                                        backgroundImage: `url(${maskImage}), linear-gradient(135deg, #ffffff 0%, #808080 100%)`,
                                        backgroundSize: '120% auto, cover',
                                        backgroundPosition: 'center 40%, center',
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                        zIndex: 10
                                    }}
                                >
                                    {rotatingTexts[currentTextIndex]}
                                </span>
                                {/* Stroke/Outline for definition */}
                                <span className="relative z-20 text-transparent select-none" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                                    {rotatingTexts[currentTextIndex]}
                                </span>
                            </motion.h2>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Mobile version of INNOVATE (smaller) */}
                <motion.div
                    className="relative w-full max-w-5xl mx-auto overflow-hidden block md:hidden mt-8 px-4 h-24 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={rotatingTexts[currentTextIndex]}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                            className="text-5xl font-black font-syne leading-none tracking-tighter text-center uppercase text-transparent bg-clip-text bg-cover absolute"
                            style={{
                                backgroundImage: `url(${maskImage}), linear-gradient(135deg, #ffffff 0%, #808080 100%)`, // Fallback added
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text'
                            }}>
                            {rotatingTexts[currentTextIndex]}
                        </motion.h2>
                    </AnimatePresence>
                </motion.div>


                {/* PART 3: Bottom Content (Constrained width) */}
                <div className="max-w-7xl px-4 w-full flex flex-col items-center">
                    {/* Animated Line with Gradients */}
                    <motion.div
                        className="w-full max-w-[40rem] h-px relative mt-16 bg-white/10"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                    >
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-ecell-primary to-transparent blur-[1px]"></div>
                    </motion.div>

                    {/* Taglines with Neon Glow */}
                    <motion.p
                        className="mt-8 text-lg md:text-xl font-manrope text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                    >
                        <span className="text-ecell-primary drop-shadow-[0_0_8px_rgba(212,255,0,0.6)]">Idea.</span>{' '}
                        <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">Innovate.</span>{' '}
                        <span className="text-ecell-secondary drop-shadow-[0_0_8px_rgba(107,95,255,0.6)]">Incubate.</span>
                    </motion.p>
                </div>

            </motion.div>

            <style jsx>{`
                @keyframes pan-image {
                    0% { background-position: 50% 50%; }
                    50% { background-position: 60% 60%; }
                    100% { background-position: 50% 50%; }
                }
                .animate-pan-image {
                    animation: pan-image 20s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Hero;

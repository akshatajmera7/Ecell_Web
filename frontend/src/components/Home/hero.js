import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden p-0 m-0 bg-ecell-bg" style={{ pointerEvents: 'auto' }}>
            {/* Sparkles Background - More Visible */}


            {/* Content */}
            <div className="relative z-20 text-center px-6 flex flex-col items-center" style={{ pointerEvents: 'auto' }}>
                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-syne text-center leading-tight mb-2 text-ecell-text"
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    E - Cell
                </motion.h1>
                <motion.h2
                    className="text-xl md:text-3xl lg:text-4xl font-manrope font-light text-center mt-4 text-gray-300 tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    BITS Pilani Hyderabad Campus
                </motion.h2>


                {/* Gradients below animated line */}
                <motion.div
                    className="w-full max-w-[40rem] h-40 relative mt-8"
                    style={{ pointerEvents: 'none' }}
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                >
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-ecell-secondary to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-ecell-secondary to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-ecell-primary to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-ecell-primary to-transparent h-px w-1/4" />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-ecell-bg [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;

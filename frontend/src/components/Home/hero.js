import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden p-0 m-0 bg-ecell-bg" style={{ pointerEvents: 'auto' }}>
            {/* Sparkles Background - More Visible */}
            

            {/* Content */}
            <div className="relative z-20 text-center px-6 flex flex-col items-center" style={{ pointerEvents: 'auto' }}>
                <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-center leading-tight mb-0 text-ecell-text"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    E - Cell
                </motion.h1>
                <motion.h2
                    className="text-xl md:text-2xl lg:text-3xl text-center mt-2 text-ecell-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    BITS Pilani Hyderabad Campus
                </motion.h2>
                
                
                {/* Gradients below animated line */}
                <div className="w-full max-w-[40rem] h-40 relative mt-4" style={{ pointerEvents: 'none' }}>
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-ecell-secondary to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-ecell-secondary to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-ecell-primary to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-ecell-primary to-transparent h-px w-1/4" />
                    
                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-ecell-bg [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

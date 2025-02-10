import React from 'react';
import { motion } from 'framer-motion';
import videohp from '../../assets/vid2.mp4';

// Simple arrow icon component
const ArrowIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-5 h-5" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
);

// Simple chevron down icon component
const ChevronDown = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-8 h-8" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

const Hero = () => {
    const headingAnimation = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const subheadingAnimation = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
    };

    const buttonAnimation = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            transition: { duration: 0.5, delay: 0.8 }
        },
        hover: { 
            scale: 1.05,
            transition: { duration: 0.2 }
        }
    };

    const scrollIconAnimation = {
        y: [0, 10, 0],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    className="object-cover w-full h-full opacity-60"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={videohp} type="video/mp4" />
                </video>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black z-1" />

            {/* Main Content */}
            <div className="relative z-10 text-center text-white px-6 flex flex-col items-center max-w-4xl">
                <motion.h1
                    className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
                    variants={headingAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                        Launchpad 2025
                    </span>
                </motion.h1>

                <motion.h2
                    className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light mb-4"
                    variants={subheadingAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    Annual Entrepreneurship Summit of BITS Pilani Hyderabad Campus
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl"
                    variants={subheadingAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    21st - 23rd March 2025`
                </motion.p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <motion.a
                        href="/launchpad/events"
                        className="group flex items-center gap-2 px-8 py-3 bg-blue-600 rounded-full text-white font-medium hover:bg-blue-700 transition-all duration-300"
                        variants={buttonAnimation}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                    >
                        Register Now
                        <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                            <ArrowIcon />
                        </span>
                    </motion.a>
                    
                    <motion.a
                        href="/launchpad/passes"
                        className="group flex items-center gap-2 px-8 py-3 border-2 border-blue-600 rounded-full text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
                        variants={buttonAnimation}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                    >
                        Passes
                        <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                            <ArrowIcon />
                        </span>
                    </motion.a>
                </div>

                {/* Scroll Indicator */}
                <motion.div 
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
                    animate={scrollIconAnimation}
                >
                    <ChevronDown />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
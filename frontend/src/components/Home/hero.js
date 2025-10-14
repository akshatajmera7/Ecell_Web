import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';
import PrismaticBurst from '../PrismaticBurst';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 5000,
            once: true,
        });
    }, []);

    return (
        <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden p-0 m-0" style={{ backgroundColor: '#0C233C' }}>
            {/* Animated Background */}
            <div className="absolute inset-0 w-full h-full min-h-screen">
                <PrismaticBurst
                    animationType="rotate3d"
                    intensity={3}
                    speed={0.5}
                    distort={0}
                    paused={false}
                    offset={{ x: 0, y: 0 }}
                    hoverDampness={0}
                    rayCount={0}
                    mixBlendMode="screen"
                    colors={[]}
                />
            </div>
            
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 flex flex-col items-center" style={{ color: '#F5EDE4' }}>
                <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-tight mb-0"
                    style={{ color: '#F5EDE4', textShadow: '0 0 20px rgba(0,0,0,0.5)' }}
                >
                    E - Cell
                </motion.h1>
                <motion.h2
                    className="text-xl md:text-2xl lg:text-3xl font-light mt-2"
                    style={{ color: '#FD8916', textShadow: '0 0 15px rgba(0,0,0,0.5)' }}
                >
                    BITS Pilani Hyderabad Campus
                </motion.h2>
            </div>
        </div>
    );
};

export default Hero;

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';
import videohp from '../../assets/vid2.mp4';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 5000,
            once: true,
        });
    }, []);

    return (
        <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden p-0 m-0">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full min-h-screen">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={videohp} type="video/mp4" />
                </video>
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 flex flex-col items-center">
                <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-tight mb-0"
                >
                    E - Cell
                </motion.h1>
                <motion.h2
                    className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light mt-2"
                >
                    BITS Pilani Hyderabad Campus
                </motion.h2>
            </div>
        </div>
    );
};

export default Hero;

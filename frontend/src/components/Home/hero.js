import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';
import videohp from '../../assets/videohp.mp4';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const headingAnimation = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const subheadingAnimation = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    };

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-[-2]">
                <video
                    className="object-cover w-full h-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={videohp} type="video/mp4" />
                </video>
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

            {/* Content */}
            <div
                className="relative z-10 text-center text-white px-6 flex flex-col items-center"
                data-aos="fade-down"
                data-aos-easing="ease-in-out"
            >
                <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-tight mb-6"
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        letterSpacing: '-0.02em',
                    }}
                    variants={headingAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    E - Cell
                </motion.h1>
                <motion.h2
                    className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light"
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        letterSpacing: '0em',
                    }}
                    variants={subheadingAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    BITS Pilani Hyderabad Campus
                </motion.h2>
            </div>
        </div>
    );
};

export default Hero;
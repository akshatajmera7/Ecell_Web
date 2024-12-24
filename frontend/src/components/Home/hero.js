import React from 'react';
import { motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import videohp from '../../assets/videohp.mp4';

const Hero = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Trigger when 20% of the component is in view
    });

    const headingAnimation = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const subheadingAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    };

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black/60 to-black/90">
            <div className="absolute inset-0 z-[-1]">
                <video className="object-cover w-full h-full" autoPlay muted loop playsInline>
                    <source src={videohp} type="video/mp4" />
                </video>
            </div>
            <div 
                ref={ref} 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4"
            >
                <motion.h2
                    className="text-4xl sm:text-3xl font-bold uppercase tracking-wide text-white shadow-md"
                    variants={headingAnimation}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    E-Cell BITS Pilani Hyderabad Campus
                </motion.h2>
                <motion.p
                    className="text-lg sm:text-sm mt-4 text-gray-300 shadow-sm"
                    variants={subheadingAnimation}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    Empowering Entrepreneurs, Inspiring Innovation
                </motion.p>
            </div>
        </div>
    );
}

export default Hero;

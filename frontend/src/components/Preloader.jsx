import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CinematicText from './ui/CinematicText';

const Preloader = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Disable scrolling when preloader is active
        document.body.style.overflow = 'hidden';

        // Wait for the animation to complete before lifting the curtain
        // Animation duration is roughly 1.5s - 2s total including stagger
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2500); // 2.5s total display time

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Animation variants
    const slideUp = {
        initial: { top: 0 },
        exit: {
            top: "-100vh",
            transition: {
                duration: 1.2, // Duration of the curtain lift
                ease: [0.76, 0, 0.24, 1], // Custom cubic-bezier for "heavy" feel
                delay: 0.2
            }
        }
    };

    return (
        <AnimatePresence mode='wait' onExitComplete={() => {
            document.body.style.overflow = 'unset'; // Ensure scroll is enabled
            if (onComplete) onComplete();
        }}>
            {isVisible && (
                <motion.div
                    variants={slideUp}
                    initial="initial"
                    exit="exit"
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0E1012] h-screen w-screen"
                >
                    {/* Text Container */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }} // Fade out text faster than background
                        className="flex items-center relative"
                    >
                        <CinematicText
                            text="E-CELL"
                            className="text-white text-6xl md:text-8xl lg:text-9xl font-bold font-heading tracking-tighter"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;

import React from 'react';
import { motion } from 'framer-motion';

const CinematicText = ({ text = "E-CELL", className = "" }) => {
    // Split text into characters
    const letters = text.split("");

    const containerVariants = {
        hidden: {
            letterSpacing: "10px",
            transition: { staggerChildren: 0.1 }
        },
        visible: {
            letterSpacing: "-2px",
            transition: {
                staggerChildren: 0.1,
                duration: 1.2,
                ease: [0.25, 1, 0.5, 1] // Quart easing for the spacing
            }
        }
    };

    const letterVariants = {
        hidden: {
            opacity: 0,
            scale: 1.5,
            filter: "blur(10px)",
            y: 20 // Slight y-offset for better effect
        },
        visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1] // Quart easing
            }
        }
    };

    return (
        <motion.div
            className={`flex items-center justify-center ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {letters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={letterVariants}
                    className="inline-block" // Required for transform animations on spans
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default CinematicText;

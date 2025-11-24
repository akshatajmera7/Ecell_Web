import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlurImage = ({ src, alt, className, style }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`relative overflow-hidden ${className}`} style={style}>
            <motion.img
                src={src}
                alt={alt}
                className={`w-full h-full object-cover transition-all duration-700 ${isLoading ? 'scale-110 blur-xl grayscale' : 'scale-100 blur-0 grayscale-0'
                    }`}
                onLoad={() => setIsLoading(false)}
            />
        </div>
    );
};

export default BlurImage;

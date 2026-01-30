import React from 'react';
import { cn } from '../../lib/utils'; // Assuming a utils file exists for class merging, or I'll define a simple helper if not.

// Simple class merger if 'cn' is not available in the project yet, 
// but usually standard in these types of setups. 
// I'll assume standard Tailwind merge behavior or just use template literals if I can't find it.
// Checking file structure, I saw 'lib' folder in Step 4.
// Let's check if lib/utils.js exists or create a local helper.

const BentoGrid = ({ className, children }) => {
    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-4 max-w-7xl mx-auto ${className || ''}`}
        >
            {children}
        </div>
    );
};

const BentoItem = ({
    className,
    title,
    description,
    image,
    href,
}) => {
    const Component = href ? 'a' : 'div';

    return (
        <Component
            href={href}
            className={`
        group relative overflow-hidden rounded-xl 
        border border-white/10 bg-white/5 backdrop-blur-md
        hover:border-emerald-500/50 transition-colors duration-300 ease-out
        ${className || ''}
      `}
        >
            {/* Background Image with Zoom Effect */}
            {image && (
                <div className="absolute inset-0 h-full w-full">
                    <img
                        loading="lazy" src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                </div>
            )}

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 flex flex-col justify-end h-full w-full">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-1 tracking-tight group-hover:text-emerald-400 transition-colors">
                    {title}
                </h3>
                {description && (
                    <p className="font-body text-sm text-gray-300 line-clamp-2">
                        {description}
                    </p>
                )}
            </div>
        </Component>
    );
};

export { BentoGrid, BentoItem };

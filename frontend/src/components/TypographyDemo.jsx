import React from 'react';

const TypographyDemo = () => {
    return (
        <div className="min-h-screen bg-ecell-bg p-8 md:p-16 flex flex-col gap-12 items-start justify-center">

            {/* Section Label */}
            <div className="text-sm font-body text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-2 w-full">
                Typography System v1.0
            </div>

            {/* Hero Heading (H1) */}
            <div className="space-y-4">
                <p className="text-xs text-gray-600 font-mono mb-2">H1 / Hero • Space Grotesk • Tracking Tighter</p>
                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.1]">
                    Futuristic <br />
                    <span className="text-gradient">Minimalism.</span>
                </h1>
            </div>

            {/* Subheading (H2) */}
            <div className="space-y-4">
                <p className="text-xs text-gray-600 font-mono mb-2">H2 / Section Title • Space Grotesk</p>
                <h2 className="font-heading text-3xl md:text-5xl font-semibold text-white tracking-tight">
                    Building the next generation of <span className="text-emerald-400">innovators</span>.
                </h2>
            </div>

            {/* Body Text */}
            <div className="space-y-4 max-w-2xl">
                <p className="text-xs text-gray-600 font-mono mb-2">Body / Paragraph • Inter • Text Gray 400</p>
                <p className="font-body text-lg md:text-xl text-gray-400 leading-relaxed">
                    The E-Cell BITS Hyderabad website uses a "Deep Space" aesthetic combined with high-readability typography.
                    We use <span className="text-white font-medium">Space Grotesk</span> for headings to give a geometric, tech-forward feel,
                    while <span className="text-white font-medium">Inter</span> ensures that long-form content remains legible and professional across all devices.
                </p>
            </div>

            {/* Interactive / Gradient Text */}
            <div className="space-y-4">
                <p className="text-xs text-gray-600 font-mono mb-2">Utility • Text Gradient</p>
                <div className="text-4xl md:text-6xl font-heading font-bold">
                    <span className="text-gradient">Ignite. Scale. Disrupt.</span>
                </div>
            </div>

        </div>
    );
};

export default TypographyDemo;

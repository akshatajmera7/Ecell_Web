
import React from 'react';

const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1] bg-black">
            {/* Soft Ambient Bubbles - Optimized with CSS Animations */}

            {/* Top Right - Purple */}
            <div className="absolute -top-[10%] -right-[5%] w-[60vw] h-[60vw] bg-[#6F66FF]/10 rounded-full blur-[120px] md:blur-[160px] animate-float-1" />

            {/* Middle Left - Lime */}
            <div className="absolute top-[30%] -left-[10%] w-[50vw] h-[50vw] bg-[#BCFF2F]/5 rounded-full blur-[100px] md:blur-[140px] animate-float-2" style={{ animationDelay: '2s' }} />

            {/* Bottom Right - Deep Purple/Blue */}
            <div className="absolute -bottom-[15%] right-[10%] w-[55vw] h-[55vw] bg-[#6F66FF]/8 rounded-full blur-[130px] md:blur-[170px] animate-float-3" style={{ animationDelay: '5s' }} />

            {/* Center - Subtle White Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-white/2 rounded-full blur-[150px] animate-pulse-slow" />

            {/* Grain Overlay for Texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
    );
};

export default GlobalBackground;

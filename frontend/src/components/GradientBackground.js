import React from 'react';

export default function GradientBackground({ children }) {
    return (
        <div className="relative min-h-screen w-full bg-black">

            {/* Fixed Gradient Layer - Always visible regardless of scroll */}
            <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">

                {/* Left Purple/Indigo Glow */}
                <div
                    className="absolute w-[800px] h-[800px] -left-[200px] top-0 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(107,96,254,0.32) 0%, rgba(59,51,137,0.22) 40%, transparent 70%)',
                        filter: 'blur(120px)',

                    }}
                />

                {/* Right Green/Yellow Glow */}
                <div
                    className="absolute w-[800px] h-[800px] -right-[200px] top-[100px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(170,220,0,0.30) 0%, rgba(100,140,0,0.20) 40%, transparent 70%)',
                        filter: 'blur(120px)',

                    }}
                />

                {/* Bottom Left Purple Glow */}
                <div
                    className="absolute w-[600px] h-[600px] left-[10%] bottom-[20%] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(107,96,254,0.30) 0%, rgba(59,51,137,0.20) 40%, transparent 70%)',
                        filter: 'blur(140px)',

                    }}
                />

                {/* Bottom Right Green Glow */}
                <div
                    className="absolute w-[600px] h-[600px] right-[5%] bottom-0 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(190,255,0,0.30) 0%, rgba(100,150,0,0.20) 40%, transparent 70%)',
                        filter: 'blur(140px)',

                    }}
                />
            </div>

            {/* Page Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}

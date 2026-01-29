import React from "react";
import heroImg from "../../assets/ecell/lp_hero_landing.png";

// Simple arrow icon component
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden font-syne">
      {/* 1. Left Indigo Glow */}
      <div className="absolute w-[480px] h-[480px] left-[-180px] top-[60px] rounded-full
      bg-[linear-gradient(180deg,#0F0D23,#3B3389)] blur-[160px] pointer-events-none opacity-80" />

      {/* 2. Right Green Glow - Intensified Olive */}
      <div className="absolute w-[600px] h-[600px] right-[-220px] top-[150px] rounded-full
      bg-[radial-gradient(circle,rgba(170,220,0,0.4),rgba(58,74,0,0.7),transparent_75%)]
      blur-[180px] pointer-events-none" />

      {/* 3. Bottom CTA Glow */}
      <div className="absolute w-[500px] h-[300px] left-1/2 bottom-[-100px]
      -translate-x-1/2 rounded-full
      bg-[radial-gradient(circle,rgba(190,255,0,0.6),transparent_70%)]
      blur-[100px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-6 flex flex-col items-center max-w-6xl">
        <div className="w-full mb-8">
          <img
            src={heroImg}
            alt="Launchpad '26"
            className="w-full h-auto object-contain"
          />
        </div>

<<<<<<< HEAD
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-ecell-text-muted font-light mb-8 transition-transform duration-200">
          An Entrepreneurship Workshop <span className="text-ecell-primary font-medium"></span>
        </h2>

        <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl transition-transform duration-200 font-medium tracking-wide">
          3rd - 5th April 2026
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
=======
        {/* Center CTA Button - Thin Neon Style */}
        <div className="flex justify-center mt-8">
>>>>>>> divvij-updates
          <a
            href="/launchpad/schedules"
            className="group flex items-center gap-4 px-6 py-2.5 text-black text-xl font-bold rounded-full 
                     shadow-[0_0_40px_rgba(203,243,39,0.4)] hover:shadow-[0_0_60px_rgba(203,243,39,0.6)] 
                     hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: '#CBF327' }}
          >
<<<<<<< HEAD
            Check Out the Schedule
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              <ArrowIcon />
            </span>
          </a>

          {/* TEMPORARILY HIDDEN - Uncomment to restore */}
          {/* <a
            href="/launchpad/passes"
            className="group flex items-center gap-3 px-10 py-4 border-2 border-ecell-secondary text-ecell-secondary text-lg font-bold rounded-full 
                     hover:bg-ecell-secondary hover:text-white shadow-[0_0_15px_rgba(107,95,255,0.2)] 
                     hover:shadow-[0_0_25px_rgba(107,95,255,0.5)] hover:scale-105 transition-all duration-300"
          >
            Get Your Passes Now !!
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              <ArrowIcon />
=======
            Schedule
            <span className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
>>>>>>> divvij-updates
            </span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;

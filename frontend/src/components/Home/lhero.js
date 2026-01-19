import React from "react";
import videohp from "../../assets/bgvid1.mp4";

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

// Simple chevron down icon component


const Hero = () => {
  // Fixed scale to 1 to remove scroll animation
  const scale = 1;

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div
        className="absolute inset-0 z-0"
        style={{
          opacity: 1, // Fixed opacity
          transition: "opacity 0.5s ease-in-out",
        }}
      >
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

      {/* Gradient Overlay - Intensified */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ecell-bg/50 to-ecell-bg pointer-events-none" />

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ecell-secondary/30 rounded-full blur-[128px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ecell-primary/20 rounded-full blur-[128px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main Content */}
      <div
        className="relative z-10 text-center text-white px-6 flex flex-col items-center max-w-5xl"
        style={{
          transform: `scale(1)`,
          opacity: 1,
        }}
      >
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold mb-6 transition-transform duration-200 drop-shadow-[0_0_15px_rgba(107,95,255,0.5)]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-ecell-secondary via-white to-ecell-primary animate-gradient-x">
            Launchpad 2026
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl text-ecell-text-muted font-light mb-8 transition-transform duration-200">
          Annual Entrepreneurship Summit of <span className="text-ecell-primary font-medium">BITS Pilani Hyderabad Campus</span>
        </h2>

        <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl transition-transform duration-200 font-medium tracking-wide">
          3rd - 5th April 2026
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <a
            href="/launchpad/schedules"
            className="group flex items-center gap-3 px-10 py-4 bg-ecell-primary text-black text-lg font-bold rounded-full 
                     shadow-[0_0_20px_rgba(212,255,0,0.4)] hover:shadow-[0_0_30px_rgba(212,255,0,0.6)] 
                     hover:scale-105 transition-all duration-300"
          >
            Check Out the Schedule
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              <ArrowIcon />
            </span>
          </a>

          <a
            href="/launchpad/passes"
            className="group flex items-center gap-3 px-10 py-4 border-2 border-ecell-secondary text-ecell-secondary text-lg font-bold rounded-full 
                     hover:bg-ecell-secondary hover:text-white shadow-[0_0_15px_rgba(107,95,255,0.2)] 
                     hover:shadow-[0_0_25px_rgba(107,95,255,0.5)] hover:scale-105 transition-all duration-300"
          >
            Get Your Passes Now !!
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              <ArrowIcon />
            </span>
          </a>
        </div>

        {/* Scroll Indicator */}

      </div>
    </div>
  );
};

export default Hero;

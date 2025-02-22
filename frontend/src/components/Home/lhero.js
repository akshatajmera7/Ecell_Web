import React, { useState, useEffect } from "react";
import videohp from "../../assets/vid2.mp4";
import { FaQq } from "react-icons/fa";

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
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = (event) => {
      const currentScrollY = window.scrollY;

      setScale((prevScale) => prevScale + 1);

      if (event.deltaY > 0) {
        setScale((prevScale) => Math.min(prevScale + 0.1, 25));
        if (scale > 2) {
          console.log("scrolled down");
        }
      } else {
        // setScale((prevScale) => Math.max(prevScale - 0.2, 0));
        setScale((prevScale) => Math.max(prevScale - 1.5, 1));
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div
        className="absolute inset-0 z-0"
        style={{
          opacity: `${Math.min(20 + scale * 3.2, 100) / 100}`, // Start at 20%, reach 100% at scale >= 25
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 " />

      {/* Main Content */}
      <div
        className="relative z-10 text-center text-white px-6 flex flex-col items-center max-w-4xl"
        style={{
          transform: `scale(${scale})`,
          opacity: `${scale < 25 ? 1 / scale : 0}`,
        }}
      >
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 transition-transform duration-200">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Launchpad 2025
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light mb-4 transition-transform duration-200">
          Annual Entrepreneurship Summit of BITS Pilani Hyderabad Campus
        </h2>

        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl transition-transform duration-200">
          21st - 23rd March 2025
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="/launchpad/events"
            className="group flex items-center gap-2 px-8 py-3 bg-blue-600 rounded-full text-white font-medium hover:bg-blue-700 transition-all duration-300"
          >
            Register Now
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              <ArrowIcon />
            </span>
          </a>

          <a
            href="/launchpad/passes"
            className="group flex items-center gap-2 px-8 py-3 border-2 border-blue-600 rounded-full text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Passes
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

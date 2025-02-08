import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LaunchPadLanding = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-slate-950 via-indigo-950 to-black overflow-hidden">
      {/* Shared Particle System */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `hsl(${220 + Math.random() * 40}, ${80 + Math.random() * 20}%, ${70 + Math.random() * 20}%)`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `float-particle ${10 + Math.random() * 20}s infinite ${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8"
        >
          <h1 className="text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 tracking-tight animate-gradient-x">
            Launchpad 2025
          </h1>
          <p className="text-2xl sm:text-3xl text-blue-100 font-light">
            Annual Entrepreneurship Summit of BITS Pilani Hyderabad Campus
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LaunchPadLanding;

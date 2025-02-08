import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LaunchPadLanding = () => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setMousePosition({
  //       x: (e.clientX / window.innerWidth) * 2 - 1,
  //       y: (e.clientY / window.innerHeight) * 2 - 1,
  //     });
  //   };
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-slate-950 via-indigo-950 to-black overflow-hidden">
      {/* Refined Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `hsl(${220 + Math.random() * 40}, 85%, 75%)`,
              opacity: Math.random() * 0.5 + 0.1,
              transform: `scale(${Math.random() * 0.5 + 0.5})`,
              animation: `twinkle ${2 + Math.random() * 4}s infinite ${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Glow Effect */}
      <div
        className="absolute inset-0 bg-gradient-radial from-indigo-500/10 via-violet-500/5 to-transparent blur-3xl"
        style={{
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.42, 0, 0.58, 1],
                staggerChildren: 0.3,
              },
            },
          }}
          className="space-y-8"
        >
          {/* Title */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-200 to-indigo-300 animate-text-shimmer tracking-tighter"
          >
            Our Events
          </motion.h1>

          {/* Year Display */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative group"
          >
            <span className="text-4xl sm:text-5xl font-semibold text-white/90 tracking-widest group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-blue-300 transition-all duration-500">
            Fueling Visionaries, Igniting Change            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Add required styles to head
const styles = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.1; transform: scale(0.6); }
    50% { opacity: 0.6; transform: scale(1); }
  }

  @keyframes text-shimmer {
    0% { background-position: 200% 50%; }
    100% { background-position: -200% 50%; }
  }

  .animate-text-shimmer {
    background-size: 400% auto;
    animation: text-shimmer 8s linear infinite;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default LaunchPadLanding;
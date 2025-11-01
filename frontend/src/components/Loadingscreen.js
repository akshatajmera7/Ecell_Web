// LoadingScreen.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2500); // 2.5 seconds duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 flex items-center justify-center bg-ecell-bg z-[9999] overflow-hidden"
          style={{ pointerEvents: 'none' }}
        >
          <div className="relative flex items-center justify-center">
            {/* Outline text */}
            <div
              className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-extrabold text-transparent leading-none tracking-wider select-none"
              style={{ 
                WebkitTextStroke: "2px #ffffff",
                paintOrder: "stroke fill"
              }}
            >
              E-CELL
            </div>

            {/* Wave-filled duplicate text - Absolutely positioned on top */}
            <div 
              className="absolute inset-0 flex items-center justify-center overflow-hidden wave-fill"
            >
              <span 
                className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-extrabold text-ecell-text leading-none tracking-wider select-none"
                style={{ WebkitTextFillColor: "#ffffff" }}
              >
                E-CELL
              </span>
            </div>
          </div>

          <style>{`
            .wave-fill {
              animation: waveRise 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }

            @keyframes waveRise {
              0% {
                clip-path: inset(100% 0 0 0);
              }
              100% {
                clip-path: inset(0 0 0 0);
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// LoadingScreen.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2500); // total duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="fixed inset-0 flex items-center justify-center bg-[#0C233C] z-[9999]"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%"],
              color: ["transparent", "#ffffff"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            style={{
              WebkitTextStroke: "2px white",
            }}
          >
            E-CELL
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

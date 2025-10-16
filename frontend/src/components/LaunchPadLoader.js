import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LaunchPadLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 flex items-center justify-center bg-[#0C233C] z-[9999] overflow-hidden"
        >
          {/* Smoke Text */}
          <motion.h1
            className="absolute text-6xl md:text-8xl font-bold text-[#F5EDE4] tracking-wide"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: [0, 0.3, 1], y: [40, 0, -10] }}
            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
            style={{
              textShadow:
                "0 0 10px rgba(253,137,22,0.6), 0 0 20px rgba(253,137,22,0.4)",
            }}
          >
            LaunchPad
          </motion.h1>

          {/* Rocket */}
          <motion.div
            initial={{ x: "-20vw", y: "40vh", rotate: -45, scale: 1 }}
            animate={{ x: "50vw", y: "-40vh", rotate: 45, scale: 1.2 }}
            transition={{ duration: 2.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-5xl md:text-7xl"
          >
            🚀
          </motion.div>

          {/* Rocket Trail (Smoke Path) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.2, 0.6, 0], scale: [0.8, 1.5, 1.8] }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute bottom-16 left-16 w-24 h-24 rounded-full bg-[#FD8916] blur-3xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

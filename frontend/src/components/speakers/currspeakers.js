import React from "react";
import { motion } from "framer-motion";

const CurrentSpeakers = () => {
  return (
    <div className="relative w-full bg-black py-12 md:py-24 overflow-hidden font-poppins">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Launchpad 2026 Speakers - Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-white tracking-tighter mb-3 md:mb-4">
            Launchpad 2026 <span className="text-[#d4ff00] drop-shadow-[0_0_20px_rgba(212,255,0,0.3)]">Speakers</span>
          </h2>
          <div className="h-1 md:h-1.5 w-16 md:w-24 bg-gradient-to-r from-[#6b5fff] to-[#d4ff00] mx-auto rounded-full mb-8 md:mb-12" />

          {/* Coming Soon Box with Gradient Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block p-[1px] rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#6b5fff]/50 via-[#d4ff00]/50 to-[#6b5fff]/50"
          >
            <div className="px-8 py-6 md:px-16 md:py-10 rounded-2xl md:rounded-3xl bg-black">
              <p className="text-2xl sm:text-3xl md:text-5xl font-black text-[#6b5fff] tracking-tighter font-poppins">
                Coming Soon
              </p>
              <p className="text-[#d4ff00] mt-3 md:mt-4 text-sm md:text-lg font-poppins font-bold drop-shadow-[0_0_10px_rgba(212,255,0,0.4)]">Stay tuned for exciting announcements!</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ecell-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6b5fff]/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
};

export default CurrentSpeakers;


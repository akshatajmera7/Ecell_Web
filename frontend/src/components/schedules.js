import { motion } from "framer-motion";

const EventSchedule = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6b5fff]/20 rounded-full blur-[128px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4ff00]/10 rounded-full blur-[128px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl"
      >
        <span className="text-[#6b5fff] font-bold text-sm md:text-base uppercase tracking-[0.3em] mb-4 block">
          Launchpad 2026
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
          Schedule <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4ff00] to-white drop-shadow-[0_0_20px_rgba(212,255,0,0.3)]">
            Coming Soon
          </span>
        </h1>

        <div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12" />

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white mb-6">For any further information contact</h3>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div
              className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 transition-all duration-300"
            >
              <div className="p-2 rounded-full bg-[#6b5fff]/20 text-[#6b5fff]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-300">
                ecell@hyderabad.bits-pilani.ac.in
              </span>
            </div>

            <div
              className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 transition-all duration-300"
            >
              <div className="p-2 rounded-full bg-[#d4ff00]/20 text-[#d4ff00]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Shihab</span>
                <span className="text-gray-300">+91 9347270686</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EventSchedule;

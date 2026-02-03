import { ArrowUpRight } from "lucide-react";
import heroImg from "../../assets/ecell/lp_hero_landing.png";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[60vh] md:h-screen flex items-center justify-center overflow-hidden font-syne pt-12 md:pt-0 pb-12">
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
      <div className="relative z-10 text-center text-white px-6 flex flex-col items-center max-w-6xl mt-4 md:mt-0">
        <div className="w-full mb-2 md:mb-10">
          <img
            src={heroImg}
            alt="Launchpad '25"
            className="w-full h-auto object-contain scale-90 md:scale-100"
          />
        </div>

        {/* Center CTA Button - Compact Neon Style */}
        <div className="flex justify-center -mt-2 md:mt-4">
          <a
            href="/launchpad/schedules"
            className="group flex items-center gap-2.5 px-7 py-2.5 text-black text-lg md:text-xl font-bold rounded-full 
                     shadow-[0_0_20px_rgba(203,243,39,0.2)] hover:shadow-[0_0_40px_rgba(203,243,39,0.4)] 
                     hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: '#CBF327' }}
          >
            Schedule
            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

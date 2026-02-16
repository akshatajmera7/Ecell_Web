import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDownRight } from 'lucide-react';

const Frame4 = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full overflow-hidden font-syne -mt-20 py-24 pb-0">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[40%] h-[500px] bg-[#6B60FE]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-[40%] h-[400px] bg-[#CBF327]/5 blur-[150px] pointer-events-none rounded-full" />

      {/* CTA Full Width Section */}
      <div className="relative z-20 w-full py-24 md:py-36 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Massive Background Glow for "Full Screen Blue" feel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-r from-[#6B60FE]/30 via-[#6B60FE]/40 to-[#6B60FE]/30 blur-[250px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#6B60FE]/10 pointer-events-none" />

        <h2 className="text-white text-5xl md:text-[80px] font-bold mb-6 leading-tight tracking-tight relative z-10 drop-shadow-2xl">
          Secure Your Spot Now
        </h2>
        <h3 className="text-[#CBF327] text-5xl md:text-[80px] font-bold mb-14 leading-none tracking-tight relative z-10 drop-shadow-2xl">
          Limited Seats
        </h3>

        <button
          onClick={() => navigate('/launchpad/passes')}
          className="inline-flex items-center gap-4 bg-white px-14 py-5 rounded-full text-[#161616] text-xl font-black shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:bg-gray-50 transform hover:scale-110 active:scale-95 transition-all duration-300 group relative z-10"
        >
          Get Your Passes Now
          <ArrowDownRight className="w-8 h-8 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform stroke-[3px]" />
        </button>
      </div>

      {/* Stats Strip */}
      <div className="relative z-10 bg-[#CBF327] w-full py-16 md:py-20 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-[1300px] mx-auto w-full px-8 flex flex-wrap justify-between items-center gap-y-12 text-black">
          <div className="flex-1 min-w-[160px] md:min-w-[200px] flex flex-col items-center text-center group cursor-default px-4">
            <p className="text-[10px] md:text-[12px] font-black tracking-[0.25em] mb-2 uppercase opacity-50 group-hover:opacity-100 transition-opacity">ATTENDEES</p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-black leading-none tracking-tighter transition-all">25,000+</p>
          </div>
          <div className="flex-1 min-w-[160px] md:min-w-[200px] flex flex-col items-center text-center group cursor-default px-4">
            <p className="text-[10px] md:text-[12px] font-black tracking-[0.25em] mb-2 uppercase opacity-50 group-hover:opacity-100 transition-opacity">STARTUPS</p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-black leading-none tracking-tighter transition-all">1,000+</p>
          </div>
          <div className="flex-1 min-w-[160px] md:min-w-[200px] flex flex-col items-center text-center group cursor-default px-4">
            <p className="text-[10px] md:text-[12px] font-black tracking-[0.25em] mb-2 uppercase opacity-50 group-hover:opacity-100 transition-opacity">WORKSHOPS</p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-black leading-none tracking-tighter transition-all">20+</p>
          </div>
          <div className="flex-1 min-w-[160px] md:min-w-[200px] flex flex-col items-center text-center group cursor-default px-4">
            <p className="text-[10px] md:text-[12px] font-black tracking-[0.25em] mb-2 uppercase opacity-50 group-hover:opacity-100 transition-opacity">SPEAKERS</p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-black leading-none tracking-tighter transition-all">50+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frame4;

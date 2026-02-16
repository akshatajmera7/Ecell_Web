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
      <div className="relative z-20 w-full bg-[#6B60FE] border-y border-white/10 py-20 md:py-28 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Subtle inner gradient beams for premium feel */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />

        <h2 className="text-white text-4xl md:text-[64px] font-bold mb-4 leading-tight tracking-tight relative z-10">
          Secure Your Spot Now
        </h2>
        <h3 className="text-[#CBF327] text-4xl md:text-[64px] font-bold mb-12 leading-none tracking-tight relative z-10">
          Limited Seats
        </h3>

        <button
          onClick={() => navigate('/launchpad/passes')}
          className="inline-flex items-center gap-4 bg-white px-12 py-5 rounded-full text-[#161616] text-xl font-black shadow-2xl hover:bg-gray-50 transform hover:scale-105 active:scale-95 transition-all duration-300 group relative z-10"
        >
          Get Your Passes Now
          <ArrowDownRight className="w-7 h-7 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform stroke-[3px]" />
        </button>
      </div>

      {/* Stats Strip */}
      <div className="relative z-10 bg-[#CBF327] w-full py-20 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-[1100px] mx-auto w-full px-8 grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 text-black">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-default">
            <p className="text-[14px] font-black tracking-[0.25em] mb-3 uppercase opacity-60 group-hover:opacity-100 transition-opacity">ATTENDEES</p>
            <p className="text-5xl md:text-5xl lg:text-7xl font-black leading-none tracking-tighter transform group-hover:scale-110 transition-transform origin-left">25,000+</p>
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-default">
            <p className="text-[14px] font-black tracking-[0.25em] mb-3 uppercase opacity-60 group-hover:opacity-100 transition-opacity">STARTUPS</p>
            <p className="text-5xl md:text-5xl lg:text-7xl font-black leading-none tracking-tighter transform group-hover:scale-110 transition-transform origin-left">1,000+</p>
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-default">
            <p className="text-[14px] font-black tracking-[0.25em] mb-3 uppercase opacity-60 group-hover:opacity-100 transition-opacity">WORKSHOPS</p>
            <p className="text-5xl md:text-5xl lg:text-7xl font-black leading-none tracking-tighter transform group-hover:scale-110 transition-transform origin-left">20+</p>
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-default">
            <p className="text-[14px] font-black tracking-[0.25em] mb-3 uppercase opacity-60 group-hover:opacity-100 transition-opacity">SPEAKERS</p>
            <p className="text-5xl md:text-5xl lg:text-7xl font-black leading-none tracking-tighter transform group-hover:scale-110 transition-transform origin-left">50+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frame4;

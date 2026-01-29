import React from 'react';

const Frame4 = () => {
  return (
    <section className="relative w-full overflow-hidden font-syne -mt-20 py-20 pb-0">
      {/* Background Glow - Seamlesly continuing behind the card */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[700px] bg-[#6B60FE]/15 blur-[180px] pointer-events-none rounded-full" />

      {/* CTA Card Container */}
      <div className="relative z-20 w-full px-6 flex justify-center">
        <div className="bg-[#6B60FE] rounded-[40px] w-full max-w-[800px] h-[260px] flex flex-col items-center justify-center text-center shadow-2xl relative transition-all duration-500">
          <h2 className="text-white text-3xl md:text-[42px] font-medium mb-1 leading-none tracking-tight">
            Secure Your Spot Now
          </h2>
          <h3 className="text-[#CBF327] text-3xl md:text-[42px] font-medium mb-8 leading-none tracking-tight">
            Limited Seats
          </h3>
          <button className="inline-flex items-center gap-3 bg-white px-8 py-3 rounded-full text-[#161616] text-lg font-bold shadow-lg hover:scale-105 transition-all duration-300 group">
            Get Your Passes Now
            <span className="text-xl group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">↘</span>
          </button>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="relative z-10 bg-[#CBF327] w-full min-h-[200px] -mt-24 pt-36 pb-12">
        <div className="max-w-[1000px] mx-auto w-full px-8 grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8 text-black">
          <div className="flex flex-col items-start text-left">
            <p className="text-[12px] font-bold tracking-[0.2em] mb-1 uppercase">ATTENDEES</p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-none tracking-tighter">25,000+</p>
          </div>
          <div className="flex flex-col items-start text-left">
            <p className="text-[12px] font-bold tracking-[0.2em] mb-1 uppercase">STARTUPS</p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-none tracking-tighter">1,000+</p>
          </div>
<<<<<<< HEAD
          <div className="md:col-span-1 md:row-span-1">
            <StatCard title="WORKSHOPS" value="20+" className="h-full" />
=======
          <div className="flex flex-col items-start text-left">
            <p className="text-[12px] font-bold tracking-[0.2em] mb-1 uppercase">EVENTS</p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-none tracking-tighter">20+</p>
>>>>>>> divvij-updates
          </div>
          <div className="flex flex-col items-start text-left">
            <p className="text-[12px] font-bold tracking-[0.2em] mb-1 uppercase">SPEAKERS</p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-none tracking-tighter">50+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frame4;

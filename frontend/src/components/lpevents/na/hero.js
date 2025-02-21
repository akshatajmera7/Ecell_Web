import React from "react";

const ProductExplorer = () => {
  return (
    <div className="bg-black py-32 px-6 flex items-center justify-center min-h-[40vh]">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight text-white drop-shadow-lg">
          Networking Arena
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed tracking-wide max-w-3xl">
          An exclusive event bringing together startup founders, investors, VCs, and mentors for high-impact conversations and collaborations.
        </p>
        <button
          className="px-6 py-3 text-lg font-semibold bg-white hover:bg-gray-200 text-black rounded-2xl shadow-md transition-transform transform hover:scale-105"
          onClick={() => { window.location.href = "https://forms.gle/1jeb86bn24WBGDfU7"; }}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default ProductExplorer;
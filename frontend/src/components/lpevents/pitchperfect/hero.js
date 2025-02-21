import React from "react";


const ProductExplorer = () => {
  return (
    <div className="bg-black bg-gradient-to-t from-black to-blue-900 py-32 px-6 flex items-center justify-center min-h-[40vh]">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
          Pitch Perfect
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed tracking-wide max-w-3xl">
        The Ultimate Entrepreneurial Showdown
        </p>
        <button
  className="px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-2xl shadow-md transition-transform transform hover:scale-105"
  onClick={() => { window.location.href = "https://unstop.com/competitions/pitch-perfect-an-online-bussiness-plan-competition-launchpad-25-birla-institute-of-technology-and-sciences--1319979"; }}
>
  Register Now
</button>
      </div>
    </div>
  );
};

export default ProductExplorer;

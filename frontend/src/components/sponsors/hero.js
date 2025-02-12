import React from "react";

const ProductExplorer = () => {
  return (
    <div className="bg-black bg-gradient-to-t from-black to-blue-900 py-20 px-6 flex items-center justify-center h-auto">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        {/* Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
          Our Sponsors
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed tracking-wide md:max-w-xl">
          Sharing our vision, supporting our mission.
        </p>
      </div>
    </div>
  );
};

export default ProductExplorer;

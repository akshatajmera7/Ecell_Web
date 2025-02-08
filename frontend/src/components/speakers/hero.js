import React from 'react';

const ProductExplorer = () => {
  return (
    <div className="bg-black bg-gradient-to-t from-black to-blue-900 py-32 px-6 flex items-center justify-center h-[20vh]">
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <br></br>
        <br></br>
        <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
          Our Speakers
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed tracking-wide md:text-right md:max-w-xl mt-4 md:mt-0">
        Igniting conversations, sparking change.
        </p>
      </div>
    </div>
  );
};

export default ProductExplorer;
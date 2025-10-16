import React from 'react';

const ProductExplorer = () => {
  return (
    <div className="py-32 px-6 flex items-center justify-center h-[20vh]" style={{ backgroundColor: '#0C233C', color: '#F5EDE4' }}>
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-extrabold" style={{ color: '#F5EDE4', textShadow: '0 0 18px rgba(0,0,0,0.35)' }}>
          Our Team
        </h1>
        
  <p className="text-xl md:text-2xl leading-relaxed tracking-wide md:text-right md:max-w-xl mt-4 md:mt-0" style={{ color: 'rgba(245,237,228,0.85)' }}>
        Fueled by passion and united by purpose, we're here to make a difference.
        </p>
      </div>
    </div>
  );
};

export default ProductExplorer;
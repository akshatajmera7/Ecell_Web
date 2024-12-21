import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom'; 

const Initiatives = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const portfolioItems = [
    {
      name: 'Alex',
      type: 'Brand Identity',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      name: 'Elizabeth',
      type: 'Brand Identity',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      name: 'Molly',
      type: 'Brand Identity',
      image: 'https://via.placeholder.com/600x400',
    },
  ];
  const navigate = useNavigate();
  // Initialize AOS and setup auto carousel
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-8 relative">
      {/* Header Section */}
      <div
        className="max-w-4xl mx-auto mb-16 text-center"
        data-aos="fade-up"
      >
        <h1 className="text-6xl font-extrabold tracking-tight mb-6">
          Our Initiatives and Programs
        </h1>
        <p className="text-gray-400 text-xl leading-relaxed">
        We believe in the power of entrepreneurship to transform lives and communities. Our programs and initiatives provide the necessary support, resources, and mentorship to help aspiring entrepreneurs turn their dreams into reality, fostering innovation and driving economic growth.
        </p>
      </div>
      
      {/* Filter Button */}
      <div className="max-w-4xl mx-auto mb-12 flex justify-center">
      <button 
  className="px-6 py-2 rounded-full border-2 border-white text-white hover:bg-purple-900 transition-colors"
  onClick={() => navigate('/program')}
>
  Explore
</button>
      </div>

      {/* Portfolio Carousel */}
      <div
        className="max-w-6xl mx-auto relative overflow-hidden"
        data-aos="zoom-in"
      >
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="min-w-full px-4 animate-slide-up"
              data-aos="slide-up"
            >
              <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition-transform duration-2412">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-3xl font-bold text-white-500">{item.name}</h3>
                  <p className="text-gray-400 text-lg">{item.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => setActiveIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-gradient-to-r from-gray-900 via-black to-gray-900 hover:from-purple-500 hover:to-purple-500 transition-all text-2xl shadow-md"
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <button
          onClick={() => setActiveIndex((prev) => (prev + 1) % portfolioItems.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-gradient-to-r from-gray-900 via-black to-gray-900 hover:from-purple-500 hover:to-purple-500 transition-all text-2xl shadow-md"
          aria-label="Next slide"
        >
          &#8250;
        </button>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s forwards;
        }
      `}</style>
    </div>
  );
};

export default Initiatives;
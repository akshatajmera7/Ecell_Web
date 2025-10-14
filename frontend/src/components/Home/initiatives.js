import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom'; 

const Initiatives = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const portfolioItems = [
    {
      name: 'Speaker Sessions',
      image: '/ss.JPG',
    },
    {
      name: 'Networking Arena',
      image: '/na.png',
    },
    {
      name: 'LaunchPad',
      image: '/lp.png',
    },
    {
      name: 'Management Temptations',
      image: '/MT2.png',
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
  }, [portfolioItems.length]); // Add portfolioItems.length as a dependency

  return (
    <div className="min-h-screen p-8 relative" style={{ background: 'linear-gradient(to bottom, #0C233C, #296685, #0C233C)', color: '#F5EDE4' }}>
      {/* Header Section */}
      <div
        className="max-w-4xl mx-auto mb-16 text-center"
        data-aos="fade-up"
      >
        <h1 className="text-6xl font-extrabold tracking-tight mb-6" style={{ color: '#F5EDE4' }}>
          Our Initiatives and Programs
        </h1>
        <p className="text-xl leading-relaxed" style={{ color: '#F5EDE4', opacity: 0.8 }}>
        We believe in the power of entrepreneurship to transform lives and communities. Our programs and initiatives provide the necessary support, resources, and mentorship to help aspiring entrepreneurs turn their dreams into reality, fostering innovation and driving economic growth.
        </p>
      </div>
      
      {/* Filter Button */}
      <div className="max-w-4xl mx-auto mb-12 flex justify-center">
      <button 
  className="px-6 py-2 rounded-full border-2 transition-colors"
  style={{ 
    borderColor: '#FD8916', 
    color: '#F5EDE4',
    backgroundColor: 'transparent'
  }}
  onMouseEnter={(e) => e.target.style.backgroundColor = '#FD8916'}
  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
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
              <div className="rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition-transform duration-2412" style={{ backgroundColor: '#296685' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '1150px', height: '400px', objectFit: 'cover' }}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-3xl font-bold" style={{ color: '#F5EDE4' }}>{item.name}</h3>
                  <p className="text-lg" style={{ color: '#F5EDE4', opacity: 0.8 }}>{item.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => setActiveIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full transition-all text-2xl shadow-md"
          style={{ backgroundColor: '#FD8916', color: '#F5EDE4' }}
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <button
          onClick={() => setActiveIndex((prev) => (prev + 1) % portfolioItems.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full transition-all text-2xl shadow-md"
          style={{ backgroundColor: '#FD8916', color: '#F5EDE4' }}
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

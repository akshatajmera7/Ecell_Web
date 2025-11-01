import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom'; 

const Banner = () => {
  // Using IntersectionObserver to trigger animations on scroll
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,  // Trigger only once when the element comes into view
    threshold: 0.3,     // Trigger when 30% of the element is in view
  });

  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center h-screen text-white overflow-hidden bg-ecell-bg" style={{ pointerEvents: 'auto', zIndex: 1 }}>
      {/* Main Content */}
      <div className="relative text-center space-y-8" style={{ zIndex: 20, pointerEvents: 'auto' }}>
        {/* Text */}
        <h1
          ref={textRef}
          className={`text-4xl md:text-6xl font-bold transition-all duration-700 text-ecell-text ${
            textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Embrace Innovation, Achieve Extraordinary
        </h1>

        {/* Button */}
        <button
          className="px-8 py-4 text-lg font-semibold rounded-full transition-all bg-ecell-primary text-ecell-dark hover:bg-opacity-90 hover:shadow-xl hover:shadow-ecell-primary/30 cursor-pointer relative"
          onClick={() => navigate('/contact')}
          style={{ pointerEvents: 'auto', zIndex: 30 }}
        >
          Let's Connect
        </button>
      </div>
    </div>
  );
};

export default Banner;

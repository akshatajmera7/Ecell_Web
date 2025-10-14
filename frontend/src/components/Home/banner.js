import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom'; 

const Banner = () => {
  // Using IntersectionObserver to trigger animations on scroll
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,  // Trigger only once when the element comes into view
    threshold: 0.3,     // Trigger when 30% of the element is in view
  });

  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center h-screen text-white overflow-hidden" style={{ background: 'linear-gradient(to top, #296685, #0C233C, #0C233C)' }}>
      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Text */}
        <h1
          ref={textRef}
          className={`text-4xl md:text-6xl font-bold transition-all duration-700 ${
            textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ color: '#F5EDE4' }}
        >
          Embrace Innovation, Achieve Extraordinary
        </h1>

        {/* Button */}
        <button 
  className="px-8 py-4 text-lg rounded-full transition-colors" 
  style={{ 
    backgroundColor: '#FD8916', 
    color: '#F5EDE4' 
  }}
  onMouseEnter={(e) => e.target.style.backgroundColor = '#296685'}
  onMouseLeave={(e) => e.target.style.backgroundColor = '#FD8916'}
  onClick={() => navigate('/contact')}
>
  Let's Connect
</button>
      </div>
    </div>
  );
};

export default Banner;

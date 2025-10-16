import React, { useEffect, useRef } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Startup = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const scrollContainer = useRef(null);

  useEffect(() => {
    const scrollEffect = () => {
      if (scrollContainer.current) {
        const container = scrollContainer.current;
        container.scrollLeft += 2; // Increased speed
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0; // Reset to loop
        }
      }
    };

    const interval = setInterval(scrollEffect, 20); // Increased scroll speed
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (direction) => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const scrollAmount = 300; // Adjust the scroll amount as needed
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  const designers = [
    {
      name: 'Swiggy',
      role: 'Founded by Sriharsha Majety',
      image: '/majety.png',
    },
    {
      name: 'Sandisk',
      role: 'Co-Founded by Sanjay Mehrotra',
      image: '/mehrotra.png',
    },
    {
      name: 'BigBasket',
      role: 'Co-Founded by Hari Menon',
      image: '/menon.png',
    },
    {
      name: 'Groww',
      role: 'Co-Founded by Ishan Bansal',
      image: '/bansal.png',
    },
    {
      name: 'RedBus',
      role: 'Founded by Phanindra Sama',
      image: '/sama.png',
    },
    {
      name: 'MPL',
      role: 'Founded by Shubh Malhotra',
      image: '/malhotra.png',
    },
  ];

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#0C233C', color: '#F5EDE4' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center" data-aos="fade-down" data-aos-easing="ease-in-out">
          <h1 className="text-5xl font-bold mb-8 leading-tight" style={{ color: '#F5EDE4' }}>
            BITS Pilani: Fueling the Next Wave of Innovation.
          </h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#F5EDE4', opacity: 0.8 }}>
            Our university has a rich history of fostering innovation and entrepreneurship, as
            evidenced by the success of several notable startups founded by our alumni.
          </p>
        </div>

        {/* Scrollable Section with Arrows */}
        <div className="relative w-full">
          {/* Left Scroll Button */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full w-14 h-14 flex items-center justify-center text-4xl z-10"
            onClick={() => handleScroll('left')}
            style={{ backgroundColor: '#0C233C', color: '#F5EDE4', border: '1px solid #FD8916', cursor: 'pointer' }}
          >
            &#8249;
          </button>

          {/* Scrolling Content */}
          <div className="overflow-hidden whitespace-nowrap mx-16" ref={scrollContainer}>
            <div className="flex space-x-4">
              {designers.concat(designers).map((designer, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden min-w-[240px] transform hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: '#0C233C', border: '1px solid rgba(245, 237, 228, 0.15)' }}
                  data-aos="fade-up"
                  data-aos-delay={(index % 6) * 150}
                  data-aos-easing="ease-out-cubic"
                >
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={designer.image}
                      alt={designer.name}
                      style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg" style={{ color: '#F5EDE4' }}>{designer.name}</h3>
                    <p className="text-sm" style={{ color: '#F5EDE4', opacity: 0.8 }}>{designer.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Scroll Button */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full w-14 h-14 flex items-center justify-center text-4xl z-10"
            onClick={() => handleScroll('right')}
            style={{ backgroundColor: '#0C233C', color: '#F5EDE4', border: '1px solid #FD8916', cursor: 'pointer' }}
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Startup;

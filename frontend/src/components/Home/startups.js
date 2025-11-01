import React, { useEffect, useRef } from 'react';

const Startup = () => {

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

  // Manual scroll buttons removed as per request

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
    <div className="relative min-h-screen p-8 bg-ecell-bg text-ecell-text" style={{ pointerEvents: 'auto', zIndex: 1 }}>
      {/* Decorative particles background (pointer-events disabled) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `rgba(107, 95, 255, ${Math.random() * 0.3})`, // ecell-secondary tint
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-8 leading-tight text-ecell-text">
            BITS Pilani: Fueling the Next Wave of Innovation.
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-ecell-text opacity-80">
            Our university has a rich history of fostering innovation and entrepreneurship, as
            evidenced by the success of several notable startups founded by our alumni.
          </p>
        </div>

        {/* Scrollable Section without buttons (auto-scroll remains) */}
        <div className="relative w-full">
          {/* Scrolling Content */}
          <div className="overflow-hidden whitespace-nowrap px-2 sm:px-4 lg:px-6" ref={scrollContainer}>
            <div className="flex space-x-4">
              {designers.concat(designers).map((designer, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden min-w-[240px] md:min-w-[280px] lg:min-w-[320px] transform hover:scale-105 transition-transform duration-300 bg-ecell-dark border-2 border-ecell-secondary/20 hover:border-ecell-secondary"
                >
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={designer.image}
                      alt={designer.name}
                      style={{ width: '320px', height: '320px', objectFit: 'cover' }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg text-ecell-text">{designer.name}</h3>
                    <p className="text-sm text-ecell-text opacity-80">{designer.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for twinkle animation (non-Next style) */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.6); }
          50% { opacity: 0.6; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Startup;

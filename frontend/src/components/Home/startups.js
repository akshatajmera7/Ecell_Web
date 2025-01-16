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
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center" data-aos="fade-down" data-aos-easing="ease-in-out">
          <h1 className="text-5xl font-bold mb-8 leading-tight">
            BITS Pilani: Fueling the Next Wave of Innovation.
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our university has a rich history of fostering innovation and entrepreneurship, as
            evidenced by the success of several notable startups founded by our alumni.
          </p>
        </div>

        {/* Scroll Buttons */}
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full w-14 h-14 flex items-center justify-center text-4xl"
            onClick={() => handleScroll('left')}
            style={{ border: 'none', cursor: 'pointer' }}
          >
            &#8249;
          </button>
          <div className="overflow-hidden whitespace-nowrap" ref={scrollContainer}>
            <div className="flex space-x-4">
              {designers.concat(designers).map((designer, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-lg overflow-hidden min-w-[240px] transform hover:scale-105 transition-transform duration-300"
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
                    <h3 className="font-medium text-lg">{designer.name}</h3>
                    <p className="text-gray-400 text-sm">{designer.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full w-14 h-14 flex items-center justify-center text-4xl"
            onClick={() => handleScroll('right')}
            style={{ border: 'none', cursor: 'pointer' }}
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Startup;
y
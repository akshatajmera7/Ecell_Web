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
        container.scrollLeft += 1; // Adjust speed here
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0; // Reset to loop
        }
      }
    };

    const interval = setInterval(scrollEffect, 30); // Controls the speed of scrolling
    return () => clearInterval(interval);
  }, []);

    const designers = [
      {
        name: 'Sriharsha Majety',
        role: 'CEO and Founder, Swiggy',
        image: '/majety.png',
      },
      {
        name: 'Sanjay Mehrotra',
        role: 'Co-Founder, Sandisk',
        image: '/mehrotra.png',
      },
      {
        name: 'Hari Menon',
        role: 'Co-Founder, BigBasket',
        image: '/menon.png',
      },
      {
        name: 'Ishan Bansal',
        role: 'Co-Founder, Groww',
        image: '/bansal.png',
      },
      {
        name: 'Phanindra Sama',
        role: 'Founder, RedBus',
        image: '/sama.png',
      },
      {
        name: 'Shubh Malhotra',
        role: 'Founder, MPL',
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
        <div
          className="overflow-hidden whitespace-nowrap relative"
          ref={scrollContainer}
        >
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
      </div>
    </div>
  );
};

export default Startup;

import React, { useEffect, useRef } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Startup = () => {
  const scrollContainer = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  /* Auto-scroll ONLY on desktop */
  useEffect(() => {
    const startAutoScroll = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile || !scrollContainer.current) return;

      const scroll = () => {
        const container = scrollContainer.current;
        if (!container) return;

        container.scrollLeft += 1.2;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }

        animationRef.current = requestAnimationFrame(scroll);
      };

      animationRef.current = requestAnimationFrame(scroll);
    };

    startAutoScroll();

    const handleResize = () => {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
      startAutoScroll();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = (direction) => {
    const container = scrollContainer.current;
    if (!container) return;

    const scrollAmount = 320;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const designers = [
    { name: 'Swiggy', role: 'Founded by Sriharsha Majety', image: '/majety.png' },
    { name: 'Sandisk', role: 'Co-Founded by Sanjay Mehrotra', image: '/mehrotra.png' },
    { name: 'BigBasket', role: 'Co-Founded by Hari Menon', image: '/menon.png' },
    { name: 'Groww', role: 'Co-Founded by Ishan Bansal', image: '/bansal.png' },
    { name: 'RedBus', role: 'Founded by Phanindra Sama', image: '/sama.png' },
    { name: 'MPL', role: 'Founded by Shubh Malhotra', image: '/malhotra.png' },
  ];

  const cards = [...designers, ...designers];

  return (
    <section className="min-h-screen bg-black text-white px-4 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          className="text-center mb-12 md:mb-20"
          data-aos="fade-down"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            BITS Pilani: Fueling the Next Wave of Innovation
          </h1>
          <p className="text-gray-400 text-sm md:text-lg max-w-3xl mx-auto">
            A legacy of entrepreneurship built by alumni shaping India’s startup ecosystem.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Left Arrow (Desktop only) */}
          <button
            type="button"
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
            className="
              hidden md:flex
              absolute left-0 top-1/2 -translate-y-1/2
              w-14 h-14 rounded-full bg-black text-4xl
              items-center justify-center
              z-10 hover:bg-gray-800 transition
            "
          >
            ‹
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollContainer}
            className="
              flex gap-4
              overflow-x-auto md:overflow-hidden
              scroll-smooth
              snap-x snap-mandatory
              px-1 md:px-16
            "
          >
            {cards.map((item, index) => (
              <div
                key={index}
                className="
                  snap-center
                  flex-shrink-0
                  w-[75vw] sm:w-[60vw] md:w-[260px]
                  bg-gray-900 rounded-xl
                  hover:scale-105 transition-transform
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-[220px] md:h-[300px] object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="text-base md:text-lg font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow (Desktop only) */}
          <button
            type="button"
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
            className="
              hidden md:flex
              absolute right-0 top-1/2 -translate-y-1/2
              w-14 h-14 rounded-full bg-black text-4xl
              items-center justify-center
              z-10 hover:bg-gray-800 transition
            "
          >
            ›
          </button>

        </div>
      </div>
    </section>
  );
};

export default Startup;

import React, { useEffect, useRef } from "react";
import img1 from '../../assets/spons/decathlon.jpg'; 
import img2 from '../../assets/spons/plum.avif'; 
import img3 from '../../assets/spons/ACT.jpg'; 
import img4 from '../../assets/spons/AMD33.png'; 
import img5 from '../../assets/spons/altair.jpg'; 
import img6 from '../../assets/spons/nestle.jpg'; 
import img7 from '../../assets/spons/coke.jpg'; 
import img8 from '../../assets/spons/bharatversity.png';
import img9 from '../../assets/spons/FAB.jpg';
import img10 from '../../assets/spons/campa.png';
import img11 from '../../assets/spons/unstop.avif';
import img12 from '../../assets/spons/cornitos.jpg';
import img13 from '../../assets/spons/fitness_fundas.jpg'; 
import img14 from '../../assets/spons/switcheko.jpg';
import img15 from '../../assets/spons/skilligence.png';
import img16 from '../../assets/spons/2iim.png';
import img17 from '../../assets/spons/huddle-logo.png';
import img18 from '../../assets/spons/flyberrygourmet.jpg';
import img19 from '../../assets/spons/hackerthehouse.png';
import img20 from '../../assets/spons/royalbrothers.png';
import img21 from '../../assets/spons/mototek.jpg';
import img22 from '../../assets/spons/instax.png';
import img23 from '../../assets/spons/businesskeeda.png';
import img24 from '../../assets/spons/kurogaming.jpg';
import img25 from '../../assets/spons/productfolks.png';
import img26 from '../../assets/spons/novatechsolar.png';

const DisruptCarousel = () => {
  const items = [
    { name: "Innovation", image: img1 },
    { name: "Technology", image: img2 },
    { name: "Future", image: img3 },
    { name: "Revolution", image: img4 },
    { name: "Progress", image: img5 },
    { name: "Progress", image: img6 },
    { name: "Progress", image: img7 },
    { name: "Progress", image: img8 },
    { name: "Progress", image: img9 },
    { name: "Progress", image: img10 },
    { name: "Progress", image: img11 },
    { name: "Progress", image: img12 },
    { name: "Progress", image: img13 },
    { name: "Progress", image: img14 },
    { name: "Progress", image: img15 },
    { name: "Progress", image: img16 },
    { name: "Progress", image: img17 },
    { name: "Progress", image: img18 },
    { name: "Progress", image: img19 },
    { name: "Progress", image: img20 },
    { name: "Progress", image: img21 },
    { name: "Progress", image: img22 },
    { name: "Progress", image: img23 },
    { name: "Progress", image: img24 },
    { name: "Progress", image: img25 },
    { name: "Progress", image: img26 },

  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    let animationFrame;

    const smoothScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 2.5; // Speed adjustment
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; // Smooth reset
        }
      }
      animationFrame = requestAnimationFrame(smoothScroll);
    };

    animationFrame = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative w-full bg-black py-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h3 className="text-center text-5xl font-extrabold text-blue-500 mb-12 tracking-tight">
          Past Sponsors
        </h3>

        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden w-full">
          <div
            ref={containerRef}
            className="flex items-center gap-8 whitespace-nowrap overflow-hidden"
          >
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="flex-none w-48 h-48 flex items-center justify-center rounded-lg bg-white shadow-lg shadow-gray-500 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-36 h-36 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Fades for Better Look */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/80 to-transparent z-10" />
    </div>
  );
};

export default DisruptCarousel;

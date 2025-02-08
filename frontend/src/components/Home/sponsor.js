import React, { useEffect, useRef } from "react";
import img1 from '../../assets/spons/decathlon.jpg'; 
import img2 from '../../assets/spons/PLUM.png'; 
import img3 from '../../assets/spons/ACT.jpg'; 
import img4 from '../../assets/spons/AMD33.png'; 
import img5 from '../../assets/spons/altair.jpg'; 
import img6 from '../../assets/spons/nestle.jpg'; 
import img7 from '../../assets/spons/coke.jpg'; 
import img8 from '../../assets/spons/bharatversity.png';
import img9 from '../../assets/spons/FAB.jpg';
import img10 from '../../assets/spons/HINDU.png';
import img11 from '../../assets/spons/unstop.avif';
import img12 from '../../assets/spons/campustimes.png'; 
import img13 from '../../assets/spons/noticebard.jpg'; 
import img14 from '../../assets/jagran_josh.png';
import img15 from '../../assets/thehansindia.png';
import img16 from '../../assets/spons/evepaper.png';
import img17 from '../../assets/spons/dubeat.jpg';

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
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    let animationFrame;

    const smoothScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 3; // Speed adjustment
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
      <div className="relative max-w-full mx-auto px-4">
        <h3 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-12 tracking-tight">
          Our Trusted Partners
        </h3>
        <div className="relative overflow-hidden w-full">
          <div ref={containerRef} className="flex items-center gap-8 whitespace-nowrap overflow-hidden">
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="flex-none w-60 h-40 flex flex-col items-center justify-center group hover:scale-105 transition-all duration-300 shadow-lg"
                style={{ backgroundColor: 'transparent' }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-auto object-fill opacity-100 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/50 to-transparent z-10" />
    </div>
  );
};

export default DisruptCarousel;

import React, { useEffect, useRef } from "react";
import img1 from '../../assets/spons/times nie.png'; 
import img2 from '../../assets/spons/startupindia.png'; 
import img3 from '../../assets/spons/algocs.jpg'; 
import img4 from '../../assets/spons/acn.jpg'; 
import img5 from '../../assets/spons/knowafest.jpg'; 
import img6 from '../../assets/spons/startuptalky.jpg'; 
import img7 from '../../assets/spons/bizstandards.png'; 
import img8 from '../../assets/spons/timesnetwork.png';
import img9 from '../../assets/spons/blogadda.jpg';
import img10 from '../../assets/spons/HINDU.png';
import img11 from '../../assets/spons/startupstory.jpg';
import img12 from '../../assets/spons/educationtree.png';
import img13 from '../../assets/spons/campustimes.png'; 
import img14 from '../../assets/spons/fundaspring.jpg';
import img15 from '../../assets/spons/noticebard.jpg';
import img16 from '../../assets/spons/edtimes.jpg';
import img17 from '../../assets/spons/dailyhunt.jpg';
import img18 from '../../assets/jagran_josh.png';
import img19 from '../../assets/spons/creativals.jpg';
import img20 from '../../assets/spons/pagalgyu.png';
import img21 from '../../assets/spons/elyuxen.jpg';
import img22 from '../../assets/spons/campustimes.png';
import img23 from '../../assets/spons/youthincorporated.png';
import img24 from '../../assets/spons/theprint.png';



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
    <div className="relative w-full bg-black pb-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h3 className="text-center text-5xl font-extrabold text-blue-500 mb-12 tracking-tight">
          Past Media Partners
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


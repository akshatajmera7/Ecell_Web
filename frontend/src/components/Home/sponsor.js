import React from "react";
import img1 from '../../assets/decathlon.png'; 
import img2 from '../../assets/spons/PLUM.png'; //
import img3 from '../../assets/actfibernet.png'; 
import img4 from '../../assets/amd.png'; 
import img5 from '../../assets/spons/ALT.png'; 
import img6 from '../../assets/spons/nestle.png'; //
import img7 from '../../assets/spons/coke.jpg'; //
import img8 from '../../assets/bharatversity.png';
import img9 from '../../assets/spons/FAB.png';//
import img10 from '../../assets/spons/HINDU.png';//
import img11 from '../../assets/unstop.png';
import img12 from '../../assets/spons/campustimes.png'; 
import img13 from '../../assets/noticebard.png'; 
import img14 from '../../assets/jagran_josh.png';
import img15 from '../../assets/thehansindia.png';
import img16 from '../../assets/evepaper.jpeg';
import img17 from '../../assets/dubeat.jpg';



const DisruptCarousel = () => {
  const items = [
    {
      name: "Innovation",
      subtitle: "Shaping the Future",
      image: img1,
    },
    {
      name: "Technology",
      subtitle: "Advancing Human Potential",
      image: img2,
    },
    {
      name: "Future",
      subtitle: "Paving the Path Forward",
      image:img3,
    },
    {
      name: "Revolution",
      subtitle: "Transforming Industries",
    image:img4 ,
    },
    {
      name: "Progress",
      subtitle: "Driving Change",
      image:img5,
    },
    {
      name: "Progress",
      subtitle: "Driving Change",
      image:img6,
    },
    {
      name: "Progress",
      subtitle: "Driving Change",
      image:img7,
    },
    {
      name: "Progress",
      subtitle: "Driving Change",
      image:img8,
    },
    {
      name: "Progress",
      subtitle: "Driving Change",
      image:img9,
    },
    {
      name: "Progress",
      subtitle: "Driving Change",
      image:img10,
    },
    {
      name: "Progress",
      subtitle: "Driving Change",
      image:img11,
    },
    {
      name: "Progress",
      subtitle: "Driving Change",
      image:img12,
    },
    {
      name: "Progress",
      subtitle: "Driving Change",
      image:img13,
    },
    {
      name: "Progress",
      subtitle: "Driving Change",
      image:img14,
    },
    {
      name: "Progress",
      subtitle: "Driving Change",
      image:img15,
    },
    {
      name: "Progress",
      subtitle: "Driving Change",
      image:img16,
    },
    {
      name: "Progress",
      subtitle: "Driving Change",
      image:img17,
    },
  ];

  // Duplicate items to ensure infinite scrolling
  const itemList = [...items, ...items];

  return (
    <div className="relative w-full bg-black py-16 overflow-hidden">
      <div className="relative max-w-full mx-auto px-4">
        {/* Title */}
        <h3 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-12 tracking-tight">
          Our Trusted Partners
        </h3>

        {/* Carousel */}
        <div className="relative overflow-hidden w-full">
          <div className="flex items-center animate-scroll gap-8">
            {itemList.map((item, index) => (
              <div
                key={index}
                className="flex-none w-52 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-lg flex flex-col items-center justify-center group hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-52 h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/50 to-transparent z-10" />
    </div>
  );
};


export default DisruptCarousel;

import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import I1 from "../../assets/SPEAKER PICS/vp_india_naidu.jpg"
import I2 from "../../assets/SPEAKER PICS/KAVITHA.jpeg"
import I3 from "../../assets/SPEAKER PICS/A_SIVANTHANU.png"
import I4 from "../../assets/SPEAKER PICS/vinod-dham.jpeg"
import I5 from "../../assets/SPEAKER PICS/TARUN-KATHIYAL.webp"
import I6 from "../../assets/SPEAKER PICS/SHREEDHAN.webp"
import I7 from "../../assets/SPEAKER PICS/PRANAY-PAI.png"
import I8 from "../../assets/SPEAKER PICS/piyush-goyal.jpeg"
import I9 from "../../assets/SPEAKER PICS/Nilesh-Kothari1.png"
import I10 from "../../assets/SPEAKER PICS/kshitij_khandelwal.jpeg"
import I11 from "../../assets/SPEAKER PICS/sam.jpg"
import I12 from "../../assets/SPEAKER PICS/hari.jpg"
import I13 from "../../assets/SPEAKER PICS/VINEET.jpg"
import I14 from "../../assets/SPEAKER PICS/ANAND-SRINIVASAN.webp"
import I15 from "../../assets/SPEAKER PICS/ANKUSH-SINGHLA.jpeg"
import I16 from "../../assets/SPEAKER PICS/shashi.jpg"
import I17 from "../../assets/SPEAKER PICS/tapan.jpg"


const DisruptCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items] = useState([
    { name: "SHRI VENKAIAH NAIDU", subtitle: "FORMER VICE-PRESIDENT", image:I1 },
    { name: "KAVITHA SUBRAMANIAN", subtitle: "CO-FOUNDER UPSTOX", image:I2 },
    { name: "DR. A SIVANTHANU PILLAI", subtitle: "INDIAN SCIENTIST", image: I3 },
    { name: "VINOD DHAM", subtitle: "INVENTOR", image: I4 },
    { name: "TARUN KATIYAL", subtitle: "FOUNDER COTO", image: I5 },
    { name: "E. SREEDHARAN", subtitle: "METRO MAN OF INDIA", image: I6 },
    { name: "PRANAY PAI", subtitle: "FOUNDING PARTNER", image: I7 },
    { name: "PIYUSH GOYAL", subtitle: "UNION CABINET MINISTER", image: I8 },
    { name: "NILESH KOTHARI", subtitle: "CO-ROUNDER TRIFECTA CAPITAL", image: I9 },
    { name: "KSHITIJ KHANDELWAL", subtitle: "CTO-PIXXEL", image: I10 },
    { name: "SAM PITRODA", subtitle: "INVENTOR", image: I11 },
    { name: "HARI MENON", subtitle: "BIGBASKET FOUNDER", image: I12 },
    { name: "VINEET NAYAR", subtitle: "FORMER CEO OF HCL", image: I13 },
    { name: "ANAND SRINIVASAN", subtitle: "CO-FOUNDER AKASA AIR", image: I14 },
    { name: "ANKUSH SINGLA", subtitle: "CO-FOUNDER CODING NINJAS", image: I15 },
    { name: "DR. SHASHI THAROOR", subtitle: "MEMBER OF PARLIAMENT", image: I16 },
    { name: "TAPAN SINGHEL", subtitle: "CEO, BAJAJ ALLIANZ", image: I17 },
  ]);

  // Duplicate the items for the infinite scroll effect
  const itemList = [...items, ...items];

  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  // Slow down the scroll speed by increasing the interval and adjusting the transition duration
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % itemList.length);
    }, 2000); // Adjusting the interval to slow down the scroll speed
    return () => clearInterval(timer);
  }, [itemList.length]);

  return (
    <div className="relative w-full bg-black  py-16 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Text Animation */}
        <motion.h3
          ref={ref}
          className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-12 tracking-tight animate-gradient-x"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } },
          }}
        >
          Our Speakers Who’ve Inspired Us Along the Way
        </motion.h3>

        {/* Carousel Animation */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } },
          }}
        >
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: `-${currentIndex * (200 + 32)}px`, // Adjust size for mid-size carousel
            }}
            transition={{
              duration: 0.2, // Increased duration for slower scroll
              ease: "linear",
            }}
          >
            {itemList.map((item, index) => (
              <motion.div
                key={index}
                className="flex-none p4 h-68 bg-gradient-to-br object-cover from-slate-800/80 to-slate-900/80 rounded-lg flex flex-col items-center justify-center group  transition-all hover:scale-105 duration-300 shadow-lg pb-4"
          
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className=" opacity-50 rounded-lg h-52 object-cover w-52 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* Title and Subtitle */}
                <div className="mt-4 text-center text-white">
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-300">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/50 to-transparent z-10" />
        </motion.div>
      </div>
    </div>
  );
};

export default DisruptCarousel;
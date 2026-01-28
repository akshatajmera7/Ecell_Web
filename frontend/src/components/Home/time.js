import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useAnimationFrame } from 'framer-motion';
import BlurImage from '../BlurImage';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import img7 from '../../assets/7.png';

const events = [
  { id: 1, title: "Startup Expo", images: [img1], link: "/launchpad/startup_expo" },
  { id: 2, title: "Pitcher's Pilot", images: [img6], link: "/launchpad/pitchers_pilot" },
  // { id: 3, title: "Internship Drive", images: [img3], link: "/launchpad/internship_drive" },
  { id: 4, title: "Teen Tycoons", images: [img5], link: "/launchpad/teen_tycoons" },
  { id: 5, title: "Ground Reality", images: [img7], link: "/launchpad/ground_reality" },
  { id: 6, title: "Beyond Profits", images: [img4], link: "/launchpad/beyond_profits" },
  { id: 7, title: "Pitch Perfect", images: [img2], link: "/launchpad/pitch_perfect" },
];

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7L17 17M17 17V7M17 17H7" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EventCard = ({ event }) => {
  return (
    <motion.div
      className="relative group bg-[#0A0A0A] border border-[#6b5fff]/40 rounded-3xl overflow-hidden w-[240px] md:w-[280px] h-[320px] md:h-[360px] flex-shrink-0 mx-3 md:mx-4 p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#d4ff00] hover:shadow-[0_0_50px_rgba(107,95,255,0.25)] backdrop-blur-xl"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6b5fff]/5 to-transparent opacity-100 group-hover:from-[#6b5fff]/10 transition-colors duration-700" />

      <div className="flex flex-col items-center justify-center flex-grow z-10">
        <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center mb-4 md:mb-6 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
          <BlurImage
            src={event.images[0]}
            alt={event.title}
            className="w-full h-full object-contain transition-all duration-700"
          />
        </div>
      </div>

      <div className="flex justify-between items-end mt-auto z-10">
        <div className="flex flex-col text-left font-poppins">
          <span className="text-[#6b5fff] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-1 opacity-80">LP Event</span>
          <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
            {event.title.split(' ')[0]} <br />
            <span className="text-[#d4ff00]">{event.title.split(' ').slice(1).join(' ')}</span>
          </h3>
        </div>
        <a
          href={event.link}
          className="bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-[#d4ff00] transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,255,0,0.5)] group-hover:scale-110 active:scale-90 mb-1"
        >
          <ArrowIcon />
        </a>
      </div>

      {/* Dynamic Corner Accents */}
      <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-[#6b5fff]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-16 md:w-20 h-16 md:h-20 bg-[#d4ff00]/10 blur-3xl rounded-full" />
    </motion.div>
  );
};

const EventsPage = () => {
  const [baseWidth, setBaseWidth] = useState(0);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicating for infinite effect
  const duplicatedEvents = [...events, ...events, ...events];

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const fullWidth = containerRef.current.scrollWidth;
        setBaseWidth(fullWidth / 3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth animation loop
  useAnimationFrame((_, delta) => {
    if (isPaused || !baseWidth) return;

    // speed is pixels per second
    const speed = 40;
    let moveBy = (speed * delta) / 1000;

    let nextX = x.get() - moveBy;
    if (nextX <= -baseWidth) {
      nextX = 0;
    }
    x.set(nextX);
  });

  const springX = useSpring(x, { stiffness: 400, damping: 50 });

  return (
    <section className="bg-black py-20 md:py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-[600px] md:min-h-[700px]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#6b5fff]/10 blur-[100px] md:blur-[180px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#d4ff00]/5 blur-[100px] md:blur-[180px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none" />

      {/* Header Section */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 mb-12 md:mb-20 relative z-20 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-none mb-4">
            <span className="text-[#6b5fff] inline-block font-poppins">Launchpad</span>{" "}
            <span className="text-[#d4ff00] inline-block drop-shadow-[0_0_30px_rgba(212,255,0,0.4)] font-poppins">Events</span>
          </h2>
          <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-[#6b5fff] to-[#d4ff00] rounded-full mt-2 md:mt-4 mx-auto md:mx-0" />
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div
        className="w-full relative z-10 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <motion.div
          ref={containerRef}
          style={{ x: springX }}
          drag="x"
          onDragStart={() => setIsPaused(true)}
          onDragEnd={(e, info) => {
            // Adjust x to prevent jumping after drag
            x.set(x.get() + info.offset.x);
            setIsPaused(false);
          }}
          className="flex py-5 md:py-10"
        >
          {duplicatedEvents.map((event, index) => (
            <EventCard key={`${event.id}-${index}`} event={event} />
          ))}
        </motion.div>
      </div>

      {/* Fade Gradients for edges - hidden on very small screens to save space */}
      <div className="hidden md:block absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
      <div className="hidden md:block absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

      {/* Carousel Progress indicator stylized */}
      <div className="mt-8 md:mt-12 flex gap-2">
        {events.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-zinc-800" />
        ))}
      </div>
    </section>
  );
};

export default EventsPage;
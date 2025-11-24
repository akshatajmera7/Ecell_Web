import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import BlurImage from '../BlurImage';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import img7 from '../../assets/7.png';

const EventCard = ({ event }) => {
  return (
    <div className="relative group bg-ecell-bg-light border border-ecell-secondary/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(107,95,255,0.15)] hover:shadow-[0_0_40px_rgba(212,255,0,0.3)] hover:border-ecell-primary transition-all duration-500 h-[450px] w-[350px] flex-shrink-0 mx-4">
      <div className="relative rounded-xl p-1 flex flex-col h-full">
        <div className="relative h-1/2 overflow-hidden rounded-t-lg">
          <BlurImage
            src={event.images[0]}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ecell-bg to-transparent opacity-60" />
        </div>

        <div className="p-5 flex flex-col justify-between h-1/2">
          <div>
            <h2 className="text-2xl font-bold text-ecell-primary mb-2 drop-shadow-md">{event.title}</h2>
            <p className="text-gray-300 line-clamp-3 text-sm leading-relaxed">{event.description}</p>
          </div>

          <div className="flex space-x-3 mt-4">
            <a
              href={event.registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-3 rounded-lg bg-ecell-primary text-black font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,255,0,0.5)] active:scale-95 text-sm"
            >
              Register
            </a>
            <a
              href={event.exploreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-3 rounded-lg border-2 border-ecell-secondary text-ecell-secondary hover:bg-ecell-secondary hover:text-white font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(107,95,255,0.5)] active:scale-95 text-sm"
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventsPage = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  const events = [
    { id: 1, title: "Startup Expo", description: "Unleash innovation and connect with industry leaders at the ultimate Startup Expo!", images: [img1], registerLink: "https://rzp.io/rzp/66fqi0c", exploreLink: "/launchpad/startup_expo" },
    { id: 2, title: "Pitch Perfect", description: "Where innovation meets opportunity, and entrepreneurs and investors thrive together.", images: [img2], registerLink: "https://unstop.com/competitions/pitch-perfect-an-online-bussiness-plan-competition-launchpad-25-birla-institute-of-technology-and-sciences--1319979", exploreLink: "/launchpad/pitch_perfect" },
    { id: 3, title: "Internship Drive", description: "Launch your career with the Internship Drive – connect, learn, and grow with top startups!", images: [img3], registerLink: "https://rzp.io/rzp/MFXKL5k0", exploreLink: "/launchpad/internship_drive" },
    { id: 4, title: "Beyond Profits", description: "Empowering socially-conscious entrepreneurs to create change and unlock incredible opportunities.", images: [img4], registerLink: "https://unstop.com/competitions/beyond-profits-launchpad-25-bits-1361695", exploreLink: "/launchpad/beyond_profits" },
    { id: 5, title: "Teen Tycoons", description: "Shaping the next generation of entrepreneurs through dynamic challenges and expert mentorship.", images: [img5], registerLink: "https://rzp.io/rzp/KAUB2dMB", exploreLink: "/launchpad/teen_tycoons" },
    { id: 6, title: "Pitcher's Pilot", description: "A dynamic platform for entrepreneurs to showcase their ventures, gain valuable feedback, and connect with investors for growth and success.", images: [img6], registerLink: "https://rzp.io/rzp/Fn5oSxt", exploreLink: "/launchpad/pitchers_pilot" },
    { id: 7, title: "Ground Reality", description: "Pitch your startup to top investors and win Rs. 2 Lakhs with mentorship and resources for growth!", images: [img7], registerLink: "https://unstop.com/competitions/ground-reality-a-business-plan-competition-birla-institute-of-technology-science-pilani-hyderabad-campus-1316405", exploreLink: "/launchpad/ground_reality" }
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-ecell-bg">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-10 left-10 z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-ecell-primary mb-4 drop-shadow-[0_0_15px_rgba(212,255,0,0.5)]">
            Our Events
          </h1>
          <p className="text-xl text-ecell-text-muted max-w-md">
            Scroll down to explore our flagship events.
          </p>
        </div>
        <motion.div style={{ x }} className="flex gap-4 pl-[40vw]">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsPage;
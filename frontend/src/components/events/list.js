import React, { useEffect, useState } from 'react';
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import img5 from '../../assets/5.png'
import img6 from '../../assets/6.png'
import img7 from '../../assets/7.png'


const EventCard = ({ event, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200); // Stagger the animation of cards

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="relative group bg-gray-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
        {/* Animated border gradient */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative bg-gray-900 rounded-xl p-1">
          {/* Main content container */}
          <div className="overflow-hidden">
            {/* Image Gallery */}
            <div className="relative h-64 overflow-hidden rounded-t-lg">
              <div className="flex transition-transform duration-500 ease-in-out transform hover:scale-110">
                <img
                  src={event.images[0]}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              {/* Event date badge */}
              <div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                {event.date}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4">
              {/* Title with gradient */}
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {event.title}
              </h2>
              
              {/* Description */}
              <p className="text-gray-300 line-clamp-3">
                {event.description}
              </p>

              {/* Details section */}
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
              </div>

              {/* Register button */}
              <a
                href={event.registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventsPage = () => {
  // Sample events data - replace with your actual events
  const events = [
    {
      id: 1,
      title: "Startup Expo",
      description: "Discover endless opportunities at the Startup Expo, a hub for innovation, networking, and growth!.",
      date: "Mar 21 -23, 2025",
      location: "BITS Pilani Hyderabad Campus.",
      images: [img1],
      registerLink: "https://bharatversity.com/event/6787f7afc9499900218d6697"
    },
    {
      id: 2,
      title: "Pitch Perfect",
      description: "Unlock your entrepreneurial potential! Showcase your ideas, compete with bright minds, and gain valuable feedback.",
      date: "Mar 21 -23, 2025",
      location: "BITS Pilani Hyderabad Campus.",
      images: [img2],
      registerLink: "https://unstop.com/competitions/pitch-perfect-an-online-bussiness-plan-competition-launchpad-25-birla-institute-of-technology-and-sciences--1319979"
    },
    {
      id: 3,
      title: " Internship Drive ",
      description: " Engage with over 50 startups, earn up to 30K INR, and gain valuable, hands-on industry experience! ",
      date: "Mar 21 -23, 2025",
      location: "BITS Pilani Hyderabad Campus.",
      images: [img3],
      registerLink: "https://bharatversity.com/event/67878d18c9499900218d641f"
   },
   {
    id: 4,
    title: " Beyond Profits",
    description: "Develop solutions, enhance entrepreneurial skills, pitch to judges, and win amazing prizes at Beyond Profits!",
    date: "Mar 21 -23, 2025",
    location: "BITS Pilani Hyderabad Campus.",
    images: [img4],
    registerLink: "https://unstop.com/competitions/beyond-profits-launchpad-25-bits-1361695"
  },
  {
    id: 5,
    title: "Teen Tycoons",
    description: "Transform challenges into opportunities, develop your business idea, pitch to experts, and win incredible prizes!",
    date: "Mar 21 -23, 2025",
    location: "BITS Pilani Hyderabad Campus.",
    images: [img5],
    registerLink: "https://bharatversity.com/event/678975e9c9499900218d7019"
  },
  {
    id: 6,
    title: " Pitcher's Pilot '25 ",
    description: "Pitch your startup, gain mentorship, secure funding, and connect with top investors at LaunchPad'25!",
    date: "Mar 21 -23, 2025",
    location: "BITS Pilani Hyderabad Campus.",
    images: [img6],
    registerLink: "https://bharatversity.com/dashboard/event/6787866ac9499900218d63c8"
  },
  {
    id: 7,
    title: "Ground Reality",
    description: "Showcase innovative ideas, craft strategic business plans, and turn your vision into reality at Ground Reality",
    date: "Mar 21 -23, 2025",
    location: "BITS Pilani Hyderabad Campus.",
    images: [img7],
    registerLink: "https://unstop.com/competitions/ground-reality-a-business-plan-competition-birla-institute-of-technology-science-pilani-hyderabad-campus-1316405"
 }  
  ];

  return (
    <div className="min-h-screen bg-black px-4 py-12">
      {/* Animated background particles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
      
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 10}s infinite, pulse ${3 + Math.random() * 2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Page title */}
      <div className="text-center mb-16 relative">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Upcoming Events
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Join us for exciting events that push the boundaries of innovation and creativity
        </p>
      </div>

      {/* Events grid */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

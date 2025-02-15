import React, { useEffect, useState } from 'react';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import img7 from '../../assets/7.png';

const EventCard = ({ event, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="relative group bg-[#0a0f1f] rounded-xl overflow-hidden shadow-lg shadow-blue-900/40 hover:shadow-2xl hover:shadow-blue-600/40 transition-all duration-500 h-full">
        <div className="relative rounded-xl p-1 flex flex-col h-auto">
          <div className="relative h-1/4 overflow-hidden rounded-t-lg"> {/* Adjusted the image height */}
            <img
              src={event.images[0]}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              style={{ maxHeight: '200px' }} 
            />
          </div>

          <div className="p-4 flex flex-col justify-between h-auto">
            <div>
              <h2 className="text-2xl font-bold text-blue-400">{event.title}</h2>
              <p className="text-gray-300 line-clamp-3">{event.description}</p>
            </div>

            <div className="flex space-x-4 mt-1">
              <a
                href={event.registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 text-center py-3 px-6 rounded-lg bg-blue-900 text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 active:scale-95"
              >
                Register Now
              </a>
              <a
                href={event.exploreLink} // Update with the explore link if you have a specific one
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 text-center py-3 px-6 rounded-lg bg-blue-900 text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 active:scale-95"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventsPage = () => {
  const events = [
    { id: 1, title: "Startup Expo", description: "Unleash innovation and connect with industry leaders at the ultimate Startup Expo!", images: [img1],  registerLink: "https://unstop.com/conferences/startup-expo-launchpad-25-birla-institute-of-technology-science-pilani-hyderabad-campus-1317940",exploreLink:"/launchpad/startup_expo"},
    { id: 2, title: "Pitch Perfect", description: "Where innovation meets opportunity, and entrepreneurs and investors thrive together.", images: [img2],registerLink: "https://unstop.com/competitions/pitch-perfect-an-online-bussiness-plan-competition-launchpad-25-birla-institute-of-technology-and-sciences--1319979",exploreLink:"/launchpad/pitch_perfect"},
    { id: 3, title: "Internship Drive", description: "Launch your career with the Internship Drive – connect, learn, and grow with top startups!", images: [img3],registerLink: "https://bharatversity.com/event/67878d18c9499900218d641f",exploreLink:"/launchpad/internship_drive"},
    { id: 4, title: "Beyond Profits", description: "Empowering socially-conscious entrepreneurs to create change and unlock incredible opportunities.", images: [img4],registerLink: "https://unstop.com/competitions/beyond-profits-launchpad-25-bits-1361695",exploreLink:"/launchpad/beyond_profits"},
    { id: 5, title: "Teen Tycoons", description: "Shaping the next generation of entrepreneurs through dynamic challenges and expert mentorship.", images: [img5], registerLink: "https://bharatversity.com/event/679be5698f8b890021015fd0" ,exploreLink:"/launchpad/teen_tycoons"},
    { id: 6, title: "Pitcher's Pilot", description: "A dynamic platform for entrepreneurs to showcase their ventures, gain valuable feedback, and connect with investors for growth and success", images: [img6],  registerLink: "https://unstop.com/o/zN4GnQ6?lb=jL0ByYM&utm_medium=Share&utm_source=shortUrl",exploreLink:"/launchpad/pitchers_pilot" },
    { id: 7, title: "Ground Reality", description: "Pitch your startup to top investors and win Rs. 2 Lakhs with mentorship and resources for growth!", images: [img7],registerLink: "https://unstop.com/competitions/ground-reality-a-business-plan-competition-birla-institute-of-technology-science-pilani-hyderabad-campus-1316405",exploreLink:"/launchpad/ground_reality" }
  ];

  return (
    <div className="min-h-screen bg-black px-4 py-12">
      
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

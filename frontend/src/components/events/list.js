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
                href={event.registerLink} // Update with the explore link if you have a specific one
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 text-center py-3 px-6 rounded-lg bg-blue-900 text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 active:scale-95"
              >
                Explore
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
    { id: 1, title: "Startup Expo", description: "Discover endless opportunities at the Startup Expo.", images: [img1], registerLink: "#" },
    { id: 2, title: "Pitch Perfect", description: "Showcase your ideas, compete with bright minds.", images: [img2], registerLink: "#" },
    { id: 3, title: "Internship Drive", description: "Engage with startups, earn up to 30K INR.", images: [img3], registerLink: "#" },
    { id: 4, title: "Beyond Profits", description: "Develop solutions, enhance skills, win prizes.", images: [img4], registerLink: "https://unstop.com/competitions/beyond-profits-launchpad-25-bits-1361695" },
    { id: 5, title: "Teen Tycoons", description: "Transform challenges into opportunities.", images: [img5], registerLink: "#" },
    { id: 6, title: "Pitcher's Pilot", description: "Pitch your startup, gain mentorship.", images: [img6], registerLink: "#" },
    { id: 7, title: "Ground Reality", description: "Showcase innovative ideas and craft strategies.", images: [img7], registerLink: "https://unstop.com/competitions/ground-reality-a-business-plan-competition-birla-institute-of-technology-science-pilani-hyderabad-campus-1316405" }
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
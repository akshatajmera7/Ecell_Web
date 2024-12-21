import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Startup = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  const designers = [
    {
      name: 'Corey',
      role: 'Web Designer',
      image: 'https://via.placeholder.com/240x320',
    },
    {
      name: 'Molly',
      role: 'Brand Designer',
      image: 'https://via.placeholder.com/240x320',
    },
    {
      name: 'Mike',
      role: 'Brand Designer',
      image: 'https://via.placeholder.com/240x320',
    },
    {
      name: 'Rees',
      role: 'Brand Designer',
      image: 'https://via.placeholder.com/240x320',
    },
    {
      name: 'Chris',
      role: 'Brand Designer',
      image: 'https://via.placeholder.com/240x320',
    },
    {
      name: 'Abby',
      role: 'Brand Designer',
      image: 'https://via.placeholder.com/240x320',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <br />
      <br />
      <br />
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center" data-aos="fade-down" data-aos-easing="ease-in-out">
          <h1 className="text-5xl font-bold mb-8 leading-tight">
            BITS Pilani: Fueling the Next Wave of Innovation.
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Our university has a rich history of fostering innovation and entrepreneurship, as evidenced by the success of several notable startups founded by our alumni.
          </p>
        </div>

        {/* Designer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {designers.map((designer, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150} 
              data-aos-easing="ease-out-cubic"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={designer.image}
                  alt={designer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">{designer.name}</h3>
                <p className="text-gray-400 text-sm">{designer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Startup;
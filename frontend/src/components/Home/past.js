import React from 'react';

const ProfileGrid = () => {
  const profiles = [
    { name: 'Travis Kalanick', role: 'Co-founder, Uber' },
    { name: 'Jordan Belfort', role: 'Author, The Wolf of Wall Street' },
    { name: 'Aman Gupta', role: 'Co-founder, BOAT' },
    { name: 'Nitin Gadkari', role: 'Union Minister' },
    { name: 'Rajat Sharma', role: 'Editor In Chief, India TV' },
    { name: 'Sachin Bansal', role: 'Co-founder, Flipkart' },
    { name: 'Namita Thapar', role: 'CEO, Emcure Pharmaceuticals' },
    { name: 'Anupam Mittal', role: 'Co-founder, Shaadi.com' },
    { name: 'Kunal Shah', role: 'Co-founder, CRED' },
    { name: 'Ashish Chanchlani', role: 'Content Creator' },
    { name: 'Bhavish Aggarwal', role: 'Co-founder, OLA' },
    { name: 'Ritesh Agarwal', role: 'Founder, OYO Rooms' }
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-500 mb-8 text-center">
          Past Speakers
        </h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-blue-700 p-6 flex flex-col items-center"
            >
              <div className="w-full h-48 overflow-hidden shadow-md mb-4">
                <img
                  src="/api/placeholder/200/200"
                  alt={profile.name}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {profile.name}
                </h3>
                <p className="text-blue-500 font-medium text-sm">{profile.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileGrid;


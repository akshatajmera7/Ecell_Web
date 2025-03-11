import React from 'react';
import ppimg from '../../../assets/lpevents/pitchers pilot.png'


const ProgramDescription = () => {
  return (
    <div className="bg-black text-white p-8 pb-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 bg-blue-600/10 p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-6">
            Pitchers Pilot is an initiative that provides
            budding entrepreneurs with the spotlight they deserve by 
            connecting them directly with top investors.
            </p>
            
        
            <p className="text-lg mb-8">
            Beyond showcasing their ventures, participants gain invaluable feedback from potential customers and unlock a world of opportunities to accelerate their growth..
            </p>
               
            <p className="text-lg mb-8">
            With a 4-week mentorship cohort, direct access to top VCs and angel investors, and a chance to secure funding for your dream venture, Pitchers Pilot is the place where great ideas come alive.
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full order-first lg:order-last">
            <div className="relative">
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full hidden lg:block"></div>
              <div className="bg-black p-4 border-2 border-blue-600 rounded-lg shadow-lg">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <img 
                    src={ppimg} 
                    alt="Ground Reality" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDescription;

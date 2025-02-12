import React from 'react';
import ppimg from '../../../assets/lpevents/pitchers pilot.png'


const ProgramDescription = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 lg:pb-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 bg-blue-600/10 p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-6">
            Pitchers Pilot is a fantastic initiative that provides
            budding entrepreneurs with the spotlight they deserve by 
            showcasing their enterprises to the investors present.
            </p>
            
        
            <p className="text-lg mb-8">
            Not only is it an enriching experience for them as they
             receive invaluable feedback from their potential 
             customers, but it also allows them to discover a plethora 
             of opportunities that help them grow their ventures.
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

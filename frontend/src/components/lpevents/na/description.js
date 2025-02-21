import React from 'react';
import bpimg from '../../../assets/lpevents/networking arena.png'

const ProgramDescription = () => {
  return (
    <div className="bg-black text-white p-8 pb-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 bg-[#18181B] p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-6">
            Networking Arena is an exclusive event bringing together startup founders, investors, VCs, and mentors for high-impact conversations and collaborations.
            </p>
           
            <p className="text-lg mb-8">
            <ul className="list-disc list-inside">
              <li>Panel Discussions – Discussion on latest trends in entrepreneurship</li>
              <li>Keynote Speaker Session – Gain insights from a top industry leader</li>
              <li>Startup Pitching – Get feedback from seasoned investors</li>
              <li>Networking Conclave – Connect with founders, investors & mentors</li>
            </ul>
            </p>

            <p className="text-lg mb-8">
            Date: 23rd February 2025 <br/>
            Time: 2PM - 6PM <br/>
            Venue: The Headquarters, Hi-Tech City, Hyderabad
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full order-first lg:order-last">
            <div className="relative">
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full hidden lg:block"></div>
              <div className="bg-black p-4 border-2 border-[#18181B] rounded-lg shadow-lg">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <img 
                    src={bpimg} 
                    alt="Networking Arena" 
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

import React from 'react';
import ttimg from '../../../assets/lpevents/teen tycoons.png'


const ProgramDescription = () => {
  return (
    <div className="bg-black text-white p-8 pb-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 bg-blue-600/10 p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-6">
            Teen Tycoons is a case-based business plan competition
            that nurtures entrepreneurial talent through dynamic 
            stages. Participants solve analytical guesstimates,
            tailored problem statements according to their selected
            ventures, and finalists undergo a skill-building bootcamp 
            with expert mentorship.
            </p>
          
            <p className="text-lg mb-8">
            The event culminates in the Grand Finale, where teams
             pitch innovative solutions to a distinguished panel,
             showcasing creativity, critical thinking, and business 
             acumen.
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full order-first lg:order-last">
            <div className="relative">
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full hidden lg:block"></div>
              <div className="bg-black p-4 border-2 border-blue-600 rounded-lg shadow-lg">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <img 
                    src={ttimg} 
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

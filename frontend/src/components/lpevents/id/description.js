import React from 'react';
import idimg from '../../../assets/lpevents/internship drive.png'


const ProgramDescription = () => {
  return (
    <div className="bg-black text-white p-8 pb-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 bg-blue-600/10 p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-6">
            Internship Drive connects enthusiastic students with 50+ start-ups, offering stipends up to 125K INR. With 75% of the opportunities being remote, this initiative provides students with the chance to gain hands-on experience in a variety of industries while working from home. 
            </p>
            
            <p className="text-lg mb-8">
            It also offers valuable exposure to the selection processes and interviews of leading companies, helping students develop the skills and confidence needed to step into the corporate world.
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full order-first lg:order-last">
            <div className="relative">
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full hidden lg:block"></div>
              <div className="bg-black p-4 border-2 border-blue-600 rounded-lg shadow-lg">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <img 
                    src={idimg} 
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

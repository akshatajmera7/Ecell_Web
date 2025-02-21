import React from "react";
import seimg from "../../../assets/lpevents/startup expo.png";

const ProgramDescription = () => {
  return (
    <div className="bg-black text-white p-8 pb-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 bg-blue-600/10 p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-6">
            The Startup Expo at Launchpad is a key event for
entrepreneurs to showcase their companies to
investors, customers, and industry experts.
Featuring startups from various industries and
stages, it offers a dynamic platform for discovering
innovative ideas.
            </p>

            <p className="text-lg mb-8">
            Entrepreneurs can connect with potential investors,
customers, and partners, gaining valuable exposure.
It’s a must-attend for anyone interested in the
startup ecosystem and the latest innovations.
            </p>
          </div>

          <div className="lg:w-1/2 w-full order-first lg:order-last">
            <div className="relative">
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full hidden lg:block"></div>
              <div className="bg-black p-4 border-2 border-blue-600 rounded-lg shadow-lg">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <img
                    src={seimg}
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

import React from "react";
import Grimg from "../../../assets/lpevents/gr.jpg";

const ProgramDescription = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 lg:pb-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 bg-blue-600/10 p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-6">
              Pitch Perfect" operates as a dynamic platform that showcases
              entrepreneurship in action. The format, with its pitch
              presentations, negotiations, and investment decisions, not only
              entertains viewers but also serves as a practical demonstration of
              the intricacies of securing investment in the business.
            </p>

            <p className="text-lg mb-8">
              The event's success lies in its ability to provide a platform for
              both entrepreneurs and investors to thrive in a competitive
              environment.
            </p>
          </div>

          <div className="lg:w-1/2 w-full order-first lg:order-last">
            <div className="relative">
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full hidden lg:block"></div>
              <div className="bg-black p-4 border-2 border-blue-600 rounded-lg shadow-lg">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <img
                    src={Grimg}
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

import React from "react";
import Hero from "./lhero";
import Sponsor from "./sponsor";
import Past from "./past";
import Time from "./time";
import Feature from "./feature";
import Prevevents from "./prevevents";


function Home() {
    console.log("hello")
  return (
    <div>
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Ensure Sponsor is not overlapped */}
      <div className="relative z-20">
        <Sponsor />
      </div>
      <Feature />
      <Time />
      <Past />
    
    </div>
  );
}

export default Home;

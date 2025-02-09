import React from "react";
import Hero from "./lhero";
import Sponsor from "./sponsor";
import Past from "./past";
import Time from "./time";
import Feature from "./feature";
import Partners from "./partner"
import Media from "./mediapartners"


function Home() {
    console.log("hello")
  return (
    <div>
      <div className="relative z-10">
        <Hero />
      </div>
      <Feature />
      <Time />
      <Past />
      {/* Ensure Sponsor is not overlapped */}
      <div className="relative z-20">
        <Sponsor />
        <Partners />
        <Media />
      </div>
  
    
    </div>
  );
}

export default Home;

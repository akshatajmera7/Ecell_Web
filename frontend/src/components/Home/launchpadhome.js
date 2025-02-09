import React from "react";
import Hero from "./lhero";
import AtkHero from "./atk/Atk-hero";
import Sponsor from "./sponsor";
import Past from "./past";
import Time from "./time";
import Feature from "./feature";
import Partners from "./partner"
import Media from "./mediapartners"
import Dare from "./dare"


function Home() {
  console.log("hello");
  return (
    <div>
      <div className="relative z-[99]">
        <AtkHero />
      </div>
  
      <Feature />
      
      <Time />
      <Dare/>
      <Past />

      {/* Ensure Sponsor is not overlapped */}
      <div className="relative ">
        <Sponsor />
        <Partners />
        <Media />
      </div>
  
    
    </div>
  );
}

export default Home;

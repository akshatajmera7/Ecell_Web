import React from 'react';
import Hero from "./hero";
import Companies from "./companies";
import Partners from "./companies partners"
import Media from "./companies media"


function Sponsor() {
  return (
    <div>
      <Hero />
      <Companies/>
      <Partners/>
      <Media/>
      
    </div>
  );
}

export default Sponsor;
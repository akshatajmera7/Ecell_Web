import React from 'react';
import Hero from "./hero";
import Companies from "./companies";
import Partners from "./companies partners"
import Media from "./companies media"
import Contact from "./sponsorcontact"


function Sponsor() {
  return (
    <div>
      <Hero />
      <Companies/>
      <Partners/>
      <Media/>
      <Contact/>
    </div>
  );
}

export default Sponsor;
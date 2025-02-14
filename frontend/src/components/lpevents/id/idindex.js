import React from 'react';
import Hero from "./hero";
import Contact from "./contact";
import Desc from "./description"
import Stats from "./stats";




function Team() {
  return (
    <div>
      <Hero />
      <Stats />
      <Desc /> 
     <Contact />
    </div>
  );
}

export default Team;
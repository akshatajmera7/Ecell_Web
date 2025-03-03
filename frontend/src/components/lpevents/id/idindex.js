import React from 'react';
import Hero from "./hero";
import Contact from "./contact";
import Desc from "./description"
import Stats from "./stats";
import Companies from "./companies";

function Team() {
  return (
    <div>
      <Hero />
      <Stats />
      <Desc />

      
      <div className="pt-16 bg-black"> 
        <Companies />
      </div>

      <Contact />
    </div>
  );
}

export default Team;



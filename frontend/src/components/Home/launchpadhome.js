import React from "react";
import Hero from "./lhero";
import Sponsor from "./sponsor";
import Past from "./past";
import Time from "./time";
import Feature from "./feature";
import Partners from "./partner";
import Media from "./mediapartners";
import Dare from "./dare";
import About from "./labout";

function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <About />


      <Time />
      <Dare />
      <Past />

      <div className="relative ">
        <Sponsor />
        <Partners />
        <Media />
      </div>
    </div>
  );
}

export default Home;

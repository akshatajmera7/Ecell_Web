import React from "react";
import Hero from "./lhero";
import GradientBackground from "../GradientBackground";
import Sponsor from "./sponsor";
import Past from "./past";
import Feature from "./feature";
import Partners from "./partner";
import Media from "./mediapartners";
import Dare from "./dare";
import About from "./labout";
import ProgramsSection from "./ProgramsSection";
import CABlock from "./CABlock";

function Home() {
  return (
    <GradientBackground>
      <Hero />
      <Feature />
      <CABlock />
      <About />
      <ProgramsSection />
      <Dare />
      <Past />

      <div className="relative ">
        <div id="sponsor">
          <Sponsor />
        </div>
        <div id="partner">
          <Partners />
        </div>
        <Media />
      </div>
    </GradientBackground>
  );
}

export default Home;

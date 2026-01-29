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

function Home() {
  return (
    <GradientBackground>
      <Hero />
      <Feature />
      <About />
      <ProgramsSection />
      <Dare />
      <Past />

      <div className="relative ">
        <Sponsor />
        <Partners />
        <Media />
      </div>
    </GradientBackground>
  );
}

export default Home;

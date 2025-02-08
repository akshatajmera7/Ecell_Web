import React from "react";
import Current from "./currspeakers";
import Hero from "./hero";
import Past from "./prevspeakers";
import Contact from "./speakercontact";

function Home() {
    console.log("hello")
  return (
    <div>
    <Hero/>
    <Current/>
    <Past/>
    <Contact/>
    </div>
  );
}

export default Home;

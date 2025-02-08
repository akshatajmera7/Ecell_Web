import React from "react";
import Current from "./currspeakers";

import Past from "./prevspeakers";
import Contact from "./speakercontact";

function Home() {
    console.log("hello")
  return (
    <div>
    <Current/>
    <Past/>
    <Contact/>
    </div>
  );
}

export default Home;

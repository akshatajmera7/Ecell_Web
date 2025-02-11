import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/Home/home";
import Team from "./components/Teams/team";
import Program from "./components/Programs/program";
import Contact from "./components/contact";
import Passes from "./components/passes";
import LNavbar from "./components/lnavbar";
import LFooter from "./components/lfooter";
import Lteam from "./components/team/team";
import Lcontact from "./components/lcontact";
import Launchpadhome from "./components/Home/launchpadhome";
import Event from "./components/events/event";
import Sponsor from "./components/sponsors/sponsor";

import Speakers from "./components/speakers/launchpadspeakers";

import Gr from "./components/lpevents/gr/grindex";

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Scrolling to top", location.location);
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // Force scroll
    }, 0);
  }, [location]);
  
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainContent />
    </Router>
  );
}

// Extracted main content to keep `useLocation()` inside `Router`
function MainContent() {
  const location = useLocation();
  const isLaunchpadRoute = location.pathname.startsWith("/launchpad");

  return (
    <div className="app-container">
      <ScrollToTop />

      {/* Conditional Navbar */}
      {isLaunchpadRoute ? <LNavbar /> : <Navbar />}

      <Routes>
        {/* Normal Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />

        {/* Launchpad Routes */}
        <Route path="/launchpad" element={<Launchpadhome />} />
        <Route path="/launchpad/contact" element={<Lcontact />} />
        <Route path="/launchpad/events" element={<Event />} />
        <Route path="/launchpad/sponsor" element={<Sponsor />} />
    <Route path="/launchpad/passes" element={<Passes />} />
        <Route path="/launchpad/speakers" element={<Speakers />} />
        <Route path="/launchpad/team" element={<Lteam />} />
        <Route path="/launchpad/ground_reality" element={<Gr />} />
      </Routes>

      {/* Conditional Footer */}
      {isLaunchpadRoute ? <LFooter /> : <Footer />}
    </div>
  );
}

export default App;
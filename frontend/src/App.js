import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/Home/home";
import Team from "./components/Teams/team";
import Program from "./components/Programs/program";
import Contact from "./components/contact";

import LNavbar from "./components/lnavbar";
import LFooter from "./components/lfooter";
import Lteam from "./components/team/team";
import Lcontact from "./components/lcontact";
import Launchpadhome from "./components/Home/launchpadhome";
import Event from "./components/events/event";
import Sponsor from "./components/sponsors/sponsor";

import Schedules from "./components/schedules";
import Speakers from "./components/speakers/launchpadspeakers";

import Gr from "./components/lpevents/gr/grindex";
import Pitchp from "./components/lpevents/pitcherspilot/ppindex";
import TT from "./components/lpevents/t3/t3index";
import Id from "./components/lpevents/id/idindex";
import Bp from "./components/lpevents/bp/bpindex";
import Na from "./components/lpevents/na/naindex";
import Pp from "./components/lpevents/pitchperfect/ppfindex";
import Se from "./components/lpevents/startupexpo/seindex";
import PaymentSuccess from "./components/paymentsuccess";
import PaymentFailed from "./components/paymentfailed";
import PaymentCancel from "./components/paymentcancel";

// startup connect form component
import StartupConnectForm from './components/StartupConnectForm';
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
        <Route path="/na" element={<Na />} />

        {/* Launchpad Routes */}
        <Route path="/launchpad" element={<Launchpadhome />} />
        <Route path="/launchpad/contact" element={<Lcontact />} />
        <Route path="/launchpad/events" element={<Event />} />
        <Route path="/launchpad/sponsor" element={<Sponsor />} />
  
        <Route path="/launchpad/speakers" element={<Speakers />} />
     
       <Route path="/launchpad/schedules" element={<Schedules />} />
        <Route path="/launchpad/team" element={<Lteam />} />
        <Route path="/launchpad/ground_reality" element={<Gr />} />
        <Route path="/launchpad/pitchers_pilot" element={<Pitchp />} />
        <Route path="/launchpad/teen_tycoons" element={<TT />} />
        <Route path="/launchpad/beyond_profits" element={<Bp />} />
        <Route path="/launchpad/internship_drive" element={<Id />} />
        <Route path="/launchpad/pitch_perfect" element={<Pp />} />
        <Route path="/launchpad/startup_expo" element={<Se />} />
        <Route path="/launchpad/payment-success" element={<PaymentSuccess />} />
        <Route path="/launchpad/payment-failed" element={<PaymentFailed />} />
        <Route path="/launchpad/payment-cancel" element={<PaymentCancel />} />


        {/* startup connect form route */}
        <Route path="/startup-connect" element={<StartupConnectForm />} />
      </Routes>

      {/* Conditional Footer */}
      {isLaunchpadRoute ? <LFooter /> : <Footer />}
      <SpeedInsights/>
    </div>
  );
}

export default App;

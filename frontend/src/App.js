import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { SpeedInsights } from "@vercel/speed-insights/react"
import ErrorBoundary from "./components/ErrorBoundary";
import StaggeredMenu from "./components/StaggeredMenu";
import Footer from "./components/footer";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import Home from "./components/Home/home";
import Team from "./components/Teams/team";
import Program from "./components/Programs/program";
import Contact from "./components/contact";
import Gallery from "./components/Gallery/gallery";
import LaunchpadGallery from "./components/Gallery/launchpadgallery";
import Navbar from "./components/navbar";


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
import ECellLoader from './components/ECellLoader';
import StartupConnectForm from './components/StartupConnectForm';
import EventDemo from "./components/lpevents/EventTemplate/EventDemo";
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Scrolling to top", location.pathname);
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // Force scroll
    }, 0);
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <ErrorBoundary>
        <Router>
          <ECellLoader />
          <ScrollToTop />
          <MainContent />
        </Router>
      </ErrorBoundary>
    </>
  );
}

// Extracted main content to keep `useLocation()` inside `Router`
function MainContent() {
  const location = useLocation();
  const isLaunchpadRoute = location.pathname.startsWith("/launchpad");

  // Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    menuRef.current?.toggle();
  };

  // Menu items for StaggeredMenu
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Programs', ariaLabel: 'View our programs', link: '/program' },
    { label: 'Our Team', ariaLabel: 'Meet the team', link: '/team' },
    { label: 'Gallery', ariaLabel: 'View our gallery', link: '/gallery' },
    { label: 'Launchpad', ariaLabel: 'Explore Launchpad', link: '/launchpad' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://www.instagram.com/ecell_bphc', icon: <FaInstagram /> },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/company/e-cell-bphc/', icon: <FaLinkedin /> },
    { label: 'Twitter', link: 'https://x.com/ecell_bphc', icon: <FaTwitter /> },
    { label: 'Facebook', link: 'https://www.facebook.com/groups/158307448076754/', icon: <FaFacebook /> }
  ];

  // Launchpad menu items
  const launchpadMenuItems = [
    { label: 'Home', ariaLabel: 'Go to Launchpad home', link: '/launchpad' },
    { label: 'Schedule', ariaLabel: 'View schedule', link: '/launchpad/schedules' },
    { label: 'Events', ariaLabel: 'View events', link: '/launchpad/events' },
    { label: 'Speakers', ariaLabel: 'Meet the speakers', link: '/launchpad/speakers' },
    { label: 'Sponsors', ariaLabel: 'View sponsors', link: '/launchpad/sponsor' },
    { label: 'Gallery', ariaLabel: 'View gallery', link: '/launchpad/gallery' },
    { label: 'Team', ariaLabel: 'Meet our team', link: '/launchpad/team' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/launchpad/contact' },
    { label: 'E-Cell', ariaLabel: 'Go back to E-Cell website', link: '/' }
  ];

  return (
    <div className="app-container">
      <ScrollToTop />

      {/* Conditional Navbar */}
      {!isLaunchpadRoute && <Navbar onToggleMenu={toggleMenu} isOpen={isMenuOpen} />}

      {isLaunchpadRoute ? (
        <StaggeredMenu
          position="right"
          items={launchpadMenuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={false}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={false}
          colors={['#1a1a1a', '#2a2a2a']}
          logoUrl="/lplogo.jpeg"
          accentColor="#d4ff00"
          isFixed={true}
          onMenuOpen={() => setIsMenuOpen(true)}
          onMenuClose={() => setIsMenuOpen(false)}
        />
      ) : (
        <StaggeredMenu
          ref={menuRef}
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={false}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={false}
          colors={['#1a1a1a', '#2a2a2a']}
          logoUrl="/navbarlogo.png"
          accentColor="#d4ff00"
          isFixed={true}
          onMenuOpen={() => setIsMenuOpen(true)}
          onMenuClose={() => setIsMenuOpen(false)}
        />
      )}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Normal Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/program" element={<Program />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/launchpad/gallery" element={<LaunchpadGallery />} />
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
          <Route path="/launchpad/event-demo" element={<EventDemo />} />
          <Route path="/launchpad/payment-cancel" element={<PaymentCancel />} />


          {/* startup connect form route */}
          <Route path="/startup-connect" element={<StartupConnectForm />} />
        </Routes>
      </AnimatePresence>

      {/* Conditional Footer */}
      {isLaunchpadRoute ? <LFooter /> : <Footer />}
      <SpeedInsights />
    </div>
  );
}

export default App;

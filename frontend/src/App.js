import React, { useEffect } from 'react';
import Navbar from "./components/navbar";
import Home from "./components/Home/home";
import Team from "./components/Teams/team";
import Program from "./components/Programs/program";
import Footer from "./components/footer";
import Contact from "./components/contact";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null; 
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/program" element={<Program />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
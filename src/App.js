import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import LoginPage from "./components/LoginPage"; // 👈 create this
// import SignupPage from "./components/SignupPage"; // 👈 optional

const HomePage = () => (
  <>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <ContactSection />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/signup" element={<SignupPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

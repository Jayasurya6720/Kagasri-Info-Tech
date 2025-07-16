import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import AboutUs from "./components/AboutUs";
import ReviewSection from "./components/ReviewSection";
import Services from "./components/Services";
import Contact from "./components/Contact";

// Wrapper to conditionally include Navbar and Footer
const AppLayout = ({ children }) => {
  const location = useLocation();
  const hideOnPaths = ["/login", "/signup"];
  const hideNavFooter = hideOnPaths.includes(location.pathname);

  return (
    <>
      {/* Hide navbar if on login or signup */}
      {!hideNavFooter && <Navbar />}

      <main>{children}</main>

      {/* Hide footer if on login or signup */}
      {!hideNavFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <ProjectsSection />
                <ReviewSection />
                <ContactSection />
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/aboutus" element={<AboutUs />} />
           <Route path="/Services" element={<Services />} />
           <Route path="/contact" element={<Contact/>}/>


        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;

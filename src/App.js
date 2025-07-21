import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import AboutUs from "./components/AboutUs";
import ReviewSection from "./components/ReviewSection";
import Services from "./components/Services";
import Contact from "./components/Contact";
import WebsiteDevelopment from "./components/WebsiteDevelopment";
import ECommerceWebsite from "./components/ECommerceWebsite";
import DigitalMarketing from "./components/DigitalMarketing";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import PageNotFound from "./components/PageNotFound";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const hideOnPaths = ["/login", "/signup"];
  const hideNavFooter = hideOnPaths.includes(location.pathname);

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <main>{children}</main>
      {!hideNavFooter && <Footer />}
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loader for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loader />
      ) : (
        
        <AppLayout>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AboutSection />
                  <ServicesSection />
                  <ReviewSection />
                  <ContactSection />
                </>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/websitedevelopment" element={<WebsiteDevelopment />} />
            <Route path="/ecommerce" element={<ECommerceWebsite />} />
            <Route path="/digitalmarketing" element={<DigitalMarketing />} />
            <Route path="/pagenotfound" element={<PageNotFound />} />
          </Routes>
        </AppLayout>
      )}
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

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

// Layout wrapper for showing Navbar and Footer conditionally
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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Helmet>
        <title>Kagasri Info Tech | Web, Digital & E-Commerce Experts</title>
        <meta name="description" content="Kagasri Info Tech offers web development, digital marketing, and e-commerce services to help businesses grow digitally." />
        <meta name="keywords" content="Kaga, Kagasri, Web Development, Digital Marketing, E-Commerce, React, ASP.NET, SEO, India IT Company, Salem IT Company,Kaga Info Tech" />
        <meta name="author" content="Kagasri Info Tech Pvt Ltd" />
        <meta property="og:title" content="Kagasri Info Tech" />
        <meta property="og:description" content="Architects of digital dreams. Explore our services for websites, marketing & online stores." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kagasri.com" />
        <meta property="og:image" content="https://www.kagasri.com/logo.png" />
      </Helmet>

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
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/websitedevelopment" element={<WebsiteDevelopment />} />
            <Route path="/ecommerce" element={<ECommerceWebsite />} />
            <Route path="/digitalmarketing" element={<DigitalMarketing />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AppLayout>
      )}
    </Router>
  );
}

export default App;

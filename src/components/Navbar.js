import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => handleNavigation("/")} style={{ cursor: "pointer" }}>
        <img src="/logo.png" alt="logo" />
      </div>

      <div className="burger" onClick={toggleMenu}>
        {isMobileMenuOpen ? '×' : '☰'}
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <button className="login" onClick={() => handleNavigation("/")}>HOME</button>
        <button className="login" onClick={() => handleNavigation("/aboutus")}>ABOUT US</button>
        <button className="login" onClick={() => handleNavigation("/Services")}>SERVICES</button>
        <button className="login" onClick={() => handleNavigation("/Contact")}>CONTACT US</button>
      </div>

      <div className={`auth-buttons ${isMobileMenuOpen ? "active" : ""}`}>
        <button className="login" onClick={() => handleNavigation("/login")}>LOG IN</button>
        <button className="signup" onClick={() => handleNavigation("/signup")}>SIGN UP</button>
      </div>
    </nav>
  );
};

export default Navbar;

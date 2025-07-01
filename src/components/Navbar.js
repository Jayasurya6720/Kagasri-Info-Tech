import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>

      <div className="burger" onClick={toggleMenu}>
        &#9776;
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <button className="login" onClick={() => navigate("/")}>HOME</button>
        <button className="login" onClick={() => navigate("/aboutus")}>ABOUT US</button>
        <button>SERVICES</button>
        <button>PORTFOLIO</button>
        <button>CONTACT</button>
      </div>

      <div className={`auth-buttons ${isMobileMenuOpen ? "active" : ""}`}>
        <button className="login" onClick={() => navigate("/login")}>LOG IN</button>
        <button className="signup" onClick={() => navigate("/signup")}>SIGN UP</button>
      </div>
    </nav>
  );
};

export default Navbar;

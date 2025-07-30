import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import footerimg from "../assert/Kaga info tech_footer 1.png"

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  
  
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-logo">
          <div className="logo-box"><img src={footerimg} alt="footer logo" /></div>
          <div className="empty-box"><p className="emt-p">At KAGA INFOTECH, we empower businesses through cutting-edge software development, creative UI/UX design, and custom IT solutions. With a strong focus on innovation, quality, and user experience, we help startups and enterprises scale faster in today’s digital-first world.Whether you need a custom web application, a scalable mobile app, or a complete product design strategy — we build solutions that drive results.</p></div>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/" >→ Home</Link></li>
            <li><Link to="/aboutus">→ About Us</Link></li>
            <li><Link to="/Services">→ Services</Link></li>
            <li><Link to="/contact">→ Contact</Link></li>
            <li><Link to="/pagenotfound">→ Privacy Policy</Link></li>
            <li><Link to="/pagenotfound">→ Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Our Services</h3>
          <ul>
            <li><Link to="/websitedevelopment">→ Website Development</Link></li>
            <li><Link to="/digitalmarketing">→ Digital Marketing</Link></li>
            <li><Link to="/ecommerce">→ Bpo</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Get Directions</h3>
          <ul>
            <li><FaMapMarkerAlt /> Annadhanapatty, Salem-636002</li>
            <li><FaPhoneAlt /> +91 9994222035</li>
            <li><FaEnvelope /> info@kagasri.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <FaWhatsapp />
          <FaInstagram />
          <FaFacebook />
          <FaYoutube />
        </div>
        <hr></hr>
        <p>COPYRIGHT ©2025 KAGASRI INFO TECH. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;

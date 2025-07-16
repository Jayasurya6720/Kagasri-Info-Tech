import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  
  
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-logo">
          <div className="logo-box">Logo</div>
          <div className="empty-box"></div>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">→ Home</Link></li>
            <li><Link to="/aboutus">→ About Us</Link></li>
            <li><Link to="/Services">→ Services</Link></li>
            <li><Link to="/contact">→ Contact</Link></li>
            <li>→ Privacy Policy</li>
            <li>→ Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Our Services</h3>
          <ul>
            <li>→ Website Development</li>
            <li>→ Digital Marketing</li>
            <li>→ E-Commerce Website</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Get Directions</h3>
          <ul>
            <li><FaMapMarkerAlt /> Annadhanapatty, Salem-636002</li>
            <li><FaPhoneAlt /> +91 9876543210</li>
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

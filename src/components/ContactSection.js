import React from "react";
import "./ContactSection.css";
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane, FaRegClipboard } from "react-icons/fa";
import { BsFillChatDotsFill, BsFillQuestionCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <div id="contact" className="contact-container">
      <h2>
        WE’RE HERE TO <span className="highlight-link">HELP</span>
      </h2>
      <div className="contact-content">
        <form className="contact-form">
          <div className="form-group">
            <FaUser className="icon" />
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Mail id" />
          </div>
          <div className="form-group">
            <FaPhone className="icon" />
            <input type="tel" placeholder="Phone Number" />
          </div>
          <div className="form-group textarea">
            <FaRegClipboard className="icon" />
            <textarea placeholder="Details"></textarea>
          </div>
          <button type="submit">
            Send a message <FaPaperPlane />
          </button>
        </form>
        <div className="contact-info">
          <div className="info-block">
            <BsFillQuestionCircleFill className="info-icon" />
            <div>
              <h3>Knowledgebase</h3>
              <p>We’re here to help with any questions or code.</p>
              <a href="/">Contact Support →</a>
            </div>
          </div>
          <hr />
          <div className="info-block">
            <BsFillChatDotsFill className="info-icon" />
            <div>
              <h3>FAQ</h3>
              <p>We’re here to help with any questions or code.</p>
              <a href="/">Visit FAQ →</a>
            </div>
          </div>
          <hr />
          <div className="info-block">
            <MdEmail className="info-icon" />
            <div>
              <h3>Contact us by email</h3>
              <p>We’re here to help with any questions or code.</p>
              <a href="mailto:infokagasri@gmail.com">infokagasri@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

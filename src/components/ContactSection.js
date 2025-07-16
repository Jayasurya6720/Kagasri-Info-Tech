import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactSection.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaRegClipboard
} from "react-icons/fa";
import {
  BsFillChatDotsFill,
  BsFillQuestionCircleFill
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hxm5lgi", // ← Replace with your actual ID
        "template_uv7cxn2", // ← Replace with your actual ID
        form.current,
        "SelGdyC7T3Sp6eb_o" // ← Replace with your actual public key
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          form.current.reset(); // clear the form
        },
        (error) => {
          alert("Message Failed! Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact-container">
      <h2>
        WE’RE HERE TO <span className="highlight-link">HELP</span>
      </h2>
      <div className="contact-content">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <FaUser className="icon" />
            <input type="text" name="user_name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <FaEnvelope className="icon" />
            <input type="email" name="user_email" placeholder="Mail id" required />
          </div>
          <div className="form-group">
            <FaPhone className="icon" />
            <input type="tel" name="user_phone" placeholder="Phone Number" />
          </div>
          <div className="form-group textarea">
            <FaRegClipboard className="icon" />
            <textarea name="message" placeholder="Details" required></textarea>
          </div>
          <button type="submit">
            Send a message <FaPaperPlane />
          </button>
        </form>

        {/* Static Info Section */}
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

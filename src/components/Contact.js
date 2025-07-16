import React from "react";
import "./Contact.css";
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane, FaRegClipboard } from "react-icons/fa";
import { BsFillChatDotsFill, BsFillQuestionCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import ContactImg1 from "../assert/Contact-img1.jpg";
import ContactImg2 from "../assert/Contact-img2.jpg";

const ContactSection = () => {
    return (
        <div className="contact-section">
            <section className="top-section">
                <div className="top-left">
                    <h1>
                        From vision to execution <br />
                        <span>we are the architects of <br /> digital dreams.</span>
                    </h1>
                    <p>
                        At Kagasri Info Tech, we offer tailored digital <br /> solutions that empower businesses to grow and <br /> innovate. From web and app development to <br /> digital marketing and design, our services are <br /> built to solve real-world challenges. We blend <br /> creativity, technology, and strategy to deliver <br /> results that matter.
                    </p>
                </div>

                {/* <div className="image-grid">
            <div className="div1"></div>
            <div className="div2">
              <img src={topImg} alt="Office" />
            </div>
            <div className="div3">
              <img src={centerImg} alt="Team" />
            </div>
            <div className="div4"></div>
          </div> */}
                {/* <br/> */}
                {/* <p>
            Founded in 2025, Kagasri Infotech emerged from a vision to redefine how technology empowers businesses and transforms lives. Our foundation is built on the rare synergy between seasoned professionals — the golden minds of the industry — and dynamic young innovators who see the world differently and aren’t afraid to challenge the status quo. We are guided by purpose, passion, and precision. Every project we undertake is a reflection of our commitment to quality, creativity, and long-term value. Whether it’s digital transformation, web development, mobile applications, or emerging technologies, we bring both technical expertise and imaginative energy to the table. At our core, we believe in collaboration over competition, transparency over complexity, and integrity over shortcuts. These aren’t just values — they are the foundation of our relationships with clients, partners, and our growing team. As we move forward, we’re not just writing code — we’re writing the future. One solution at a time. One connection at a time. One breakthrough at a time.
          </p>
          <p className="highlight-quote">
            Join us on this journey. Because at Kagasri, the future isn’t just something we chase — it’s something we create.
          </p>
        </div> */}

                {/* <div className="image-grid">
            <div className="div1"></div>
            <div className="div2">
              <img src={topImg} alt="Office" />
            </div>
            <div className="div3">
              <img src={centerImg} alt="Team" />
            </div>
            <div className="div4"></div>
          </div> */}

                <div className="top-right">

                    <div className="image-grid">
                        <div className="div1"></div>
                        <div className="div2">
                            <img src={ContactImg1} alt="Office" />
                        </div>
                        <div className="div3">
                            <img src={ContactImg2} alt="Team" />
                        </div>
                        <div className="div4"></div>
                    </div>
                </div>


            </section>
            {/* form  */}
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
        </div>
    );
};

export default ContactSection;

import React from "react";
import "./WebsiteDevelopment.css";
import { useNavigate } from "react-router-dom";
import planning from "../assert/bulb.png";
import design from "../assert/rocket.png";
import development from "../assert/candle.png";

import WebImage1 from "../assert/WebImage/Web-img1.jpg";
import WebImage2 from "../assert/WebImage/Web-img2.jpg";
import WebImage3 from "../assert/WebImage/Web-img3.png";
import WebImage4 from "../assert/WebImage/Web-img4.png";
import WebImage5 from "../assert/WebImage/Web-img5.png";
import WebImage6 from "../assert/WebImage/Web-img6.png";
import WebImage7 from "../assert/WebImage/Web-img7.png";

const WebsiteDevelopment = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="services-container">
                <section className="top-section">
                    <div className="top-left">
                        <h1>
                            Crafting High-Performance
                            <br />
                            <span>Websites That Build Brands <br />  -Web Development</span>
                        </h1>
                        <p>
                            At Kagasri Info Tech, our web development <br /> services go beyond clean code and modern<br /> design — we build digital experiences that<br /> empower your brand and engage your audience.<br /> Whether you need a sleek portfolio, a dynamic<br /> business website, or a complex web platform, we<br /> tailor every project to meet your specific goals.    </p>
                    </div>
                    <div className="top-right">

                        <div className="image-grid">
                            <div className="div1"></div>
                            <div className="div2">
                                <img src={WebImage1} alt="Office" />
                            </div>
                            <div className="div3">
                                <img src={WebImage2} alt="Team" />
                            </div>
                            <div className="div4"></div>
                        </div>
                    </div>

                    <p className="para"> <br />Our team combines design thinking with robust technology to create fast, responsive,
                        and secure websites optimized for all devices. From the wireframe to the final deployment,
                        we ensure your site not only looks stunning but performs exceptionally. With SEO best
                        practices, mobile-first development, and performance optimization, we make sure your
                        website works hard for your business.</p>

                </section>


                {/* === Services List === */}
                <section className="services-list">
                    {/* Website Development */}
                    <div className="service-block">
                        <img src={WebImage3} alt="Website Development" />
                        <div className="service-text">
                            <h3>Custom-Built Websites</h3>
                            <p>
                                Every business is unique, and so should its website be.
                                We build websites from the ground up — no templates, no shortcuts.
                                Your site will reflect your brand, support your business goals, and be optimized
                                for speed, performance, and search engines from day one.
                            </p>

                        </div>
                    </div>


                    {/* Digital Marketing */}
                    <div className="service-block reverse">
                        <img src={WebImage4} alt="Digital Marketing" />
                        <div className="service-text">
                            <h3>Clean & User-Friendly Design</h3>
                            <p>
                                We focus on creating simple, easy-to-navigate websites that anyone can use without confusion.
                                A clear layout and smooth flow help visitors stay longer, understand your services better,
                                and are more likely to take action — all while improving your site's engagement and SEO.
                            </p>

                        </div>
                    </div>


                    {/* E-Commerce */}
                    <div className="service-block">
                        <img src={WebImage5} alt="E-Commerce Website" />
                        <div className="service-text">
                            <h3>SEO-Focused from the Start</h3>
                            <p>
                                Your website is built with search engines in mind — fast loading, mobile-first design,
                                structured content, and keyword-friendly architecture. These elements work together to
                                increase visibility, bring in more organic traffic, and grow your online presence naturally.
                            </p>

                        </div>
                    </div>

                    {/* Digital Marketing */}
                    <div className="service-block reverse">
                        <img src={WebImage6} alt="Digital Marketing" />
                        <div className="service-text">
                            <h3>Easy to Manage, Ready to Grow</h3>
                            <p>
                                We build websites that are simple to update — add text, images, or even new pages
                                without needing technical help. As your business grows, your site can grow with it,
                                saving you time and cost on future upgrades while maintaining top SEO performance.
                            </p>

                        </div>
                    </div>


                    {/* E-Commerce */}
                    <div className="service-block">
                        <img src={WebImage7} alt="E-Commerce Website" />
                        <div className="service-text">
                            <h3>Strong Protection & Safe Browsing</h3>
                            <p>
                                We take your website’s safety seriously. From SSL encryption to firewall protections
                                and secure coding practices, we make sure your data and your visitors stay safe.
                                A secure site builds trust with customers and sends the right signals to Google.
                            </p>

                        </div>
                    </div>


                </section>
            </div>
            {/* //**================================== */}
            <div className="process-container">
                <h2 className="section-title">Our Process</h2>
                <div className="process-wrapper">
                    <div className="process-step">
                        <div className="icon-circle">
                            <img src={planning} alt="Requirement & Planning" />
                        </div>
                        <h3>Requirement<br />& Planning</h3>
                        <p>
                            We start by understanding your business needs, defining project
                            goals, target users, and finalizing the features and flow of the
                            website.
                        </p>
                    </div>

                    <div className="dashed-line" />

                    <div className="process-step">
                        <div className="icon-circle">
                            <img src={design} alt="Design & Structure" />
                        </div>
                        <h3>Design<br />& Structure</h3>
                        <p>
                            We create the website layout and user interface with a focus on
                            clean structure, smooth navigation, and a strong user experience.
                        </p>
                    </div>

                    <div className="dashed-line" />

                    <div className="process-step">
                        <div className="icon-circle">
                            <img src={development} alt="Development" />
                        </div>
                        <h3>Development</h3>
                        <br></br>
                        <p>
                            The front-end and back-end of your website are built with clean,
                            responsive, and scalable code — ensuring high performance across all
                            devices.
                        </p>
                    </div>
                </div>
                
                {/* Footer Section */}
                 <footer className="about-ft">
                    <div className="ft-note">
                        <h3>Your ideas, feedback, or even just a hello — we’re always happy to connect.</h3>
                        <p>
                            Whether you have a question, need support, or want to explore how we can work together — we’re here for it.
                        </p>
                    </div>

                    <button className="contact-btn" onClick={() => navigate("/contact")}>
                        CONTACT US
                    </button>
                </footer>
            </div>
        </div>

        

    );
};

export default WebsiteDevelopment;

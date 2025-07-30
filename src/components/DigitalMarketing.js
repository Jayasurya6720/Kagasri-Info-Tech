import React from "react";
import "./WebsiteDevelopment.css";
import { useNavigate } from "react-router-dom";
import planning from "../assert/bulb.png";
import design from "../assert/rocket.png";
import development from "../assert/candle.png";

import DigitalImg1 from "../assert/Digital-Img/Digital-Img1.jpg";
import DigitalImg2 from "../assert/Digital-Img/Digital-Img2.jpg";
import DigitalImg3 from "../assert/Digital-Img/Digital-Img3.png";
import DigitalImg4 from "../assert/Digital-Img/Digital-Img4.png";
import DigitalImg5 from "../assert/Digital-Img/Digital-Img5.png";
import DigitalImg6 from "../assert/Digital-Img/Digital-Img6.png";
import DigitalImg7 from "../assert/Digital-Img/Digital-Img7.png";

const DigitalMarketing = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="services-container">
                <section className="top-section">
                    <div className="top-left">
                        <h1>
                            Smart Strategies for Digital 

                            <br />
                            <span>Growth and Real Results <br /> -Digital Marketing</span>
                        </h1>
                        <p> In today’s competitive landscape, visibility is<br />
                         power. At Kagasri Info Tech, we deliver digital<br />
                          marketing solutions that drive measurable results<br /> 
                          — more traffic, higher engagement, and better <br /> conversions.</p>
                    </div>
                    <div className="top-right">

                        <div className="image-grid">
                            <div className="div1"></div>
                            <div className="div2">
                                <img src={DigitalImg1} alt="Office" />
                            </div>
                            <div className="div3">
                                <img src={DigitalImg2} alt="Team" />
                            </div>
                            <div className="div4"></div>
                        </div>
                    </div>

                    <p className="para"> <br />Our services include SEO, social media marketing, content creation, Google Ads,
                     and performance analytics, all aligned with your brand goals. We don’t believe in one-size-fits-all strategies.
                      Every campaign is backed by data, customized for your audience, and continuously optimized for better ROI.
                      Whether you're launching a new brand or scaling your digital presence, we help you get seen, stay relevant, and grow smart.</p>

                </section>


                {/* === Services List === */}
                <section className="services-list">
                    {/* Website Development */}
                    <div className="service-block">
                        <img src={DigitalImg3} alt="Website Development" />
                        <div className="service-text">
                            <h3>Social Media & Influencer Marketing</h3>
                            <p>
                                We help you grow on platforms like Instagram, Facebook, and LinkedIn through content 
                                planning, ad campaigns, and community engagement. We also connect your brand with the right
                                 influencers and YouTube creators to boost reach, trust, and conversion through authentic 
                                 collaborations.
                            </p>

                        </div>
                    </div>


                    {/* Digital Marketing */}
                    <div className="service-block reverse">
                        <img src={DigitalImg4} alt="Digital Marketing" />
                        <div className="service-text">
                            <h3>Search Engine Optimization (SEO)</h3>
                            <p>
                              Our SEO strategies improve your search rankings, drive organic traffic,
                               and build long-term digital visibility. We focus on keyword optimization, 
                               technical SEO, and link-building to place your business ahead of the competition in search results.
                            </p>

                        </div>
                    </div>


                    {/* E-Commerce */}
                    <div className="service-block">
                        <img src={DigitalImg5} alt="E-Commerce Website" />
                        <div className="service-text">
                            <h3>Performance Advertising</h3>
                            <p>
                                We manage data-driven ad campaigns on platforms like Google Ads and Meta 
                                (Facebook & Instagram). Whether it's brand awareness or lead generation, our
                                 pay-per-click strategies are optimized to give you maximum return on investment (ROI).
                            </p>

                        </div>
                    </div>

                    {/* Digital Marketing */}
                    <div className="service-block reverse">
                        <img src={DigitalImg6} alt="Digital Marketing" />
                        <div className="service-text">
                            <h3>Content & Email Marketing</h3>
                            <p>
                               From blogs to creatives to email automation, we craft valuable content that educates, 
                               inspires, and converts your audience. Our email strategies help retain customers, re-engage
                                inactive users, and deliver personalized messages that drive action.
                            </p>

                        </div>
                    </div>


                    {/* E-Commerce */}
                    <div className="service-block">
                        <img src={DigitalImg7} alt="E-Commerce Website" />
                        <div className="service-text">
                            <h3>Digital Growth Strategy & Reporting</h3>
                            <p>
                                 We don’t just run campaigns — we plan your growth. Every project starts with a 
                                 custom strategy based on your goals. Through regular reports, insights, and optimization,
                                  we ensure every step moves you closer to measurable results.
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

export default DigitalMarketing;

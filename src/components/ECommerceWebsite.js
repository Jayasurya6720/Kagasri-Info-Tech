import React from "react";
import "./ECommerceWebsite.css";
import { useNavigate } from "react-router-dom";
import planning from "../assert/Tele-Img/Tele-Img8.png";
import design from "../assert/Tele-Img/Tele-Img9.png";
import development from "../assert/Tele-Img/Tele-Img10.png";

import EcomImg1 from "../assert/Tele-Img/Tele-Img1.jpg";
import EcomImg2 from "../assert/Tele-Img/Tele-Img2.jpg";
import EcomImg3 from "../assert/Tele-Img/Tele-Img3.jpg";
import EcomImg4 from "../assert/Tele-Img/Tele-Img4.jpg";
import EcomImg5 from "../assert/Tele-Img/Tele-Img5.jpg";
import EcomImg6 from "../assert/Tele-Img/Tele-Img6.jpg";
import EcomImg7 from "../assert/Tele-Img/Tele-Img7.jpg";

const Ecommerce = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="services-container">
                <section className="top-section">
                    <div className="top-left">
                        <h1>
                        Smart Outsourcing. Real 


                            <br />
                            <span> Efficiency. Global Standards <br />-Business Process Outsource</span>
                        </h1>
                        <p>At Kaga Info Tech, we provide reliable Business  <br />
                        Process Outsourcing (BPO) services that help <br />
                        businesses reduce costs, improve efficiency, and <br />
                        focus on their core goals. Our team handles <br />
                        customer support (voice & non-voice), data entry, <br />
                        lead generation, back-office tasks, and technical<br/>
                        support — all with speed, accuracy, and <br />
                        confidentiality.</p>
                    </div>
                    <div className="top-right">

                        <div className="image-grid">
                            <div className="div1"></div>
                            <div className="div2">
                                <img src={EcomImg1} alt="Office" />
                            </div>
                            <div className="div3">
                                <img src={EcomImg2} alt="Team" />
                            </div>
                            <div className="div4"></div>
                        </div>
                    </div>

                    <p className="para"> <br /> 
                    We work with startups and enterprises across industries like healthcare, tech, travel, and finance.
                     Our flexible, scalable solutions are tailored to meet your business needs, and we operate as an extension 
                     of your team — focused on delivering real value and long-term growth.</p>

                </section>


                {/* === Services List === */}
                <section className="services-list">
                    {/* Website Development */}
                    <div className="service-block">
                        <img src={EcomImg3} alt="Website Development" />
                        <div className="service-text">
                            <h3>Industry-Specific Custom Processes</h3>
                            <p>
                            We offer tailored BPO solutions for various
                             industries including tech, healthcare, construction, 
                             and finance — covering both voice and non-voice processes based on your operational needs.
                            </p>

                        </div>
                    </div>


                    {/* Digital Marketing */}
                    <div className="service-block reverse">
                        <img src={EcomImg4} alt="Digital Marketing" />
                        <div className="service-text">
                            <h3>Accounting & Financial Services</h3>
                            <p>
                            Our team handles accounting, bookkeeping,
                             financial calculations, and reporting with accuracy and compliance — saving you time and reducing operational costs.
                            </p>

                        </div>
                    </div>


                    {/* E-Commerce */}
                    <div className="service-block">
                        <img src={EcomImg5} alt="E-Commerce Website" />
                        <div className="service-text">
                            <h3>Technical & Remote IT Support</h3>
                            <p>
                            From L1/L2 support to software 
                            troubleshooting and remote access setup, we help businesses maintain smooth IT operations with dedicated remote teams.
                            </p>

                        </div>
                    </div>

                    {/* Digital Marketing */}
                    <div className="service-block reverse">
                        <img src={EcomImg6} alt="Digital Marketing" />
                        <div className="service-text">
                            <h3>Call Center & Customer Support</h3>
                            <p>
                            We manage inbound and outbound calls,
                             email support, live chat, and help desk solutions — ensuring professional and consistent customer engagement.
                            </p>

                        </div>
                    </div>


                    {/* E-Commerce */}
                    <div className="service-block">
                        <img src={EcomImg7} alt="E-Commerce Website" />
                        <div className="service-text">
                            <h3>Data & Healthcare Services</h3>
                            <p>
                            We offer data scraping, classification, 
                            analysis, and specialized healthcare BPO services like medical billing, claims processing, and patient record management.
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
                        <h3>Analysis<br />& Setup</h3>
                        <p>
                        We begin by understanding your business goals,
                         operational challenges, and process requirements. Then, we design a custom workflow, build the right team, and set up tools for smooth onboarding.
                        </p>
                    </div>

                    <div className="dashed-line" />

                    <div className="process-step">
                        <div className="icon-circle">
                            <img src={design} alt="Design & Structure" />
                        </div>
                        <h3>Execution<br />& Quality</h3>
                        <p>
                        Our trained team executes the tasks with 
                        precision, whether it's customer support, data entry, or financial processing. Every step is monitored with strict quality checks and performance metrics.
                        </p>
                    </div>

                    <div className="dashed-line" />

                    <div className="process-step">
                        <div className="icon-circle">
                            <img src={development} alt="Development" />
                        </div>
                        <h3>Reporting <br/>  & Optimization</h3>
                        <br></br>
                        <p>
                        We provide transparent reports, performance
                         insights, and regular updates. Based on results, we refine the process to improve efficiency, reduce errors, and scale as your business grows.
                        </p>
                    </div>
                </div>

                

            </div>

            {/* =================================================================== */}
            <div className="process-container">
                <h2 className="section-title">Why Partner with Kaga</h2>
                <div className="process-wrapper">
                    <div className="process-step2">
                        
                        <h3>Secure & Trusted<br />Operations</h3>
                        <p>
                        We prioritize your data with 
                        enterprise-grade security protocols 
                        — no freelancing risks, just full compliance and peace of mind.
                        </p>
                    </div>

                    

                    <div className="process-step2">
                        
                        <h3>Always-On, <br /> Always-Adaptive</h3>
                        <p>
                        From 24/7 support to
                         end-to-end tailored solutions, we evolve
                          with your business — no need for multiple vendors.
                        </p>
                    </div>

                    

                    <div className="process-step2">
                       
                        <h3>Seamless <br/>  Communication</h3>
                        
                        <p>
                        Stay in the loop with transparent
                         updates and timelines. No guesswork,
                          no confusion — just clear collaboration.
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

export default Ecommerce;

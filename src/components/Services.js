import React from "react";
import "./Services.css";
import serviceHeaderImg1 from "../assert/service1.jpg";
import serviceHeaderImg2 from "../assert/service2.jpg";
import devImg from "../assert/dev.jpg";
import marketingImg from "../assert/marketing.jpg";
import ecommerceImg from "../assert/ecommerce.jpg";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();
    return (
        <div className="services-container">
            <section className="top-section">
                <div className="top-left">
                    <h1>
                        Empowering Businesses <br />
                        <span>Through Innovative Digital <br /> Solutions</span>
                    </h1>
                    <p>
                        At Kagasri Info Tech, we offer tailored digital <br />solutions that empower businesses to grow and<br /> innovate. From web and app development to <br />digital marketing and design, our services are <br />built to solve real-world challenges. We blend<br /> creativity, technology, and strategy to deliver<br /> results that matter.
                    </p>
                </div>
                <div className="top-right">

                    <div className="image-grid">
                        <div className="div1"></div>
                        <div className="div2">
                            <img src={serviceHeaderImg1} alt="Office" />
                        </div>
                        <div className="div3">
                            <img src={serviceHeaderImg2} alt="Team" />
                        </div>
                        <div className="div4"></div>
                    </div>
                </div>


            </section>

            <hr className="divider" />

            {/* === Services List === */}
            <section className="services-list">
                {/* Website Development */}
                <div className="service-block">
                    <img src={devImg} alt="Website Development" />
                    <div className="service-text">
                        <h3>Website Development</h3>
                        <p>
                            We build high-performance, responsive websites that reflect your
                            brand and drive engagement. Whether it’s a portfolio, business
                            site, or complex web platform, we deliver with precision and
                            speed. Our code is clean, scalable, and built to perform on all
                            devices.
                        </p>
                        <button className="btn-st" onClick={() => navigate("/websitedevelopment")}>Get the Details</button>
                    </div>
                </div>
                <hr className="divider" />


                {/* Digital Marketing */}
                <div className="service-block reverse">
                    <img src={marketingImg} alt="Digital Marketing" />
                    <div className="service-text">
                        <h3>Digital Marketing</h3>
                        <p>
                            We help you grow online with smart SEO, social media strategy, and
                            data-driven ad campaigns. Our goal is simple: turn traffic into
                            real customers. With consistent tracking and optimization, we make
                            your brand impossible to ignore.
                        </p>
                        <button className="btn-st" onClick={() => navigate("/digitalmarketing")}>Get the Details</button>
                    </div>
                </div>
                <hr className="divider" />

                {/* E-Commerce */}
                <div className="service-block">
                    <img src={ecommerceImg} alt="E-Commerce Website" />
                    <div className="service-text">
                        <h3>E-Commerce Website</h3>
                        <p>
                            We create custom e-commerce websites that are fast, secure, and
                            easy to manage. From product listings to secure payments, we
                            ensure a seamless shopping experience. Whether you’re launching or
                            scaling, we build stores that sell.
                        </p>
                        <button className="btn-st" onClick={() => navigate("/ecommerce")}>Get the Details</button>
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


            </section >
        </div >
    );
};

export default Services;

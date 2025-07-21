import React from "react";
import "./ECommerceWebsite.css";
import { useNavigate } from "react-router-dom";
import planning from "../assert/bulb.png";
import design from "../assert/rocket.png";
import development from "../assert/candle.png";

import EcomImg1 from "../assert/Ecom-Img/Ecom-Img1.jpg";
import EcomImg2 from "../assert/Ecom-Img/Ecom-Img2.jpg";
import EcomImg3 from "../assert/Ecom-Img/Ecom-Img3.png";
import EcomImg4 from "../assert/Ecom-Img/Ecom-Img4.png";
import EcomImg5 from "../assert/Ecom-Img/Ecom-Img5.png";
import EcomImg6 from "../assert/Ecom-Img/Ecom-Img6.png";
import EcomImg7 from "../assert/Ecom-Img/Ecom-Img7.png";

const Ecommerce = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="services-container">
                <section className="top-section">
                    <div className="top-left">
                        <h1>
                            End-to-End E-Commerce


                            <br />
                            <span> Solutions for Modern Retail <br /> -Ecommerce Website</span>
                        </h1>
                        <p> We help businesses of all sizes launch or scale <br />
                            their online presence with powerful e-commerce <br />
                            websites built for performance and sales. At <br />
                            Kagasri Info Tech, we focus on delivering fully<br />
                            custom, conversion-focused online stores with <br />
                            seamless UX and robust backend functionality.</p>
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

                    <p className="para"> <br />From intuitive product catalogs and advanced filtering to secure payment
                        gateways and order tracking, we cover every detail your store needs to succeed. Whether you're selling
                        a single product or managing thousands, our scalable e-commerce solutions are designed to grow with you.We
                        also integrate marketing automation, inventory systems, and analytics to ensure you have everything you need to run and grow your business online.</p>

                </section>


                {/* === Services List === */}
                <section className="services-list">
                    {/* Website Development */}
                    <div className="service-block">
                        <img src={EcomImg3} alt="Website Development" />
                        <div className="service-text">
                            <h3>Custom E-Commerce Website</h3>
                            <p>
                                We design fully customized, scalable e-commerce
                                websites tailored to your brand. From smooth
                                navigation to smart filtering and secure checkout,
                                we ensure a professional and seamless shopping
                                experience that helps convert visitors into buyers.
                            </p>

                        </div>
                    </div>


                    {/* Digital Marketing */}
                    <div className="service-block reverse">
                        <img src={EcomImg4} alt="Digital Marketing" />
                        <div className="service-text">
                            <h3>Product Management System</h3>
                            <p>
                                Easily manage your entire product
                                catalog — add or edit products, track inventory,
                                apply discounts, and organize categories. Our backend
                                system is built for speed, flexibility, and ease of use,
                                so you stay in full control.
                            </p>

                        </div>
                    </div>


                    {/* E-Commerce */}
                    <div className="service-block">
                        <img src={EcomImg5} alt="E-Commerce Website" />
                        <div className="service-text">
                            <h3>Payment Gateway Integration</h3>
                            <p>
                                We integrate secure and reliable payment gateways like Razorpay,
                                Stripe, and PayPal to support UPI, cards, wallets, EMI, and COD.
                                Your customers get a fast, trusted checkout — and you get peace of
                                mind.
                            </p>

                        </div>
                    </div>

                    {/* Digital Marketing */}
                    <div className="service-block reverse">
                        <img src={EcomImg6} alt="Digital Marketing" />
                        <div className="service-text">
                            <h3>Mobile-Friendly Design</h3>
                            <p>
                                With mobile commerce growing rapidly, we ensure your store looks
                                stunning and functions perfectly across all devices. Responsive
                                layouts, optimized load times, and touch-friendly design for a smooth mobile shopping experience.
                            </p>

                        </div>
                    </div>


                    {/* E-Commerce */}
                    <div className="service-block">
                        <img src={EcomImg7} alt="E-Commerce Website" />
                        <div className="service-text">
                            <h3>E-Commerce SEO & Marketing</h3>
                            <p>
                                We help your products rank better on Google through optimized product pages,
                                structured data, and SEO-rich content. Plus, we offer digital ad strategies
                                and remarketing to bring in targeted traffic that converts.
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

export default Ecommerce;

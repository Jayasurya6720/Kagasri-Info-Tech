import React from "react";
import "./ServicesSection.css";
import { Link } from "react-router-dom";
import webDevIcon from "../assert/Website.png";
import marketingIcon from "../assert/marketing.png";
import ecommerceIcon from "../assert/ecommerce.png";



const services = [
  {
    title: "Website Development",
    description: "Crafting impactful websites that bring your business to life online.",
    icon: webDevIcon,
    url: "/websitedevelopment",
  },
  {
    title: "Digital Marketing",
    description: "Amplifying your reach and strengthening your brand to turn clicks into connections.",
    icon: marketingIcon,
    url: "/digitalmarketing",
  },
  {
    title: "E-Commerce Website",
    description: "Building scalable engaging online stores that help you effortlessly sell and expand.",
    icon: ecommerceIcon,
    url: "/ecommerce",
  },
];

const ServicesSection = () => {
  return (
    <div className="services-container">
      <h2>
        WHAT WE BRING TO <span className="highlight-link">YOU</span>
      </h2>
      <div className="cards">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={service.url}>Learn More <span className="arrow">→</span></Link> {/* ✅ Fix here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-text">
        <h2>
          WHO WE <span className="highlight-link">ARE</span>
        </h2>
        <p>
          Kagasri Info Tech Pvt Ltd is a forward-thinking Information Technology startup,
          established in 2025. We specialize in Website Development, Digital Marketing, and
          E-commerce Solutions, helping businesses grow and innovate online. Our team is a
          perfect blend of experienced professionals and dynamic fresh talent, allowing us to
          combine expertise with creativity to deliver impactful, tailored digital solutions
          for all.
        </p>
      </div>

      <div className="about-images-grid">
        <img src="/images/about1.jpg" alt="team1" className="div1" />
        <img src="/images/about2.jpg" alt="team2" className="div2" />
        <img src="/images/about3.jpg" alt="team3" className="div4" />
        <img src="/images/about4.jpg" alt="team4" className="div3" />
      </div>
    </div>
  );
};

export default AboutSection;

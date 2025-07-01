import React from "react";
import "./AboutUs.css";


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="hero">
        <h1>
          From vision to execution <br />
          <span>we are the architects of digital dreams.</span>
        </h1>
        <p className="intro-text">
          At Kagasri Info Tech, we offer tailored digital solutions that empower
          businesses to grow and innovate. From web and app development to digital
          marketing and design, our services are built to solve real-world challenges.
          We blend creativity, technology, and strategy to deliver results that matter.
        </p>
        <p className="body-text">
          Founded in 2025, Kagasri Infotech emerged from a vision to redefine how
          technology empowers businesses and transforms lives. Our foundation is built
          on the synergy between seasoned professionals — the golden minds of the industry —
          and dynamic young innovators who see the world differently and aren’t afraid to
          challenge the status quo. We are guided by purpose, passion, and precision. Every
          project we undertake is a reflection of our commitment to quality, creativity,
          and long-term value. Whether it’s digital transformation, web development,
          mobile applications, or emerging technologies, we bring both technical expertise
          and imaginative energy to the table. At our core, we believe in collaboration
          over competition, transparency over complexity, and integrity over shortcuts.
        </p>
        <p className="body-text">
          These aren’t just values — they are the foundation of our relationships with clients,
          partners, and our growing team. As we move forward, we’re not just writing code —
          we’re writing the future. One solution at a time. One connection at a time.
          One breakthrough at a time.
        </p>
        <p className="join-text">
          Join us on this journey. Because at Kagasri, the future isn’t just something
          we chase — it’s something we create.
        </p>
      </section>

      <section className="vision-mission-section">
        <div className="vision">
          <h2>Shaping the Future - <span className="highlight">Vision</span></h2>
          <p>
            We grow together — as a team, a community, and a catalyst for digital success.
            By empowering individuals and businesses alike, we create user-driven web
            experiences that convert, inspire, and scale. Our goal is to lead the future of
            web innovation where success is shared, stories are told through design,
            and every click moves us forward — together.
          </p>
        </div>

        <div className="mission">
          <h2>What We Aim to Achieve - <span className="highlight">Mission</span></h2>
          <p>
            Our mission is to craft modern, user-focused websites and result-driven
            digital strategies that empower startups and small businesses to grow online.
            We deliver scalable, mobile-first, SEO-optimized solutions through collaboration,
            clarity, and continuous innovation — because when one of us grows, we all grow.
          </p>
        </div>
      </section>

      <section className="quote-section">
        <blockquote>
          <p>“We grow together – in code, business and life.”</p>
        </blockquote>
      </section>
    </div>
  );
};

export default AboutUs;

import React from "react";
import "./AboutUs.css";
import topImg from "../assert/top-img.jpg";
import centerImg from "../assert/center-img.jpg";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="about-container">
      {/* Top Section */}
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
              <img src={topImg} alt="Office" />
            </div>
            <div className="div3">
              <img src={centerImg} alt="Team" />
            </div>
            <div className="div4"></div>
          </div>
        </div>


      </section>
      {/* 
      <section className="image">
         
          <div className="image-grid">
            <div className="div1"></div>
            <div className="div2">
              <img src={topImg} alt="Office" />
            </div>
            <div className="div3">
              <img src={centerImg} alt="Team" />
            </div>
            <div className="div4"></div>
          </div>
         
      </section> */}

      <section className="text">
        <div>
          <p>
            Founded in 2025, Kagasri Infotech emerged from a vision to redefine how technology empowers businesses and transforms lives. Our foundation is built on the rare synergy between seasoned professionals — the golden minds of the industry — and dynamic young innovators who see the world differently and aren’t afraid to challenge the status quo. We are guided by purpose, passion, and precision. Every project we undertake is a reflection of our commitment to quality, creativity, and long-term value. Whether it’s digital transformation, web development, mobile applications, or emerging technologies, we bring both technical expertise and imaginative energy to the table. At our core, we believe in collaboration over competition, transparency over complexity, and integrity over shortcuts. These aren’t just values — they are the foundation of our relationships with clients, partners, and our growing team. As we move forward, we’re not just writing code — we’re writing the future. One solution at a time. One connection at a time. One breakthrough at a time.
          </p>
          <p className="highlight-quote">
            Join us on this journey. Because at Kagasri, the future isn’t just something we chase — it’s something we create.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      {/* <section className="vision-mission-wrapper">
        <div className="vision-mission-inner">
          <div className="vision-box">
            <h2>
              Shaping the Future - <span className="blue">Vision</span>
            </h2>
            <p>
              We grow together — as a team, a community, and a catalyst for digital success. By empowering individuals and businesses alike, we create user-driven web experiences that convert, inspire, and scale. Our goal is to lead the future of web innovation where success is shared, stories are told through design, and every click moves us forward — together.
            </p>
          </div>
          <div className="mission-box">
            <h2>
              What We Aim to Achieve - <span className="blue">Mission</span>
            </h2>
            <p>
              Our mission is to craft modern, user-focused websites and result-driven digital strategies that empower startups and small businesses to grow online. We deliver scalable, mobile-first, SEO-optimized solutions through collaboration, clarity, and continuous innovation — because when one of us grows, we all grow.
            </p>
          </div>
        </div>
      </section> */}

      {/* vison update  */}

      <section className="vision-mission-wrapper1">
        <div className="vision-mission-inner1">
          <div className="up1">
            <h2>Shaping the Future - <span className="blue">Vision</span></h2>
            <p>
              We grow together — as a team, a community, and a catalyst for digital success. By empowering individuals and businesses alike, we create user-driven web experiences that convert, inspire, and scale. Our goal is to lead the future of web innovation where success is shared, stories are told through design, and every click moves us forward — together.            </p>
            {/* Horizontal line */}
            <div className="vision-line"></div>
          </div>

          {/* Horizontal line */}
          {/* <div className="vision-line"></div> */}
             

          <div className="up2">

          </div> {/* empty space center */}

          <div className="v1"></div>

          <div className="up3"></div> {/* another empty if needed */}

          <div className="up4">
            

            {/* Horizontal line */}
            <div className="vision-line"></div>
            <h2>What We Aim to Achieve - <span className="blue">Mission</span></h2>
            <p>
              Our mission is to craft modern, user-focused websites and result-driven digital strategies that empower startups and small businesses to grow online. We deliver scalable, mobile-first, SEO-optimized solutions through collaboration, clarity, and continuous innovation — because when one of us grows, we all grow.
            </p>
          </div>
          {/* Horizontal line */}
          {/* <div className="vision-line"></div> */}
        </div>
      </section>





      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-symbol">“</div>
        <p className="quote-text">
          We grow together - in code, business and life.
        </p>
      </section>
      <br />

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
  );
};

export default AboutUs;

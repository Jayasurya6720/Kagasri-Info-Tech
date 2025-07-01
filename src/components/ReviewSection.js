import React from "react";
import { Carousel } from "nuka-carousel";
import { reviews } from "./reviewsData";
import "./ReviewSection.css";

const ReviewSection = () => (
  <section className="testimonials-section">
    <h2 className="testimonials-heading">
      WHAT OUR PARTNERS <span>SAY</span>
    </h2>

    <div className="testimonial-wrapper">
      <Carousel
        wrapAround
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        renderTopRightControls={({ previousSlide, nextSlide }) => (
          <div className="top-nav">
            <button className="arrow-btn" onClick={previousSlide}>←</button>
            <button className="arrow-btn" onClick={nextSlide}>→</button>
          </div>
        )}
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: "#000",
            margin: "0 6px",
          },
        }}
      >
        {reviews.map((r, i) => (
          <div key={i} className="testimonial-card">
            <img src={r.logo} alt="logo" className="client-logo" />
            <p className="quote">“{r.quote}”</p>
            <div className="reviewer">
              <img src={r.avatar} alt={r.name} className="avatar" />
              <div>
                <p className="name">{r.name}</p>
                <p className="title">{r.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </section>
);

export default ReviewSection;

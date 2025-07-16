import React, { useState } from "react";
import reviews from "./reviewsData";
import "./ReviewSection.css";

const ReviewSection = () => {
  const [current, setCurrent] = useState(0);

  const nextReview = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">
        WHAT OUR PARTNERS <span className="say">SAY</span>
      </h2>
      <div className="testimonial-card">
        <img src={reviews[current].logo} alt="logo" className="company-logo" />
        <p className="testimonial-quote">“ {reviews[current].quote} ”</p>
        <div className="testimonial-user">
          <img src={reviews[current].avatar} alt="avatar" className="user-avatar" />
          <div>
            <h4>{reviews[current].name}</h4>
            <p>{reviews[current].title}</p>
          </div>
        </div>
        <div className="nav-buttons">
          <button onClick={prevReview}>←</button>
          <button onClick={nextReview}>→</button>
        </div>
      </div>
      <div className="dots">
        {reviews.map((_, index) => (
          <span key={index} className={index === current ? "dot active" : "dot"}></span>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;

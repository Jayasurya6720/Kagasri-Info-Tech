import React, { useState } from "react";
import "./ReviewForm.css";

const ReviewSlider = ({ reviews }) => {
  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="review-slider">
      <h2>
        WHAT OUR PARTNERS <span className="highlight">SAY</span>
      </h2>

      <div className="review-card">
        <div className="review-logo">
          <img src={reviews[current].logo} alt="Logo" />
        </div>
        <p className="review-quote">“ {reviews[current].quote} ”</p>
        <div className="review-author">
          <img src={reviews[current].avatar} alt="Avatar" />
          <div>
            <h3>{reviews[current].name}</h3>
            <p>{reviews[current].title}</p>
          </div>
        </div>

        <div className="review-controls">
          <button onClick={prevReview}>←</button>
          <button onClick={nextReview}>→</button>
        </div>

        <div className="dot-indicators">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;

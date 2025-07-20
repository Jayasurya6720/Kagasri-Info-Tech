import React, { useState, useEffect } from "react";
import "./ReviewSection.css";
import reviews from "./reviewsData";

const ReviewSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
      setAnimating(false);
    }, 300); // match with CSS transition
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // auto change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">
        What our <span className="say">Clients Say</span>
      </h2>

      <div className="testimonial-card">
        <div
          className={`testimonial-content ${
            animating ? "slide-out" : "slide-in"
          }`}
        >
          <img
            src={reviews[current].companyLogo}
            alt="Company Logo"
            className="company-logo"
          />
          <p className="testimonial-quote">"{reviews[current].quote}"</p>

          <div className="testimonial-user">
            <img
              src={reviews[current].userImage}
              alt={reviews[current].name}
              className="user-avatar"
            />
            <div>
              <h4>{reviews[current].name}</h4>
              <p>{reviews[current].position}</p>
            </div>
          </div>
        </div>

        <div className="nav-buttons">
          <button onClick={prevSlide}>‹</button>
          <button onClick={nextSlide}>›</button>
        </div>
      </div>

      <div className="dots">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;

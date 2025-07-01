import React, { useState } from "react";
import "./ReviewForm.css";

const ReviewForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    title: "",
    quote: "",
    avatar: "",
    logo: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", title: "", quote: "", avatar: "", logo: "" });
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h3>Leave a Review</h3>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
      <input name="title" value={form.title} onChange={handleChange} placeholder="Your Title/Position" required />
      <textarea name="quote" value={form.quote} onChange={handleChange} placeholder="Your Review" required />
      <input name="avatar" value={form.avatar} onChange={handleChange} placeholder="Avatar Image URL" />
      <input name="logo" value={form.logo} onChange={handleChange} placeholder="Company Logo URL" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;

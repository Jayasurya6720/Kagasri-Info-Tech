import React, { useState } from "react";
import "./LoginPage.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>WELCOME BACK !</h1>
        <p>Connecting Your Vision to Tomorrow’s Reality.</p>

        <form className="login-form">
          <label>Email <span className="required">*</span></label>
          <input type="email" placeholder="Enter your mail address" />

          <label>Password <span className="required">*</span></label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter the password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <a href="/" className="forgot-link">FORGOT PASSWORD ?</a>

          <button type="submit" className="login-btn">Log In</button>

          <div className="separator"></div>

          <p className="register-text">
            Don’t have account ? <a href="/register">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="pagenotfound-wrapper">
      <div className="sky">
        <div className="rocket-container">
          <div className="rocket"></div>
          <div className="fire"></div>
        </div>
      </div>
      <h1 className="error-title">404 - Page Not Found</h1>
      <p className="error-subtitle">Looks like this page took off into space.</p>
      <button onClick={() => navigate("/")} className="home-btn">Take Me Home</button>
    </div>
  );
};

export default PageNotFound;

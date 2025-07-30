import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
        <div className="Load-Logo">
            <img src="/logo.png" alt="logo" />
        </div>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
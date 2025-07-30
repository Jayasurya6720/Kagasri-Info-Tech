import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import img from "../assert/nav-img.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const phrases = ["Web Development", "UI/UX Design", "Digital Marketing","BPO"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="hero-container">
      <div className="hero-inner">
        <div className="hero-left">
          <h1>We’re the New-Age IT Partner for</h1>
          <h2><strong>Visionary Brands</strong></h2>
          <p>
            A startup with a seasoned mindset — offering
            <span className="highlight"> {phrases[currentIndex]} </span>
            <br></br>
            to help your business grow smarter, faster, better.
          </p>
          <button className="work-btn" onClick={() => navigate("/contact")}>
            Let’s Work Together <span className="arrow">→</span>
          </button>
        </div>
      </div>
      <div className="hero-right">
        <img src={img} alt="Hero Visual" />
      </div>

      <div className="scroll-circle" onClick={() => scrollToSection("about")}>
        <svg viewBox="0 0 100 100" className="circular-text">
          <defs>
            <path
              id="circlePath"
              d="M50,50 m-30,0 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0"
            />
          </defs>
          <text fill="#1873EB" fontSize="5.5" fontWeight="600" letterSpacing="1.5px">
            <textPath href="#circlePath" startOffset="0%">
              SCROLL DOWN FOR MORE • SCROLL DOWN FOR MORE •
            </textPath>
          </text>
        </svg>
        <div className="arrow-icon">↓</div>

      </div>
    </div>
  );
};

export default HeroSection;






// import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom"; // ← Add this
// import "./HeroSection.css";

// const HeroSection = () => {
//   const phrases = ["Web Development", "UI/UX Design", "Digital Marketing"];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   // const navigate = useNavigate(); // ← Hook for navigation

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex(prev => (prev + 1) % phrases.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [phrases.length]);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div id="home" className="hero-container">
//       {/* <nav className="navbar">
//         <div className="logo"><img src="/logo.png" alt="logo" /></div>
//         <div className="nav-links">
//           <button onClick={() => scrollToSection("home")}>HOME</button>
//           <button onClick={() => scrollToSection("about")}>ABOUT US</button>
//           <button onClick={() => scrollToSection("projects")}>PROJECTS</button>
//           <button onClick={() => scrollToSection("contact")}>CONTACT</button>
//         </div>

//         <div className="auth-buttons">
//           <button className="login" onClick={() => navigate("/login")}>LOG IN</button>
//           <button className="signup">SIGN UP</button>
//         </div>
//       </nav> */}

//       <div className="hero-content">
//         <h1>We’re the New-Age IT Partner for</h1>
//         <h2><strong>Visionary Brands</strong></h2>
//         <p>
//           A startup with a seasoned mindset — offering
//           <span className="highlight rotating-text"> {phrases[currentIndex]} </span><br />
//           to help your business grow smarter, faster, better.
//         </p>
//         <button className="work-btn">
//           Let’s Work Together <span className="arrow">→</span>
//         </button>
//       </div>

//      <div className="scroll-circle" onClick={() => scrollToSection("about")}>
//   <svg viewBox="0 0 100 100" className="circular-text">
//     <defs>
//       <path
//         id="circlePath"
//         d="M50,50 m-30,0 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0"
//       />
//     </defs>
//     <text fill="#000" fontSize="5.5" fontWeight="600" letterSpacing="1.5px">
//       <textPath href="#circlePath" startOffset="0%">
//         SCROLL DOWN FOR MORE • SCROLL DOWN FOR MORE •
//       </textPath>
//     </text>
//   </svg>
//   <div className="arrow-icon">↓</div>
// </div>



//     </div>
//   );
// };

// export default HeroSection;


































// import React from "react";
// import "./HeroSection.css";


// const HeroSection = () => {
//   return (
//     <div className="hero-container">
//       <nav className="navbar">
//         <div className="logo"><img src="/logo.png" alt="logo" /></div>
//         <div className="nav-links">
//           <a href="/">HOME</a>
//           <a href="/">ABOUT US</a>
//           <a href="/">PROJECTS</a>
//           <a href="/">CONTACT</a>
//         </div>
//         <div className="auth-buttons">
//           <button className="login">LOG IN</button>
//           <button className="signup">SIGN UP</button>
//         </div>
//       </nav>

//       <div className="hero-content">
//         <h1>We’re the New-Age IT Partner for</h1>
//         <h2><strong>Visionary Brands</strong></h2>
//         <p>
//           A startup with a seasoned mindset — offering <span className="highlight">Digital Marketing</span><br />
//           to help your business grow smarter, faster, better.
//         </p>
//         {/* <button className="work-btn">Let’s Work Together</button> */}
//         <button className="work-btn">
//           Let’s Work Together <span className="arrow">→</span>
//         </button>

//       </div>
//     </div>
//   );
// };

// export default HeroSection;
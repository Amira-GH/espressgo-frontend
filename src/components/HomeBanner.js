import React from "react";
import "./HomeBanner.css";

function HomeBanner(props) {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <p className="hero-text">Fresh Caffè Latte</p>
        <button className="button hero-button">Shop now</button>
      </div>
    </div>
  );
}

export default HomeBanner;

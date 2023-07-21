import React from "react";
import homeAbout from "../images/smiley_coffee_cup.png";
import "./HomeAbout.css";

function HomeAbout(props) {
  return (
    <div className="home-about-container">
      <img
        src={homeAbout}
        alt="smiley_coffee_cup"
        className="home-about-image"
      />
      <div className="home-about-content">
        <p className="home-about-title">
          Start Your Day With A{" "}
          <span className="span home-about-span">SMILE</span>
        </p>
        <p className="home-about-description">
          We are offering you the unique goods because our product is the real
          treasure. If you are a true fan, you'll love it.
        </p>
      </div>
    </div>
  );
}

export default HomeAbout;

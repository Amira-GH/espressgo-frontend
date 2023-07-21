import React from "react";
import ImageWithText from "./ImageWithText";
import hotCoffee from "../images/coffee_cup_vector.png";
import coldCoffee from "../images/coffee_go_vector.png";
import "./OurCoffee.css";

function OurCoffee(props) {
  return (
    <div className="our-coffee-container">
      <p className="our-coffee-title">
        Our <span className="span our-coffee-span">Coffee</span>
      </p>
      <div className="our-coffee-content">
        <ImageWithText
          imageUrl={hotCoffee}
          imageAlt="hot-coffee"
          text="Hot Coffee"
        />
        <ImageWithText
          imageUrl={coldCoffee}
          imageAlt="cold-coffee"
          text="Cold Coffee"
          style={{ width: "250px" }}
        />
      </div>
    </div>
  );
}

export default OurCoffee;

import React from "react";
import ImageWithText from "./ImageWithText";
import CoffeeGo from "../images/coffee_go_icon.png";
import CoffeeCup from "../images/Coffee_cup_icon.svg.png";
import Coffeebeans from "../images/coffee_beans.png";
import "./OurService.css";

function OurService(props) {
  return (
    <div className="our-service-container">
      <p className="our-service-title">
        Our <span className="span our-service-span">Service</span>
      </p>
      <div className="our-service-content">
        <ImageWithText
          imageUrl={CoffeeGo}
          imageAlt="Coffee-go-icon"
          text="The coffee to go"
        />
        <ImageWithText
          imageUrl={CoffeeCup}
          imageAlt="Coffee-cup-icon"
          text="The perfect cup"
          style={{ width: "210px" }}
        />
        <ImageWithText
          imageUrl={Coffeebeans}
          imageAlt="Coffee-beans"
          text="Supreme beans"
        />
      </div>
    </div>
  );
}

export default OurService;

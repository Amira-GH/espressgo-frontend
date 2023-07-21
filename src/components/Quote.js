import React from "react";
import "./Quote.css";

function Quote(props) {
  return (
    <div className="quote-container">
      <div className="quote-content">
        <p className="quote-text">
          We believe <br />
          <span className="span quote-span">a cup of coffee</span>
          <br /> is one of the simplest{" "}
          <span className="span quote-span">pleasures in life</span>
        </p>
      </div>
    </div>
  );
}

export default Quote;

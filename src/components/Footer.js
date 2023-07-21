import React from "react";
import Logo from "../images/logo.png";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-container">
        <img src={Logo} className="footer-logo" />
        <div className="footer-content">Home About Shop Contact</div>
        <p className="footer-copyrights">
          © 2023 EspressGo Coffee. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;

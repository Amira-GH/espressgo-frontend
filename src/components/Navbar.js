import React, { useState } from "react";
import Logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const [isActive, setIsActive] = useState(false);
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className="navbar">
      <header className="nav-header">
        <div className="nav-logo-area">
          <Link to="/">
            <img src={Logo} className="nav-logo" />
          </Link>
        </div>
        <nav className="nav">
          <ul className={`nav-menu ${isActive ? "active" : ""}`}>
            <li onClick={removeActive}>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/" className="nav-link">
                About
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/" className="nav-link">
                Shop
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/" className="nav-link">
                Contact
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/" className="nav-link">
                <FontAwesomeIcon
                  icon={faUser}
                //   style={{ fontSize: 30, color: "white" }}
                className="icon"
                />
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/" className="nav-link">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                //   style={{ fontSize: 30, color: "white" }}
                  className="icon"
                />
              </Link>
            </li>
          </ul>
          <div
            className={`hamburger ${isActive ? "active" : ""}`}
            onClick={toggleActiveClass}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

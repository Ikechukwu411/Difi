import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import DF from "../Images/DF.png";
import "../Components/Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <React.Fragment>
      <nav className="navbar has-shadow  is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src={DF} />
            </a>

            <a
              role="button"
              className={`navbar-burger ${isActive ? "is-active" : ""}`}
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-end">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/about" className="navbar-item">
                About
              </Link>
              <Link to="/contact" className="navbar-item">
                Contact
              </Link>
              <Link to="/login" className="navbar-item">
                LogIn
              </Link>
              <a href="" className="navbar-item button is-link mt-2">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

import React from "react";
import "bulma/css/bulma.min.css";
import Difi from "../Images/DF.png";
import "../Components/Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="content">
          <div className="columns">
            <div className="column">
              <h3>Products</h3>
              <ul>
                <li>Saving Plans</li>
                <li>Stocks & EFTS</li>
                <li>Crypto</li>
                <li>Derivatives</li>
              </ul>
            </div>
            <div className="column">
              <h3>Company</h3>
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Site Map</li>
                <li>Press Release</li>
              </ul>
            </div>
            <div className="column">
              <h3>Customers</h3>
              <ul>
                <li>Support</li>
                <li>Pricing</li>
                <li>Manage Cookies</li>
              </ul>
            </div>
            <div className="column">
              <img src={Difi} alt="" />
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

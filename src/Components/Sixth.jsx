import React from "react";
import "../Components/Sixth.css";
import "bulma/css/bulma.min.css";
import { ImCheckboxChecked } from "react-icons/im";
import WhyChooseImage from "../Images/whychoose.png";

const Sixth = () => {
  return (
    <React.Fragment>
      <section className="section sixth__bg">
        <div className="container">
          <div className="columns">
            <div className="column sixth__text">
              <img src={WhyChooseImage} alt="" width={450} />
            </div>
            <div className="column ">
              <div className="sixth__text">
                <p>Why Choose Us</p>
                <h1
                  className="is-size-2-desktop is-size-5-mobile has-text-weight-bold"
                  style={{ color: "#5E17EB" }}
                >
                  An Investment that take you to greater heights
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Commodi, ullam.
                </p>
              </div>
              <div className="checked sixth__text">
                <div className="checked1 mb-4 mt-3">
                  <p>
                    <span>
                      <ImCheckboxChecked />
                    </span>{" "}
                    Trusted by Investors
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veniam, laboriosam?
                  </p>
                </div>
                <div className="checked1 mb-4">
                  <p>
                    <span>
                      <ImCheckboxChecked />
                    </span>{" "}
                    Invest Witth Confidence
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, voluptatum!
                  </p>
                </div>
                <div className="checked1 mb-4">
                  <p>
                    <span>
                      <ImCheckboxChecked />
                    </span>{" "}
                    Secure Platform
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ullam, voluptatibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Sixth;

import React from "react";
import SecondImg from "../Images/Untitled design.png";
import "../Components/SecondSection.css";
import { ImCheckboxChecked } from "react-icons/im";

const SecondSection = () => {
  return (
    <React.Fragment>
      <section className="section section__bg">
        <div className="container">
          <div className="columns">
            <div className="column">
              <img src={SecondImg} alt="Digital Finance Imgae" />
            </div>
            <div className="column second__Text">
              <p className="is-size-5-mobile is-size-5-desktop">
                Our Introduction
              </p>
              <h2
                className="is-size-2-desktop is-size-5-mobile has-text-weight-bold"
                style={{ color: "#5E17EB" }}
              >
                We Are Providing The Best Solution Experts
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                sint unde nobis blanditiis consectetur adipisicing elit. Dolor
                sint unde nobis blanditiis.
              </p>
              <div className="subsection__text mt-5">
                <p className="mb-2">
                  <span className="pr-3">
                    <ImCheckboxChecked color="#5E17EB" />
                  </span>
                  <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </span>
                </p>
                <p className="mb-2">
                  <span className="pr-3">
                    <ImCheckboxChecked color="#5E17EB" />
                  </span>
                  <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </span>
                </p>
                <p className="mb-2">
                  <span className="pr-3">
                    <ImCheckboxChecked color="#5E17EB" />
                  </span>
                  <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </span>
                </p>
              </div>

              <button
                className="button mt-3"
                style={{ backgroundColor: "#5E17EB", color: "#fff" }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SecondSection;

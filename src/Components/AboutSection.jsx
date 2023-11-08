import React from "react";
import "bulma/css/bulma.min.css";
import "../Components/AboutSection.css";

const AboutSection = () => {
  return (
    <React.Fragment>
      <section className="hero AboutSection__bg has-text-centered">
        <div className="hero-body">
          <h1 className="is-size-2-desktop is-size=4-mobile">About Us</h1>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutSection;

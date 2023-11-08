import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutSection from "../Components/AboutSection";
import AboutSecText from "../Components/AboutSecText";
import Sixth from "../Components/Sixth";

const About = () => {
  return (
    <React.Fragment>
      <Navbar />
      <AboutSection />
      <AboutSecText />
      <Sixth />
      <Footer />
    </React.Fragment>
  );
};

export default About;

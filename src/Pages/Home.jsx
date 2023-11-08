import React, { useEffect } from "react";
import "bulma/css/bulma.min.css";
import "../Pages/Home.css";
import Navbar from "../Components/Navbar";
import Herosection from "../Components/Herosection";
import SecondSection from "../Components/SecondSection";
import ThirdSection from "../Components/ThirdSection";
import FourthSection from "../Components/FourthSection";
import ScrollSwiper from "../Components/ScrollSwiper";
import image1 from "../Images/1.png";
import image2 from "../Images/2.png";
import image3 from "../Images/3.png";
import FifthSection from "../Components/FifthSection";
import Sixth from "../Components/Sixth";
import Footer from "../Components/Footer";

const images = [image1, image2, image3];
const allsection = document.querySelectorAll(".sec");

const Home = () => {
  useEffect(() => {
    const revealSection = function (entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.classList.remove("sec__hidden");
      observer.unobserve(entry.target);
    };
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });
    allsection.forEach((section) => {
      sectionObserver.observe(section);
      section.classList.add("sec__hidden");
    });
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Herosection />
      <main>
        <section className="sec ">
          <SecondSection />
        </section>
        <section className="sec">
          <ThirdSection />
        </section>
        <section className="sec">
          <FourthSection />
        </section>
        <section className="sec">
          <ScrollSwiper images={images} />
        </section>
        <section className="sec">
          <FifthSection />
        </section>
        <section className="sec">
          <Sixth />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;

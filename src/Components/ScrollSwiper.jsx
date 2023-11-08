import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import "../Components/swiper.css";

const ScrollSwiper = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => {
      return prevIndex + 1 === props.images.length ? 0 : prevIndex + 1;
    });
  };

  const handleprevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => {
      return prevIndex - 1 < 0 ? props.images.length - 1 : prevIndex - 1;
    });
  };

  const handleDot = (index) => {
    setCurrentIndex(index);
    setDirection(index > currentIndex ? "right" : "left");
  };

  return (
    <div className="section scroll__bg">
      <h2
        className="is-size-4-desktop is-size-6-mobile has-text-centered mb-5 has-text-weight-bold"
        style={{ color: "#5E17EB" }}
      >
        What People Are Saying About Us
      </h2>
      <div className="contain ">
        <div className="carousel">
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={props.images[currentIndex]}
              width={100}
              variants={slideVariants}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
            />
          </AnimatePresence>
          <div className="slide-direction">
            <div className="left" onClick={handleprevious}>
              <FcPrevious />
            </div>
            <div className="right" onClick={handleNext}>
              <FcNext />
            </div>
          </div>
          <div className="indicator">
            {props.images.map((_, index) => {
              return (
                <div
                  key={index}
                  className={`dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => handleDot(index)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSwiper;

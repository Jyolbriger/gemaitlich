import React from "react";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "/images/anhang1.jpg",
  "/images/anhang2.jpg",
  "/images/anhang3.jpg",
  "/images/anhang4.jpg",
  "/images/anhang5.jpg",
  "/images/anhang6.jpg",
];

const properties = {
  duration: 3500,
  transitionDuration: 1200,
  infinite: true,
  indicators: false,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const Carousel = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <img src={slideImages[0]} alt="Testing" />
        </div>
        <div className="each-slide">
          <img src={slideImages[1]} alt="Testing" />
        </div>
        <div className="each-slide">
          <img src={slideImages[2]} alt="Testing" />
        </div>
        <div className="each-slide">
          <img src={slideImages[3]} alt="Testing" />
        </div>
        <div className="each-slide">
          <img src={slideImages[4]} alt="Testing" />
        </div>
        <div className="each-slide">
          <img src={slideImages[5]} alt="Testing" />
        </div>
      </Slide>
    </div>
  );
};

export default Carousel;

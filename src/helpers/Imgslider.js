import React from "react";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "/images/Anhang1.jpg",
  "/images/Anhang2.jpg",
  "/images/Anhang3.jpg",
  "/images/Anhang4.jpg",
  "/images/Anhang5.jpg",
  "/images/Anhang6.jpg",
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
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[5]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default Carousel;

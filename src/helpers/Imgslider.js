import React from "react";
import { Slide } from "react-slideshow-image";

let slideImages = [
  "/images/anhang1",
  "/images/anhang2",
  "/images/anhang3",
  "/images/anhang4",
  "/images/anhang5",
  "/images/anhang6",
];

const properties = {
  duration: 3500,
  transitionDuration: 1200,
  infinite: true,
  indicators: false,
  arrows: true,
  pauseOnHover: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const ScreenWidth = window.screen.availWidth;

const Carousel = () => {
  if (ScreenWidth < 400) {
    slideImages = slideImages.map((url) => {
      return (url = url + "-mobile.jpg");
    });
  } else {
    slideImages = slideImages.map((url) => {
      return (url = url + ".jpg");
    });
  }

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
      </Slide>
    </div>
  );
};

export default Carousel;

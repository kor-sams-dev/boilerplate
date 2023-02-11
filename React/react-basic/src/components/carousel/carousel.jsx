import React from "react";

import "./carousel.css";

import useCarousel from "./useCarousel";

import banner1 from "../../images/banner-1.png";
import banner2 from "../../images/banner-2.png";
import banner3 from "../../images/banner-3.png";
import banner4 from "../../images/banner-4.png";
import banner5 from "../../images/banner-5.png";

const Carousel = () => {
  const [createImage, createListDot, currentIndex] = useCarousel([]);

  return (
    <div className="carousel-container">
      <div
        className="image-container"
        style={{
          transform: `translateX(${-100 * currentIndex}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {createImage}
      </div>
      <ul className="dot-container">{createListDot}</ul>
    </div>
  );
};

export default Carousel;

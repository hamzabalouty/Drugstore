import React, { useState } from "react";
import "./ImageSlider.css";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const ImageSlider = () => {
  return (
    <div className="image-slider">
      <div className="image-slider-container">
        <div className="image-slider-bottom">
          <Carousel breakPoints={breakPoints} className="slider-carousel">
            <div className="last-image-slider">
              <img src="https://medik.wpenginepowered.com/wp-content/uploads/2020/05/client-6-1.png" />
            </div>
            <div className="last-image-slider">
              <img src="https://medik.wpenginepowered.com/wp-content/uploads/2020/05/client-7.png" />
            </div>
            <div className="last-image-slider">
              <img src="https://medik.wpenginepowered.com/wp-content/uploads/2020/05/client-8.png" />
            </div>
            <div className="last-image-slider">
              <img src="https://medik.wpenginepowered.com/wp-content/uploads/2020/05/client-1-1.png" />
            </div>
            <div className="last-image-slider">
              <img src="https://medik.wpenginepowered.com/wp-content/uploads/2020/05/client-2-1.png" />
            </div>
            <div className="last-image-slider">
              <img src="https://medik.wpenginepowered.com/wp-content/uploads/2020/05/client-3-1.png" />
            </div>
            <div className="last-image-slider">
              <img src="https://medik.wpenginepowered.com/wp-content/uploads/2020/05/client-4-1.png" />
            </div>
            <div className="last-image-slider">
              <img src="https://medik.wpenginepowered.com/wp-content/uploads/2020/05/client-5-1.png" />
            </div>
            <div className="last-image-slider">
              <img src="https://medik.wpenginepowered.com/wp-content/uploads/2020/05/client-6-1.png" />
            </div>
            <div className="last-image-slider">
              <img src="https://medik.wpenginepowered.com/wp-content/uploads/2020/05/client-7.png" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

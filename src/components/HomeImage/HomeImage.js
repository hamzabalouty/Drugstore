import React from "react";
import "./HomeImage.css";

const HomeImage = () => {
  return (
    <div className="home-image">
      <div className="home-image-container">
        <div className="home-image-top">
          <img src="https://7eye.com/cdn/shop/products/7eyeSunglasses-KN95-Mask_5000x.jpg?v=1595528845" />
          <div className="home-image-content">
            <h3>Safety Masks</h3>
            <h1>
              15% Off. <span>Hurry</span>
            </h1>
            <p>
              Get the best Grade A safety mask for you &<br />
              your lover ones protection
            </p>
            <button>starts from $.99</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImage;

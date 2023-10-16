import React from "react";
import "./Collection.css";
import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <div className="collection">
      <div className="collection-container">
        <div className="blog-header">
          <h2>Collection</h2>
          <p>
            Home<span>/</span>Collection
          </p>
        </div>
        <div className="collection-body">
          <div className="collection-box">
            <img src="https://medik.wpenginepowered.com/wp-content/uploads/2019/01/pdt23.jpg" />
            <h3>Best Seller</h3>
            <p>16 items</p>
            <Link to="/shop" className="collection-btn">
              Read More
            </Link>
          </div>
          <div className="collection-box">
            <img src="https://medik.wpenginepowered.com/wp-content/uploads/2019/01/pdt8.jpg" />
            <h3>New Arrival</h3>
            <p>16 items</p>
            <Link to="/shop" className="collection-btn">
              Read More
            </Link>
          </div>
          <div className="collection-box">
            <img src="https://medik.wpenginepowered.com/wp-content/uploads/2019/01/pdt1.jpg" />
            <h3>New Offers</h3>
            <p>16 items</p>
            <Link to="/shop" className="collection-btn">
              Read More
            </Link>
          </div>
          <div className="collection-box">
            <img src="https://medik.wpenginepowered.com/wp-content/uploads/2019/01/pdt2.jpg" />
            <h3>Sale Off</h3>
            <p>16 items</p>
            <Link to="/shop" className="collection-btn">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

import React, { useState } from "react";
import { shopData } from "../../data";
import { addToCart } from "../../rtk/slices/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const GridCard = ({ itemsData }) => {
  const dispatch = useDispatch();

  return (
    <div className="shop-right-container">
      {itemsData.length >= 1 ? (
        itemsData.map((item) => (
          <div className="shop-right-box">
            <img src={item.img} />
            <div className="shop-text">
              <h5>{item.title}</h5>
              <p>$ {item.price}</p>
              <button
                className="tocart-btn"
                onClick={() => dispatch(addToCart(item))}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>there is no items</p>
      )}
    </div>
  );
};

export default GridCard;

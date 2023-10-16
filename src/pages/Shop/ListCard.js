import React, { useState } from "react";
import { shopData } from "../../data";
import { addToCart } from "../../rtk/slices/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const ListCard = ({ itemsData }) => {
  const dispatch = useDispatch();

  return (
    <div className="list-container">
      {itemsData.length >= 1 ? (
        itemsData.map((item) => (
          <div className="list-box">
            <img src={item.img} />
            <div className="list-box-content">
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => dispatch(addToCart(item))}>
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

export default ListCard;

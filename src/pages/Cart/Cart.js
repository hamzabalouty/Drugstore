import React, { useState } from "react";
import "./Cart.css";
import ClearIcon from "@mui/icons-material/Clear";
import { clear, deleteFromCart } from "../../rtk/slices/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <div className="cart">
      <div className="cart-container">
        <div className="blog-header">
          <h2>Cart</h2>
          <p>
            Home<span>/</span>Cart
          </p>
        </div>
        <div className="cart-body">
          <div className="cart-table">
            <div className="cart-table-row">
              <h2>PRODUCT</h2>
              <h3>PRICE</h3>
              <h3>QUANTITY</h3>
              <h4>SUBTOTAL</h4>
            </div>
            {cart.length > 0 ? (
              cart.map((item) => (
                <div className="cart-product-row">
                  <div className="cart-row-image">
                    <img src={item.img} />
                    <p className="title">{item.title}</p>
                  </div>
                  <p className="price-prod">₹{item.price}</p>
                  <p className="counter-num">{item.quantity}</p>
                  <h3 className="total-row-price">
                    ₹ {item.quantity * item.price}
                  </h3>
                  <div className="clear-row">
                    <ClearIcon
                      className="clear-icon"
                      onClick={() => dispatch(deleteFromCart(item))}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="no-item">There is no Items</p>
            )}
            <div className="cart-total-price">
              <h2>Total Price: ₹{totalPrice}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

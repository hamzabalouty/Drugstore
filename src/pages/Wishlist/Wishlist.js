import React from "react";
import "./Wishlist.css";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../rtk/slices/cart-slice";
import { deleteCart } from "../../rtk/slices/favorite-slice";

const Wishlist = () => {
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  return (
    <div className="wishlist">
      <div className="wishlist-container">
        <div className="blog-header">
          <h2>Wishlist</h2>
          <p>
            Home<span>/</span>Wishlist
          </p>
        </div>
        <h1 className="wish-head">My wishlist on Clone</h1>
        <div className="wishlist-body">
          <div className="wishlist-table">
            <div className="wishlist-table-row">
              <h2>PRODUCT</h2>
              <h3 className="price-head">PRICE</h3>
              <h3 className="status-head">STATUS</h3>
            </div>
            {favorite.length > 0 ? (
              favorite.map((item) => (
                <div className="wishlist-product-row" key={item.id}>
                  <div className="wishlist-row-image">
                    <img src={item.img} />
                    <p>{item.title}</p>
                  </div>
                  <p className="price-wish">₹{item.price}</p>
                  <p className="status-stock">IN STOCK</p>
                  <button
                    className="wishlist-btn"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add To Cart
                  </button>
                  <div className="clear-row">
                    <ClearIcon
                      className="clear-icon"
                      onClick={() => dispatch(deleteCart(item))}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="no-pro">No products were added to the wishlist</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

import React from "react";
import "./SpecialProducts.css";
import { specialProduct } from "../../data";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../rtk/slices/cart-slice";
import { addCart } from "../../rtk/slices/favorite-slice";

const SpecialProducts = () => {
  const dispatch = useDispatch();

  return (
    <div className="special-products">
      <div className="special-products-title">
        <h2>Our Special Products</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      <div className="special-products-container">
        {specialProduct.map((item) => (
          <div className="products-box">
            <div className="products-box-image">
              <img src={item.img} />
              {/* <div className='products-box-content'> */}
              <div className="products-box-icons">
                <div className="products-icon-bg">
                  <FavoriteIcon
                    className="icon"
                    onClick={() => dispatch(addCart(item))}
                  />
                </div>
                <div className="products-icon-bg">
                  <SearchIcon className="icon" />
                </div>
              </div>
              {/* </div> */}
            </div>
            <div className="products-box-content">
              <p>{item.desc}</p>
              <h3>{item.title}</h3>
              <h4>${item.price}</h4>
              <button onClick={() => dispatch(addToCart(item))}>
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialProducts;

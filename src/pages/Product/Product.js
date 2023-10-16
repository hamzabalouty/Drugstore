import React, { useEffect } from "react";
import "./Product.css";
import { productsData } from "../../data";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/slices/cart-slice";
import { addCart } from "../../rtk/slices/favorite-slice";

const Product = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const product = productsData.find((p) => p.id === +id);
  const { img, desc, title, price } = product;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product">
      <div className="product-container">
        <div className="blog-header">
          <h2>Shop</h2>
          <p>
            Home<span>/</span>Capsules<span>/</span>
            {title}
          </p>
        </div>
        <div className="product-body">
          <div className="product-container-left">
            <div className="shop-body-left">
              <div className="blog-left-head">
                <h2>Categories</h2>
              </div>
              <div className="blog-left-list">
                <div className="blog-left-row">
                  <div className="left-row-l">
                    <div></div>
                    <p>Bandage</p>
                  </div>
                </div>
                <div className="blog-left-row">
                  <div className="left-row-l">
                    <div></div>
                    <p>Capsules</p>
                  </div>
                </div>
                <div className="blog-left-row">
                  <div className="left-row-l">
                    <div></div>
                    <p>Digital Thermometer</p>
                  </div>
                </div>
                <div className="blog-left-row">
                  <div className="left-row-l">
                    <div></div>
                    <p>Eat Thermometer</p>
                  </div>
                </div>
                <div className="blog-left-row">
                  <div className="left-row-l">
                    <div></div>
                    <p>First Aid</p>
                  </div>
                </div>
                <div className="blog-left-row">
                  <div className="left-row-l">
                    <div></div>
                    <p>Medicine</p>
                  </div>
                </div>
                <div className="blog-left-row">
                  <div className="left-row-l">
                    <div></div>
                    <p>Pedometer</p>
                  </div>
                </div>
                <div className="blog-left-row">
                  <div className="left-row-l">
                    <div></div>
                    <p>Pharmacies</p>
                  </div>
                </div>
                <div className="blog-left-row">
                  <div className="left-row-l">
                    <div></div>
                    <p>Pills</p>
                  </div>
                </div>
                <div className="blog-left-row">
                  <div className="left-row-l">
                    <div></div>
                    <p>Safety Kit</p>
                  </div>
                </div>
                <div className="blog-left-row">
                  <div className="left-row-l">
                    <div></div>
                    <p>Support Stick</p>
                  </div>
                </div>
                <div className="blog-left-row">
                  <div className="left-row-l">
                    <div></div>
                    <p>Tablet</p>
                  </div>
                </div>
                <div className="blog-left-row">
                  <div className="left-row-l">
                    <div></div>
                    <p>Testing Kit</p>
                  </div>
                </div>
                <div className="blog-left-row">
                  <div className="left-row-l">
                    <div></div>
                    <p>Thermometer</p>
                  </div>
                </div>
                <div className="blog-left-row-l">
                  <div className="left-row-l">
                    <div></div>
                    <p>Wheel Chair</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-container-right">
            <img src={img} />
            <div className="product-right-content">
              <h2>{title}</h2>
              <p className="price">₹{price}</p>
              <p>
                Volutpat maecenas volutpat blandit aliquam etiam erat.
                Adipiscing elit ut aliquam purus sit amet luctus. In aliquam sem
                fringilla ut morbi tincidunt. Turpis massa tincidunt dui ut
                ornare lectus sit amet est. Odio tempor orci dapibus ultrices.
                Neque ornare aenean euismod elementum.
              </p>
              <div className="product-right-btns">
                <button>Add To Cart</button>
                <button>Add To Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

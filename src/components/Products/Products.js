import React, { useState } from "react";
import "./Products.css";
import { productsData } from "../../data";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../rtk/slices/cart-slice";
import { addCart } from "../../rtk/slices/favorite-slice";

const Products = () => {
  const dispatch = useDispatch();

  const [itemsData, setItemsData] = useState(productsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = itemsData.slice(firstPostIndex, lastPostIndex);

  //get all cat uniqe
  const allCategory = [...new Set(productsData.map((i) => i.category))];

  //filter by category
  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(productsData);
    } else {
      const newArr = productsData.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };

  //to filter by category
  const onFilter = (cat) => {
    filterbyCategory(cat);
  };

  return (
    <div className="products">
      <div className="products-container">
        <div className="products-title">
          <h2>Our Products</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className="products-category">
          <div className="products-category-container">
            {allCategory.map((cat) => (
              <div className="products-cat-box-item">
                <button onClick={() => onFilter(cat)}>{cat}</button>
              </div>
            ))}
          </div>
        </div>
        <div className="products-row">
          <div className="products-row-container">
            {currentPosts.map((item) => (
              <div className="products-box">
                <div className="products-box-image">
                  <Link to={`product/${item.id}`}>
                    <img src={item.img} />
                  </Link>
                  <div className="products-box-icons">
                    <div className="products-icon-bg">
                      <FavoriteIcon
                        className="icon"
                        onClick={() => dispatch(addCart(item))}
                      />
                    </div>
                    <div className="products-icon-bg">
                      <Link to={`product/${item.id}`}>
                        <SearchIcon className="icon" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="products-box-content">
                  <p>{item.desc}</p>
                  <h3>{item.title}</h3>
                  <h4>₹ {item.price}</h4>
                  <button onClick={() => dispatch(addToCart(item))}>
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

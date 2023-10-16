import React, { useState } from "react";
import "./Shop.css";
import { Button, Row } from "antd";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import GridCard from "./GridCard";
import ListCard from "./ListCard";
import { shopData } from "../../data";
import { addToCart } from "../../rtk/slices/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const Shop = () => {
  const [itemsData, setItemsData] = useState(shopData);

  const [view, setView] = useState(true);

  const dispatch = useDispatch();

  //get all cat uniqe
  const allCategory = [...new Set(shopData.map((i) => i.category))];
  //get all price uniqe
  const allPrices = [...new Set(shopData.map((i) => i.newPrice))];

  //filter by category
  const filterbyCategory = (cat) => {
    if (cat === "All") {
      setItemsData(shopData);
    } else {
      const newArr = shopData.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };

  //filter by price
  const filterbyPrice = (price) => {
    if (price === "All") {
      setItemsData(shopData);
    } else {
      const newArr = itemsData.filter((item) => item.newPrice === price);
      setItemsData(newArr);
    }
  };

  //to filter by category
  const onFilter = (cat) => {
    filterbyCategory(cat);
  };

  //to filter by price
  const onPrice = (price) => {
    filterbyPrice(price);
  };

  return (
    <div className="shop">
      <div className="shop-container">
        <div className="blog-header">
          <h2>Shop</h2>
          <p>
            Home<span>/</span>Shop
          </p>
        </div>
        <div className="shop-body">
          <div className="shop-body-left">
            <div className="blog-left-head">
              <h2>Categories</h2>
            </div>
            <div className="blog-left-btns">
              {allCategory.map((cat) => (
                <div className="blog-row">
                  <div className="row-left-le">
                    <div></div>
                    <button onClick={() => onFilter(cat)}>{cat}</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="blog-left-head">
              <h2>Filter by price</h2>
            </div>
            {allPrices.map((cat) => (
              <div className="blog-row-l">
                <div className="row-left-lee">
                  <div></div>
                  <button onClick={() => onPrice(cat)}>{cat}</button>
                </div>
              </div>
            ))}
          </div>
          <div className="shop-body-right">
            <>
              <div
                className="list-grit-btn"
                style={{
                  textAlign: "center",
                  marginTop: "2rem",
                  marginBottom: "2rem"
                }}
              >
                <>
                  <Button
                    onClick={() => setView(true)}
                    size="large"
                    icon={<AppstoreOutlined style={{ fontSize: "1.5rem" }} />}
                  />
                </>
                <>
                  <Button
                    onClick={() => setView(false)}
                    size="large"
                    icon={
                      <UnorderedListOutlined style={{ fontSize: "1.5rem" }} />
                    }
                  />
                </>
              </div>

              {view === true ? (
                <GridCard itemsData={itemsData} />
              ) : (
                <ListCard itemsData={itemsData} />
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

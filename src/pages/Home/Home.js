import React, { useState } from "react";
import HomeImage from "../../components/HomeImage/HomeImage";
import Products from "../../components/Products/Products";
import SpecialProducts from "../../components/SpecialProducts/SpecialProducts";
import Slider from "../../components/Slider/Slider";
import News from "../../components/News/News";
import Newsletter from "../../components/Newsletter/Newsletter";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { shopData, productsData } from "../../data";

const Home = () => {
  return (
    <div className="home">
      <HomeImage />
      <Products />
      <SpecialProducts />
      <Slider />
      <News />
      <Newsletter />
      <ImageSlider />
    </div>
  );
};

export default Home;

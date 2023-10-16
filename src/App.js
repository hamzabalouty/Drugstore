import { useState } from "react";
import { shopData } from "./data";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Profile from "./pages/Profile/Profile";
import Collection from "./pages/Collection/Collection";
import About from "./pages/About/About";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import Product from "./pages/Product/Product";
import ReadPage from "./pages/ReadPage/ReadPage";
import BlogId from "./pages/BlogId/BlogId";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/readpage/:id" element={<ReadPage />} />
        <Route path="/blogid/:id" element={<BlogId />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

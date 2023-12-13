import React, { useState, useRef } from "react";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const cart = useSelector((state) => state.cart);

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-top">
          <div className="header-contact">
            <div className="header-contact-det-r">
              <AddIcCallIcon className="add-call" />
              <p>(00) 000 111 222</p>
            </div>
            <div className="header-contact-det">
              <EmailIcon className="email-icon" />
              <p>info@somedomain.com</p>
            </div>
          </div>
          <div className="header-social">
            <AlternateEmailIcon className="header-social-icon" />
            <FacebookIcon className="header-social-icon" />
            <GoogleIcon className="header-social-icon" />
            <InstagramIcon className="header-social-icon" />
          </div>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-container">
            <Link to="/">
              <img src="https://medik.wpenginepowered.com/wp-content/themes/medik/images/logo.png" />
            </Link>
            <nav ref={navRef} className="header-bottom-nav">
              <ul>
                <li>
                  <NavLink to="/" className="header-link">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="header-link">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" className="header-link">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/collection" className="header-link">
                    Collection
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shop" className="header-link">
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="header-link">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>
            <button className="nav-btn" onClick={() => setModalIsOpen(true)}>
              <FaBars />
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              className="toggle-modal"
            >
              <div>
                <button
                  className="close-modal"
                  onClick={() => setModalIsOpen(false)}
                >
                  X
                </button>
              </div>
              <div className="modal-list">
                <ul>
                  <li>
                    <Link to="/" className="modal-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="modal-link">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="modal-link">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/collection" className="modal-link">
                      Collection
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop" className="modal-link">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="modal-link">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" className="modal-link">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist" className="modal-link">
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart" className="modal-link">
                      Cart
                    </Link>
                  </li>
                </ul>
              </div>
            </Modal>
            <div className="header-bottom-icons">
              <Link to="/wishlist" className="head-icon-bg">
                <FavoriteIcon className="favorite-icon" />
              </Link>
              <Link to="/profile" className="head-icon-bg">
                <PersonIcon className="person-icon" />
              </Link>
              <div className="cart-number-box">
                <Link to="/cart" className="head-icon-bg">
                  <ShoppingCartIcon className="shopping-icon" />
                </Link>
                <div className="shopping-cart-number">
                  <p>{cart.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

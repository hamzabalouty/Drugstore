import React from "react";
import "./Footer.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <img src="https://medik.wpenginepowered.com/wp-content/themes/medik/images/light-logo.png" />
          <p>
            No: 58 A, East Madison Street, <br />
            Baltimore, MD, USA 4508
          </p>
          <p>+91 12345678</p>
          <p>support@somemail.com</p>
          <div className="footer-icons">
            <div className="footer-icon">
              <FacebookIcon className="f-icon" />
            </div>
            <div className="footer-icon">
              <InstagramIcon className="f-icon" />
            </div>
            <div className="footer-icon">
              <GoogleIcon className="f-icon" />
            </div>
            <div className="footer-icon">
              <AlternateEmailIcon className="f-icon" />
            </div>
          </div>
        </div>
        <div className="footer-col col-l">
          <h3>Help</h3>
          <ul>
            <li>Scissors</li>
            <li>Glucometer</li>
            <li>Disposable Gloves</li>
            <li>Cleaning Scissor</li>
            <li>Smart Mask</li>
          </ul>
        </div>
        <div className="footer-col col-l">
          <h3>Support</h3>
          <ul>
            <li>Plaster machine</li>
            <li>Pedometer</li>
            <li>Cleaning Scissor</li>
            <li>Smart Mask</li>
            <li>Pedometer</li>
          </ul>
        </div>
        <div className="footer-col col-l">
          <h3>Information</h3>
          <ul>
            <li>Scissors</li>
            <li>Glucometer</li>
            <li>Disposable Gloves</li>
            <li>Cleaning Scissor</li>
            <li>Smart Mask</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

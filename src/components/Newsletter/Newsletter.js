import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="news-letter">
      <div className="news-letter-container">
        <div className="news-letter-title">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Sign-up to get the latest offers and news and stay updated.</p>
        </div>
        <div className="news-letter-search">
          <input type="text" placeholder="Your Email Address" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

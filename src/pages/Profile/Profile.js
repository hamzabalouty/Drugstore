import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="blog-header">
          <h2>My account</h2>
          <p>
            Home<span>/</span>My account
          </p>
        </div>
        <div className="profile-body">
          <h3>Login</h3>
          <div className="profile-box">
            <div className="profile-input">
              <p>
                Username or email address <span>*</span>
              </p>
              <input type="text" />
            </div>
            <div className="profile-input">
              <p>
                Password<span>*</span>
              </p>
              <input type="text" />
            </div>
            <div className="profile-btn">
              {/* <input className="check-input" type="checkbox" /> */}
              {/* <p>Remember me</p> */}
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

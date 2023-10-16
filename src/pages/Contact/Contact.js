import React from "react";
import "./Contact.css";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-map">
          <iframe
            width="1350"
            height="500"
            className="gmap_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=700&amp;height=400&amp;hl=en&amp;q=cairo&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <div className="contact-info">
          <div className="contact-info-left">
            <h2>Contact Info</h2>
            <p>
              Pellentesque posuere orci lobortis scelerisque
              <br /> blandit. Donec id tellus lacinia an, tincidunt risus ac
            </p>
            <div className="contact-details">
              <div className="contact-box">
                <div className="contact-box-image">
                  <PhoneEnabledIcon className="contact-icon" />
                </div>
                <h3>TALK TO US</h3>
                <p>Toll-Free: 0803 – 080 – 3081</p>
                <p>0803 – 080 – 3081</p>
              </div>
              <div className="contact-box">
                <div className="contact-box-image">
                  <EmailIcon className="contact-icon" />
                </div>
                <h3>TALK TO US</h3>
                <p>Toll-Free: 0803 – 080 – 3081</p>
                <p>0803 – 080 – 3081</p>
              </div>
              <div className="contact-box">
                <div className="contact-box-image">
                  <LocationOnIcon className="contact-icon" />
                </div>
                <h3>TALK TO US</h3>
                <p>Toll-Free: 0803 – 080 – 3081</p>
                <p>0803 – 080 – 3081</p>
              </div>
              <div className="contact-box">
                <div className="contact-box-image">
                  <AccessAlarmIcon className="contact-icon" />
                </div>
                <h3>TALK TO US</h3>
                <p>Toll-Free: 0803 – 080 – 3081</p>
                <p>0803 – 080 – 3081</p>
              </div>
            </div>
          </div>
          <div className="contact-info-right">
            <h2>Enquire Now</h2>
            <p>
              Pellentesque posuere orci lobortis scelerisque blandit. Donec id
              tellus
              <br />
              lacinia an, tincidunt risus ac
            </p>
            <div className="contact-inputs">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>
              <button>Send Enquiry</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

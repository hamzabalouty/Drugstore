import React, { useState } from "react";
import "./About.css";
import { aboutDetails, faqsBox } from "../../data";
import { Link } from "react-router-dom";
import { Collapse } from "antd";

const text = `
Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales Includes Business as well as Professionals bibendum sodales, augue velit cursus.
`;
const items = [
  {
    key: "1",
    label: "Should I allow the child total freedom?",
    children: <p>{text}</p>
  },
  {
    key: "2",
    label: "Is Force Feeding good at times?",
    children: <p>{text}</p>
  },
  {
    key: "3",
    label: "Should I meet a psychologist for errant behaviour ?",
    children: <p>{text}</p>
  },
  {
    key: "4",
    label: "Quelle est la durée moyenne de la livraison ?",
    children: <p>{text}</p>
  }
];

const About = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <div className="about">
      <div className="about-container">
        <div className="blog-header">
          <h2>About</h2>
          <p>
            Home<span>/</span>About
          </p>
        </div>
        <div className="about-best">
          <img src="https://medik.wpenginepowered.com/wp-content/uploads/2019/07/about.jpg" />
          <div className="about-best-text">
            <h2>The Best Infrastructure</h2>
            <p>
              Unpacked reserved sir offering bed judgment may and quitting
              speaking. Is do be improved raptures offering required in replying
              raillery. Stairs ladies friend by in mutual an no. Mr hence chief
              he cause. Whole no doors on hoped. Mile tell if help they ye full
              name.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea comm consequat.
            </p>
            <Link to="/contact" className="btn-about">
              View Help
            </Link>
          </div>
        </div>
        <div className="about-details">
          <div className="about-details-head">
            <h2>How to Buy Only the Best</h2>
            <p>
              Pellentesque posuere orci lobortis scelerisque blandit. Donec id
              tellus
              <br /> lacinia an, tincidunt risus ac
            </p>
          </div>
          <div className="about-details-body">
            {aboutDetails.map((item) => (
              <div className="about-box">
                <div className="about-box-image">
                  <img src={item.img} />
                </div>
                <h2>{item.title}</h2>
                <p>
                  Etiam sit amet orci eget eros faucibus
                  <br />
                  tincidunt. Duis leo. Sed fringilla mauris
                  <br />
                  sit amet nibh. Donec sodales sagittis
                  <br />
                  magna.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="about-join">
          <div className="about-join-left">
            <h2>
              <span>Join us :</span>Monthly Seminars on Bringing up
              <br /> Kids
            </h2>
            <p>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
              fringilla mauris sit amet nibh. <br />
              Donec sodales sagittis magna. Sed consequat, leo eget bibendum
              sodales, augue velit cursus
              <br /> nunc.
            </p>
          </div>
          <button>View help videos</button>
        </div>
        <div className="about-faqs">
          <div className="about-faqs-left">
            <h2>Frequently Asked Questions</h2>
            <div className="faqs-container">
              <Collapse accordion items={items} />
            </div>
          </div>
          <div className="about-faqs-right">
            <h2>We are Responsible Shoppers</h2>
            <img src="https://medik.wpenginepowered.com/wp-content/uploads/2019/07/video.jpg" />
          </div>
        </div>
        <div className="about-consult">
          <div className="about-consult-title">
            <h2>Meet Our Free Consultation</h2>
            <p>
              Pellentesque posuere orci lobortis scelerisque
              <br /> blandit. Donec id tellus lacinia an, tincidunt risus ac
            </p>
          </div>
          <div className="about-consult-container">
            <div className="about-consult-box">
              <img src="https://medik.wpenginepowered.com/wp-content/uploads/2019/07/team1.jpg" />
              <h3>Helen Reyes</h3>
              <p>CHILD PSYCHOLOGIST</p>
            </div>
            <div className="about-consult-box">
              <img src="https://medik.wpenginepowered.com/wp-content/uploads/2019/07/team2.jpg" />
              <h3>Julius Goodman</h3>
              <p>BEHAVIOURAL PSYCHOLOGIST</p>
            </div>
            <div className="about-consult-box">
              <img src="https://medik.wpenginepowered.com/wp-content/uploads/2019/07/team3.jpg" />
              <h3>Oliver Wheeler</h3>
              <p>PEDIATRICIAN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./News.css";
import { Link } from "react-router-dom";
import { newsData } from "../../data";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const News = () => {
  return (
    <div className="news">
      <div className="news-container">
        <div className="products-title">
          <h2>Our Latest News</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className="news-cards">
          {newsData.map((item) => (
            <div className="news-card" key={item.id}>
              <img src={item.img} />
              <div className="news-date">
                <div className="news-date-left">
                  <CalendarTodayIcon className="caclendar-icon" />
                  <p>January 18, 2019</p>
                </div>
                <div className="news-date-right">
                  <ChatBubbleIcon className="chat-icon" />
                  <p> 0 Comments</p>
                </div>
              </div>
              <div className="news-text">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <Link to={`/readpage/${item.id}`} className="news-button">
                  Read More <span>></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

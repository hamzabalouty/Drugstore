import React from "react";
import "./Blog.css";
import { blogData } from "../../data";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h2>Blog</h2>
          <p>
            Home<span>/</span>Blog
          </p>
        </div>
        <div className="blog-body">
          <div className="blog-body-left">
            <div className="blog-left-head">
              <h2>Categories</h2>
            </div>
            <div className="blog-left-list">
              <div className="blog-left-row">
                <div className="left-row-l">
                  <div></div>
                  <p>Aroma Therapy</p>
                </div>
                <p>(2)</p>
              </div>
              <div className="blog-left-row">
                <div className="left-row-l">
                  <div></div>
                  <p>Audio</p>
                </div>
                <p>(1)</p>
              </div>
              <div className="blog-left-row">
                <div className="left-row-l">
                  <div></div>
                  <p>Message</p>
                </div>
                <p>(5)</p>
              </div>
              <div className="blog-left-row">
                <div className="left-row-l">
                  <div></div>
                  <p>Medical</p>
                </div>
                <p>(1)</p>
              </div>
              <div className="blog-left-row">
                <div className="left-row-l">
                  <div></div>
                  <p>Physiotherapy</p>
                </div>
                <p>(2)</p>
              </div>
              <div className="blog-left-row">
                <div className="left-row-l">
                  <div></div>
                  <p>Reiki</p>
                </div>
                <p>(1)</p>
              </div>
              <div className="blog-left-row">
                <div className="left-row-l">
                  <div></div>
                  <p>Sanitize</p>
                </div>
                <p>(2)</p>
              </div>
              <div className="blog-left-row">
                <div className="left-row-l">
                  <div></div>
                  <p>Steam Bath</p>
                </div>
                <p>(1)</p>
              </div>
              <div className="blog-left-row">
                <div className="left-row-l">
                  <div></div>
                  <p>Temperature</p>
                </div>
                <p>(1)</p>
              </div>
              <div className="blog-left-row">
                <div className="left-row-l">
                  <div></div>
                  <p>Test</p>
                </div>
                <p>(1)</p>
              </div>
              <div className="blog-left-row">
                <div className="left-row-l">
                  <div></div>
                  <p>Treatment</p>
                </div>
                <p>(3)</p>
              </div>
              <div className="blog-left-row">
                <div className="left-row-l">
                  <div></div>
                  <p>Video</p>
                </div>
                <p>(2)</p>
              </div>
            </div>
          </div>
          <div className="blog-body-right">
            <div className="blog-right-container">
              {blogData.map((item) => (
                <div className="blog-card" key={item.id}>
                  <img src={item.img} />
                  <div className="news-date">
                    <div className="news-date-left">
                      <CalendarTodayIcon className="caclendar-icon" />
                      <p> May 16, 2020</p>
                    </div>
                    <div className="news-date-right">
                      <ChatBubbleIcon className="chat-icon" />
                      <p> 0 Comments</p>
                    </div>
                  </div>
                  <div className="news-text">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <Link to={`/blogid/${item.id}`} className="readmore-link">
                      Read More <span>></span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

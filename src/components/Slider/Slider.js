import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider">
      <div className="products-title">
        <h2>Our Client Say!</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      <div className="slider-container">
        <div className="slider-bottom">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="slider-map">
                  <div className="slider-map-top">
                    <img src="https://medik.wpenginepowered.com/wp-content/uploads/2019/07/team2.jpg" />
                    <div className="slider-top-desc">
                      <h3>Cute Girl</h3>
                      <p>Frontend Dev</p>
                    </div>
                  </div>
                  <div className="slider-map-bottom">
                    <p>
                      Lorem Ipsum is simply dummy when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop .
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="slider-map">
                  <div className="slider-map-top">
                    <img src="https://medik.wpenginepowered.com/wp-content/uploads/2019/07/author5.jpg" />
                    <div className="slider-top-desc">
                      <h3>Team Expert</h3>
                      <p>Frontend Dev</p>
                    </div>
                  </div>
                  <div className="slider-map-bottom">
                    <p>
                      Lorem Ipsum is simply dummy when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop .
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="slider-map">
                  <div className="slider-map-top">
                    <img src="https://medik.wpenginepowered.com/wp-content/uploads/2020/05/team-1.jpg" />
                    <div className="slider-top-desc">
                      <h3>Cute Girl</h3>
                      <p>Frontend Dev</p>
                    </div>
                  </div>
                  <div className="slider-map-bottom">
                    <p>
                      Lorem Ipsum is simply dummy when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop .
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

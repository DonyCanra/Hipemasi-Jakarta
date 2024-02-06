import React from "react";
import "./popular.css";
import Slider from "react-slick";
import Heading from "../common/heading/Heading";
import { popular } from "../data/data";

const Event = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 16,
    slidesPerRow: 1,
  };
  return (
    <>
      <section className="event">
        <Heading title="Popular" />
        <div className="content">
          <Slider {...settings}>
            {popular
              // .filter((val) => val.catgeory === "fun")
              .map((val) => {
                return (
                  <div className="items">
                    <div className="box shadow flexSB">
                      <div className="images">
                        <div className="img">
                          <img src={val.cover} alt="" />
                        </div>
                        <div class="category category1">
                          <span>{val.catgeory}</span>
                        </div>
                      </div>
                      <div className="text">
                        <h1 className="title">{val.title}</h1>
                        <div className="date">
                          <i class="fas fa-calendar-days"></i>
                          <label>{val.date}</label>
                        </div>
                        <p className="desc">{val.desc.slice(0, 250)}...</p>
                        <div className="comment">
                          <i class="fas fa-share"></i>
                          <label>Share / </label>
                          <i class="fas fa-comments"></i>
                          <label>{val.comments}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Event;

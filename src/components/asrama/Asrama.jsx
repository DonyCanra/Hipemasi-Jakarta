import React from "react";
import Slider from "react-slick";
import { asrama } from "../data/data";
import Heading from "../common/heading/Heading";
import "./asrama.css";

// copy same code of popular
const Ppost = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 1,
  };
  return (
    <>
      <section className="popularPost">
        <Heading title="Asrama" />
        <div className="content">
          <Slider {...settings}>
            {asrama.map((val) => {
              return (
                <div className="items">
                  <div className="box shadow">
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
                        <i class="fas fa-location"></i>
                        <a href={val.url}>
                          <label>Visit Location</label>
                        </a>
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

export default Ppost;

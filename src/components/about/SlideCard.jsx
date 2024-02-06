import React from "react";
import Slider from "react-slick";
import hipemasi from "../data/hipemasi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./Banner";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings}>
        {hipemasi.map((value, index) => {
          return (
            <>
              <Banner key={index} value={value} index={index} />
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;

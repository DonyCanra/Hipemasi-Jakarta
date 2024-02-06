import React from "react";
import "./side.css";
import Slider from "react-slick";
import Heading from "../../../common/heading/Heading";
import { gallery } from "../../../data/data";
import Tpost from "../Tpost/Tpost";
import { Link } from "react-router-dom";


const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // const catgeory = ["About", "Popular", "Event", "Asrama"];

  const catgeory = [
    {
      id: 1,
      title: "About",
      link: "/about",
    },
    {
      id: 2,
      title: "Popular",
      link: "/popular",
    },
    {
      id: 3,
      title: "Program",
      link: "/program",
    },
    {
      id: 4,
      title: "Asrama",
      link: "/asrama",
    },
  ];

  return (
    <>
      <Heading title="Subscribe" />

      <section className="subscribe">
        <h1 className="title">Let's Join Us</h1>
        <form action="">
          <input type="email" placeholder="Email Address..." />
          <button>
            <i className="fa fa-paper-plane"></i> SUBMIT
          </button>
        </form>
      </section>

      <section className="banner">
        <img src="./images/sidebar-banner-new.jpg" alt="" />
      </section>

      <Tpost />

      <section className="catgorys">
        <Heading title="Catgeorys" />
        {/*<div className='items'>{allCat}</div>*/}
        {catgeory.map((val, index) => {
          return (
            <Link to={val.link}>
              <div className="category category1">
                <span>{val.title}</span>
              </div>
            </Link>
          );
        })}
      </section>

      <section className="gallery">
        <Heading title="Gallery" />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Side;

import React from "react";
import { tpost } from "../../../data/data";
import Heading from "../../../common/heading/Heading";
import "./tpost.css";

const Tpost = () => {
  return (
    <>
      <section className="tpost">
        <Heading title="Info Siak" />
        {tpost.map((val) => {
          return (
            <a href={val.url}>
              <div className="box flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h1 className="title">{val.title.slice(0, 35)}...</h1>
                  <span>{val.date}</span>
                </div>
              </div>
            </a>
          );
        })}
      </section>
    </>
  );
};

export default Tpost;

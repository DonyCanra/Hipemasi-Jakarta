import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = ({ value }) => {
  const [text] = useTypewriter({
    words: [value.title],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <>
      <section id="home" className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black">
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
          <div className="flex flex-col gap-5">
            <h4 className=" text-lg font-normal">HIPEMASI 2023</h4>
            <h1 className="text-6xl font-bold text-black">
              Hi, I'm <span className="text-designColor capitalize">{value.name}</span>
            </h1>
            <h2 className="text-4xl font-bold text-black">
              <span>{text}</span>
              <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
            </h2>
            <p className="text-base italic font-bodyFont leading-6 tracking-wide">{value.desc}</p>
          </div>
        </div>

        <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
          <img className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10" src={value.cover} alt="bannerImg" />
        </div>
      </section>
    </>
  );
};

export default Banner;

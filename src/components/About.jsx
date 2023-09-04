import React from "react";
import bg from "../assets/ap_bg.png";
import imgs from "../assets/ap_img.png";
import watch from "../assets/watchnow.png";

const About = () => {
  return (
    <div name="about" className="relative min-h-screen md:pt-[5rem] pt-[1rem]">
      <img
        className="w-[150px] md:w-[220px] h-auto absolute left-0 top-0 -z-10"
        src={bg}
        alt="banner_bg"
      />
      <div className="grid md:grid-cols-2 items-center md:pl-[4rem]">
        <img
          className="w-[280px] md:w-[620px] h-auto"
          src={imgs}
          alt="banner_bg"
        />
        <div className="space-y-4 md:bg-[#ffffff98] text-[#4C4C4C] w-fit p-1 md:p-4 md:pr-[10rem] pr-[2rem] text-right md:text-left">
          <p className="text-[#FE9E0D] text-[2rem] font-bold">About</p>
          <p className="font-bold md:text-[3rem] text-[1.5rem]">
            Food Is An Important
            <br className="md:flex hidden" /> Part Of A Balanced
            <br className="md:flex hidden" /> Diet
          </p>
          <p className="text-[#828282] md:text-[1.3rem]">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt
            <br className="md:flex hidden" /> magna non et elit. Dolor turpis
            molestie dui
            <br className="md:flex hidden" /> magnis facilisis at fringilla
            quam.
            <br className="md:flex hidden" />
            Non tincidunt magna non et elit. Dolor turpis molestie
            <br className="md:flex hidden" />
            dui magnis facilisis at fringilla quam.
          </p>
          <div className="flex flex-row items-center md:justify-between justify-center pl-[1rem] md:px-[2rem] gap-4">
            <button className="bg-[#FE9E0D] rounded-[2rem] py-[1rem] px-[1rem] md:px-[2rem] font-bold text-[#f6f6f6]">
              Learn More
            </button>
            <button className="font-bold text-[#4C4C4C] flex flex-row items-center justify-center">
              <img
                className="w-[3rem] md:w-[4rem] md:mr-[1rem] mr-[.5rem]"
                src={watch}
                alt="watchNow"
              />
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

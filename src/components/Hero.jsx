import React from "react";
import banner from "../assets/bg1hp.png";
import banner2 from "../assets/banner2.png";
import NavBar from "./NavBar";

const Hero = () => {
  let butoName = "Order Now ->";
  return (
    <div name="home" className="relative min-h-screen">
      <img
        className="w-[380px] md:w-[620px] h-auto absolute right-0 top-0 -z-10"
        src={banner}
        alt="banner_bg"
      />
      <NavBar />
      <div className="grid md:grid-cols-2 gap-[2rem] md:gap-[0rem] items-center md:pl-[4rem]">
        <div className="md:order-1 order-2 space-y-4 md:bg-[#ffffff98] w-fit p-2 md:p-4 pl-[1.5rem] md:pl-[10rem]">
          <p className="font-bold text-[2rem] md:text-[3rem]">
            Your Favourite Food
            <br /> Delivered Hot &<br /> Fresh
          </p>
          <p className="text-[#828282] text-[1rem] md:text-[1.3rem]">
            Healthy switcher chefs do all the prep work, like
            <br className="md:flex hidden" /> peeding, chopping & marinating, so
            you can cook
            <br className="md:flex hidden" /> a fresh food.
          </p>
          <button className="bg-[#FE9E0D] rounded-[2rem] py-[1rem] px-[2rem] font-bold text-[#f6f6f6]">
            <a href="https://hareshkurade.me/Swaad-Tales">{butoName}</a>
          </button>
        </div>
        <img
          className="md:order-2 w-[280px] md:w-[620px] h-auto"
          src={banner2}
          alt="banner_bg"
        />
      </div>
    </div>
  );
};

export default Hero;

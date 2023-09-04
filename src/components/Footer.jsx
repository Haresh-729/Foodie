import React from "react";
import fl from "../assets/FOODIE_footer.png";
import twitter from "../assets/twitter.png";
import yt from "../assets/youtube.png";
import ln from "../assets/linkedin.png";
import fb from "../assets/facebook.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div name="contact" className="md:px-[10rem] pt-[10rem]">
      <div className="hidden md:grid grid-cols-5 md:gap-16">
        <div className="h-[15rem]  flex flex-col gap-[2rem] text-black ">
          <img src={fl} alt="footer_logo" className="w-[8rem]" />
          <div className="flex flex-row gap-4">
            <a href="https:\\twitter.com">
              <img className="w-[2rem]" src={twitter} alt="twitter" />
            </a>
            <a href="http://www.linkedin.com/in/haresh-kurade-22a04b241">
              <img className="w-[2rem]" src={ln} alt="twitter" />
            </a>
            <a href="https://www.youtube.com/channel/UC6eNSDkXuEucG97AsVyR6hQ">
              <img className="w-[2rem]" src={yt} alt="twitter" />
            </a>
            <a href="https://www.facebook.com/haresh.kurade.729/">
              <img className="w-[2rem]" src={fb} alt="twitter" />
            </a>
          </div>
        </div>
        <div className="h-[10rem] md:flex hidden "></div>
        <div className="h-[10rem] text-[#4C4C4C] font-bold ">
          <ul className="select-none space-y-2">
            <li>Quality</li>
            <li>Help</li>
            <li>Share</li>
            <li>Carrers</li>
            <li>Work</li>
            <li>Testimonals</li>
          </ul>
        </div>
        <div className=" select-none h-[10rem] text-[#4C4C4C] font-bold ">
          <ul className="space-y-2">
            <li>244-5333-7783</li>
            <li>hello@food.com</li>
            <li>press@food.com</li>
            <li>contact@food.com</li>
          </ul>
        </div>
        <div className="select-none h-[10rem] text-[#4C4C4C] font-bold ">
          <ul className="space-y-2">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="md:hidden grid grid-row px-[1rem] pb-[2.5rem] ">
        <div className="h-[8rem] flex flex-col gap-[2rem] text-black self-center">
          <img src={fl} alt="footer_logo" className="w-[8rem]" />
          <div className="flex flex-row gap-4">
            <a href="https:\\twitter.com">
              <img className="w-[2rem]" src={twitter} alt="twitter" />
            </a>
            <a href="http://www.linkedin.com/in/haresh-kurade-22a04b241">
              <img className="w-[2rem]" src={ln} alt="twitter" />
            </a>
            <a href="https://www.youtube.com/channel/UC6eNSDkXuEucG97AsVyR6hQ">
              <img className="w-[2rem]" src={yt} alt="twitter" />
            </a>
            <a href="https://www.facebook.com/haresh.kurade.729/">
              <img className="w-[2rem]" src={fb} alt="twitter" />
            </a>
          </div>
        </div>
        <div className="flex flex-col-1 items-center justify-between">
          <div className="h-[10rem] text-[#4C4C4C] font-bold ">
            <ul className="select-none space-y-2">
              <li>244-5333-7783</li>
              <li>Quality</li>
              <li>Help</li>
              <li>Share</li>
              <li>Carrers</li>
              <li>Work</li>
              <li>Testimonals</li>
            </ul>
          </div>
          <div className=" select-none h-[10rem] text-[#4C4C4C] font-bold ">
            <ul className="space-y-2"></ul>
          </div>
          <div className="select-none h-[10rem] text-[#4C4C4C] font-bold ">
            <ul className="space-y-2">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>hello@food.com</li>
              <li>press@food.com</li>
              <li>contact@food.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" absolute right-2 md:right-10 z-10">
        <Link
          to="home"
          className=" select-none w-[3rem] h-[3rem] flex rounded-[10rem] justify-center  mb-[2rem] bg-[#FE9E0D]"
          smooth
          duration={500}
        >
          |
        </Link>
      </div>
    </div>
  );
};

export default Footer;

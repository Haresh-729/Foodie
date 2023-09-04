import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/FOODIE_logo.png";
import logo2 from "../assets/FOODIE_footer.png";
import cart from "../assets/Cart.png";

import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="select-none top-0 flex  justify-center items-center w-full h-[5rem] px-4 text-white">
      {/* sticky z-50 */}
      <div className="flex justify-between items-center w-[70rem]">
        <div className="flex flex-row ">
          <img className="md:hidden" src={logo2} alt="logo" />
          <img className="hidden md:block" src={logo} alt="logo" />
        </div>
        <div className="md:flex text-[#373737] font-bold text-xl gap-2 hidden">
          <button className="rounded-xl p-[.5rem]">
            <Link to="home" smooth duration={500}>
              Home
            </Link>
          </button>
          <button className="rounded-xl p-[.5rem]">
            <Link to="about" smooth duration={500}>
              About
            </Link>
          </button>
          <button className="rounded-xl p-[.5rem]">
            <Link to="testimonals" smooth duration={500}>
              Testimonals
            </Link>
          </button>
          <button className="rounded-xl p-[.5rem]">
            <Link to="contact" smooth duration={500}>
              Contact
            </Link>
          </button>
          <button className="rounded-xl p-[.5rem]">
            <img className="w-[2rem] p-1" src={cart} alt="cart" />
          </button>
          <button className="bg-white rounded-[2rem] py-[.5rem] px-[1.5rem]">
            Book Now
          </button>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-white xl:hidden md:flex"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <div className="flex flex-col items-center absolute top-20 right-0 w-[25rem] pb-[1rem] px-2 bg-[#FE9E0D] text-[#373737] font-bold">
            <button className="rounded-xl p-[.5rem] text-2xl">
              <Link to="home" smooth duration={500}>
                Home
              </Link>
            </button>
            <button className="rounded-xl p-[.5rem] text-2xl">
              <Link to="about" smooth duration={500}>
                About
              </Link>
            </button>
            <button className="rounded-xl p-[.5rem] text-2xl">
              <Link to="testimonals" smooth duration={500}>
                Testimonals
              </Link>
            </button>
            <button className="rounded-xl p-[.5rem] text-2xl">
              <Link to="contact" smooth duration={500}>
                Contact
              </Link>
            </button>
            {/* <button className="rounded-xl p-[.5rem] text-2xl">
              <img className="w-[2rem] p-1" src={cart} alt="cart" />
            </button> */}
            <button className="bg-white rounded-[2rem] py-[.5rem] px-[1.5rem] text-2xl">
              Book Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import Headers from "./Head";
import Arrow from "../assets/arrow-right.png";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/PETUK.png";
const Navbar = () => {
  return (
    <nav className="navbar w-full h-[138px] bg-transparent flex items-center justify-between py-10 px-16 ">
      {/* <Headers  /> */}
      <div className="w-[50%] h-full logoNav">
        <Image src={Logo} className=" object-cover" />
      </div>
      <div className="navbarItem flex items-center gap-[42px] p-10 ">
        <h1 className="text-[#FFC700] font-poppins text-[18px] cursor-pointer font-medium capitalize  ">
          Home
        </h1>

        <h1 className="text-white font-poppins text-[18px] cursor-pointer font-medium capitalize  ">
          Product
        </h1>

        <h1 className="text-white font-poppins text-[18px] cursor-pointer font-medium capitalize  ">
          customers
        </h1>

        <h1 className="text-white font-poppins text-[18px] cursor-pointer font-medium capitalize  ">
          pricing
        </h1>

        <h1 className="text-white font-poppins text-[18px] cursor-pointer font-medium capitalize  ">
          docs
        </h1>

        <div className="p-2 w-[127px] bg-gradient-to-tr from-[#FFC703] to-[#FFE27C] flex gap-[5px] items-center justify-center font-poppins text-[18px] text-[#2d3961] font-semibold rounded-lg">
          <h1>Sign In</h1>
          <FiArrowRight />
        </div>
      </div>
      <div className="navbarSecond hidden">
        <AiOutlineMenu size={30} />
      </div>
    </nav>
  );
};

export default Navbar;

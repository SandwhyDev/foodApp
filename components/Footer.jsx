import React from "react";
import Logo from "../assets/PETUK.png";
import Icon from "../components/Icon";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="contFooter w-screen h-[400px] bg-gradient-to-r to-[#53067A] from-[#A177B6] px-16 py-[60px]   flex flex-col items-center justify-center gap-4">
      <div className="footer1 w-full h-[60%] gap-24  flex justify-between  ">
        <div className="footerBrand w-[300px] h-full  flex flex-col gap-4  ">
          <div className="brandFooter">
            <Image src={Logo} className=" w-full h-full" />
          </div>
          <p className="loremFooter font-raleway text-[14px]  text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Porttitor scelerisque nisl neque a.
          </p>
          <div className="  w-full">
            <Icon />
          </div>
        </div>
        <div className="contMenuFooter w-full h-[110px]    flex flex-row justify-between    ">
          <div className="menuFlex1 flex justify-between w-full ">
            <div className="menuFooter w-[25%]   h-full  flex flex-col gap-2">
              <h1 className=" font-poppins  text-lg text-white font-bold">
                About
              </h1>
              <ul className="font-poppins capitalize text-white text-sm font-light flex flex-col gap-1 ">
                <li className="cursor-pointer  w-fit">about us </li>
                <li className="cursor-pointer  w-fit">features</li>
                <li className="cursor-pointer  w-fit">News & blog </li>
              </ul>
            </div>
            <div className="menuFooter w-[25%]   h-full flex flex-col gap-2 ">
              <h1 className=" font-poppins  text-lg text-white font-bold">
                Movement
              </h1>
              <ul className="font-poppins capitalize text-white text-sm font-light flex flex-col gap-1 ">
                <li className="cursor-pointer w-fit">what petuk ? </li>
                <li className="cursor-pointer w-fit">support us</li>
              </ul>
            </div>
            <div className="menuFooter w-[25%]   h-full flex flex-col gap-2">
              <h1 className=" font-poppins  text-lg text-white font-bold capitalize">
                company
              </h1>
              <ul className="font-poppins capitalize text-white text-sm font-light flex flex-col gap-1 ">
                <li className="cursor-pointer w-fit ">why petuk </li>
                <li className="cursor-pointer w-fit">capital</li>
                <li className="cursor-pointer w-fit">security</li>
              </ul>
            </div>
          </div>
          <div className="menuFooter w-[25%]  h-full flex flex-col gap-2">
            <h1 className=" font-poppins  text-lg text-white font-bold capitalize">
              support
            </h1>
            <ul className="font-poppins capitalize text-white text-sm font-light flex flex-col gap-1 ">
              <li className="cursor-pointer w-fit">FAQs </li>
              <li className="cursor-pointer w-fit">support center</li>
              <li className="cursor-pointer w-fit">Contact Us </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyFooter w-full h-[40%] flex flex-col  justify-end gap-[2px]">
        <hr className="border-white/30" />
        <div className="w-full py-5 flex justify-between">
          <div className="flex items-center gap-1 text-white font-poppins  font-light ">
            <AiOutlineCopyrightCircle size={20} />
            <p>
              Copyright 2022 <span className="text-yellow-400 ">Petuk</span>
            </p>
          </div>
          <div className="copyFooter1 w-[50%] text-right items-end justify-end  text-white flex gap-10">
            <h1 className="textCopy font-poppins text-base font-light cursor-pointer ">
              Privacy Policy
            </h1>
            <h1 className="textCopy font-poppins text-base font-light cursor-pointer ">
              Terms & Conditions
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

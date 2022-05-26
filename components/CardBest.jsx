import React from "react";
import { RiArrowDropRightFill } from "react-icons/ri";
import Teko from "../assets/teko.png";
import Image from "next/image";

const CardBest = ({ height = false, linear = false }) => {
  return (
    <div
      className={`w-[295px] ${!height ? `h-[295px]` : `h-[350px]`} ${
        !linear
          ? "bg-blue-500"
          : "bg-gradient-to-tr from-[#FFC703] to-[#FFE27C]"
      } rounded-3xl flex flex-col items-center p-5 gap-4`}
    >
      <Image src={Teko} className="w-10 h-10 object-cover" />
      <h1 className="text-md font-poppins font-bold text-[#47506D] text-[20px]">
        Healthy Recipe
      </h1>
      <p className="text-center text-[15px] font-poppins ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex items-center cursor-pointer">
        <p className="font-poppins font-semibold">Learn more</p>
        <RiArrowDropRightFill size={20} />
      </div>
    </div>
  );
};

export default CardBest;

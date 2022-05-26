import React from "react";
import LoveGold from "../assets/LoveGold.png";
import Image from "next/image";

const CardValue = ({ title = "Become Healthier", icon = { LoveGold } }) => {
  return (
    <div className="cardVa4 w-[250px] h-[190px] bg-white/30 rounded-[20px] flex flex-col items-center justify-center p-2 gap-2  ">
      <Image src={LoveGold} className="object-cover " />
      <h1 className="font-poppins font-bold text-white text-[18px]">{title}</h1>
      <p className="text-[12px] text-[#FFFFFF] font-light text-center -mt-2 ">
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default CardValue;

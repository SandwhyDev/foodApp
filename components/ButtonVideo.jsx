import React from "react";
import { FaPlay, FaStar } from "react-icons/fa";

const ButtonVideo = () => {
  return (
    <div className="btnVids w-[226px] h-[61px] bg-white/50 rounded-full flex  items-center justify-center text-[18px] font-bold font-poppins relative cursor-pointer ">
      <div className="btnItems flex  gap-4 absolute top-[22px]">
        <FaPlay />

        <h1 className="">Watch Video</h1>
      </div>
    </div>
  );
};

export default ButtonVideo;

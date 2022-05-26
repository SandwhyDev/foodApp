import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

const Icon = () => {
  return (
    <div className="flex gap-3 w-full">
      <span className="p-1 cursor-pointer  w-6 h-6 rounded-full bg-gradient-to-tr from-[#FFC703] to-[#FFE27C]">
        <FaFacebookF />
      </span>

      <span className="p-1 cursor-pointer  w-6 h-6 rounded-full bg-gradient-to-tr from-[#FFC703] to-[#FFE27C]">
        <RiInstagramFill />
      </span>

      <span className="p-1 cursor-pointer  w-6 h-6 rounded-full bg-gradient-to-tr from-[#FFC703] to-[#FFE27C]">
        <FaTwitter />
      </span>

      <span className="p-1 cursor-pointer  w-6 h-6 rounded-full bg-gradient-to-tr from-[#FFC703] to-[#FFE27C]">
        <FaYoutube />
      </span>
    </div>
  );
};

export default Icon;

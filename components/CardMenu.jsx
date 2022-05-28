import React from "react";
import { BsArrowRight } from "react-icons/bs";

const CardMenu = ({
  img = "https://images.pexels.com/photos/918581/pexels-photo-918581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  title = "American Burger",
  price = "Rp. 250k",
}) => {
  return (
    <div className="CardMenu w-[357px]  h-[400px] rounded-[25px]  flex flex-col">
      <img
        src={img}
        alt="food1"
        className="w-full h-[60%] object-cover rounded-t-[25px] "
      />
      <div className="contMenu w-full h-[40%] bg-gradient-to-br from-[#FFC703] to-[#FFE27C] rounded-b-[25px] flex flex-col items-center justify-center px-12 gap-2">
        <h1 className="nameMenu capitalize text-white text-2xl font-medium font-poppins">
          {title}
        </h1>
        <p className="nameMenu capitalize text-white text-xl font-medium font-poppins -mt-2">
          {price}
        </p>
        <button className=" p-2 w-[120px] bg-gradient-to-l from-[#53067A] to-[#A177B6] rounded-full flex items-center justify-center gap-2">
          <p className="capitalize text-white text-[14px] font-bold font-poppins">
            Try Now
          </p>
          <BsArrowRight color="white" />
        </button>
      </div>
    </div>
  );
};

export default CardMenu;

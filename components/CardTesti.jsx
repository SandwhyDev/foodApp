import React from "react";

const CardTesti = () => {
  return (
    <div className="bg-gradient-to-b to-white/30 from-[#5d2779] w-[1000px] h-full rounded-[50px] flex flex-col items-center justify-center p-20 ">
      <div className="w-full h-full gap-[25px] flex">
        <div className="w-[30%] h-full flex  justify-end">
          <img
            src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-[126px] h-[126px] object-cover rounded-full"
            alt=""
          />
        </div>
        <div className="w-[70%] h-full  flex flex-col">
          <div className="w-full h-[50%] ">
            <p className="font-poppins text-[14px] text-white font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
              non augue elementum vehicula id. Urna vulputate nunc aliquet
              sapien. Sagittis non augue elementum vehicula id. Urna vulputate
              nunc aliquet sapien.
            </p>
          </div>
          <div className="w-full h-[50%] flex flex-col ">
            <h1 className="font-raleway text-yellow-400 font-bold text-lg">
              Melissa Carson
            </h1>
            <p className="font-raleway text-sm">Alexandria, LA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTesti;

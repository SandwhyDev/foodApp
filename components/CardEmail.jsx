import React from "react";

const CardEmail = () => {
  return (
    <div className="cardEmail bg-gradient-to-t to-white/30 from-[#5d2779] w-full h-full rounded-[50px] flex flex-col items-center justify-center py-14 px-24  ">
      <div className="conCardEmail w-full h-full gap-[25px] flex flex-col items-center">
        <h1 className="text7 text-4xl text-yellow-500  font-bold font-raleway">
          Subscribe Our Newsletter
        </h1>
        <p className="lorem7 font-raleway text-center text-[20px] text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis non
          augue <br className="break1" /> elementum vehicula id. Urna vulputate
          nunc aliquet sapien.
        </p>
        <div className="btnSubs w-full  flex p-2 px-32">
          <div className="w-[70%] h-full bg-gradient-to-l to-white/30 from-[#5d2779] rounded-l-full flex flex-col items-center justify-center p-4">
            <input
              type="email"
              name="text"
              id="text"
              placeholder="Type your email here"
              className="inputSubs w-full p-2 bg-transparent font-raleway text-white outline-none px-16 text-[20px] no-underline "
            />
          </div>
          <div className=" w-[30%] h-full rounded-r-full bg-gradient-to-tr from-[#FFC703] to-[#FFE27C] flex flex-col items-center justify-center cursor-pointer">
            <h1 className="textSubs font-poppins text-[24px] font-bold text-[#47506D]  ">
              Subscribe
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEmail;

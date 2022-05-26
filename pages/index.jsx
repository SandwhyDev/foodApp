import Image from "next/image";
import Headers from "../components/Head";
import Navbar from "../components/Navbar";
import Cewek from "../assets/cewekMakan.png";
import HappyWoman from "../assets/HappyWoman.png";
import CardBest from "../components/CardBest";
import CardValue from "../components/CardValue";
import CardMenu from "../components/CardMenu";
import CardEmail from "../components/CardEmail";
import CardTesti from "../components/CardTesti";
import CardPlus from "../components/CardPlus";
import Button from "../components/Button";
import ButtonVideo from "../components/ButtonVideo";
import Footer from "../components/Footer";
import SwiperMenu from "../components/SwiperMenu";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Headers />
      <div className="w-screen h-screen bg-gradient-to-tr from-[#53067A] to-[#A177B6]">
        <Navbar />

        <div className="page1 flex w-full py-5 px-16 ">
          <div className="containerJudul w-[50%] h-full flex flex-col gap-[48px] leading-none">
            <h1 className="judul text-[72px]  w-[700px] font-bold font-poppins text-white  ">
              Make your <br />{" "}
              <span className="text-[#FFC700]">healthy day</span> with{" "}
              <br className="break1" /> Petuk
            </h1>

            <p className="lorem1 w-[494px] text-[20px] text-white font-thin leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              scelerisque nisl neque a, tristique libero blandit quam. Odio sed
              tellus phasellus pellentesque.
            </p>

            <div className="btn1 flex gap-4">
              <Button />

              <ButtonVideo />
            </div>
          </div>
          <div className="loremCewek w-[50%] h-full mr-6  ">
            <div className="cewek1">
              <Image src={Cewek} className=" w-full h-full object-cover " />
            </div>
            {/* <p className="lorem2 hidden w-[494px] text-[20px] text-white font-thin leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              scelerisque nisl neque a, tristique libero blandit quam. Odio sed
              tellus phasellus pellentesque.
            </p> */}

            <div className="btn2 hidden gap-4">
              <Button />

              <ButtonVideo />
            </div>
          </div>
        </div>
      </div>

      <div className="page2 w-screen h-[185px] flex  bg-gradient-to-tr from-[#53067A] to-[#A177B6] z-10">
        <CardPlus />
        <CardPlus />
        <CardPlus />
      </div>

      <div className="page3 w-screen h-screen bg-gradient-to-tl to-[#53067A] from-[#A177B6] flex flex-col items-center gap-4 p-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[32px] text-[#FFC700] font-semibold font-poppins">
            Our Best Program
          </h1>
          <div className="w-[50px] h-[12px] rounded-full bg-gradient-to-tr from-[#FFC703] to-[#FFE27C] mt-2"></div>
        </div>

        <p className="lorem text-[36px] text-center font-light text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
          <br className="break1" /> elit. Porttitor scelerisque nisl.
        </p>

        <div className="cardBest flex w-full gap-[43px] justify-center items-end mt-5   ">
          <CardBest />
          <CardBest height="true" linear="true" />
          <CardBest />
        </div>
      </div>

      <div className="page4 w-screen h-screen bg-gradient-to-tl from-[#53067A] to-[#A177B6] p-10 flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text4 text-[32px] text-[#FFC700] font-semibold font-poppins">
            Our Value Top <br className="break2 hidden" /> Help You
          </h1>
          <div className="w-[50px] h-[12px] rounded-full bg-gradient-to-tr from-[#FFC703] to-[#FFE27C] mt-2"></div>
        </div>
        <p className="text-[24px] text-center font-light text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
          Porttitor scelerisque nisl.
        </p>

        <div className="page41 flex w-full   mt-5 gap-10   ">
          <div className="cewek4 w-[50%] h-full flex items-center justify-center -mt-5">
            <Image
              src={HappyWoman}
              width={350}
              height={430}
              className="object-cover "
            />
          </div>

          <div className="cardValue w-[60%] h-full  flex flex-wrap gap-4 pr-24">
            <CardValue />
            <CardValue title="Increase Energy" />
            <CardValue title="Controlling Weight" />
            <CardValue title="Become Happier" />
          </div>
        </div>
      </div>

      <div className="page5 w-screen h-screen bg-gradient-to-tl to-[#53067A] from-[#A177B6]  ">
        <div className="page51 w-full h-full  flex flex-col justify-between gap-14 ">
          <div className="page52 flex pl-16 py-10">
            <div className="container_judul5 w-[70%] h-[120px]  flex flex-col justify-between">
              <h1 className="judul5 font-raleway text-[36px] font-bold text-yellow-300">
                Try Our <br className="break2 hidden" /> Healthy Menu
              </h1>
              <hr className="w-[50px] border-[5px] rounded-full  border-yellow-300 -mt-5   " />
              <p className="lorem5 font-raleway font-[24px] text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Porttitor scelerisque nisl .
              </p>
            </div>

            {/* <div className="w-[30%] h-[120px] bg-red-500"></div> */}
          </div>
          <div className="swipeMenu w-full h-full -mt-10  ">
            <SwiperMenu />
            {/* <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu /> */}
            {/* <CardMenu /> */}
          </div>
        </div>
      </div>

      <div className="w-screen h-screen bg-gradient-to-tl to-[#53067A] from-[#A177B6] px-16 py-20 flex flex-col items-center gap-3 ">
        <h1 className="text-yellow-400 font-raleway text-[36px] font-bold">
          Testimonials About Us
        </h1>
        <hr className="w-[50px] border-[5px] rounded-full  border-yellow-300    " />
        <p className="text-[24px] font-raleway text-center text-white font-light ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
          Porttitor scelerisque nisl .
        </p>

        <CardTesti />
      </div>
      <div className="w-screen h-[550px] bg-gradient-to-bl to-[#53067A] from-[#A177B6] px-16 py-16 flex flex-col items-center justify-center">
        <CardEmail />
      </div>

      {/* FOOTER  */}
      <Footer />
    </div>
  );
}

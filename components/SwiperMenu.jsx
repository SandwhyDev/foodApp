import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Link from "next/link";
import CardMenu from "./CardMenu";
const SwiperMenu = () => {
  return (
    <div className="w-full h-full ">
      <Swiper
        slidesPerView={2}
        spaceBetween={120}
        className={"mySwiper"}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide className="swiper1 ml-16">
          <CardMenu />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <CardMenu
            img="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="pizza"
            price="Rp. 100k"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <CardMenu
            img="https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="pasta"
            price="Rp. 200k"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <CardMenu
            img="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="steak"
            price="Rp. 300k"
          />
        </SwiperSlide>

        <SwiperSlide className="swiper1">
          <CardMenu
            img="https://images.pexels.com/photos/9980875/pexels-photo-9980875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="fried rice"
            price="Rp. 120k"
          />
        </SwiperSlide>

        <SwiperSlide className="swiper2">
          <CardMenu
            img="https://images.pexels.com/photos/9609853/pexels-photo-9609853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="fried yellow"
            price="Rp. 130k"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperMenu;

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
          <CardMenu />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <CardMenu />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <CardMenu />
        </SwiperSlide>

        <SwiperSlide className="swiper1">
          <CardMenu />
        </SwiperSlide>
        <SwiperSlide className="swiper2">
          <CardMenu />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperMenu;

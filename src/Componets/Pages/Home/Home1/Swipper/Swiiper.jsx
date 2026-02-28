import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";

import Wellcome from "../Wellcome";
import HomeWell2 from "../HomeWell2";
import HomeWell3 from "../HomeWell3";

const Swiiper = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, EffectFade, Pagination]}
      slidesPerView={1}
      loop={true}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={3000} // smooth 4s transition
      autoplay={{
        delay: 4000, // slide stays 10s
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      navigation
      style={{ backgroundColor: "#0A1B3D" }}
    >
      <SwiperSlide><Wellcome /></SwiperSlide>
      <SwiperSlide><HomeWell2 /></SwiperSlide>
      <SwiperSlide><HomeWell3 /></SwiperSlide>
    </Swiper>
  );
};

export default Swiiper;
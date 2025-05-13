import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, A11y } from "swiper/modules";

import Wellcome from "../Wellcome";
import HomeWell2 from "../HomeWell2";
import HomeWell3 from "../HomeWell3";

const Swiiper = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <Wellcome />
      </SwiperSlide>
      <SwiperSlide>
        <HomeWell2 />
      </SwiperSlide>
      <SwiperSlide>
        <HomeWell3 />
      </SwiperSlide>
    </Swiper>
  );
};

export default Swiiper;

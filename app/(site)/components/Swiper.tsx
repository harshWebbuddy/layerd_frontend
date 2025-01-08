import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BoxComponent from "./BoxComponent";

const SwiperComponent = ({ botOptions }) => {
  return (
    <div className="mt-20 mb-5">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop
        speed={10000}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {botOptions.map((option, index) => (
          <SwiperSlide key={index}>
            <BoxComponent option={option} index={index} isFullWidth={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;

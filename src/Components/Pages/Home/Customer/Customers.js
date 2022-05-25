import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../../Assets/c1.png";
import slide2 from "../../../../Assets/c2.png";
import slide3 from "../../../../Assets/c3.png";
import slide4 from "../../../../Assets/c4.png";
import slide5 from "../../../../Assets/c5.png";
import slide6 from "../../../../Assets/c6.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";

const Customers = () => {
  return (
    <div className="pb-10 pt-6 px-10 bg-slate-200">
      <h1 className="text-3xl pb-5 text-red-600 text-center">
        Our Valuable Clients
      </h1>
      <div>
        <Swiper
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={50}
          freeMode={true}
          autoplay={{ delay: 1000 }}
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" pt-4 md:pt-12" src={slide3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="pt-4 md:pt-12" src={slide4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="mt-0" src={slide6} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Customers;

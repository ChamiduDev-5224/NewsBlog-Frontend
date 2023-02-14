import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "../../sass/SectionTwo.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const SectionTwo = () => {
  return (
    <div className="main">
      <div className="left-sec" style={{ zIndex: "-1" }}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          // onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="swipper-image"
              src={require("../../assets/images/sub2.jpg")}
              alt="sub2"
              width={450}
              height={250}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swipper-image"
              src={require("../../assets/images/sub1.jpg")}
              alt="sub1"
              width={450}
              height={250}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swipper-image"
              src={require("../../assets/images/topNews.jpg")}
              alt="top-news"
              width={450}
              height={250}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="right-sec">
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            exercitationem asperiores recusandae. Vero dolor ipsa iusto
            excepturi expedita quasi, saepe nostrum recusandae cumque, eius sit
            numquam dignissimos nemo quo assumenda!
          </li>
          <div className="under-line" />
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            exercitationem asperiores recusandae. Vero dolor ipsa iusto
            excepturi expedita quasi, saepe nostrum recusandae cumque, eius sit
            numquam dignissimos nemo quo assumenda!
          </li>
          <div className="under-line" />
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            exercitationem asperiores recusandae. Vero dolor ipsa iusto
            excepturi expedita quasi, saepe nostrum recusandae cumque, eius sit
            numquam dignissimos nemo quo assumenda!
          </li>
          <div className="under-line" />
        </ul>
      </div>
    </div>
  );
};

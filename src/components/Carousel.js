import image from "../img/Capture.PNG";
import image1 from "../img/Capture1.PNG";
import image2 from "../img/Capture2.PNG";
import image3 from "../img/Capture3.PNG";
import image4 from "../img/Capture4.PNG";
import image5 from "../img/Capture5.PNG";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";

import "swiper/css";

export default () => {
  const [slidesPerPage, setSlidesPerPage] = useState(5);
  useEffect(() => {
    if (window.innerWidth <= 398) {
      setSlidesPerPage(1.2);
    } else if (window.innerWidth <= 600) {
      setSlidesPerPage(2);
    } else if (window.innerWidth <= 765) {
      setSlidesPerPage(3);
    } else if (window.innerWidth <= 900) {
      setSlidesPerPage(4);
    } else if ((window.innerWidth = 1000)) {
      setSlidesPerPage(5);
    } else {
      setSlidesPerPage(5);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 398) {
        setSlidesPerPage(1.2);
      } else if (window.innerWidth <= 600) {
        setSlidesPerPage(2);
      } else if (window.innerWidth <= 765) {
        setSlidesPerPage(3);
      } else if (window.innerWidth <= 900) {
        setSlidesPerPage(4);
      } else if ((window.innerWidth = 1000)) {
        setSlidesPerPage(5);
      } else {
        setSlidesPerPage(5);
      }
    });
  }, []);

  return (
    <div className="slide-outer">
      <Swiper spaceBetween={1} slidesPerView={slidesPerPage}>
        <SwiperSlide className="slide">
          <img src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={image5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

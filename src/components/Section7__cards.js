import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import slide1 from "../img/slide1.PNG";
import slide2 from "../img/slide2.PNG";
import slide3 from "../img/slide3.PNG";
import "swiper/css";

const Section7__cards = () => {
  const [slidesPerPage, setSlidesPerPage] = useState(5);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setSlidesPerPage(1);
    } else if (window.innerWidth <= 700) {
      setSlidesPerPage(2);
    } else if (window.innerWidth <= 900) {
      setSlidesPerPage(3);
    } else if (window.innerWidth <= 1200) {
      setSlidesPerPage(4);
    } else {
      setSlidesPerPage(4);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 500) {
        setSlidesPerPage(1);
      } else if (window.innerWidth <= 700) {
        setSlidesPerPage(2);
      } else if (window.innerWidth <= 900) {
        setSlidesPerPage(3);
      } else if (window.innerWidth <= 1200) {
        setSlidesPerPage(4);
      } else {
        setSlidesPerPage(4);
      }
    });
  }, []);

  return (
    <Swiper spaceBetween={50} slidesPerView={slidesPerPage}>
      <div className="Section7__card">
        <SwiperSlide>
          <div className="Section7__card__card__1">
            <img className="card1img" src={slide1} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nam!
            </p>
            <button>Read More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Section7__card__card__1">
            <img className="card1img" src={slide2} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nam!
            </p>
            <button>Read More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Section7__card__card__1">
            <img className="card1img" src={slide3} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nam!
            </p>
            <button>Read More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Section7__card__card__1">
            <img className="card1img" src={slide1} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nam!
            </p>
            <button>Read More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Section7__card__card__1">
            <img className="card1img" src={slide2} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nam!
            </p>
            <button>Read More</button>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default Section7__cards;

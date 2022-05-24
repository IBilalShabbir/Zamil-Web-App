import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";

const Carddata = () => {
  const [slidesPerPage, setSlidesPerPage] = useState(5);
  const array = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mark_Zuckerberg_em_setembro_de_2014.jpg/430px-Mark_Zuckerberg_em_setembro_de_2014.jpg",
      title: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-feather"
        >
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </svg>
      ),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, magnam!",
      Name: "Mark Zuckurburg",
    },

    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mark_Zuckerberg_em_setembro_de_2014.jpg/430px-Mark_Zuckerberg_em_setembro_de_2014.jpg",
      title: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-feather"
        >
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </svg>
      ),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, magnam!",
      Name: "Mark Zuckurburg 1",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mark_Zuckerberg_em_setembro_de_2014.jpg/430px-Mark_Zuckerberg_em_setembro_de_2014.jpg",
      title: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-feather"
        >
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </svg>
      ),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, magnam!",
      Name: "Mark Zuckurburg 2",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mark_Zuckerberg_em_setembro_de_2014.jpg/430px-Mark_Zuckerberg_em_setembro_de_2014.jpg",
      title: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-feather"
        >
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </svg>
      ),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, magnam!",
      Name: "Mark Zuckurburg",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mark_Zuckerberg_em_setembro_de_2014.jpg/430px-Mark_Zuckerberg_em_setembro_de_2014.jpg",
      title: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-feather"
        >
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </svg>
      ),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, magnam!",
      Name: "Mark Zuckurburg 3",
    },
  ];

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
  });

  return (
    <Swiper spaceBetween={15} slidesPerView={slidesPerPage}>
      <div className="main">
        {array.map(({ img, title, description, Name, ok }) => {
          return (
            <SwiperSlide key={ok}>
              <div className="card2">
                <div className="card-info">
                  <span className="card__title2">
                    {title}
                    {title}
                  </span>
                  <br /> <br />
                  <span className="card__description2">{description}</span>
                </div>
                <div className="card__main__img2">
                  <img src={img} alt="mypic" className="card__img2" />
                </div>
                <div className="card__main__img__name__2">{Name}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </div>
    </Swiper>
  );
};

export default Carddata;

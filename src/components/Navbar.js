import React, { useState } from "react";
import Section7__cards from "./Section7__cards";
import Card2 from "./Card2";
import Background from "../img/back.jpeg";
import Carddata from "../components/Card.js";
import OutsideClickHandler from "react-outside-click-handler";
import Carousel from "../components/Carousel.js";

export default function Navbar() {
  const [showMediaicons, setShowMediaIcons] = useState(false);
  return (
    <div className="header">
      <div className="banner">
        <img src={Background} alt="" />
      </div>

      <div className="header__content">
        <div className="header__content__container">
          <div className="header__content__left">
            <a href="#">Zamil</a>
          </div>
          <OutsideClickHandler onOutsideClick={() => setShowMediaIcons(false)}>
            <div
              className={
                showMediaicons
                  ? "header__content__right mobile-menu-link"
                  : "header__content__right"
              }
            >
              <div className="btn__div">
                <button>Home</button>
              </div>
              <div className="btn__div">
                <button>Services</button>
              </div>
              <div className="btn__div">
                <button>Works</button>
              </div>
              <div className="btn__div">
                <button>About</button>
              </div>
              <div className="btn__div">
                <button>Blog</button>
              </div>
              <div className="btn__div__contact">
                <button className="contact__btn">Contact</button>
              </div>
              <div>
                <button className="search">
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
                    className="feather feather-search"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </div>
            </div>
            <div className="menu">
              <button
                className="menu"
                onClick={() => setShowMediaIcons(!showMediaicons)}
              >
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
                  className="feather feather-menu"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </OutsideClickHandler>
        </div>
        <div className="section1">
          <div className="header__section__1">
            <div className="header__section__1__one__heading">
              <p>CREATIVE MINE, CREATIVE WORKS</p>
            </div>
            <div className="header__section__1__two__heading">
              <p>We are digital agency</p>
            </div>
            <div>
              <button>Getting Started</button>
            </div>
          </div>
        </div>
        <div className="section__2">
          <Carddata />
        </div>
        <div className="section__3">
          <div className="section__3__container">
            <div className="section__3__container__content">
              <div className="line"></div>
              <p>Services</p>
              <span>OUR SERVICES FOR CLIENTS</span>
            </div>
            <div className="card__row__1">
              <Carddata />
            </div>
            <div className="card__row__2">
              <Carddata />
            </div>
          </div>
        </div>
        <div className="section4">
          <div className="section4__container">
            <div className="section4__container__content">
              <div className="section4__container__content__main">
                <div className="section4__container__content__main__left">
                  <div className="line2"></div>
                  <div className="section4__container__content__main__left__Work">
                    Works
                  </div>
                  <div className="section4__container__content__main__left__p">
                    <p>THING's WE HAVE</p>
                  </div>
                </div>
                <div className="section4__container__content__main__right">
                  <button>VIEW ALL</button>
                </div>
              </div>
              <Carousel />
            </div>
            <div className="line3"></div>
          </div>
        </div>
        <div className="secton5">
          <div className="section5__container">
            <div className="section5__container__content">
              <div className="section5__container__content__heading">
                <div className="line5"></div> <span>Services</span>
              </div>
              <p className="section5__container__content__heading__p">
                OUR SERVICES FOR CLIENTS
              </p>
              <div className="section5__container__content__img">
                <div className="section5__container__content__img__left">
                  <img
                    src={
                      "https://www.apple.com/v/education/c/images/og.jpg?201605241329"
                    }
                    alt="Teamworks"
                  />
                </div>
                <div className="section5__container__content__img__right">
                  <div className="section5__container__content__img__right__1">
                    <img
                      src={
                        "https://www.apple.com/v/education/c/images/og.jpg?201605241329"
                      }
                      alt="Philosophy"
                    />
                  </div>
                  <div className="section5__container__content__img__right__1">
                    <img
                      src={
                        "https://www.apple.com/v/education/c/images/og.jpg?201605241329"
                      }
                      alt="office"
                    />
                  </div>
                </div>
              </div>
              <div className="section5__card">
                <div className="section5__card2">
                  <h4>Who we are</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Modi, facere. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                  </p>
                </div>
                <div className="section5__card1">
                  <h4>Who we are</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Modi, facere. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                  </p>
                </div>
                <div className="section5__card1">
                  <h4>Who we are</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Modi, facere. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="line3"></div>
            </div>
          </div>
        </div>
        <div className="section__6">
          <div className="section__6__container">
            <div className="section__6__container__content">
              <div className="line6"></div>
              <p>Testimonials.</p>
              <span>WE ARE MORE THAN DIGITAL AGENCY</span>
            </div>
            <div className="Card2__section">
              <Card2 />
            </div>
            <div className="section__6__container__icons">
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
                className="feather feather-clock"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>

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
                className="feather feather-aperture"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
              </svg>

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
                className="feather feather-umbrella"
              >
                <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>
              </svg>

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
                className="feather feather-camera"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>

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
                className="feather feather-home"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <div className="line6__after"></div>
          </div>
        </div>
        <div className="section7">
          <div className="section7__container">
            <div className="section7__container__main__heading">
              <p className="section7__container__main__heading__one">
                Latest News
              </p>
              <p className="section7__container__main__heading__two">
                CHECK OUT SOME OF OUR NEWS
              </p>
            </div>
            <div className="Section7__cards">
              <Section7__cards />
            </div>
            <div className="line6__after"></div>
          </div>
        </div>
        <div className="section8">
          <div className="section8__container">
            <div className="section8__container__icons">
              <div className="section8__container__icons__svg">
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
                  className="feather feather-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>

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
                  className="feather feather-twitter"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>

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
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>

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
                  className="feather feather-youtube"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </div>
            </div>
            <div className="section8__container__heading">
              <h2>Have any Projects in mind?</h2>
              <button className="section8__container__heading__btn">
                Make inquiry
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer__container">
            <div className="col__1">
              <h3>
                <a href="#">Zamil</a>
              </h3>
              <p>
                <a href="#">We are more than a digital agency</a>
              </p>
            </div>
            <div className="col__2">
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="#">(+880) 198746313</a>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="">hellozamil@gmail.com</a>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="">West, virginia, USA</a>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="">Sunday to Friday</a>
                </li>
              </ul>
            </div>
            <div className="col__3">
              <ul>
                <li>
                  <a href="">Our services</a>
                </li>
                <li>
                  <a href="">Single Project</a>
                </li>
                <li>
                  <a href="">Services 1</a>
                </li>
                <li>
                  <a href="">Services 2</a>
                </li>
                <li>
                  <a href="">Works</a>
                </li>
              </ul>
            </div>
            <div className="col__4">
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Services 2</a>
                </li>
                <li>
                  <a href="">Works</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";
import { data } from "../../Libs/CarouselData";
import Link from "next/link";

export default function Carousel() {
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // cssEase: "linear",
  };
  let settings_md = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // cssEase: "linear",
  };
  let settings_sm = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // cssEase: "linear",
  };
  return (
    <>
      <div className="d-none d-lg-block">
        <Slider {...settings} className="my-5">
          {data.map((item, index) => {
            return (
              <div className={`card-wrapper ${styles.cardWrapper}`} key={index}>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <img src={item.src} alt={item.alt} className="w-100" />
                  </div>
                  <div className={`text-white ${styles.details}`}>
                    <div className="d-flex justify-content-between align-items-center py-2">
                      <h5>{item.title}</h5>
                        <a href={item.url} className="btn btn-outline-light">
                          View Site
                        </a>
                    </div>

                    <span>{item.decription}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="d-none d-md-block d-lg-none">
        <Slider {...settings_md} className="my-5">
          {data.map((item, index) => {
            return (
              <div className={`card-wrapper ${styles.cardWrapper}`} key={index}>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <img src={item.src} alt={item.alt} className="w-100" />
                  </div>
                  <div className={`text-white ${styles.details}`}>
                    <div className="d-flex justify-content-between align-items-center py-2">
                      <h5>{item.title}</h5>
                        <a href={item.url} className="btn btn-outline-light">
                          View Site
                        </a>
                    </div>

                    <span>{item.decription}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="d-md-none sm-set">
        <Slider {...settings_sm} className="my-5">
          {data.map((item, index) => {
            return (
              <div className={`card-wrapper ${styles.cardWrapper}`} key={index}>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <img src={item.src} alt={item.alt} className="w-100 rounded" />
                  </div>
                  <div className={`text-white ${styles.details}`}>
                    <div className="d-block justify-content-between align-items-center py-2">
                      <h5>{item.title}</h5>
                        <a href={item.url} target={item.target} className="btn btn-sm btn-outline-light sm-d-text">
                          View Site
                        </a>
                    </div>
                    <span>{item.decription}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

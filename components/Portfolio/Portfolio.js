import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import React from "react";
import styles from "./Portfolio.module.css";
import { data } from "../../Libs/CarouselData";
import Carousel from "../Carousel/Carousel";

export default function Portfolio() {
  return (
    <div className={styles.Portfolio}>
      <div>
        <div className="container mt-5 pt-5">
        <h1 className="condensedbold text-white">
          <span className="fw-lighter">Featured</span> Portfolio
        </h1>
        <div className="green-vertL pt-0"></div>
      </div>
      <div className="container">
        <div
          className={`pb-5 d-flex justify-content-center align-items-center my-auto  ${styles.Portfolio}`}
        >
          <div className="d-flex align-items-center">
            {/* <div className={` ${styles.buttonContainer}`}>
            <div className={`p-2 ${styles.cheveron}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div className={`p-2 ${styles.cheveron}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div> */}

            <div className={`container my-auto ${styles.sliderContainer}`}>
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      
  );
}

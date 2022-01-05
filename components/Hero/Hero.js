import React from "react";
import Typical from "react-typical";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={`d-flex align-items-end align-items-md-end ${styles.Hero}`}>
      <div className="container mb-md-5">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center order-2 order-md-1 py-2">
            <div className="text-center text-md-center">
              <h1 className="text-white fw-lighter">
                hello, I am{" "}
                <span className="condensedbold d-block fw-bold py-2">Adaji Mukhtar</span>
              </h1>
              <span className="d-block typical-color gt-medium">Building Applications in Todays Market for Tommorows Customers</span>
              <span className={styles.Typical}>
                <Typical
                  steps={[
                    "Web Developer",
                    1000,
                    "Eduction Resource Person",
                    1000,
                    "UI Design Rendering",
                    1000,
                    "Reactjs Development",
                    1000,
                    "Photography",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </span>
              <div className="d-flex justify-content-center pt-2">
                <button className={`btn ${styles.hire_btn}`}>Hire Me</button>
                <button className={`btn ${styles.download_btn}`}>
                  Download CV
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center order-1 order-md-2 py-2">
            <div className={` ${styles.picture}`}>
              <img
                src="./img/adaji.png"
                alt=""
                className="img-fluid w-75 p-2 spin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

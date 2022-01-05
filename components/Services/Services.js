import React from "react";
import { FaLaptopCode, FaGraduationCap, FaCamera } from "react-icons/fa";

export default function Services() {
  return (
    <div className="d-flex align-item-center">
      <div className="container my-5">
        <div className="container text-center pb-2">
          <h1 className="text-white pt-5">Services</h1>
          <div className="green-vertL mx-auto"></div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4 p-2">
            <div className="card w-sm-75 input-bg text-muted">
              <div className="card-body">
                <div className="card-img-top  text-center pb-2 display-5 serv dark-green bg-btn-green rounded-circle">
                  <FaLaptopCode />
                </div>
                <h5 className="card-title mt-3">web Development</h5>
                <p className="card-text">
                  i build Responsive websites and Web Application for an optimal
                  user experience and search engine optimization that achieves
                  your business goals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-2">
            <div className="card w-sm-75 d-flex justify-content-center input-bg text-muted">
              <div className="card-body">
                <div className="card-img-top  text-center pb-2 display-5 serv dark-green bg-btn-green rounded-circle">
                  <FaGraduationCap />
                </div>
                <h5 className="card-title mt-3">Trainning</h5>
                <p className="card-text">
                  We offer customised WordPress training to ensure you are
                  confident in updating and maintaining your WordPress website.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-2">
            <div className="card w-sm-75 input-bg text-muted">
              <div className="card-body">
                <div className="card-img-top text-center pb-2 display-5 serv dark-green bg-btn-green rounded-circle">
                  <FaCamera />
                </div>
                <h5 className="card-title mt-3">Photography</h5>
                <p className="card-text">
                  I offer Wedding photography, personal home shoot, Modeling
                  shoot, and more..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

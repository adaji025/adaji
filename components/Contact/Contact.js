import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div>
      <div className="text-center text-white py-3">
        <h1>
          <span className="fw-lighter">Get </span>
          <span className="fw-bold">In Touch</span>
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="container">
              <div className="row">
                <div className="col-sm-10">
                  <form action="">
                    <div className="form-group">
                      <h3 className="text-white py-3">Get In Touch</h3>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input-bg border-0 py-3 shadow-sm my-3"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input-bg border-0 py-3 shadow-sm my-3"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input-bg border-0 py-3 shadow-sm my-3"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="form-control border-0 shadow-sm input-bg"
                        placeholder="Write Your Message"
                      ></textarea>
                    </div>
                    <div className="py-3">
                      <button
                        className={`btn text-white ${styles.send_message}`}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <h3 className="text-white py-3">My Contact Details</h3>
            </div>
            <div className="pb-3">
                <span className="d-block dark-green">Email</span>
                <span className="d-block typical-color fw-lighter">alfadaji@gmail.com</span>
            </div>
            <div className="pb-3">
                <span className="d-block dark-green">Phone</span>
                <span className="d-block typical-color fw-lighter">+234 706 9261 508</span>
            </div>
            <div className="pb-3">
                <span className="d-block dark-green">Address</span>
                <span className="d-block typical-color fw-lighter">No 95, Faki Road</span>
                <span className="d-block typical-color fw-lighter">Hayin Mallam Bello</span>
                <span className="d-block typical-color fw-lighter">New Extension, Rigasa</span>
                <span className="d-block typical-color fw-lighter">Kaduna State, Nigeria.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

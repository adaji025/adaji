import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from './Social.module.css'

export default function Social() {
  return (
    <div className={`align-items-start pt-4 pt-sm-0 align-items-md-center justify-content-center ${styles.Social}`}>
      <div className="social-icon text-white ">
        <span className={`mx-1 p-2 ${styles.icons}`}>
          <FaFacebook />
        </span>
        <span className={`mx-1 p-2 ${styles.icons}`}>
          <FaInstagram />
        </span>
        <span className={`mx-1 p-2 ${styles.icons}`}>
          <FaLinkedin />
        </span>
        <span className={`mx-1 p-2 ${styles.icons}`}>
          <FaTwitter />
        </span>
      </div>
    </div>
  );
}

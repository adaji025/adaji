import Link from "next/link";
import React from "react";
import styles from './Footer.module.css'


export default function Footer() {
  return (
    <footer className={`Footer ${styles.Footer}`}>
      <hr />
      <div className="container px-3 p-5">
        <div className="row">
          <div className="col-md-3">
            <Link href="#">
              <a className="d-block mt-1 fs-3 text-white text-center condensedbold">
                Download CV
              </a>
            </Link>
          </div>
          <div className="col-md-3">
            <h5 className="py-3 text-white condensedbold">Services</h5>
            <div className="gt-medium">
              <span className="d-block pb-2">Web Development</span>
              <span className="d-block pb-2">Tutoring and Mentorship</span>
              <span className="d-block pb-2">UI Design Conversion</span>
              <span className="d-block pb-2">Photography</span>
            </div>
          </div>
          <div className="col-md-3">
            <h5 className="py-3 text-white condensedbold">Useful Links</h5>
            <div className="gt-medium">
              <Link href="#">
                <a className="d-block pb-2">Skill</a>
              </Link>
              <Link href="#">
                <a className="d-block pb-2">Services</a>
              </Link>
              <Link href="#">
                <a className="d-block pb-2">Portfolio</a>
              </Link>
              <Link href="#">
                <a className="d-block pb-2">Download CV</a>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <h5 className="py-3 text-white condensedbold">Follow me</h5>
            <div className="d-flex d-sm-block gt-medium">
              <Link href="#">
                <a className="d-block pb-2 px-2 px-sm-0">Facebook</a>
              </Link>
              <Link href="#">
                <a className="d-block pb-2 px-2 px-sm-0">Instagram</a>
              </Link>
              <Link href="#">
                <a className="d-block pb-2 px-2 px-sm-0">Twitter</a>
              </Link>
              <Link href="#">
                <a className="d-block pb-2 px-2 px-sm-0">LinkedIn</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

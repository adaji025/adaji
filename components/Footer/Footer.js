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
            <div>
              <a href="./resume.pdf" download="adaji resume" className="d-block mt-1 fs-3 text-white text-center condensedbold">
                Download CV
              </a>
            </div>
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
              <Link href="/#skills">
                <a className="d-block pb-2">Skill</a>
              </Link>
              <Link href="/#services">
                <a className="d-block pb-2">Services</a>
              </Link>
              <Link href="/#portfolio">
                <a className="d-block pb-2">Portfolio</a>
              </Link>
              <div>
                <a href="./resume" className="d-block pb-2">Download CV</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h5 className="py-3 text-white condensedbold">Follow me</h5>
            <div className="d-flex d-sm-block gt-medium">
              <div>
                <a href="https://facebook.com/mukhtar.adaji.5/" target="_blank" rel="noopener noreferrer" className="d-block pb-2 px-2 px-sm-0">Facebook</a>
              </div>
              <div>
                <a href="https://www.instagram.com/see_serious/" className="d-block pb-2 px-2 px-sm-0" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
              <div>
                <a href="https://twitter.com/adajimukhtar" className="d-block pb-2 px-2 px-sm-0" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
              <div>
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_top_card%3Blf8TbOBLQN6D4aH8GLdoDQ%3D%3D" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>1
      </div>
    </footer>
  );
}

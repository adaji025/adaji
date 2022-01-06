import React from "react";
import styles from "./About.module.css";
import { about } from "../../Libs/ResumeData";

export default function About() {
  return (
    <div className={styles.About}>
       <div className="container pb-0 pt-5">
            <h1 className="condensedbold">About Me</h1>
            <div className="dark-vertL pt-0 "></div>
        </div>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 d-flex justify-content-center py-2">
            <img loading="lazy" src="./img/pp1.png" alt="" className="w-50" />
          </div>
          <div className="col-lg-6 py-2">
            <div className="card shadow border-0 px-2 gt-regular opacity-75">
              <div className="card-body">
                <p>
                  <span className="d-block pb-1">
                    My name is Mukhtari Adaji, <br /> a web developer and an education
                    Resource Person.
                  </span>{" "}
                  I ventured into software development while searching for more
                  technical and challenging profession, and I have lived
                  software development ever since then.
                  <span className="d-block pb-1">
                    take on different job as every one it provides a whole
                    different challenges and experience as I learned through the
                    jobs.
                  </span>{" "}
                  I like to i design user friendly and SEO optimized webpages
                  using HTML, CSS, Javascript, Bootstrap, Reactjs, Nextjs,
                  material design and am also comfortable working with Adobe
                  Photoshop I keep myself up to date with new technologies and
                  its uses, new tools and computer languages so that I can give
                  my level best to my clients. I believe in hardship and hiring
                  me would not fail your decision. For me its a 100% or nothing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

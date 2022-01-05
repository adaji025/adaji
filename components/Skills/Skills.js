import React from "react";
import { DiBootstrap, DiCss3Full, DiHtml5, DiJavascript1, DiReact, DiSass } from "react-icons/di";
import { FiCamera } from 'react-icons/fi'
import { SiNextdotjs, SiStrapi, SiTailwindcss } from "react-icons/si";
import SkillCard from "./SkillCard/SkillCard";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <div className={`my-auto ${styles.Skills}`}>
      <div>
        <div className="container pb-0 mt-5">
            <h1 className="condensedbold text-muted">Skills</h1>
            <div className="green-vertL pt-0 mb-5"></div>
        </div>
      <div className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div className="container text-center p-2 ">
              <SkillCard logo={<DiHtml5 className="spin-2"/>} title="HTML5"/>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 mx-auto">
            <div className="container text-center p-2 ">
              <SkillCard logo={<DiCss3Full className="spin-2"/>} title="CSS3" />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className="container text-center p-2 ">
              <SkillCard logo={<DiJavascript1 className="spin-2"/>} title="Javascript" />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className="container text-center p-2 ">
              <SkillCard logo={<DiBootstrap className="spin-2"/>} title="Bootstrap" />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className="container text-center p-2 ">
              <SkillCard logo={<DiReact className="spin-2"/>} title="Reaxtjs" />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className="container text-center p-2 ">
              <SkillCard logo={<SiNextdotjs className="spin-2"/>} title="Nextjs" />
            </div>
          </div>
          {/* <div className="col-6 col-md-4 col-lg-3">
            <div className="container text-center p-2 ">
              <SkillCard logo={<DiBootstrap className="spin-2"/>} title="Bootstrap" />
            </div>
          </div> */}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="container text-center p-2 ">
              <SkillCard logo={<SiTailwindcss className="spin-2"/>} title="Tailwind css" />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className="container text-center p-2 ">
              <SkillCard logo={<DiSass className="spin-2"/>} title="SASS" />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className="container text-center p-2 ">
              <SkillCard logo={<SiStrapi className="spin-2"/>} title="Strapi" />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className="container text-center p-2 ">
              <SkillCard logo={<FiCamera className="spin-2"/>} title="Photography" />
            </div>
          </div>
        </div>
      </div>
      </div>
        
    </div>
  );
}

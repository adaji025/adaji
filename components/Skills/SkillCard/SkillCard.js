import React from "react";
import styles from "./SkillCard.module.css";

export default function SkillCard(props) {
  return (
    <div className={`${styles.SkillCard}`}>
      <div className="mx-auto py-3">
        <div className={`display-1 ${styles.logo}`}>{props.logo}</div>
        <span className={`fw-bold text-muted condensedbold ${styles.title}`}>{props.title}</span>
      </div>
    </div>
  );
}

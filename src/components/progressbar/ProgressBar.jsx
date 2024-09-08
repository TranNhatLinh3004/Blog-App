import React from "react";
import styles from "./progressbar.module.css"; // Tạo file CSS để tùy chỉnh giao diện

const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progressBarFill}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

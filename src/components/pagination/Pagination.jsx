import React from "react";
import styles from "./pagination.module.css";
function Pagination(props) {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previous</button>
      <button className={styles.button}>Next</button>
    </div>
  );
}

export default Pagination;

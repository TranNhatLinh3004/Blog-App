"use client";

import React, { useEffect } from "react";
import styles from "./scrollUp.module.css";

function ScrollUp() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(`.${styles.scrollup}`);
      if (scrollUp) {
        if (window.scrollY > 260) {
          scrollUp.classList.add(styles.showScroll);
        } else {
          scrollUp.classList.remove(styles.showScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.scrollup} onClick={scrollToTop}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </div>
  );
}

export default ScrollUp;

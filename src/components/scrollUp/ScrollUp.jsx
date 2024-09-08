"use client";
import { BsArrowUp } from "react-icons/bs";
import React, { useEffect } from "react";
import styles from "./scrollUp.module.css";
import dynamic from "next/dynamic";

function ScrollUp() {
  // console.log("Component rendered");

  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(`.${styles.scrollup}`);

      if (!scrollUp) {
        return;
      }

      if (window.scrollY > 260) {
        scrollUp.classList.add(styles.showScroll);
      } else {
        scrollUp.classList.remove(styles.showScroll);
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
    <div
      className={`${styles.scrollup}`}
      onClick={scrollToTop}
      style={{
        bottom: "2rem",
      }}
    >
      <BsArrowUp color="black" />
    </div>
  );
}

export default dynamic(() => Promise.resolve(ScrollUp), { ssr: false });

"use client";
import React, { useEffect, useState } from "react";
import styles from "./blogPage.module.css";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import ProgressBar from "@/components/progressbar/ProgressBar";
import ScrollProgress from "@/components/scrollprogress/ScrollProgress";
function BlogPage(props) {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / totalHeight) * 100;
    setProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Blog Page
        <span
          style={
            {
              // marginBottom: "30px",
            }
          }
        >
          {/* <ScrollProgress /> */}
        </span>
      </h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}

export default BlogPage;

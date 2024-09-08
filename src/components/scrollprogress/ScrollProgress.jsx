// components/scrollProgress/ScrollProgress.js
"use client";
import React, { useEffect, useState } from "react";
import ProgressBar from "@/components/progressbar/ProgressBar";
import dynamic from "next/dynamic";
const ScrollProgress = () => {
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

  return <ProgressBar progress={progress} />;
};
export default dynamic(() => Promise.resolve(ScrollProgress), { ssr: false });

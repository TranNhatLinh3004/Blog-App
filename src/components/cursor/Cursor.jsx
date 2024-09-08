"use client";

import React, { useEffect, useState } from "react";
import styles from "./cursor.module.css";
import dynamic from "next/dynamic";
function Cursor(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      className={styles.cursor}
      style={{
        left: `${position.x + 10}px`,
        top: `${position.y + 10}px`,
      }}
    ></div>
  );
}

export default dynamic(() => Promise.resolve(Cursor), { ssr: false });

import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
const demoPosts = [
  {
    id: 1,
    img: "/p1.jpeg",
    category: "Travel",
    title: "Explore the world with us",
    username: "John Doe",
    date: "10.03.2023",
  },
  {
    id: 2,
    img: "/p1.jpeg",
    category: "Culture",
    title: "Discover new cultures and traditions",
    username: "Jane Smith",
    date: "12.04.2023",
  },
  {
    id: 3,
    img: "/p1.jpeg",
    category: "Food",
    title: "Taste the best dishes around the globe",
    username: "Mark Wilson",
    date: "14.05.2023",
  },
  {
    id: 4,
    img: "/p1.jpeg",
    category: "Fashion",
    title: "Latest fashion trends you must know",
    username: "Lucy Brown",
    date: "16.06.2023",
  },
];

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts posts={demoPosts} withImage={false} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} posts={demoPosts} />
    </div>
  );
};

export default Menu;

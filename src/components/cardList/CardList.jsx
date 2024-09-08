import React from "react";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import Image from "next/image";
import Card from "../card/Card";

const demoData = [
  {
    key: 1,
    img: "/path/to/demo/image1.jpg", // Replace with actual image paths or URLs
    createdAt: "2024-08-08T12:00:00Z",
    catSlug: "technology",
    slug: "demo-post-1",
    title: "Demo Post 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis. 1.",
  },
  {
    key: 2,
    img: "/path/to/demo/image2.jpg",
    createdAt: "2024-08-07T12:00:00Z",
    catSlug: "programming",
    slug: "demo-post-2",
    title: "Demo Post 2",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis. 2.",
  },
  {
    key: 3,
    img: "/path/to/demo/image2.jpg",
    createdAt: "2024-08-07T12:00:00Z",
    catSlug: "programming",
    slug: "demo-post-2",
    title: "Demo Post 2",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis. 2.",
  },
  // Add more demo data as needed
];

function CardList(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent CardList</h1>

      <div className={styles.posts}>
        <div className={styles.post}>
          {demoData.map((item) => (
            <Card key={item.key} item={item} />
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
}

export default CardList;

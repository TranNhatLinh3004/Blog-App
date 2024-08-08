import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ posts, withImage }) => {
  return (
    <div className={styles.items}>
      {posts?.map((post) => (
        <Link href="/" className={styles.item} key={post.id}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src={post.img} alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span
              className={`${styles.category} ${
                styles[post.category.toLowerCase()]
              }`}
            >
              {post.category}
            </span>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{post.username}</span>
              <span className={styles.date}> - {post.date}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;

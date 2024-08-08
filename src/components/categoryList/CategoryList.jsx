import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";
function CategoryList(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>

      <div className={styles.categories}>
        <Link href="/" className={`${styles.category} ${styles.style}`}>
          <Image
            src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className={styles.image}
          />
          style
        </Link>
        <Link href="/" className={`${styles.category} ${styles.style}`}>
          <Image
            src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className={styles.image}
          />
          style
        </Link>{" "}
        <Link href="/" className={`${styles.category} ${styles.style}`}>
          <Image
            src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className={styles.image}
          />
          style
        </Link>{" "}
        <Link href="/" className={`${styles.category} ${styles.style}`}>
          <Image
            src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className={styles.image}
          />
          style
        </Link>{" "}
        <Link href="/" className={`${styles.category} ${styles.style}`}>
          <Image
            src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className={styles.image}
          />
          style
        </Link>{" "}
        <Link href="/" className={`${styles.category} ${styles.style}`}>
          <Image
            src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className={styles.image}
          />
          style
        </Link>
        <span className={styles.categoryName}>Animals</span>
      </div>
    </div>
  );
}

export default CategoryList;

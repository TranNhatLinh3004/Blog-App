import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
function Comments(props) {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      <p className={styles.desc}>
        {status === "authenticated" ? (
          <div className={styles.write}>
            <textarea
              name=""
              id=""
              placeholder="Write a comment"
              className={styles.input}
            ></textarea>
            <button className={styles.button}>Post</button>
          </div>
        ) : (
          <Link href="/login">Login to write a comment</Link>
        )}

        <div className={styles.comments}>
          <div className={styles.comment}>
            <div className={styles.user}>
              <Image
                src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="user"
                width={50}
                height={50}
              ></Image>
              <div className={styles.userInfo}>
                <span className={styles.username}>Anh Nguyen</span>
                <span className={styles.date}>1 hour ago</span>
              </div>
            </div>
            <p className={styles.desc}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </p>
    </div>
  );
}

export default Comments;

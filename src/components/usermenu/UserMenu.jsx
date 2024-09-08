"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./usermenu.module.css";
import Link from "next/link";
import Image from "next/image";

import dynamic from "next/dynamic";
function UserMenu(props) {
  const [profileOpen, setProfileOpen] = useState(false);

  const profileOpenRef = useRef(null);

  useEffect(() => {
    // Lắng nghe sự kiện click toàn bộ trang
    const handleClickOutside = (event) => {
      if (
        profileOpenRef.current &&
        !profileOpenRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };

    // Đăng ký sự kiện lắng nghe khi component được mount
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className={styles.profile} ref={profileOpenRef}>
      <Link
        className={styles.avatar}
        href="/"
        onClick={() => setProfileOpen(!profileOpen)}
      >
        <Image src="/user-icon.png" alt="avatar" width={35} height={35}></Image>
      </Link>

      {profileOpen && (
        <div className={styles.openProfile}>
          <div className={styles.avatar}>
            <div className={styles.icon}>
              <Image src="/user-icon.png" alt="" width={45} height={45} />
            </div>

            <div className={styles.text}>
              {/* <Link href="/"> */}
              <h4>linhtran.it</h4>
              {/* </Link> */}
              {/* <label>Da Nang City</label> */}
            </div>
          </div>

          <ul className={styles.links}>
            <li className={styles.link}>
              <Link href="/profile">Trang cá nhân</Link>
            </li>{" "}
            <hr />
            <li className={styles.link}>
              <Link href="/profile">Viết blog</Link>
            </li>{" "}
            <li className={styles.link}>
              <Link href="/profile">Bài viết của tôi</Link>
            </li>{" "}
            <hr />
            <li className={styles.link}>
              <Link href="/profile">Cài đặt</Link>
            </li>{" "}
            <li className={styles.link}>
              <Link href="/profile">Đăng xuất</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(UserMenu), { ssr: false }); // UserMenu;

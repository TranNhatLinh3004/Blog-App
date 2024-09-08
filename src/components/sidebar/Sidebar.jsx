"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.css";
import {
  BsFillHouseDoorFill,
  BsBook,
  BsLaptop,
  BsPencilSquare,
  BsTelephoneFill,
} from "react-icons/bs";

import dynamic from "next/dynamic";
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        {/* <span className={styles.logoIcon}>TNL</span>
        <span className={styles.logoText}>Web Dev Simplified Blog</span> */}
      </div>

      <nav>
        <ul>
          <li className={pathname === "/" ? styles.active : ""}>
            <Link href="/">
              <BsFillHouseDoorFill style={{ marginRight: "10px" }} />
              Trang chủ
            </Link>
          </li>
          <li className={pathname === "/lo-trinh" ? styles.active : ""}>
            <Link href="/lo-trinh">
              <BsBook style={{ marginRight: "10px" }} />
              Lộ trình
            </Link>
          </li>
          <li className={pathname === "/bai-viet" ? styles.active : ""}>
            <Link href="/bai-viet">
              <BsLaptop style={{ marginRight: "10px" }} />
              Dự án
            </Link>
          </li>
          <li className={pathname === "/bai-viet" ? styles.active : ""}>
            <Link href="/blog">
              <BsPencilSquare style={{ marginRight: "10px" }} />
              Bài viết
            </Link>
          </li>{" "}
          <li className={pathname === "/bai-viet" ? styles.active : ""}>
            <Link href="/login">
              <BsTelephoneFill style={{ marginRight: "10px" }} />
              Liên hệ
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Sidebar), { ssr: false }); // Sidebar;

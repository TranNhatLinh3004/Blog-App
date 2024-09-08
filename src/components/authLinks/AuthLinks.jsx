"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import UserMenu from "../usermenu/UserMenu";
import dynamic from "next/dynamic";
// import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {"limk" === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <UserMenu />
          {/* <Link href="/write" className={styles.link}>
            Viết blog
          </Link>
          <span className={styles.link}>Đăng xuất</span> */}
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {"link" === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Viết blog</Link>
              <span className={styles.link}>Đăng xuất</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(AuthLinks), { ssr: false }); // AuthLinks;

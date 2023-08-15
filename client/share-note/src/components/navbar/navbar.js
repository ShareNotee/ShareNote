import React from "react";
import styles from "./navbar.module.css"; // Import styles from CSS module
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className={styles["nav-links"]}>
        <Link href="/">Home</Link>
        <Link href="/community">Community</Link>
        <Link href="/about">About</Link>
        <div className={styles["login-button"]}>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

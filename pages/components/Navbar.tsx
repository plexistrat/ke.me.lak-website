import React from "react";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/kemelakHero.svg"
            alt="Kemelak Logo"
            width={200}
            height={100}
          />
        </Link>
      </div>

      <div className={styles.links}>
        <ul className={styles.list}>
          <Link style={{ textDecoration: "none" }} href="/">
            <li className={styles.listItem}>Αρχική</li>
          </Link>
          <Link style={{ textDecoration: "none" }} href="/about">
            <li className={styles.listItem}>Σχετικά με εμας</li>
          </Link>
          <Link style={{ textDecoration: "none" }} href="/blog">
            <li className={styles.listItem}>Ιστορίες</li>
          </Link>
          <Link style={{ textDecoration: "none" }} href="/activities">
            <li className={styles.listItem}>Δραστηριοτήτες</li>
          </Link>
          <Link style={{ textDecoration: "none" }} href="/contact">
            <li className={styles.listItem}>Επικοινωνία</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

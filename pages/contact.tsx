import React from "react";
import styles from "../styles/contact.module.css";
import Link from "next/link";

function contact() {
  return (
    <div>
      <h1>Επικοινωνία</h1>
      <h3>Coming soon</h3>
      <Link href="/">
        <button className={styles.button}>Αρχική σελίδα</button>
      </Link>
    </div>
  );
}

export default contact;

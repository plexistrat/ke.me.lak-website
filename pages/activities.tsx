import React from "react";
import styles from "../styles/activities.module.css";
import Link from "next/link";

function activities() {
  return (
    <div>
      <h1>Δραστηριοτήτες</h1>
      <h3>Coming soon</h3>
      <Link href="/">
        <button className={styles.button}>Αρχική σελίδα</button>
      </Link>
    </div>
  );
}

export default activities;

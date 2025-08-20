// import React from "react";
// import styles from "../styles/blog.module.css";
// import Link from "next/link";

// function blog() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.contentWrapper}>
//         <h1 className={styles.title}>Blog</h1>
//         <h3 className={styles.subtitle}>cooming soon</h3>

//         <Link href="/">
//           <button className={styles.button}>Αρχική σελίδα</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default blog;
import Link from "next/link";
import articles from "../data/data.json";
export default function BlogIndex() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>Blog - Καλλιθέα Πυλίας</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id} style={{ margin: "1rem 0" }}>
            <Link href={`/blog/${article.id}`}>
              <strong>{article.title}</strong>
            </Link>
            <p>{article.excerpt}</p>
          </li>
        ))}
      </ul>
      <Link href="/">
        <button>Αρχική σελίδα</button>
      </Link>
    </main>
  );
}

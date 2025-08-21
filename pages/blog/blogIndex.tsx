import Link from "next/link";
import articles from "../../data/data.json";
import styles from "../../styles/blogIndex.module.css";

export default function BlogIndex() {
  return (
    <main className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Blog - Καλλιθέα Πυλίας</h1>
        <ul className={styles.list}>
          {articles.map((article) => (
            <li key={article.id} className={styles.item}>
              <Link
                style={{ textDecoration: "none" }}
                href={`/blog/${article.id}`}
              >
                <div className={styles.card}>
                  <strong className={styles.subtitle}>{article.title}</strong>

                  <p className={styles.excerpt}>{article.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/">
          <button className={styles.button}>Αρχική σελίδα</button>
        </Link>
      </div>
    </main>
  );
}

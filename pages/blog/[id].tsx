import { GetStaticPaths, GetStaticProps } from "next";
import articles from "../../data/data.json";
import Link from "next/link";
import styles from "../../styles/id.module.css";
export default function ArticlePage({ article }: { article: any }) {
  if (!article) return <p>Άρθρο δεν βρέθηκε</p>;

  return (
    <main className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.date}>{article.date}</p>
        <p className={styles.content}>{article.content}</p>
        <Link href="/blog/blogIndex">
          <button className={styles.button}>Πισω στις ιστοριες</button>
        </Link>
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = articles.map((a) => ({
    params: { id: a.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = articles.find((a) => a.id.toString() === params?.id);
  return { props: { article: article || null } };
};

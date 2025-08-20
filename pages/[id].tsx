import { GetStaticPaths, GetStaticProps } from "next";
import articles from "../data/data.json";

export default function ArticlePage({ article }: { article: any }) {
  if (!article) return <p>Άρθρο δεν βρέθηκε</p>;

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>{article.title}</h1>
      <p>
        <em>{article.date}</em>
      </p>
      <p>{article.content}</p>
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

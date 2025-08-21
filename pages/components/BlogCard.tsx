// import Image from "next/image";

// export default function BlogCard({
//   title,
//   excerpt,
//   image,
// }: {
//   title: string;
//   excerpt: string;
//   image: string;
// }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
//       <Image
//         src={image}
//         alt={title}
//         width={400}
//         height={250}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
//         <h2 className="text-lg font-bold text-gray-800">{title}</h2>
//         <p className="text-gray-600 mt-2">{excerpt}</p>
//       </div>
//     </div>
//   );
// }

import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import articles from "../../data/data.json";
import styles from "../../styles/blogArticle.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ArticlePage({ article }: { article: any }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className={styles.loading}>Φόρτωση...</div>;
  }

  if (!article) {
    return (
      <div className={styles.container}>
        <Navbar />
        <main className={styles.errorPage}>
          <div className={styles.errorContent}>
            <h1>Η ιστορία δεν βρέθηκε</h1>
            <p>Λυπούμαστε, αλλά η ιστορία που ψάχνετε δεν υπάρχει.</p>
            <Link href="/blog/blogIndex" className={styles.backButton}>
              Επιστροφή στις ιστορίες
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Find related articles
  const relatedArticles = articles
    .filter(
      (a) =>
        a.id !== article.id &&
        (a.category === article.category || Math.random() > 0.5)
    )
    .slice(0, 3);

  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        {/* Article Header */}
        <article className={styles.article}>
          <header className={styles.articleHeader}>
            {article.image && (
              <div className={styles.heroImage}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  quality={90}
                />
                <div className={styles.heroOverlay}></div>
              </div>
            )}

            <div className={styles.headerContent}>
              <nav className={styles.breadcrumb}>
                <Link href="/">Αρχική</Link>
                <span>/</span>
                <Link href="/blog/blogIndex">Ιστορίες</Link>
                <span>/</span>
                <span>{article.title}</span>
              </nav>

              {article.category && (
                <span className={styles.category}>{article.category}</span>
              )}

              <h1 className={styles.title}>{article.title}</h1>

              <div className={styles.meta}>
                {article.date && (
                  <time className={styles.date}>📅 {article.date}</time>
                )}
                {article.author && (
                  <span className={styles.author}>✍️ {article.author}</span>
                )}
                <span className={styles.readTime}>
                  ⏱️ {Math.ceil(article.content?.length / 1000) || 5} λεπτά
                  ανάγνωση
                </span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              {article.excerpt && (
                <div className={styles.excerpt}>
                  <p>{article.excerpt}</p>
                </div>
              )}

              <div
                className={styles.articleContent}
                dangerouslySetInnerHTML={{
                  __html:
                    article.content?.replace(/\n/g, "<br />") ||
                    "Δεν υπάρχει περιεχόμενο.",
                }}
              />
            </div>

            {/* Article Actions */}
            <div className={styles.articleActions}>
              <button
                className={styles.shareButton}
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: article.title,
                      text: article.excerpt,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Ο σύνδεσμος αντιγράφηκε!");
                  }
                }}
              >
                🔗 Κοινοποίηση
              </button>

              <button
                className={styles.printButton}
                onClick={() => window.print()}
              >
                🖨️ Εκτύπωση
              </button>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className={styles.relatedSection}>
            <div className={styles.relatedWrapper}>
              <h2 className={styles.relatedTitle}>Σχετικές Ιστορίες</h2>

              <div className={styles.relatedGrid}>
                {relatedArticles.map((relatedArticle) => (
                  <article
                    key={relatedArticle.id}
                    className={styles.relatedCard}
                  >
                    <Link
                      href={`/blog/${relatedArticle.id}`}
                      className={styles.relatedLink}
                    >
                      {relatedArticle.image && (
                        <div className={styles.relatedImage}>
                          <Image
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            width={300}
                            height={200}
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      )}

                      <div className={styles.relatedContent}>
                        <h3>{relatedArticle.title}</h3>
                        <p>{relatedArticle.excerpt}</p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <nav className={styles.navigation}>
          <Link href="/blog/blogIndex" className={styles.backButton}>
            ← Πίσω στις ιστορίες
          </Link>

          <Link href="/" className={styles.homeButton}>
            🏠 Αρχική
          </Link>
        </nav>
      </main>

      <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = articles.map((article) => ({
    params: { id: article.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Change to 'blocking' if you want ISR
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = articles.find((a) => a.id.toString() === params?.id);

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
    // Add revalidation for ISR if needed
    // revalidate: 3600, // 1 hour
  };
};

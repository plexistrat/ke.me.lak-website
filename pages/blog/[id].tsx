import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import articles from "../../data/data.json";
import styles from "../../styles/id.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Article {
  id: number;
  title: string;
  date: string;
  content: string;
  excerpt?: string;
  readTime?: string;
  category?: string;
  image?: string;
}

export default function ArticlePage({ article }: { article: Article | null }) {
  if (!article) {
    return (
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>
          <section className={styles.heroSection}>
            <div className={styles.heroBackground}>
              <Image
                src="/heroPhoto.jpg"
                alt="Άρθρο δεν βρέθηκε"
                fill
                style={{ objectFit: "cover" }}
                quality={85}
                priority
              />
              <div className={styles.heroOverlay}></div>
            </div>
            <div className={styles.heroContent}>
              <h1 className={styles.errorTitle}>Άρθρο δεν βρέθηκε</h1>
              <p className={styles.errorSubtitle}>
                Το άρθρο που αναζητάτε δεν υπάρχει.
              </p>
              <Link href="/blog/blogIndex" className={styles.heroButton}>
                <span className={styles.icon}>←</span>
                Επιστροφή στις ιστορίες
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  // Calculate estimated read time
  const wordsPerMinute = 200;
  const contentText =
    typeof article.content === "string" ? article.content : "";
  const wordCount = contentText
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  const readTime = Math.max(1, Math.ceil(wordCount / wordsPerMinute));

  return (
    <>
      <Head>
        <title>{article.title} | Ιστορίες από την Καλλιθέα</title>
        <meta
          name="description"
          content={
            (typeof article.content === "string"
              ? article.content.substring(0, 160)
              : article.excerpt || "Διαβάστε το άρθρο") + "..."
          }
        />
        <meta property="og:title" content={article.title} />
        <meta
          property="og:description"
          content={
            (typeof article.content === "string"
              ? article.content.substring(0, 160)
              : article.excerpt || "Διαβάστε το άρθρο") + "..."
          }
        />
        <meta property="og:type" content="article" />
      </Head>

      <div className={styles.container}>
        <Navbar />

        <main className={styles.main}>
          {/* Hero Section with Article Info */}
          <section className={styles.heroSection}>
            <div className={styles.heroBackground}>
              <Image
                src={article.image || "/heroPhoto.jpg"}
                alt={article.title}
                fill
                style={{ objectFit: "cover" }}
                quality={85}
                priority
              />
              <div className={styles.heroOverlay}></div>
            </div>

            <div className={styles.heroContent}>
              {/* Breadcrumb */}
              <div className={styles.breadcrumb}>
                <Link href="/blog/blogIndex">Ιστορίες</Link>
                <span>→</span>
                <span>{article.title}</span>
              </div>

              {/* Category Badge */}
              {article.category && (
                <span className={styles.categoryBadge}>{article.category}</span>
              )}

              {/* Title */}
              <h1 className={styles.title}>{article.title}</h1>

              {/* Meta Information */}
              <div className={styles.heroMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.icon}>📅</span>
                  <span>{article.date}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.icon}>⏰</span>
                  <span>{readTime} λεπτά ανάγνωσης</span>
                </div>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className={styles.contentSection}>
            <div className={styles.contentWrapper}>
              {/* Article Content */}
              <article className={styles.articleContent}>
                {article.excerpt && (
                  <div className={styles.excerpt}>{article.excerpt}</div>
                )}

                <div className={styles.content}>{article.content}</div>
              </article>

              {/* Article Actions */}
              <div className={styles.articleActions}>
                <button
                  className={styles.actionButton}
                  onClick={() => window.print()}
                >
                  🖨️ Εκτύπωση
                </button>
                <button
                  className={styles.actionButton}
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: article.title,
                        url: window.location.href,
                      });
                    }
                  }}
                >
                  📤 Κοινοποίηση
                </button>
              </div>

              {/* Navigation */}
              <div className={styles.navigationSection}>
                <Link href="/blog/blogIndex" className={styles.backButton}>
                  <span className={styles.icon}>←</span>
                  Πίσω στις ιστορίες
                </Link>

                <Link href="/" className={styles.homeButton}>
                  🏠 Αρχική σελίδα
                </Link>
              </div>
            </div>
          </section>

          {/* Related Articles Section */}
          <section className={styles.relatedSection}>
            <div className={styles.relatedWrapper}>
              <h2 className={styles.relatedTitle}>Περισσότερες Ιστορίες</h2>
              <div className={styles.relatedGrid}>
                {articles
                  .filter((a) => a.id !== article.id)
                  .slice(0, 3)
                  .map((relatedArticle) => (
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
                              height={150}
                              style={{ objectFit: "cover" }}
                              className={styles.image}
                            />
                          </div>
                        )}

                        <div className={styles.relatedContent}>
                          {relatedArticle.category && (
                            <span className={styles.category}>
                              {relatedArticle.category}
                            </span>
                          )}

                          <h3>{relatedArticle.title}</h3>

                          {relatedArticle.excerpt && (
                            <p>{relatedArticle.excerpt}</p>
                          )}

                          <div className={styles.readMore}>
                            Διαβάστε περισσότερα →
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = articles.map((article) => ({
    params: { id: article.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const article = articles.find((a) => a.id.toString() === params?.id);
    return {
      props: { article: article || null },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error("Error fetching article:", error);
    return { notFound: true };
  }
};

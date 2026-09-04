import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import articles from "../../data/data.json";
import styles from "../../styles/blogIndex.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogIndex() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories from articles
  const categories = [
    "all",
    ...new Set(articles.map((article) => article.category).filter(Boolean)),
  ];

  // Filter articles based on search and category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroBackground}>
            <Image
              src="/heroPhoto.webp"
              alt="Παραδοσιακές ιστορίες και αφηγήσεις"
              fill
              style={{ objectFit: "cover" }}
              quality={85}
              priority
            />
            <div className={styles.heroOverlay}></div>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.title}>Ιστορίες από την Καλλιθέα</h1>
            <p className={styles.subtitle}>
              Ανακαλύψτε τις παραδοσιακές ιστορίες και τη λαογραφία της περιοχής
              μας
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.contentSection}>
          <div className={styles.contentWrapper}>
            {/* Search and Filter */}
            <div className={styles.filterSection}>
              <div className={styles.searchWrapper}>
                <input
                  type="text"
                  placeholder="Αναζήτηση ιστοριών..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
                <div className={styles.searchIcon}>🔍</div>
              </div>

              {categories.length > 1 && (
                <div className={styles.categoryFilter}>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`${styles.categoryButton} ${
                        selectedCategory === category ? styles.active : ""
                      }`}
                    >
                      {category === "all" ? "Όλες οι κατηγορίες" : category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Articles Grid */}
            <div className={styles.articlesGrid}>
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <article key={article.id} className={styles.articleCard}>
                    <Link
                      href={`/blog/${article.slug}`}
                      className={styles.cardLink}
                    >
                      {article.image && (
                        <div className={styles.cardImage}>
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={400}
                            height={250}
                            style={{ objectFit: "cover" }}
                            className={styles.image}
                          />
                        </div>
                      )}

                      <div className={styles.cardContent}>
                        {article.category && (
                          <span className={styles.category}>
                            {article.category}
                          </span>
                        )}

                        <h2 className={styles.cardTitle}>{article.title}</h2>

                        <p className={styles.excerpt}>{article.excerpt}</p>

                        {article.date && (
                          <time className={styles.date}>{article.date}</time>
                        )}

                        <div className={styles.readMore}>
                          Διαβαστε περισσοτερα →
                        </div>
                      </div>
                    </Link>
                  </article>
                ))
              ) : (
                <div className={styles.noResults}>
                  <div className={styles.noResultsIcon}>📚</div>
                  <h3>Δεν βρέθηκαν ιστορίες</h3>
                  <p>Δοκιμάστε με διαφορετικούς όρους αναζήτησης.</p>
                </div>
              )}
            </div>

            {/* Stats */}
            {filteredArticles.length > 0 && (
              <div className={styles.stats}>
                <p>
                  {searchTerm || selectedCategory !== "all"
                    ? `Εμφάνιση ${filteredArticles.length} από ${articles.length} ιστορίες`
                    : `Συνολικά ${articles.length} ιστορίες`}
                </p>
              </div>
            )}

            {/* Back Button */}
            <div className={styles.navigationSection}>
              <Link href="/" className={styles.backButton}>
                ← Αρχική σελίδα
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

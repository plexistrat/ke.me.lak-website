import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/activities.module.css";
import actions from "../data/actions.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// interface Action {
//   id: number;
//   title: string;
//   date: string;
//   content: string;
//   image?: string;
//   url?: string;
//   category?: string;
// }

function Activities() {
  return (
    <>
      <Head>
        <title>Δραστηριότητες | Καλλιθέα</title>
        <meta
          name="description"
          content="Ανακαλύψτε τις δραστηριότητες και εκδηλώσεις της περιοχής μας"
        />
        <meta property="og:title" content="Δραστηριότητες | Καλλιθέα" />
        <meta
          property="og:description"
          content="Ανακαλύψτε τις δραστηριότητες και εκδηλώσεις της περιοχής μας"
        />
      </Head>

      <div className={styles.container}>
        <Navbar />

        <main className={styles.main}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroBackground}>
              <Image
                src="/heroPhoto.jpg"
                alt="Δραστηριότητες και εκδηλώσεις"
                fill
                style={{ objectFit: "cover" }}
                quality={85}
                priority
              />
              <div className={styles.heroOverlay}></div>
            </div>

            <div className={styles.heroContent}>
              <h1 className={styles.title}>Δραστηριότητες & Εκδηλώσεις</h1>
              <p className={styles.subtitle}>
                Ενημερωθείτε για τις τρέχουσες και επερχόμενες δραστηριότητες
                της περιοχής μας
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className={styles.contentSection}>
            <div className={styles.contentWrapper}>
              {/* Stats */}
              <div className={styles.statsSection}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>{actions.length}</span>
                  <span className={styles.statLabel}>Δραστηριότητες</span>
                </div>
              </div>

              {/* Activities Grid */}
              <div className={styles.grid}>
                {actions.map((action) => (
                  <article key={action.id} className={styles.card}>
                    {action.image && (
                      <div className={styles.imageWrapper}>
                        <Image
                          src={action.image}
                          alt={action.title}
                          fill
                          style={{ objectFit: "cover" }}
                          className={styles.image}
                        />
                        <div className={styles.imageOverlay}></div>
                      </div>
                    )}

                    <div className={styles.content}>
                      {action.category && (
                        <span className={styles.category}>
                          {action.category}
                        </span>
                      )}

                      <h2 className={styles.cardTitle}>{action.title}</h2>

                      {action.date && (
                        <div className={styles.dateWrapper}>
                          <span className={styles.icon}>📅</span>
                          <time className={styles.date}>{action.date}</time>
                        </div>
                      )}

                      <p className={styles.excerpt}>{action.content}</p>

                      {action.url && (
                        <a
                          href={action.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          <span>Περισσότερες πληροφορίες</span>
                          <span className={styles.linkIcon}>→</span>
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              {/* Empty State */}
              {actions.length === 0 && (
                <div className={styles.emptyState}>
                  <div className={styles.emptyIcon}>📅</div>
                  <h3>Δεν υπάρχουν δραστηριότητες</h3>
                  <p>Νέες δραστηριότητες θα προστεθούν σύντομα.</p>
                </div>
              )}

              {/* Navigation */}
              <div className={styles.navigationSection}>
                <Link href="/" className={styles.homeButton}>
                  <span className={styles.icon}>🏠</span>
                  Αρχική σελίδα
                </Link>

                <Link href="/blog/blogIndex" className={styles.storiesButton}>
                  <span className={styles.icon}>📚</span>
                  Ιστορίες
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Activities;

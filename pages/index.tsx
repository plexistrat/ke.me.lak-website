import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookCard from "./components/BookCard";
import PinterestGallery from "./components/PinterestGallery";

const galleryImages = Array.from({ length: 15 }, (_, index) => ({
  id: `${index + 1}`,
  src: `/${index + 1}.jpg`,
  alt: `Gallery photo ${index + 1}`,
}));

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroBackground}>
            <Image
              className={styles.heroPhoto}
              src="/heroPhoto.jpg"
              alt="Παραδοσιακή ελληνική κληρονομιά και πολιτισμός"
              width={1920}
              height={1080}
              priority
              quality={85}
            />
            <div className={styles.heroOverlay}></div>
          </div>

          <div className={styles.heroContent}>
            <Image
              className={styles.logo}
              src="/kemelakWhite.svg"
              alt="ΚΕ.ΜΕ.ΛΑΚ - Κέντρο Μελέτης Λαογραφίας Καλλιθέας"
              width={1000}
              height={300}
              priority
            />

            <h1 className={styles.subtitle}>
              Η ζωντανή μνήμη της παράδοσής μας
            </h1>
            <p className={styles.description}>
              Ανακαλύψτε τις ιστορίες πίσω από τα αντικείμενα
            </p>

            <div className={styles.ctaButtons}>
              <Link href="/about" className={styles.primaryButton}>
                Μαθετε περισσoτερα
              </Link>
              <Link href="/blog/blogIndex" className={styles.secondaryButton}>
                Διαβαστε ιστοριες
              </Link>
            </div>
          </div>
        </section>
        {/* Quick Overview Section */}
        <section className={styles.overviewSection}>
          <div className={styles.overviewContainer}>
            <h2 className={styles.sectionTitle}>Το Όραμά μας</h2>
            <p className={styles.overviewText}>
              Το Κέντρο Μελέτης Λαογραφίας Καλλιθέας αποτελεί έναν ζωντανό χώρο
              διατήρησης και προβολής της πολιτιστικής κληρονομιάς της περιοχής
              μας. Μέσα από τις δραστηριότητές μας, διαφυλάσσουμε τις παραδόσεις
              και τις μεταδίδουμε στις νεότερες γενιές.
            </p>

            <div className={styles.highlightCards}>
              <div className={styles.card}>
                <h3>🏛️ Ιστορία</h3>
                <p>
                  Ανακαλύπτουμε και καταγράφουμε την πλούσια ιστορία της
                  Καλλιθέας
                </p>
              </div>
              <div className={styles.card}>
                <h3>🎭 Παράδοση</h3>
                <p>Διατηρούμε ζωντανές τις παραδοσιακές τέχνες και εθίμα</p>
              </div>
              <div className={styles.card}>
                <h3>📚 Μελέτη</h3>
                <p>Ερευνούμε και μελετάμε τη λαογραφική κληρονομιά</p>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.booksSection}>
          <h3>Οι εκδόσεις του ΚΕ.ΜΕ.ΛΑΚ</h3>
          <div className={styles.booksGrid}>
            <BookCard image="/EKTHESH.jpg" />
            <BookCard image="/KAMINIA.jpg" />
            <BookCard image="/LADI.jpg" />
            <BookCard image="/LINARI.jpg" />
            <BookCard image="/MEMERIZI.jpg" />
            <BookCard image="/OMADA.jpg" />
            <BookCard image="/SITARI.jpg" />
            <BookCard image="/STAFIDA.jpg" />
            <BookCard image="/TOYS.jpg" />
          </div>
        </div>

        <PinterestGallery
          images={galleryImages}
          title="Gallery"
          columns={4}
          gap={16}
        />
      </main>

      <Footer />
    </div>
  );
}

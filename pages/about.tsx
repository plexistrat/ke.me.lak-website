import React from "react";
import styles from "@/styles/about.module.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function About() {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroBackground}>
            <Image
              src="/heroPhoto.jpg"
              alt="Παραδοσιακό κτίριο του ΚΕ.ΜΕ.ΛΑΚ"
              fill
              style={{ objectFit: "cover" }}
              quality={85}
              priority
            />
            <div className={styles.heroOverlay}></div>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.title}>Σχετικά με το ΚΕ.ΜΕ.ΛΑΚ</h1>
            <p className={styles.subtitle}>
              Κέντρο Μελέτης Λαογραφίας Καλλιθέας
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.contentSection}>
          <div className={styles.contentWrapper}>
            <div className={styles.introCard}>
              <h2 className={styles.cardTitle}>Η Αποστολή μας</h2>
              <p className={styles.paragraph}>
                Το Μουσείο Λαογραφίας Καλλιθέας Μεσσηνίας – ΚΕ.ΜΕ.ΛΑΚ
                δημιουργήθηκε με σκοπό να διαφυλάξει και να αναδείξει τον πλούτο
                της τοπικής παράδοσης και του λαϊκού μας πολιτισμού. Μέσα από
                τις συλλογές του, τα εκθέματα, τα αρχεία και τις δράσεις του, το
                μουσείο αποτελεί ένα ζωντανό κύτταρο μνήμης και πολιτισμού,
                ανοιχτό σε όλους.
              </p>
            </div>

            <div className={styles.mainContent}>
              <div className={styles.contentCard}>
                <div className={styles.cardIcon}>🏛️</div>
                <h3 className={styles.cardTitle}>Οι Συλλογές μας</h3>
                <p className={styles.paragraph}>
                  Στο ΚΕ.ΜΕ.ΛΑΚ φιλοξενούνται αντικείμενα καθημερινής ζωής,
                  εργαλεία, παιδικά παιχνίδια και τεκμήρια που αφηγούνται την
                  ιστορία των ανθρώπων της Καλλιθέας και της Μεσσηνίας.
                  Παράλληλα, το μουσείο οργανώνει πολιτιστικές εκδηλώσεις,
                  εκθέσεις, προβολές, εκπαιδευτικά προγράμματα και συνεργασίες
                  με τοπικούς συλλόγους, συμβάλλοντας ενεργά στη διατήρηση της
                  πολιτιστικής μας ταυτότητας.
                </p>
              </div>

              <div className={styles.contentCard}>
                <div className={styles.cardIcon}>🤝</div>
                <h3 className={styles.cardTitle}>Η Κοινότητά μας</h3>
                <p className={styles.paragraph}>
                  Η λειτουργία του μουσείου βασίζεται σε μεγάλο βαθμό στη
                  στήριξη και την εθελοντική προσφορά της τοπικής κοινωνίας,
                  αποδεικνύοντας ότι η αγάπη για την παράδοση μπορεί να
                  ξεπεράσει δυσκολίες και να δημιουργήσει γέφυρες ανάμεσα στο
                  παρελθόν και το μέλλον.
                </p>
              </div>
            </div>

            <div className={styles.visionCard}>
              <div className={styles.visionIcon}>✨</div>
              <p className={styles.visionText}>
                Το ΚΕ.ΜΕ.ΛΑΚ δεν είναι απλώς ένας χώρος έκθεσης – είναι μια
                συνάντηση γενεών, μια αφορμή για γνώση, μνήμη και έμπνευση.
              </p>
            </div>

            <div className={styles.ctaSection}>
              <h3 className={styles.ctaTitle}>Ανακαλύψτε περισσότερα</h3>
              <div className={styles.buttonGroup}>
                <Link href="/blog/blogIndex" className={styles.primaryButton}>
                  Διαβαστε τις ιστοριες μας
                </Link>
                <Link href="/activities" className={styles.secondaryButton}>
                  Δειτε τις δρασεις μας
                </Link>
                <Link href="/" className={styles.backButton}>
                  Αρχικη σελιδα
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;

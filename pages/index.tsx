import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Image
        className={styles.logo}
        src="/kemelakHero.svg"
        alt="KemelakHero Logo"
        width={1000}
        height={300}
      />
      <Image
        className={styles.heroPhoto}
        src="/heroPhoto.jpg"
        alt="hero photo"
        width={1000}
        height={250}
      />

      <h3 className={styles.subtitle}>Η ζωντανή μνήμη της παράδοσής μας</h3>
      <p className={styles.description}>
        Ανακαλύψτε τις ιστορίες πίσω από τα αντικείμενα
      </p>

      <Footer />
    </div>
  );
}

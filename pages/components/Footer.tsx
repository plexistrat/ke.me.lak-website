import styles from "@/styles/footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.leftContent}>
            <div className={styles.logoContainer}>
              <Image
                className={styles.logo}
                src="/kemelakWhite.svg"
                alt="Kemelak White Logo"
                width={120}
                height={100}
                priority={false}
              />
              <p className={styles.slogan}>
                Κέντρο Μελέτης Λαογραφίας Καλλιθέας
              </p>
            </div>
          </div>

          <div className={styles.socials}>
            <a
              className={styles.socialLink}
              href="https://www.facebook.com/share/15RA5cakL6/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                aria-hidden="true"
              >
                <path d="M279.14 288l14.22-92.66h-88.91V127.92c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S293.3 0 268.08 0c-73.5 0-121.52 44.38-121.52 124.72V195.3H86.41V288h60.15v224h92.66V288z" />
              </svg>
            </a>

            <a
              className={styles.socialLink}
              href="https://www.youtube.com/@%CE%9A%CE%95.%CE%9C%CE%95.%CE%9B%CE%91%CE%9A"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                aria-hidden="true"
              >
                <path d="M549.7 124.1c-6.3-23.7-24.9-42.3-48.6-48.6C468.3 64 288 64 288 64s-180.3 0-213.1 11.5c-23.7 6.3-42.3 24.9-48.6 48.6C16.8 156.9 16.8 256 16.8 256s0 99.1 9.5 131.9c6.3 23.7 24.9 42.3 48.6 48.6C107.7 448 288 448 288 448s180.3 0 213.1-11.5c23.7-6.3 42.3-24.9 48.6-48.6 9.5-32.8 9.5-131.9 9.5-131.9s0-99.1-9.5-131.9zM232 338V174l142 82-142 82z" />
              </svg>
            </a>
          </div>

          <div className={styles.contact}>
            <h4 className={styles.contactTitle}>Επικοινωνία</h4>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <span className={styles.icon} aria-label="Location">
                  📍
                </span>
                Καλλιθέα Πυλίας Μεσσηνίας, Ελλάδα, T.K 24001
              </p>
              <p className={styles.contactItem}>
                <span className={styles.icon} aria-label="Email">
                  📧
                </span>
                <a href="mailto:bzompolas@gmail.com">bzompolas@gmail.com</a>
              </p>
              <p className={styles.contactItem}>
                <span className={styles.icon} aria-label="Email">
                  📧
                </span>
                <a href="mailto:kemelak.org@yahoo.com">kemelak.org@yahoo.com</a>
              </p>
              <p className={styles.contactItem}>
                <span className={styles.icon} aria-label="Phone">
                  ☎️
                </span>
                <a href="tel:+306936596616">+30 6936596616</a>
              </p>
              <p className={styles.contactItem}>
                <span className={styles.icon} aria-label="Phone">
                  ☎️
                </span>
                <a href="tel:+3027230611135">+30 27230 61135</a>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>© {new Date().getFullYear()} ΚΕ.ΜΕ.ΛΑΚ — All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

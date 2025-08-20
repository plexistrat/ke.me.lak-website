import styles from "@/styles/footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logoSection}>
          <Image
            className={styles.logo}
            src="/kemelakWhite.svg"
            alt="Kemelak White Logo"
            width="150"
            height="100"
            color="#fff"
          />
          <p className={styles.slogan}>Κέντρο Μελέτης Λαογραφίας Καλλιθέας</p>
          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/share/15RA5cakL6/"
              target="_blank"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M279.14 288l14.22-92.66h-88.91V127.92c0-25.35 
                12.42-50.06 52.24-50.06h40.42V6.26S293.3 
                0 268.08 0c-73.5 0-121.52 44.38-121.52 
                124.72V195.3H86.41V288h60.15v224h92.66V288z"
                />
              </svg>
            </a>
            {/* <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 
                114.9s51.3 114.9 114.9 114.9S339 319.5 
                339 255.9 287.7 141 224.1 141zm146.4-141H77.5C34.7 
                0 0 34.7 0 77.5v293c0 42.8 34.7 77.5 
                77.5 77.5h293c42.8 0 77.5-34.7 
                77.5-77.5v-293C448 34.7 413.3 0 
                370.5 0zm-22.5 62c12.1 0 22 9.9 
                22 22s-9.9 22-22 22-22-9.9-22-22 
                9.9-22 22-22zM224.1 338c-45.6 
                0-82.7-37.1-82.7-82.7s37.1-82.7 
                82.7-82.7 82.7 37.1 82.7 82.7-37.1 
                82.7-82.7 82.7z"
                />
              </svg>
            </a> */}
            <a
              href="https://www.youtube.com/@%CE%9A%CE%95.%CE%9C%CE%95.%CE%9B%CE%91%CE%9A"
              target="_blank"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M549.7 124.1c-6.3-23.7-24.9-42.3-48.6-48.6C468.3 
                64 288 64 288 64s-180.3 0-213.1 
                11.5c-23.7 6.3-42.3 24.9-48.6 
                48.6C16.8 156.9 16.8 256 16.8 
                256s0 99.1 9.5 131.9c6.3 23.7 
                24.9 42.3 48.6 48.6C107.7 448 288 
                448 288 448s180.3 0 213.1-11.5c23.7-6.3 
                42.3-24.9 48.6-48.6 9.5-32.8 
                9.5-131.9 9.5-131.9s0-99.1-9.5-131.9zM232 
                338V174l142 82-142 82z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.contact}>
          <h4>Επικοινωνία</h4>
          <p>📍 Καλλιθέα, Πυλιας Μεσσηνιας, Ελλάδα</p>
          <p>📧 bzompolas@gmail.com</p>
          <p>☎️ +30 6936596616</p>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p>© {new Date().getFullYear()} ΚΕ.ΜΕ.ΛΑΚ — All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

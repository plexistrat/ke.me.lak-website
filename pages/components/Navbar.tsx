import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Αρχική" },
    { href: "/about", label: "Σχετικά με εμας" },
    { href: "/blog/blogIndex", label: "Ιστορίες" },
    { href: "/activities", label: "Δράσεις" },
  ];

  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/" aria-label="Αρχική σελίδα">
          <Image
            className={styles.logo}
            src="/kemelakHero.svg"
            alt="Kemelak Logo - Κέντρο Μελέτης Λαογραφίας Καλλιθέας"
            width={200}
            height={100}
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className={styles.desktopLinks}>
        <ul className={styles.list}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.listItem} ${
                  router.pathname === item.href ? styles.active : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={styles.mobileMenuButton}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Mobile Navigation */}
      <div
        className={`${styles.mobileLinks} ${
          isMenuOpen ? styles.mobileLinksOpen : ""
        }`}
      >
        <ul className={styles.mobileList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.mobileListItem} ${
                  router.pathname === item.href ? styles.active : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}

export default Navbar;

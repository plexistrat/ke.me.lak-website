import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/BookCard.module.css";

interface BookCardProps {
  image: string;
  title?: string;
  author?: string;
  description?: string;
  year?: string;
}

function BookCard({ image, title, author, description, year }: BookCardProps) {
  const [showBook, setShowBook] = useState(false);

  const handleClick = () => {
    setShowBook(!showBook);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close modal if clicking on overlay background
    if (e.target === e.currentTarget) {
      setShowBook(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setShowBook(false);
    }
  };

  useEffect(() => {
    if (showBook) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [showBook]);

  return (
    <>
      {!showBook ? (
        <article className={styles.card}>
          <div className={styles.imageWrapper}>
            <button
              className={styles.imageButton}
              onClick={handleClick}
              aria-label={`Δείτε το βιβλίο ${title || "σε μεγαλύτερη προβολή"}`}
            >
              <Image
                src={image}
                alt={title || "Book"}
                width={220}
                height={320}
                className={styles.image}
                priority
              />
              <div className={styles.imageOverlay}>
                {/* <span className={styles.viewIcon}>👁️</span> */}
                <span className={styles.viewText}>Προβολή</span>
              </div>
            </button>
          </div>

          {(title || author) && (
            <div className={styles.cardInfo}>
              {title && <h3 className={styles.cardTitle}>{title}</h3>}
              {author && <p className={styles.cardAuthor}>{author}</p>}
              {year && <span className={styles.cardYear}>{year}</span>}
            </div>
          )}
        </article>
      ) : (
        <div
          className={styles.modal}
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="book-title"
        >
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <button
                className={styles.closeButton}
                onClick={handleClick}
                aria-label="Κλείσιμο προβολής βιβλίου"
              >
                <span className={styles.closeIcon}>✕</span>
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalImageWrapper}>
                <Image
                  src={image}
                  alt={title || "Book"}
                  width={400}
                  height={580}
                  className={styles.modalImage}
                  priority
                />
              </div>

              {(title || author || description) && (
                <div className={styles.modalInfo}>
                  {title && (
                    <h2 id="book-title" className={styles.modalTitle}>
                      {title}
                    </h2>
                  )}
                  {author && (
                    <p className={styles.modalAuthor}>
                      <span className={styles.authorLabel}>Συγγραφέας:</span>{" "}
                      {author}
                    </p>
                  )}
                  {year && (
                    <p className={styles.modalYear}>
                      <span className={styles.yearLabel}>Έτος:</span> {year}
                    </p>
                  )}
                  {description && (
                    <div className={styles.modalDescription}>
                      <h4 className={styles.descriptionTitle}>Περιγραφή</h4>
                      <p>{description}</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className={styles.modalFooter}>
              <button className={styles.actionButton} onClick={handleClick}>
                <span className={styles.buttonIcon}>📖</span>
                Κλείσιμο προβολής
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BookCard;

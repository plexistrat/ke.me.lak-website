// PinterestGallery.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Download, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "@/styles/PinterestGallery.module.css";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

interface PinterestGalleryProps {
  images: GalleryImage[];
  title?: string;
  columns?: number;
  gap?: number;
}

// const galleryImages = Array.from({ length: 15 }, (_, index) => ({
//   id: `${index + 1}`,
//   src: `/${index + 1}.jpg`,
//   alt: `Gallery photo ${index + 1}`,
// }));

const PinterestGallery: React.FC<PinterestGalleryProps> = ({
  images,
  title = "Gallery",
  columns = 4,
  gap = 16,
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [imageHeights, setImageHeights] = useState<{ [key: string]: number }>(
    {}
  );
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Generate random heights for masonry effect
  useEffect(() => {
    const heights: { [key: string]: number } = {};
    images.forEach((image) => {
      heights[image.id] = Math.floor(Math.random() * 150) + 250; // 250-400px
    });
    setImageHeights(heights);
  }, [images]);

  const handleImageLoad = (imageId: string) => {
    setLoadedImages((prev) => new Set([...prev, imageId]));
  };

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!selectedImage) return;

    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedImage(images[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!selectedImage) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox("prev");
    if (e.key === "ArrowRight") navigateLightbox("next");
  };

  // Create column arrays for masonry layout
  const createColumns = () => {
    const cols: GalleryImage[][] = Array.from({ length: columns }, () => []);
    const colHeights = Array(columns).fill(0);

    images.forEach((image) => {
      const shortestCol = colHeights.indexOf(Math.min(...colHeights));
      cols[shortestCol].push(image);
      colHeights[shortestCol] += imageHeights[image.id] || 300;
    });

    return cols;
  };

  const columnArrays = createColumns();

  const downloadImage = (imageUrl: string, imageName: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className={styles.gallerySection}>
        <h3 className={styles.galleryTitle}>{title}</h3>

        <div
          className={styles.pinterestGrid}
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: `${gap}px`,
          }}
        >
          {columnArrays.map((column, colIndex) => (
            <div key={colIndex} className={styles.galleryColumn}>
              {column.map((image) => (
                <div
                  key={image.id}
                  className={`${styles.galleryCard} ${
                    loadedImages.has(image.id) ? styles.loaded : ""
                  }`}
                  style={{ height: `${imageHeights[image.id]}px` }}
                  onMouseEnter={() => setHoveredImage(image.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                  onClick={() => openLightbox(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={styles.galleryImage}
                    style={{ objectFit: "cover" }}
                    onLoad={() => handleImageLoad(image.id)}
                  />

                  {!loadedImages.has(image.id) && (
                    <div className={styles.imageSkeleton} />
                  )}

                  <div
                    className={`${styles.galleryOverlay} ${
                      hoveredImage === image.id ? styles.visible : ""
                    }`}
                  >
                    <div className={styles.galleryActions}>
                      <button className={styles.actionBtn} title="Zoom in">
                        <ZoomIn size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className={styles.lightboxOverlay}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.lightboxClose} onClick={closeLightbox}>
              <X size={24} />
            </button>

            <button
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={() => navigateLightbox("prev")}
              title="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={() => navigateLightbox("next")}
              title="Next image"
            >
              <ChevronRight size={28} />
            </button>

            <div className={styles.lightboxImageWrapper}>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className={styles.lightboxImage}
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className={styles.lightboxControls}>
              <button
                className={styles.controlBtn}
                onClick={() =>
                  downloadImage(
                    selectedImage.src,
                    `image-${selectedImage.id}.jpg`
                  )
                }
                title="Download image"
              >
                <Download size={20} />
                Download
              </button>

              <div className={styles.imageCounter}>
                {images.findIndex((img) => img.id === selectedImage.id) + 1} of{" "}
                {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PinterestGallery;

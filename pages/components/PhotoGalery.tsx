import React from "react";
import Image from "next/image";
import styles from "@/styles/PhotoGalery.module.css";
function PhotoGalery() {
  const photos = [
    { src: "/2024Dance.jpg", alt: "Dance photo" },
    { src: "/2024Orchestra.jpg", alt: "Orchestra photo" },
    { src: "/2024Orchestra2.jpg", alt: "Orchestra 2 photo" },
    { src: "/DSC_0512.jpg", alt: "0512 photo" },
    { src: "/DSC_0514.jpg", alt: "0514 photo" },
    { src: "/DSC_0541.jpg", alt: "0541 photo" },
  ];

  return (
    <div>
      <h1 className={styles.galleryTitle}>Photo Gallery</h1>
      <div className={styles.galleryContainer}>
        {photos.map((photo, idx) => (
          <div key={idx} className={styles.galleryImage}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "fit-content",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGalery;

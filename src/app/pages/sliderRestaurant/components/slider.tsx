"use client";

import styles from '../sliderRestaurant.module.css'

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageSlider() {
  const images = [
    "/imagesSlider/salade.jpg",
    "/imagesSlider/parc.jpg",
    "/imagesSlider/salle.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.slider}>
      <div
        className={styles.sliderTrack}
        style={{
          transform: `translateX(-${index * 100}%)`,
          
        }}
      >
        {images.map((src, i) => (
          <div className={styles.slide} key={i}>
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

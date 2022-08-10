import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React from "react";
import styles from "../styles/Events.module.css";
import Image from "next/image";

export default function Events() {
  return (
    <Splide
      aria-label="Certificatitons"
      className={styles.root}
      options={{
        perPage: 5,
        type: "loop",
        focus: "center",
        gap: "2.25rem",
      }}
    >
      <SplideSlide className={styles.slide}>
        <Image
          src="https://shsmoga.com/assets/images/recentnews/QS.png"
          alt="Image 1"
          className={styles.image}
        />
      </SplideSlide>
      <SplideSlide className={styles.slide}>
        <Image
          src="https://shsmoga.com/assets/images/recentnews/download.png"
          alt="Image 2"
          className={styles.image}
        />
      </SplideSlide>
      <SplideSlide className={styles.slide}>
        <Image
          src="https://shsmoga.com/assets/images/recentnews/affiliations4.jpg"
          alt="Image 3"
          className={styles.image}
        />
      </SplideSlide>
      <SplideSlide className={styles.slide}>
        <Image
          src="https://shsmoga.com/assets/images/recentnews/ncc.png"
          alt="Image 4"
          className={styles.image}
        />
      </SplideSlide>
    </Splide>
  );
}

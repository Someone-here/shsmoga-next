import React from "react";
import styles from "../styles/Hero.module.css";
import Button from "./Button";
import Events from "./Events";

export default function Hero() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        ABOUT <span className={styles.name}>SACRED HEART</span> SCHOOL
      </h1>
      <p className={styles.description}>
        On 5th April, 1971, Sacred heart School came into existence with the
        motto of &ldquo;Walk as children of Light&rdquo; (Ephesians 5:8) The
        founders, Late G. A. Abraham and Late Vasantha Abraham, had the vision
        to give world class education to the children of this region. Late G. A.
        Abraham was an able administrator and a retired Indian Army Officer.
        Late Vasantha Abraham was a veteran teacher and an eminent
        educationalist.
      </p>
      <Button className={styles.learnMore}>LEARN MORE</Button>
      <Events />
    </div>
  );
}

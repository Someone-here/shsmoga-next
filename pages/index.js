import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Sacred Heart School</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&amp;family=Cinzel&amp;family=Work+Sans:wght@400;500&amp;display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <Slider />
        <section style={{ marginTop: "3rem", marginBottom: "5rem" }}>
          <Hero />
        </section>
      </main>
    </div>
  );
}

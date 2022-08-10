import styles from "../styles/Slider.module.css";
import Carousel from "react-bootstrap/Carousel";

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className={styles.slide}>
          <div className={styles.imageText}>
            <h1 className={styles.title}>Sacred Heart School</h1>
            <h2 className={styles.subtitle}>
              &ldquo;Walk as children of Light&rdquo;
            </h2>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

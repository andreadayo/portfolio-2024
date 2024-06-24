import Image from "next/image";
import Spline from "@splinetool/react-spline/next";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <div className={styles.heroSection}>
            <div className={styles.heroImage}>
              <Image
                src="/assets/shapes/star.svg"
                width={44}
                height={44}
                alt="Star"
              />

              <Image
                src="/assets/images/dhea.png"
                width={118}
                height={83}
                alt="Dhea"
              />

              <Image
                src="/assets/shapes/star.svg"
                width={44}
                height={44}
                alt="Star"
              />
            </div>
            <h1 className={styles.heroText}>
              Crafting seamless, functional, beautiful web experiences
            </h1>
            <p className={styles.scroll}>Scroll down</p>
          </div>
        </div>
        <Spline scene="https://prod.spline.design/StMq9TNTN2eHvGB8/scene.splinecode" />
      </div>
      <main className={styles.main}>
        <h1 className={styles.red}>HELLO THIS IS RED</h1>
        hello
      </main>
      <main className={styles.main}>
        <h1 className={styles.red}>HELLO THIS IS RED</h1>
        hello
      </main>
    </>
  );
}

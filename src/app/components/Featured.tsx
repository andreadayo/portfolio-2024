import React from "react";
import styles from "./Featured.module.scss";

interface FeaturedProps {
  // children: React.ReactNode;
}

const Featured: React.FC<FeaturedProps> = ({}) => {
  return (
    <div className={styles.work}>
      <div className={styles.left}>
        <h1 className={styles.name}>Techwise</h1>
        <p className={styles.type}>Website</p>
      </div>
      <div className={styles.right}>
        <div className={styles.tech}>UI/UX</div>
        <div className={styles.tech}>Front-end</div>
        <button className={styles.button}>
          <span>🡢</span>
        </button>
      </div>
    </div>
  );
};

export default Featured;

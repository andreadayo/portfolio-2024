import React from "react";
import Image from "next/image";
import styles from "./Technology.module.scss";

interface TechnologyProps {
  image: string;
  title: string; // Define the children prop
  children: React.ReactNode;
}

const Technology: React.FC<TechnologyProps> = ({ image, title, children }) => {
  return (
    <div className={styles.box}>
      <div className={styles.circle}>
        <Image src={image} width={44} height={44} alt={title} />
      </div>

      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{children}</p>
    </div>
  );
};

export default Technology;

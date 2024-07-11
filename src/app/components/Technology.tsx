import React from "react";
import Image from "next/image";
import Gradient from "@/app/components/Gradient";
import styles from "./Technology.module.scss";

interface TechnologyProps {
  image: string;
  title: string; // Define the children prop
  children: React.ReactNode;
}

const Technology: React.FC<TechnologyProps> = ({ image, title, children }) => {
  return (
    <Gradient className={styles.box}>
      <div className={styles.circle}>
        <Image src={image} width={44} height={44} alt={title} loading="lazy" />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{children}</p>
    </Gradient>
  );
};

export default Technology;

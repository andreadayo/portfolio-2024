import React from "react";
import styles from "./Title.module.scss";

interface TitleProps {
  children: React.ReactNode; // Define the children prop
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <div className={styles.title}>
      <div className={styles.line}></div>
      <h1 className={styles.text}>{children}</h1>
    </div>
  );
};

export default Title;

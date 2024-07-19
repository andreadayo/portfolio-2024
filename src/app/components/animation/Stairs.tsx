"use client";

import React from "react";
import { motion } from "framer-motion";
import { opacity, expand } from "./anim";
import styles from "./Stairs.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const anim = (variants: any, custom: number | null = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;

  return (
    <div className={styles.stairs}>
      <motion.div {...anim(opacity)} className={styles.transitionBackground} />
      <div className={styles.transitionContainer}>
        {[...Array(nbOfColumns)].map((_, i) => (
          <motion.div key={i} {...anim(expand, nbOfColumns - i)} />
        ))}
      </div>
      {children}
    </div>
  );
};

export default Layout;

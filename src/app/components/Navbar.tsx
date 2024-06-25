"use client";

import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";

const useScroll = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  const handleScroll = () => {
    setData((last) => ({
      x: window.scrollX,
      y: window.scrollY,
      lastX: last.x,
      lastY: last.y,
    }));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return data;
};

const Navbar: React.FC = () => {
  const [navClassList, setNavClassList] = useState<string[]>([]); // Explicitly define initial state as string[]

  const scroll = useScroll();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList: string[] = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
      _classList.push(styles["nav-bar--hidden"]);
    }

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <nav className={`${styles.nav} ${navClassList.join(" ")}`}>
      <div className={`${styles.link} ${styles.active}`}>Home</div>
      <div className={styles.link}>About</div>
      <div className={styles.link}>Works</div>
      <div className={styles.link}>Contact</div>
    </nav>
  );
};

export default Navbar;

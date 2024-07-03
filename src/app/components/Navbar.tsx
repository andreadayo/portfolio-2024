"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import styles from "./Navbar.module.scss";

interface Position {
  left: number;
  width: number;
  opacity: number;
}

interface CursorProps {
  position: Position;
}

interface TabProps {
  children: React.ReactNode;
  setPosition: (position: Position) => void;
  isActive: boolean;
  href: string;
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return <motion.li animate={position} className={styles.cursor} />;
};

const Tab: React.FC<TabProps> = ({ children, setPosition, isActive, href }) => {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  return (
    <div
      className={`${styles.link} ${isActive ? styles.active : ""}`}
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          opacity: 0.5,
          left: ref.current.offsetLeft,
        });
      }}
      onClick={() => {
        router.push(href);
      }}
    >
      {children}
    </div>
  );
};

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

const tabsData = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Works", path: "/works" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const [navClassList, setNavClassList] = useState<string[]>([]);

  const scroll = useScroll();

  useEffect(() => {
    const _classList: string[] = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
      _classList.push(styles["nav-bar--hidden"]);
    }

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className={`${styles.nav} ${navClassList.join(" ")}`}>
      <div
        className={styles.container}
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
      >
        {tabsData.map((tab) => (
          <Tab
            key={tab.path}
            setPosition={setPosition}
            isActive={pathname === tab.path}
            href={tab.path}
          >
            {tab.name}
          </Tab>
        ))}
        <Cursor position={position} />
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Featured.module.scss";

interface FeaturedProps {
  project: {
    id: string;
    type: string;
    title: string;
    image: string;
    services: string[];
  };
}

const Featured: React.FC<FeaturedProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleHover = (hovering: boolean) => {
    setIsHovered(hovering);
  };

  const linkUrl = "/works/" + project.id;

  return (
    <Link href={linkUrl}>
      <div
        className={styles.work}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        onMouseMove={handleMouseMove} // Capture mouse move events for cursor position
      >
        <div className={styles.left}>
          <h1 className={styles.name}>{project.title}</h1>
          <p className={styles.type}>{project.type}</p>
        </div>
        <div className={styles.right}>
          {project.services.map((service, index) => (
            <div key={index} className={styles.tech}>
              {service}
            </div>
          ))}

          <button className={styles.button}>
            <span>🡢</span>
          </button>
        </div>

        <motion.div
          className={styles.slide}
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? 0 : "-100%" }}
          transition={{ duration: 0.5 }}
        />

        {isHovered && (
          <motion.img
            src={project.image}
            alt={project.title}
            className={styles.image}
            style={{
              position: "fixed",
              top: cursorPos.y,
              left: cursorPos.x,
              opacity: 1,
              zIndex: 100,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            loading="lazy"
          />
        )}
      </div>
    </Link>
  );
};

export default Featured;

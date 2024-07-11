"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";
import { RiArrowRightUpLine } from "react-icons/ri";
import { GoArrowUp } from "react-icons/go";
import styles from "./Contact.module.scss";

const icons = [
  { icon: <FaGithub className={styles.icon} />, key: "github" },
  { icon: <FaLinkedin className={styles.icon} />, key: "linkedin" },
  { icon: <PiReadCvLogo className={styles.icon} />, key: "readcv" },
  { icon: <FaInstagram className={styles.icon} />, key: "instagram" },
];

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionColor, setSectionColor] = useState<string>("var(--black)"); // Initial color black

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Calculate the threshold position
        const threshold = window.innerHeight - 400;

        // Check if the bottom of the screen is within 300px of the top of the section
        if (rect.top <= threshold && rect.bottom >= 0) {
          // Section is in view, change background color to white with smooth transition
          setSectionColor("var(--white)");
        } else {
          // Section is out of view, revert background color to black with smooth transition
          setSectionColor("var(--black)");
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const originalText = "Send a message • Send a message •";
      const transformedText = originalText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 10.7}deg)">${char}</span>`
        )
        .join("");

      textElement.innerHTML = transformedText;
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: sectionColor,
        color:
          sectionColor === "var(--black)" ? "var(--white)" : "var(--black)", // Dynamic text color based on sectionColor
        transition: "background-color 0.5s ease-in-out", // Smooth background color transition
      }}
    >
      <div className={styles.contact}>
        <div className={styles.header}>
          <div className={styles.title}>
            <div className={styles.line}></div>
            <h1 className={styles.text}>Contact</h1>
          </div>
          <div className={styles.icons}>
            {icons.map(({ icon, key }) => (
              <motion.div
                key={key}
                ref={sectionRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundColor:
                    sectionColor === "var(--black)"
                      ? "var(--white)"
                      : "var(--black)",
                  color:
                    sectionColor === "var(--black)"
                      ? "var(--black)"
                      : "var(--white)",
                  transition: "background-color 0.5s ease-in-out",
                }}
                className={styles.iconContainer}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Get in touch</h1>
            <p>Interested in working together?</p>
          </div>

          <div className={styles.circle}>
            <div className={styles.logo}>
              <RiArrowRightUpLine className={styles.arrow} />
            </div>
            <div className={styles.text} ref={textRef}></div>
          </div>
        </div>

        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            borderColor:
              sectionColor === "var(--black)" ? "var(--white)" : "var(--black)",
            color:
              sectionColor === "var(--black)" ? "var(--white)" : "var(--black)", // Dynamic text color based on sectionColor
            transition: "background-color 0.5s ease-in-out",
          }}
          className={styles.footer}
        >
          <p className={styles.text}>© 2024 All rights reserved.</p>
          <p className={`${styles.text} ${styles.link}`} onClick={scrollToTop}>
            BACK TO TOP <GoArrowUp />
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;

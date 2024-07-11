"use client";
import React, { useRef, useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";
import { RiArrowRightUpLine } from "react-icons/ri";
import styles from "./contact.module.scss";

const icons = [
  { icon: <FaGithub className={styles.icon} />, key: "github" },
  { icon: <FaLinkedin className={styles.icon} />, key: "linkedin" },
  { icon: <PiReadCvLogo className={styles.icon} />, key: "readcv" },
  { icon: <FaInstagram className={styles.icon} />, key: "instagram" },
];

export default function Contact() {
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

  return (
    <>
      <div className={styles.contactPage}>
        <div className={styles.contact}>
          <div className={styles.header}>
            <div className={styles.title}>
              <div className={styles.line}></div>
              <h1 className={styles.text}>Contact</h1>
            </div>
            <div className={styles.icons}>
              {icons.map(({ icon, key }) => (
                <div key={key} className={styles.iconContainer}>
                  {icon}
                </div>
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

          <div className={styles.footer}>
            <p className={styles.text}>© 2024 All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

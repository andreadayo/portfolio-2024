"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";
import { RiArrowRightUpLine } from "react-icons/ri";
import styles from "./contact.module.scss";
import AnimatedDiv from "@/app/components/animation/AnimatedDiv";
import Stairs from "../components/animation/Stairs";

const icons = [
  {
    icon: <FaGithub className={styles.icon} />,
    key: "github",
    link: "https://github.com/andreadayo",
  },
  {
    icon: <FaLinkedin className={styles.icon} />,
    key: "linkedin",
    link: "https://www.linkedin.com/in/andreadayo/",
  },
  {
    icon: <PiReadCvLogo className={styles.icon} />,
    key: "readcv",
    link: "https://read.cv/andreadayo",
  },
  {
    icon: <FaInstagram className={styles.icon} />,
    key: "instagram",
    link: "https://www.instagram.com/andreadayo_/",
  },
];

interface IconProps {
  icons: { icon: JSX.Element; key: string; link: string }[];
}

const IconComponent: React.FC<IconProps> = ({ icons }) => (
  <div className={styles.icons}>
    {icons.map(({ icon, key, link }) => (
      <Link href={link} key={key} target="_blank">
        <div className={styles.iconContainer}>{icon}</div>
      </Link>
    ))}
  </div>
);

const Contact: React.FC = () => {
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
    <Stairs>
      <div className={styles.contact}>
        <div className={styles.header}>
          <div className={styles.title}>
            <div className={styles.line}></div>
            <h1 className={styles.text}>Contact</h1>
          </div>
          <IconComponent icons={icons} />
        </div>

        <div className={styles.content}>
          <AnimatedDiv animationType="fadeInUp">
            <div className={styles.header}>
              <h1>Get in touch</h1>
              <p>Interested in working together?</p>
              <IconComponent icons={icons} />
            </div>
          </AnimatedDiv>
          <AnimatedDiv animationType="popIn">
            <Link
              href="mailto:andrealouisedayo@gmail.com?subject=Project%20Inquiry"
              className={styles.circle}
            >
              <div className={styles.logo}>
                <RiArrowRightUpLine className={styles.arrow} />
              </div>
              <div className={styles.text} ref={textRef}></div>
            </Link>
          </AnimatedDiv>
        </div>

        <div className={styles.footer}>
          <p className={styles.text}>© 2024 All rights reserved.</p>
        </div>
      </div>
    </Stairs>
  );
};

export default Contact;

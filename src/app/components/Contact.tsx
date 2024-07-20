"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";
import { RiArrowRightUpLine } from "react-icons/ri";
import { GoArrowUp } from "react-icons/go";
import styles from "./Contact.module.scss";
import AnimatedDiv from "@/app/components/animation/AnimatedDiv";
import TextTransformer from "@/app/components/TextTransformer";

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
  sectionColor: string;
  sectionRef: React.RefObject<HTMLDivElement>;
}

const IconComponent: React.FC<IconProps> = ({
  icons,
  sectionColor,
  sectionRef,
}) => (
  <div className={styles.icons}>
    {icons.map(({ icon, key, link }) => (
      <Link href={link} key={key} target="_blank">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor:
              sectionColor === "var(--black)" ? "var(--white)" : "var(--black)",
            color:
              sectionColor === "var(--black)" ? "var(--black)" : "var(--white)",
            transition: "background-color 0.5s ease-in-out",
          }}
          className={styles.iconContainer}
        >
          {icon}
        </motion.div>
      </Link>
    ))}
  </div>
);

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
          <IconComponent
            icons={icons}
            sectionColor={sectionColor}
            sectionRef={sectionRef}
          />
        </div>

        <div className={styles.content}>
          <AnimatedDiv animationType="fadeInUp">
            <div className={styles.header}>
              <h1>Get in touch</h1>
              <p>Interested in working together?</p>
              <IconComponent
                icons={icons}
                sectionColor={sectionColor}
                sectionRef={sectionRef}
              />
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
              <TextTransformer text="Send a message • Send a message •" />
            </Link>
          </AnimatedDiv>
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

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Project from "../components/Project";
import Contact from "../components/Contact";
import styles from "./works.module.scss";

export default function About() {
  const [activeTab, setActiveTab] = useState("Website");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={styles.works}>
        <div className={styles.header}>
          <h1>Works</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.tabs}>
            <div
              className={`${styles.tab} ${
                activeTab === "Website" ? styles.active : styles.inactive
              }`}
              onClick={() => handleTabClick("Website")}
            >
              Website
            </div>
            <div
              className={`${styles.tab} ${
                activeTab === "Design" ? styles.active : styles.inactive
              }`}
              onClick={() => handleTabClick("Design")}
            >
              Design
            </div>
            <div
              className={`${styles.tab} ${
                activeTab === "Case Study" ? styles.active : styles.inactive
              }`}
              onClick={() => handleTabClick("Case Study")}
            >
              Case Study
            </div>
          </div>
          <div className={styles.content}>
            {activeTab === "Website" && (
              <>
                <div className={styles.projects}>
                  <Project
                    title="Project Name"
                    description="Lorem ispum dolor sit amet"
                    image="/assets/images/sample.png"
                  />
                  <Project
                    title="Project Name"
                    description="Lorem ispum dolor sit amet"
                    image="/assets/images/sample.png"
                  />
                  <Project
                    title="Project Name"
                    description="Lorem ispum dolor sit amet"
                    image="/assets/images/sample.png"
                  />
                </div>
              </>
            )}
            {activeTab === "Design" && (
              <>
                <p>Content for Design tab</p>
              </>
            )}
            {activeTab === "Case Study" && (
              <>
                <p>Content for Case Study tab</p>
              </>
            )}
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
}

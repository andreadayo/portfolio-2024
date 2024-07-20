"use client";

import React, { useState } from "react";
import Link from "next/link";
import Project from "@/app/components/Project";
import AnimatedDiv from "@/app/components/animation/AnimatedDiv";
import styles from "./TabsAndContent.module.scss";

interface TabsAndContentProps {
  projects: Array<{
    id: string;
    type: string;
    palette: string[];
    title: string;
    subtitle: string;
  }>;
}

const TabsAndContent: React.FC<TabsAndContentProps> = ({ projects }) => {
  const [activeTab, setActiveTab] = useState("Website");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
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
        {/* Uncomment if needed
        <div
          className={`${styles.tab} ${activeTab === "Case Study" ? styles.active : styles.inactive}`}
          onClick={() => handleTabClick("Case Study")}
        >
          Case Study
        </div>
        */}
      </div>
      <div className={styles.content}>
        {activeTab === "Website" && (
          <div className={styles.projects}>
            {projects
              .filter((project) => project.type === "website")
              .map((project) => (
                <AnimatedDiv key={project.id} animationType="fadeInUp">
                  <Link
                    className={styles.projectLink}
                    href={`/works/${project.id}`}
                  >
                    <Project
                      id={project.id}
                      palette={project.palette}
                      title={project.title}
                      description={project.subtitle}
                    />
                  </Link>
                </AnimatedDiv>
              ))}
          </div>
        )}
        {activeTab === "Design" && (
          <div className={styles.projects}>
            {projects
              .filter((project) => project.type === "design")
              .map((project) => (
                <AnimatedDiv key={project.id} animationType="fadeInUp">
                  <Link
                    className={styles.projectLink}
                    href={`/works/${project.id}`}
                  >
                    <Project
                      id={project.id}
                      palette={project.palette}
                      title={project.title}
                      description={project.subtitle}
                    />
                  </Link>
                </AnimatedDiv>
              ))}
          </div>
        )}
        {/* Uncomment if needed
        {activeTab === "Case Study" && (
          <div className={styles.projects}>
            {projects
              .filter((project) => project.type === "case study")
              .map((project) => (
                <Link
                  className={styles.projectLink}
                  key={project.id}
                  href={`/works/${project.id}`}
                >
                  <Project
                    title={project.title}
                    description={project.subtitle}
                    image={project.image}
                  />
                </Link>
              ))}
          </div>
        )}
        */}
      </div>
    </div>
  );
};

export default TabsAndContent;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Project from "@/app/components/Project";
import Contact from "@/app/components/Contact";
import styles from "./works.module.scss";
import { projects } from "../../../public/data/projects";

const DynamicContact = dynamic(() => import("@/app/components/Contact"));

export default function Works() {
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
              <div className={styles.projects}>
                {projects
                  .filter((project) => project.type === "website")
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
            {activeTab === "Design" && (
              <div className={styles.projects}>
                {projects
                  .filter((project) => project.type === "design")
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
          </div>
        </div>
        <DynamicContact />
      </div>
    </>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/image";
import { useRouter } from "next/navigation";
import Project from "@/app/components/Project";
import Contact from "@/app/components/Contact";
import styles from "./works.module.scss";
import { projects as projectData } from "../../../public/data/projects";

export default function Works({ projectId }: { projectId: string }) {
  const [activeTab, setActiveTab] = useState("Website");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const projects = [
    { id: "project-one", title: "Project One" },
    { id: "project-two", title: "Project Two" },
  ];

  const router = useRouter();
  const handleClick = (projectId: string) => {
    router.push(`/works/${projectId}`);
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
                  {projectData
                    .filter((project) => project.type === "website")
                    .map((project) => (
                      <div
                        key={project.id}
                        onClick={() => handleClick(project.id)}
                        className={styles.projectLink}
                      >
                        <Project
                          title={project.title}
                          description={project.subtitle}
                          image={project.image}
                        />
                      </div>
                    ))}
                </div>
              </>
            )}
            {activeTab === "Design" && (
              <>
                <div className={styles.projects}>
                  {projectData
                    .filter((project) => project.type === "design")
                    .map((project) => (
                      <div
                        key={project.id}
                        onClick={() => handleClick(project.id)}
                        className={styles.projectLink}
                      >
                        <Project
                          title={project.title}
                          description={project.subtitle}
                          image={project.image}
                        />
                      </div>
                    ))}
                </div>
              </>
            )}
            {activeTab === "Case Study" && (
              <>
                <>
                  <div className={styles.projects}>
                    {projectData
                      .filter((project) => project.type === "case study")
                      .map((project) => (
                        <div
                          key={project.id}
                          onClick={() => handleClick(project.id)}
                          className={styles.projectLink}
                        >
                          <Project
                            title={project.title}
                            description={project.subtitle}
                            image={project.image}
                          />
                        </div>
                      ))}
                  </div>
                </>
              </>
            )}
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
}

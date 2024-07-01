"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Project,
  projects as projectData,
} from "../../../../public/data/projects";
import { FaGithub, FaFigma, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Title from "@/app/components/Title";
import Screenshots from "@/app/components/Screenshots";
import Contact from "@/app/components/Contact";
import styles from "./project.module.scss";

const ProjectPage: React.FC = () => {
  const { projectId } = useParams(); // Use useParam to get projectId
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (projectId) {
      const project = projectData.find((p) => p.id === projectId);
      setProject(project || null);
    }
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.project}>
        <div className={styles.featured}>
          <Image
            src={project.image}
            width={1500}
            height={1500}
            alt={project.title}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.left}>
              <h1>{project.title}</h1>
              <h3>{project.subtitle}</h3>
            </div>
            <div className={styles.right}>
              {project.github && (
                <Link href={project.github}>
                  <button className={styles.button}>
                    <FaGithub />
                  </button>
                </Link>
              )}
              {project.figma && (
                <Link href={project.figma}>
                  <button className={styles.button}>
                    <FaFigma />
                  </button>
                </Link>
              )}
              {project.link && (
                <Link href={project.link}>
                  <button className={styles.button}>
                    View Live <FiArrowUpRight style={{ marginLeft: "8px" }} />
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.left}>
              {/* Year */}
              <div className={styles.info}>
                <h3>Year</h3>
                <p>{project.year}</p>
              </div>

              {/* Description */}
              <div className={styles.info}>
                <h3>Description</h3>
                <p>{project.description}</p>
              </div>

              {/* Partners */}
              {project.partners && (
                <div className={styles.info}>
                  <h3>Partners</h3>
                  <p>{project.partners}</p>
                </div>
              )}
            </div>
            <div className={styles.right}>
              {/* Tools */}
              <div className={styles.info}>
                <h3>Tools</h3>
                <div className={styles.list}>
                  {project.tools.map((tool, index) => (
                    <div key={index} className={styles.tech}>
                      <p>{tool}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className={styles.info}>
                <h3>Services</h3>
                <div className={styles.list}>
                  {project.services.map((service, index) => (
                    <div key={index} className={styles.tech}>
                      <p>{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.palette}>
            <Title>Palette</Title>
            <div className={styles.colors}>
              {project.palette.map((color, index) => (
                <div key={index} className={styles.item}>
                  <div
                    className={styles.color}
                    style={{ backgroundColor: color }}
                  />
                  <p>{color}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshots */}
          <Screenshots projectId={project.id} />

          <div className={styles.buttons}>
            <Link href="#">
              <button className={styles.button}>
                <FaArrowLeft style={{ marginRight: "8px" }} /> Previous Project
              </button>
            </Link>
            <Link href="#">
              <button className={styles.button}>
                Next Project <FaArrowRight style={{ marginLeft: "8px" }} />
              </button>
            </Link>
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default ProjectPage;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { projects } from "../../../../public/data/projects";
import { FaGithub, FaFigma, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Title from "@/app/components/Title";
import Screenshots from "@/app/components/Screenshots";
import Button from "@/app/components/Button";
import styles from "./project.module.scss";

interface ProjectPageParams {
  projectId: string;
}

interface ProjectPageProps {
  params: ProjectPageParams;
}

const DynamicContact = dynamic(() => import("@/app/components/Contact"));

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const { projectId } = params;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }
  return (
    <>
      <div className={styles.project}>
        <div className={styles.featured}>
          <Image
            src={project.image}
            width={800}
            height={500}
            alt={project.title}
            className={styles.img}
            loading="lazy"
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
                <Button href={project.github}>
                  <FaGithub />
                </Button>
              )}
              {project.figma && (
                <Button href={project.figma}>
                  <FaFigma />
                </Button>
              )}
              {project.link && (
                <Button href={project.link}>
                  View Live <FiArrowUpRight style={{ marginLeft: "8px" }} />
                </Button>
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
            <Button href="#">
              <FaArrowLeft style={{ marginRight: "8px" }} /> Previous Project
            </Button>
            <Button href="#">
              Next Project <FaArrowRight style={{ marginLeft: "8px" }} />
            </Button>
          </div>
        </div>
        <DynamicContact />
      </div>
    </>
  );
};

export default ProjectPage;

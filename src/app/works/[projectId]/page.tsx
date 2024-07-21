import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { projects } from "../../../../public/data/projects";
import { FaGithub, FaFigma, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Title from "@/app/components/Title";
import Screenshots from "@/app/components/Screenshots";
import Button from "@/app/components/Button";
import styles from "./project.module.scss";
import AnimatedDiv from "@/app/components/animation/AnimatedDiv";
import Stairs from "@/app/components/animation/Stairs";

export async function generateMetadata({
  params,
}: {
  params: { projectId: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.projectId);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "This project does not exist.",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}
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
      <Stairs>
        <div className={styles.project}>
          <div
            className={styles.featured}
            style={{
              background: `linear-gradient(180deg, #1c1c1c 0%, rgba(28, 28, 28, 0.20) 30%, ${project.palette[0]} 100%)`,
            }}
          >
            <AnimatedDiv animationType="fadeInUp">
              <Image
                src={`/data/projects/mockup/${project.id}.png`}
                width={1600}
                height={900}
                alt={project.title}
                className={styles.img}
              />
            </AnimatedDiv>
          </div>

          <div className={styles.content}>
            <AnimatedDiv animationType="fadeInUp">
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
                    <Button href={project.link} target="_blank">
                      View Live <FiArrowUpRight style={{ marginLeft: "8px" }} />
                    </Button>
                  )}
                </div>
              </div>
            </AnimatedDiv>
            <div className={styles.details}>
              <div className={styles.left}>
                {/* Year */}
                <AnimatedDiv animationType="fadeInUp">
                  <div className={styles.info}>
                    <h3>Date</h3>
                    <p>{project.year}</p>
                  </div>
                </AnimatedDiv>

                {/* Description */}
                <AnimatedDiv animationType="fadeInUp">
                  <div className={styles.info}>
                    <h3>Description</h3>
                    <p>{project.description}</p>
                  </div>
                </AnimatedDiv>

                {/* Partners */}
                {project.partners && (
                  <AnimatedDiv animationType="fadeInUp">
                    <div className={styles.info}>
                      <h3>Partners</h3>
                      <p>{project.partners}</p>
                    </div>
                  </AnimatedDiv>
                )}
              </div>
              <div className={styles.right}>
                {/* Tools */}
                <AnimatedDiv animationType="fadeInUp">
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
                </AnimatedDiv>

                {/* Services */}
                <AnimatedDiv animationType="fadeInUp">
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
                </AnimatedDiv>
              </div>
            </div>
            <AnimatedDiv animationType="fadeInUp">
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
            </AnimatedDiv>

            {/* Screenshots */}
            <Screenshots projectId={project.id} />

            {/* <div className={styles.buttons}>
            <Button href="#">
              <FaArrowLeft style={{ marginRight: "8px" }} /> Previous Project
            </Button>
            <Button href="#">
              Next Project <FaArrowRight style={{ marginLeft: "8px" }} />
            </Button>
          </div> */}
          </div>
          <DynamicContact />
        </div>
      </Stairs>
    </>
  );
};

export default ProjectPage;

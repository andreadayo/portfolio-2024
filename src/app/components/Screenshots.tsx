import React from "react";
import Image from "next/image";
import Title from "@/app/components/Title";
import styles from "./Screenshots.module.scss";
import { projects } from "../../../public/data/projects";

interface ScreenshotsProps {
  projectId: string;
}

const Screenshots: React.FC<ScreenshotsProps> = ({ projectId }) => {
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.screenshots}>
      <Title>Screenshots</Title>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image
            src="/assets/images/sample2.jpg"
            width={600}
            height={600}
            alt={project.title}
            className={styles.img}
          />
        </div>
        <div className={styles.item}>
          <Image
            src="/assets/images/sample2.jpg"
            width={600}
            height={600}
            alt={project.title}
            className={styles.img}
          />
        </div>
        <div className={styles.item}>
          <Image
            src="/assets/images/sample2.jpg"
            width={600}
            height={600}
            alt={project.title}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Screenshots;

import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import styles from "./Project.module.scss";

interface ProjectProps {
  id: string;
  palette: string[];
  title: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({
  id,
  title,
  palette,
  description,
}) => {
  return (
    <div
      className={styles.project}
      style={{
        background: `linear-gradient(180deg, #1c1c1c 0%, rgba(28, 28, 28, 0.20) 26.9%, ${palette[0]} 100%)`,
      }}
    >
      <div className={styles.top}>
        <div className={styles.title}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <span className={styles.btn}>
          <Button>🡢</Button>
        </span>
      </div>
      <div className={styles.mockup}>
        <Image
          src={`/data/projects/mockup/${id}.png`}
          width={900}
          height={900}
          alt={title}
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default Project;

import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import styles from "./Project.module.scss";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, image }) => {
  return (
    <div className={styles.project}>
      <div className={styles.top}>
        <div className={styles.title}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <Button>🡢</Button>
      </div>
      <div className={styles.mockup}>
        <Image
          src={image}
          width={900}
          height={900}
          alt={title}
          className={styles.img}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Project;

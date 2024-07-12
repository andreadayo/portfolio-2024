import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Title from "@/app/components/Title";
import styles from "./Screenshots.module.scss";

interface ScreenshotsProps {
  projectId: string;
}

const Screenshots: React.FC<ScreenshotsProps> = ({ projectId }) => {
  const [images, setImages] = useState<string[]>([]);

  const fetchImages = useCallback(async () => {
    try {
      const response = await fetch(`../api/projects/${projectId}/screenshots`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Failed to fetch images:", error);
      setImages([]);
    }
  }, [projectId]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <div className={styles.screenshots}>
      {images.length > 0 && (
        <span>
          <Title>Screenshots</Title>
        </span>
      )}
      <div className={styles.container}>
        {images.length > 0
          ? images.map((url, index) => (
              <div key={index} className={styles.item}>
                <Image
                  src={url}
                  width={600}
                  height={600}
                  alt={`Screenshot ${index + 1}`}
                  className={styles.img}
                  loading="lazy"
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Screenshots;

"use client";

import React, { useRef, useEffect } from "react";
import styles from "./TextTransformer.module.scss";

interface TextTransformerProps {
  text: string;
}

const TextTransformer: React.FC<TextTransformerProps> = ({ text }) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const originalText = text;
      const transformedText = originalText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 10.7}deg)">${char}</span>`
        )
        .join("");

      textElement.innerHTML = transformedText;
    }
  }, [text]);

  return (
    <div className={styles.text}>
      <p ref={textRef}></p>
    </div>
  );
};

export default TextTransformer;

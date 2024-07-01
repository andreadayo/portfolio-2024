import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ScrollSpy from "react-ui-scrollspy";
import styles from "./Study.module.scss";

interface CaseStudyProps {
  content: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ content }) => {
  const [activeHeading, setActiveHeading] = useState<string | null>(null);
  const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);
  const headingsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = Object.keys(headingsRef.current);
      let activeId = null;

      sectionIds.forEach((id) => {
        const element = headingsRef.current[id];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            activeId = id;
          }
        }
      });

      setActiveHeading(activeId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.split("#")[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 20;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.caseStudy}>
      <div className={styles.headings}>
        <Link onClick={(e) => onPress(e)} href="#first">
          <p className={activeHeading === "first" ? styles.active : ""}>
            Section 1
          </p>
        </Link>
        <Link onClick={(e) => onPress(e)} href="#second">
          <p className={activeHeading === "second" ? styles.active : ""}>
            Section 2
          </p>
        </Link>
      </div>
      <div className={styles.content} ref={parentScrollContainerRef}>
        <ScrollSpy>
          <div
            className={styles.section}
            id="first"
            ref={(el) => {
              headingsRef.current["first"] = el;
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
            Tempore, vero!
          </div>
          <div
            className={styles.section}
            id="second"
            ref={(el) => {
              headingsRef.current["second"] = el;
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
            veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
            voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
            Tempore, vero!
          </div>
        </ScrollSpy>
      </div>
    </div>
  );
};

export default CaseStudy;

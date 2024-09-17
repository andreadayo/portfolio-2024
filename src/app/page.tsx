import React, { useState, MouseEvent } from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Spline from "@splinetool/react-spline/next";
import Title from "@/app/components/Title";
import Technology from "@/app/components/Technology";
import Featured from "@/app/components/Featured";
import Paragraph from "@/app/components/Paragraph";
import styles from "./page.module.scss";
import { GoArrowRight } from "react-icons/go";
import { projects as projectData } from "../../public/data/projects";
import AnimatedDiv from "@/app/components/animation/AnimatedDiv";
import Stairs from "@/app/components/animation/Stairs";

const paragraph =
  "Hey there! I’m Andrea, a passionate front-end developer and designer based in Manila, with an eye for detail and a love for crafting seamless digital experiences. I have always been driven to create innovative designs and translate them into clean and responsive code. As a self-taught developer, I’m always expanding my skills and staying up-to-date with the latest technologies. I actively seek opportunities to learn from others. If you have an exciting project in mind or wish to collaborate, don’t hesitate to get in touch. Together, let’s create digital experiences that make a difference.";

const DynamicContact = dynamic(() => import("@/app/components/Contact"));

export default function Home() {
  return (
    <>
      <Stairs>
        {/* HERO SECTION */}
        <div className={styles.hero}>
          <div className={styles.overlay}>
            <div className={styles.heroSection}>
              <AnimatedDiv animationType="fadeInUp">
                <div className={styles.heroImage}>
                  <Image
                    src="/assets/shapes/star.svg"
                    width={44}
                    height={44}
                    alt="Star"
                  />

                  <Image
                    src="/assets/images/dhea.png"
                    width={118}
                    height={83}
                    alt="Dhea"
                  />

                  <Image
                    src="/assets/shapes/star.svg"
                    width={44}
                    height={44}
                    alt="Star"
                  />
                </div>
              </AnimatedDiv>
              <AnimatedDiv animationType="fadeInUp">
                <h1 className={styles.heroText}>
                  Crafting seamless, functional, beautiful web experiences
                </h1>{" "}
              </AnimatedDiv>
              <p className={styles.scroll}>Scroll down</p>
            </div>
          </div>
          <Spline scene="https://prod.spline.design/StMq9TNTN2eHvGB8/scene.splinecode" />
        </div>

        {/* MAIN SECTION */}
        <main className={styles.main}>
          {/* About Me */}
          <div className={styles.about}>
            <Title>About Me</Title>
            <div className={styles.description}>
              <Paragraph paragraph={paragraph} />
            </div>
          </div>

          {/* Technologies */}
          <div className={styles.tech}>
            <Title>Technologies</Title>
            <AnimatedDiv animationType="fadeInUp">
              <div className={styles.container}>
                <Technology image="/assets/shapes/design.svg" title="Design">
                  Figma, Spline, Photoshop
                </Technology>
                <Technology
                  image="/assets/shapes/frontend.svg"
                  title="Front-end"
                >
                  JavaScript, Typescript, Framer Motion, Tailwind CSS
                </Technology>
                <Technology image="/assets/shapes/backend.svg" title="Back-end">
                  PHP, MySQL, Java
                </Technology>
              </div>
            </AnimatedDiv>
          </div>

          {/* Featured Works */}
          <div className={styles.works}>
            <div className={styles.title}>
              <Title>Featured Works</Title>
              <Link href="/works" className={styles.link}>
                View All <GoArrowRight />
              </Link>
            </div>

            <div className={styles.list}>
              {projectData
                .filter((project) => project.featured)
                .map((project) => (
                  <AnimatedDiv key={project.id} animationType="fadeInLeft">
                    <Featured project={project} />
                  </AnimatedDiv>
                ))}
            </div>
          </div>

          {/* Contact */}
          <DynamicContact />
        </main>
      </Stairs>
    </>
  );
}

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Spline from "@splinetool/react-spline/next";
import Title from "./components/Title";
import Technology from "./components/Technology";
import Featured from "./components/Featured";
import Contact from "./components/Contact";
import styles from "./page.module.scss";
import { GoArrowRight } from "react-icons/go";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <div className={styles.heroSection}>
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
            <h1 className={styles.heroText}>
              Crafting seamless, functional, beautiful web experiences
            </h1>
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
          <p className={styles.description}>
            Hey there! I’m Dhea, a passionate front-end developer and designer
            based in Manila, with an eye for detail and a love for crafting
            seamless digital experiences. I have always been driven to create
            innovative designs and translate them into clean and responsive
            code. <br />
            <br />
            As a self-taught developer, I’m always expanding my skills and
            staying up-to-date with the latest technologies. I actively seek
            opportunities to learn from others. If you have an exciting project
            in mind or wish to collaborate, don’t hesitate to get in touch.
            Together, let’s create digital experiences that make a difference.
          </p>
        </div>

        {/* Technologies */}
        <div className={styles.tech}>
          <Title>Technologies</Title>
          <div className={styles.container}>
            <Technology image="/assets/shapes/design.svg" title="Design">
              Figma, Spline, Photoshop
            </Technology>
            <Technology image="/assets/shapes/frontend.svg" title="Front-end">
              HTML5, CSS3 / SCSS, Tailwind CSS, JavaScript, Typescript
            </Technology>
            <Technology image="/assets/shapes/backend.svg" title="Back-end">
              PHP, MySQL, Laravel, Java
            </Technology>
          </div>
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
            <Featured />
            <Featured />
            <Featured />
            <Featured />
          </div>
        </div>

        {/* Contact */}
        <Contact />
      </main>
    </>
  );
}

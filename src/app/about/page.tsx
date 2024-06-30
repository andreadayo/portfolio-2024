import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Title from "@/app/components/Title";
import Contact from "@/app/components/Contact";
import styles from "./about.module.scss";

export default function About() {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.header}>
          <h1>About</h1>
        </div>

        {/* About Me */}
        <div className={styles.aboutMe}>
          <Title>About Me</Title>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={`${styles.item} ${styles.a}`}>
                <Image
                  className={styles.img}
                  src="/assets/images/A.jpg"
                  width={806}
                  height={605}
                  alt="Dhea"
                />
              </div>
              <div className={`${styles.item} ${styles.b}`}>
                <Image
                  className={styles.img}
                  src="/assets/images/B.jpg"
                  width={435}
                  height={580}
                  alt="Dhea"
                />
              </div>
              <div className={`${styles.item} ${styles.c}`}>
                <Image
                  className={styles.img}
                  src="/assets/images/C.jpg"
                  width={767}
                  height={605}
                  alt="Dhea"
                />
              </div>
              <div className={`${styles.item} ${styles.d}`}>
                <Image
                  className={styles.img}
                  src="/assets/images/D.jpg"
                  width={720}
                  height={540}
                  alt="Dhea"
                />
              </div>
            </div>
            <div className={styles.right}>
              <p>
                I am a fourth-year <b>Computer Science student</b> passionate
                about web development and machine learning. I’m currently the{" "}
                <b>Chief Technology Officer</b> at TomasinoWeb, focusing on
                UI/UX design, front-end development, and project management.
              </p>
              <p>
                In addition to my role at TomasinoWeb, I occasionally take on{" "}
                <b>freelance UI/UX design</b> projects on Fiverr, where I’ve had
                the pleasure of designing blog sites and landing pages for
                clients.
              </p>
              <p>
                My primary focus has always been on creating user-centric
                solutions that meet the needs of both users and clients. One of
                my most rewarding projects involved designing various platforms
                during my internship, which provided me with valuable experience
                in collaborating with developers from other countries.
              </p>
              <p>
                When I’m not coding or designing, you can find me playing video
                games, watching sitcoms, or volunteering at my parish. In the
                future, I aspire to blend my technical skills with my love for
                design to create innovative solutions in the tech industry.
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className={styles.experience}>
          <Title>Experience</Title>
          <div className={styles.item}>
            <div className={styles.title}>
              <Image
                className={styles.img}
                src="/assets/shapes/star.svg"
                width={25}
                height={25}
                alt="Star"
              />
              <span>TomasinoWeb</span>
            </div>
            <div className={styles.details}>
              <div className={styles.left}>Jun 2024 – Present</div>
              <div className={styles.right}>
                <h1 className={styles.position}>Chief Technology Officer</h1>
                <ul className={styles.description}>
                  <li>
                    In-charge of supervising the entire Web Technologies
                    Department, overseeing project management and team
                    coordination.
                  </li>
                  <li>
                    Manage TomasinoWeb’s platforms including the main website,
                    domain, and emails.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className={styles.education}>
          <Title>Education</Title>
          <div className={styles.item}>
            <div className={styles.details}>
              <p className={styles.date}>Aug 2021 – Present</p>
              <p className={styles.school}>
                <b>BS Computer Science</b> – University of Santo Tomas, Manila
              </p>
            </div>
            <div className={styles.details}>
              <p className={styles.date}>Jun 2019 – May 2021</p>
              <p className={styles.school}>
                <b>Science, Technology, Engineering, and Mathematics</b> – St.
                Theresa’s College, Quezon City
              </p>
            </div>
          </div>
        </div>

        {/* Tech I like to use */}
        <div className={styles.tech}>
          <Title>Tech I like to use</Title>
          <div className={styles.container}>
            <Image
              src="/assets/icons/figma.svg"
              width={200}
              height={80}
              alt="Figma"
            />
            <Image
              src="/assets/icons/react.svg"
              width={200}
              height={80}
              alt="React"
            />
            <Image
              src="/assets/icons/nextjs.svg"
              width={200}
              height={80}
              alt="Next.js"
            />
            <Image
              src="/assets/icons/typescript.svg"
              width={200}
              height={80}
              alt="Typescript"
            />
            <Image
              src="/assets/icons/javascript.svg"
              width={200}
              height={80}
              alt="Javascript"
            />
            <Image
              src="/assets/icons/tailwindcss.svg"
              width={200}
              height={80}
              alt="TailwindCSS"
            />
            <Image
              src="/assets/icons/netlify.svg"
              width={200}
              height={80}
              alt="Netlify"
            />
            <Image
              src="/assets/icons/vercel.svg"
              width={200}
              height={80}
              alt="Vercel"
            />
          </div>
        </div>
      </div>

      {/* Contact */}
      <Contact />
    </>
  );
}

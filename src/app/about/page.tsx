import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Title from "@/app/components/Title";
import Contact from "@/app/components/Contact";
import { jobsData, Company, Role } from "../../../public/data/experience";
import styles from "./about.module.scss";

const DynamicContact = dynamic(() => import("@/app/components/Contact"));

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
                  width={300}
                  height={80}
                  alt="Dhea"
                  loading="lazy"
                />
              </div>
              <div className={`${styles.item} ${styles.b}`}>
                <Image
                  className={styles.img}
                  src="/assets/images/B.jpg"
                  width={300}
                  height={80}
                  alt="Dhea"
                  loading="lazy"
                />
              </div>
              <div className={`${styles.item} ${styles.c}`}>
                <Image
                  className={styles.img}
                  src="/assets/images/C.jpg"
                  width={400}
                  height={100}
                  alt="Dhea"
                  loading="lazy"
                />
              </div>
              <div className={`${styles.item} ${styles.d}`}>
                <Image
                  className={styles.img}
                  src="/assets/images/D.jpg"
                  width={300}
                  height={80}
                  alt="Dhea"
                  loading="lazy"
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

          {jobsData.map((company: Company, index: number) => (
            <div key={index} className={styles.item}>
              <div className={styles.title}>
                <Image
                  className={styles.img}
                  src="/assets/shapes/star.svg"
                  width={25}
                  height={25}
                  alt="Star"
                  loading="lazy"
                />
                <span>{company.company}</span>
              </div>

              {company.roles.map((role: Role, idx: number) => (
                <div key={idx} className={styles.details}>
                  <div className={styles.left}>{role.date}</div>
                  <div className={styles.right}>
                    <h1 className={styles.position}>{role.position}</h1>
                    <ul className={styles.description}>
                      {role.description.map((desc: string, dIdx: number) => (
                        <li key={dIdx}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ))}
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
              loading="lazy"
            />
            <Image
              src="/assets/icons/react.svg"
              width={200}
              height={80}
              alt="React"
              loading="lazy"
            />
            <Image
              src="/assets/icons/nextjs.svg"
              width={200}
              height={80}
              alt="Next.js"
              loading="lazy"
            />
            <Image
              src="/assets/icons/typescript.svg"
              width={200}
              height={80}
              alt="Typescript"
              loading="lazy"
            />
            <Image
              src="/assets/icons/javascript.svg"
              width={200}
              height={80}
              alt="Javascript"
              loading="lazy"
            />
            <Image
              src="/assets/icons/tailwindcss.svg"
              width={200}
              height={80}
              alt="TailwindCSS"
              loading="lazy"
            />
            <Image
              src="/assets/icons/netlify.svg"
              width={200}
              height={80}
              alt="Netlify"
              loading="lazy"
            />
            <Image
              src="/assets/icons/vercel.svg"
              width={200}
              height={80}
              alt="Vercel"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Contact */}
      <DynamicContact />
    </>
  );
}
